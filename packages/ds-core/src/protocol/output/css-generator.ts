/**
 * Color Set Protocol (CSP) - CSS Generator
 * Generates CSS Custom Properties from resolved color sets
 */

import type { ResolvedColorSet, ResolvedColorTokens, OutputOptions } from '../schema.js';

const DEFAULT_PREFIX = 'wg-color';

type CategoryName = 'primary' | 'secondary' | 'semantic' | 'text' | 'background' | 'border' | 'accent' | 'focus';

/**
 * Generate CSS custom property declarations for a resolved color set
 */
export function generateCSSVariables(
  tokens: ResolvedColorTokens,
  options: OutputOptions = {}
): string {
  const { prefix = DEFAULT_PREFIX, includeComments = false, minify = false } = options;

  const lines: string[] = [];
  const indent = minify ? '' : '  ';
  const newline = minify ? '' : '\n';

  // Group tokens by category for better organization
  const categories: Record<CategoryName, string[]> = {
    primary: [],
    secondary: [],
    semantic: [],
    text: [],
    background: [],
    border: [],
    accent: [],
    focus: [],
  };

  for (const [name, value] of Object.entries(tokens)) {
    const varDecl = `${indent}--${prefix}-${name}: ${value};`;

    if (name.startsWith('primary')) {
      categories.primary.push(varDecl);
    } else if (name.startsWith('secondary')) {
      categories.secondary.push(varDecl);
    } else if (
      name.startsWith('danger') ||
      name.startsWith('success') ||
      name.startsWith('warning') ||
      name.startsWith('info')
    ) {
      categories.semantic.push(varDecl);
    } else if (name.startsWith('text')) {
      categories.text.push(varDecl);
    } else if (name.startsWith('background')) {
      categories.background.push(varDecl);
    } else if (name.startsWith('border')) {
      categories.border.push(varDecl);
    } else if (
      name.startsWith('red-') ||
      name.startsWith('green-') ||
      name.startsWith('yellow-') ||
      name.startsWith('blue-')
    ) {
      categories.accent.push(varDecl);
    } else if (name.startsWith('focus')) {
      categories.focus.push(varDecl);
    } else {
      // Put any unmatched in semantic
      categories.semantic.push(varDecl);
    }
  }

  // Output in order with optional comments
  const categoryOrder: CategoryName[] = ['primary', 'secondary', 'semantic', 'text', 'background', 'border', 'accent', 'focus'];

  for (const cat of categoryOrder) {
    const vars = categories[cat];
    if (vars.length === 0) continue;

    if (includeComments && !minify) {
      lines.push(`${indent}/* ${cat.charAt(0).toUpperCase() + cat.slice(1)} */`);
    }
    lines.push(...vars);
    if (!minify) {
      lines.push('');
    }
  }

  return lines.join(newline);
}

/**
 * Generate a complete CSS rule for a theme
 */
export function generateThemeCSS(
  resolved: ResolvedColorSet,
  options: OutputOptions = {}
): string {
  const { minify = false } = options;
  const newline = minify ? '' : '\n';
  const space = minify ? '' : ' ';

  const selector =
    resolved.id === 'default'
      ? ':root'
      : `[data-theme="${resolved.id}"]`;

  const variables = generateCSSVariables(resolved.tokens, options);

  return `${selector}${space}{${newline}${variables}${minify ? '' : '\n'}}`;
}

/**
 * Generate CSS for multiple themes
 */
export function generateMultiThemeCSS(
  themes: ResolvedColorSet[],
  options: OutputOptions = {}
): string {
  const { minify = false, includeComments = false } = options;
  const newline = minify ? '' : '\n';

  const parts: string[] = [];

  if (includeComments && !minify) {
    parts.push('/**');
    parts.push(' * Color Set Protocol (CSP) Generated Themes');
    parts.push(' * Generated automatically - do not edit');
    parts.push(' */');
    parts.push('');
  }

  for (const theme of themes) {
    if (includeComments && !minify) {
      parts.push(`/* Theme: ${theme.name} (${theme.mode} mode) */`);
    }
    parts.push(generateThemeCSS(theme, options));
    if (!minify) {
      parts.push('');
    }
  }

  return parts.join(newline);
}

/**
 * Generate a CSS file content with all themes
 */
export function generateCSSFile(
  themes: ResolvedColorSet[],
  options: OutputOptions = {}
): string {
  return generateMultiThemeCSS(themes, { ...options, includeComments: true });
}
