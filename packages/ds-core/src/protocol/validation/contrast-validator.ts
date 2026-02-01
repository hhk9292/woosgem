/**
 * Color Set Protocol (CSP) - Contrast Validator
 * WCAG 2.1 contrast ratio validation
 */

import type {
  ColorSetDefinition,
  ResolvedColorSet,
  ContrastResult,
  ValidationWarning,
  HexColor,
  ColorValue,
} from '../schema';
import { contrastRatio } from '../transformer';

/**
 * WCAG 2.1 contrast ratio thresholds
 */
export const WCAG = {
  /** Normal text AA: 4.5:1 */
  AA_NORMAL: 4.5,
  /** Large text AA: 3:1 */
  AA_LARGE: 3.0,
  /** Normal text AAA: 7:1 */
  AAA_NORMAL: 7.0,
  /** Large text AAA: 4.5:1 */
  AAA_LARGE: 4.5,
  /** UI components: 3:1 */
  UI_COMPONENTS: 3.0,
} as const;

/**
 * Calculate contrast ratio between two colors
 */
export function checkContrast(foreground: HexColor, background: HexColor): ContrastResult {
  const ratio = contrastRatio(foreground, background);

  return {
    ratio: Math.round(ratio * 100) / 100,
    passesAA: ratio >= WCAG.AA_NORMAL,
    passesAAA: ratio >= WCAG.AAA_NORMAL,
    passesAALarge: ratio >= WCAG.AA_LARGE,
  };
}

/**
 * Extract hex color from a ColorValue (ignoring rgba for contrast checks)
 */
function extractHex(value: ColorValue): HexColor | null {
  if (typeof value === 'string' && value.startsWith('#')) {
    return value as HexColor;
  }
  return null;
}

/**
 * Contrast check definition
 */
interface ContrastCheck {
  name: string;
  foreground: string;
  background: string;
  required: number;
  type: 'text' | 'ui';
}

/**
 * Standard contrast checks for a theme
 */
const standardChecks: ContrastCheck[] = [
  // Text on background
  { name: 'text/background', foreground: 'text', background: 'background', required: WCAG.AA_NORMAL, type: 'text' },
  { name: 'text-muted/background', foreground: 'text-muted', background: 'background', required: WCAG.AA_LARGE, type: 'text' },

  // Text on subtle/muted backgrounds
  { name: 'text/background-subtle', foreground: 'text', background: 'background-subtle', required: WCAG.AA_NORMAL, type: 'text' },
  { name: 'text/background-muted', foreground: 'text', background: 'background-muted', required: WCAG.AA_NORMAL, type: 'text' },

  // Inverse text
  { name: 'text-inverse/primary', foreground: 'text-inverse', background: 'primary', required: WCAG.AA_NORMAL, type: 'text' },

  // UI components
  { name: 'border/background', foreground: 'border', background: 'background', required: WCAG.UI_COMPONENTS, type: 'ui' },
  { name: 'focus-ring/background', foreground: 'focus-ring', background: 'background', required: WCAG.UI_COMPONENTS, type: 'ui' },
];

/**
 * Result of contrast validation
 */
export interface ContrastValidationResult {
  passed: boolean;
  checks: ContrastCheckResult[];
  warnings: ValidationWarning[];
}

export interface ContrastCheckResult {
  name: string;
  foreground: string;
  background: string;
  ratio: number;
  required: number;
  passed: boolean;
  level: 'AA' | 'AAA' | 'AA-large' | 'fail';
}

/**
 * Validate contrast ratios for a color set definition
 * Uses smart defaults for missing optional fields
 */
export function validateDefinitionContrast(
  definition: ColorSetDefinition
): ContrastValidationResult {
  const warnings: ValidationWarning[] = [];
  const checks: ContrastCheckResult[] = [];

  // Default colors based on mode
  const isLight = definition.mode === 'light';
  const defaultText = isLight ? '#111827' : '#F9FAFB';
  const defaultTextMuted = isLight ? '#6B7280' : '#9CA3AF';
  const defaultTextInverse = isLight ? '#FFFFFF' : '#111827';
  const defaultBg = isLight ? '#FFFFFF' : '#111827';
  const defaultBgSubtle = isLight ? '#F9FAFB' : '#1F2937';
  const defaultBgMuted = isLight ? '#F3F4F6' : '#374151';
  const defaultBorder = isLight ? '#E5E7EB' : '#374151';

  // Build a flat color map from definition with defaults
  const colors: Record<string, HexColor> = {
    primary: definition.primary.base,
    text: (definition.text?.default ?? defaultText) as HexColor,
    'text-muted': (definition.text?.muted ?? defaultTextMuted) as HexColor,
    'text-inverse': (definition.text?.inverse ?? defaultTextInverse) as HexColor,
    background: (definition.background?.default ?? defaultBg) as HexColor,
    'background-subtle': (definition.background?.subtle ?? defaultBgSubtle) as HexColor,
    'background-muted': (definition.background?.muted ?? defaultBgMuted) as HexColor,
    border: (definition.border?.default ?? defaultBorder) as HexColor,
    'focus-ring': definition.focusRing ?? definition.primary.base,
  };

  for (const check of standardChecks) {
    const fg = colors[check.foreground];
    const bg = colors[check.background];

    if (!fg || !bg) {
      continue;
    }

    const result = checkContrast(fg, bg);
    const passed = result.ratio >= check.required;

    let level: 'AA' | 'AAA' | 'AA-large' | 'fail';
    if (result.passesAAA) {
      level = 'AAA';
    } else if (result.passesAA) {
      level = 'AA';
    } else if (result.passesAALarge) {
      level = 'AA-large';
    } else {
      level = 'fail';
    }

    checks.push({
      name: check.name,
      foreground: check.foreground,
      background: check.background,
      ratio: result.ratio,
      required: check.required,
      passed,
      level,
    });

    if (!passed) {
      warnings.push({
        path: `${check.foreground}/${check.background}`,
        message: `Contrast ratio ${result.ratio}:1 is below required ${check.required}:1 for ${check.type}`,
        code: 'LOW_CONTRAST',
      });
    }
  }

  return {
    passed: checks.every((c) => c.passed),
    checks,
    warnings,
  };
}

/**
 * Validate contrast ratios for a resolved color set
 */
export function validateResolvedContrast(
  resolved: ResolvedColorSet
): ContrastValidationResult {
  const warnings: ValidationWarning[] = [];
  const checks: ContrastCheckResult[] = [];

  const { tokens } = resolved;

  for (const check of standardChecks) {
    const fgValue = tokens[check.foreground as keyof typeof tokens];
    const bgValue = tokens[check.background as keyof typeof tokens];

    const fg = extractHex(fgValue);
    const bg = extractHex(bgValue);

    if (!fg || !bg) {
      continue;
    }

    const result = checkContrast(fg, bg);
    const passed = result.ratio >= check.required;

    let level: 'AA' | 'AAA' | 'AA-large' | 'fail';
    if (result.passesAAA) {
      level = 'AAA';
    } else if (result.passesAA) {
      level = 'AA';
    } else if (result.passesAALarge) {
      level = 'AA-large';
    } else {
      level = 'fail';
    }

    checks.push({
      name: check.name,
      foreground: check.foreground,
      background: check.background,
      ratio: result.ratio,
      required: check.required,
      passed,
      level,
    });

    if (!passed) {
      warnings.push({
        path: `${check.foreground}/${check.background}`,
        message: `Contrast ratio ${result.ratio}:1 is below required ${check.required}:1 for ${check.type}`,
        code: 'LOW_CONTRAST',
      });
    }
  }

  return {
    passed: checks.every((c) => c.passed),
    checks,
    warnings,
  };
}

/**
 * Suggest a more accessible foreground color
 * Returns a darker or lighter version of the foreground that meets the required ratio
 */
export function suggestAccessibleColor(
  foreground: HexColor,
  background: HexColor,
  targetRatio: number = WCAG.AA_NORMAL
): HexColor | null {
  // Placeholder for future implementation
  void foreground;
  void background;
  void targetRatio;
  return null;
}
