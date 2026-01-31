/**
 * Color Set Protocol (CSP) - Generator
 * Transforms a ColorSetDefinition into a fully resolved color set
 * with smart defaults for all optional fields.
 */

import type {
  ColorSetDefinition,
  ResolvedColorSet,
  ResolvedColorTokens,
  ColorValue,
  HexColor,
  ThemeMode,
} from './schema.js';
import { transforms } from './transformations.js';
import { darken, lighten, withAlpha } from './transformer.js';

/**
 * Smart defaults for light mode
 */
const LIGHT_DEFAULTS = {
  // Semantic colors (universal)
  danger: '#DC2626' as HexColor,
  success: '#16A34A' as HexColor,
  warning: '#F59E0B' as HexColor,
  info: '#2563EB' as HexColor,

  // Neutral scale (Tailwind-inspired gray)
  neutral: {
    50: '#FAFAFA' as HexColor,
    100: '#F4F4F5' as HexColor,
    200: '#E4E4E7' as HexColor,
    300: '#D4D4D8' as HexColor,
    400: '#A1A1AA' as HexColor,
    500: '#71717A' as HexColor,
    600: '#52525B' as HexColor,
    700: '#3F3F46' as HexColor,
    800: '#27272A' as HexColor,
    900: '#18181B' as HexColor,
    950: '#09090B' as HexColor,
  },

  // Text
  text: '#111827' as HexColor,
  textMuted: '#6B7280' as HexColor,
  textSubtle: '#9CA3AF' as HexColor,
  textInverse: '#FFFFFF' as HexColor,

  // Background
  background: '#FFFFFF' as HexColor,
  backgroundSubtle: '#F9FAFB' as HexColor,
  backgroundMuted: '#F3F4F6' as HexColor,
  backgroundElevated: '#FFFFFF' as HexColor,

  // Border
  border: '#E5E7EB' as HexColor,

  // Surface
  surface: '#FFFFFF' as HexColor,
  surfaceRaised: '#FFFFFF' as HexColor,
  surfaceOverlay: 'rgba(0, 0, 0, 0.5)' as ColorValue,
  surfaceSunken: '#F3F4F6' as HexColor,

  // Shadow
  shadowDefault: 'rgba(0, 0, 0, 0.1)' as ColorValue,
  shadowMedium: 'rgba(0, 0, 0, 0.15)' as ColorValue,
  shadowLarge: 'rgba(0, 0, 0, 0.25)' as ColorValue,
};

/**
 * Smart defaults for dark mode
 */
const DARK_DEFAULTS = {
  // Semantic colors (brighter for dark mode)
  danger: '#EF4444' as HexColor,
  success: '#22C55E' as HexColor,
  warning: '#F59E0B' as HexColor,
  info: '#3B82F6' as HexColor,

  // Neutral scale (inverted)
  neutral: {
    50: '#18181B' as HexColor,
    100: '#27272A' as HexColor,
    200: '#3F3F46' as HexColor,
    300: '#52525B' as HexColor,
    400: '#71717A' as HexColor,
    500: '#A1A1AA' as HexColor,
    600: '#D4D4D8' as HexColor,
    700: '#E4E4E7' as HexColor,
    800: '#F4F4F5' as HexColor,
    900: '#FAFAFA' as HexColor,
    950: '#FFFFFF' as HexColor,
  },

  // Text
  text: '#F9FAFB' as HexColor,
  textMuted: '#9CA3AF' as HexColor,
  textSubtle: '#6B7280' as HexColor,
  textInverse: '#111827' as HexColor,

  // Background
  background: '#111827' as HexColor,
  backgroundSubtle: '#1F2937' as HexColor,
  backgroundMuted: '#374151' as HexColor,
  backgroundElevated: '#1F2937' as HexColor,

  // Border
  border: '#374151' as HexColor,

  // Surface
  surface: '#1F2937' as HexColor,
  surfaceRaised: '#374151' as HexColor,
  surfaceOverlay: 'rgba(0, 0, 0, 0.7)' as ColorValue,
  surfaceSunken: '#111827' as HexColor,

  // Shadow
  shadowDefault: 'rgba(0, 0, 0, 0.3)' as ColorValue,
  shadowMedium: 'rgba(0, 0, 0, 0.4)' as ColorValue,
  shadowLarge: 'rgba(0, 0, 0, 0.5)' as ColorValue,
};

/**
 * Options for the ColorSetGenerator
 */
export interface GeneratorOptions {
  /**
   * Custom derivation rules to override defaults
   */
  customRules?: Record<string, { source: string; transform: keyof typeof transforms }>;

  /**
   * Skip auto-derivation for specific tokens
   */
  skipDerivation?: string[];
}

/**
 * ColorSetGenerator - Main class for generating resolved color sets
 */
export class ColorSetGenerator {
  constructor(_options: GeneratorOptions = {}) {
    // Options reserved for future extensibility
  }

  /**
   * Generate a fully resolved color set from a definition
   */
  generate(definition: ColorSetDefinition): ResolvedColorSet {
    const { mode } = definition;
    const defaults = mode === 'light' ? LIGHT_DEFAULTS : DARK_DEFAULTS;

    // Build all tokens with smart defaults
    const tokens = this.buildTokens(definition, defaults, mode);

    return {
      id: definition.id,
      name: definition.name,
      mode: definition.mode,
      tokens,
    };
  }

  /**
   * Build all tokens with smart defaults
   */
  private buildTokens(
    def: ColorSetDefinition,
    defaults: typeof LIGHT_DEFAULTS,
    mode: ThemeMode
  ): ResolvedColorTokens {
    const tokens: Record<string, ColorValue> = {};

    // ===================
    // Primary (required)
    // ===================
    tokens['primary'] = def.primary.base;
    tokens['primary-hover'] = def.primary.hover ?? this.derive(def.primary.base, 'hover', mode);
    tokens['primary-active'] = def.primary.active ?? this.derive(def.primary.base, 'active', mode);
    tokens['primary-alpha-10'] = withAlpha(def.primary.base, 0.1);
    tokens['primary-alpha-20'] = withAlpha(def.primary.base, 0.2);

    // ===================
    // Secondary (optional - defaults to neutral gray)
    // ===================
    const secondaryBase = def.secondary?.base ?? defaults.neutral[600];
    tokens['secondary'] = secondaryBase;
    tokens['secondary-hover'] = def.secondary?.hover ?? this.derive(secondaryBase, 'hover', mode);
    tokens['secondary-active'] = def.secondary?.active ?? this.derive(secondaryBase, 'active', mode);
    tokens['secondary-alpha-10'] = withAlpha(secondaryBase, 0.1);

    // ===================
    // Semantic colors (optional - universal defaults)
    // ===================
    const dangerBase = def.semantic?.danger?.base ?? defaults.danger;
    tokens['danger'] = dangerBase;
    tokens['danger-hover'] = def.semantic?.danger?.hover ?? this.derive(dangerBase, 'hover', mode);
    tokens['danger-active'] = def.semantic?.danger?.active ?? this.derive(dangerBase, 'active', mode);
    tokens['danger-alpha-20'] = withAlpha(dangerBase, 0.2);
    tokens['danger-lighten-20'] = mode === 'light' ? lighten(dangerBase, 20) : lighten(dangerBase, 15);

    const successBase = def.semantic?.success?.base ?? defaults.success;
    tokens['success'] = successBase;
    tokens['success-hover'] = def.semantic?.success?.hover ?? this.derive(successBase, 'hover', mode);
    tokens['success-active'] = def.semantic?.success?.active ?? this.derive(successBase, 'active', mode);
    tokens['success-alpha-20'] = withAlpha(successBase, 0.2);
    tokens['success-lighten-20'] = mode === 'light' ? lighten(successBase, 20) : lighten(successBase, 15);

    const warningBase = def.semantic?.warning?.base ?? defaults.warning;
    tokens['warning'] = warningBase;
    tokens['warning-hover'] = def.semantic?.warning?.hover ?? this.derive(warningBase, 'hover', mode);
    tokens['warning-active'] = def.semantic?.warning?.active ?? this.derive(warningBase, 'active', mode);

    const infoBase = def.semantic?.info?.base ?? defaults.info;
    tokens['info'] = infoBase;
    tokens['info-hover'] = def.semantic?.info?.hover ?? this.derive(infoBase, 'hover', mode);
    tokens['info-active'] = def.semantic?.info?.active ?? this.derive(infoBase, 'active', mode);

    // ===================
    // Text (optional - mode-based defaults)
    // ===================
    tokens['text'] = def.text?.default ?? defaults.text;
    tokens['text-muted'] = def.text?.muted ?? defaults.textMuted;
    tokens['text-subtle'] = def.text?.subtle ?? defaults.textSubtle;
    tokens['text-inverse'] = def.text?.inverse ?? defaults.textInverse;

    // ===================
    // Background (optional - mode-based defaults)
    // ===================
    const bgDefault = def.background?.default ?? defaults.background;
    const bgSubtle = def.background?.subtle ?? defaults.backgroundSubtle;
    const bgMuted = def.background?.muted ?? defaults.backgroundMuted;
    tokens['background'] = bgDefault;
    tokens['background-subtle'] = bgSubtle;
    tokens['background-muted'] = bgMuted;
    tokens['background-elevated'] = def.background?.elevated ?? defaults.backgroundElevated;
    tokens['background-muted-darken-3'] = darken(bgMuted as HexColor, 3);
    tokens['background-subtle-darken-3'] = darken(bgSubtle as HexColor, 3);

    // ===================
    // Border (optional - derived from neutral)
    // ===================
    const borderDefault = def.border?.default ?? defaults.border;
    tokens['border'] = borderDefault;
    tokens['border-hover'] = def.border?.hover ?? this.derive(borderDefault, 'hover', mode);

    // ===================
    // Focus ring (optional - defaults to primary)
    // ===================
    tokens['focus-ring'] = def.focusRing ?? def.primary.base;

    // ===================
    // Accent light colors (derived from semantic)
    // ===================
    if (mode === 'light') {
      tokens['red-light'] = lighten(dangerBase, 45);
      tokens['green-light'] = lighten(successBase, 45);
      tokens['yellow-light'] = lighten(warningBase, 45);
      tokens['blue-light'] = lighten(infoBase, 45);
      tokens['red-light-darken-5'] = lighten(dangerBase, 40);
      tokens['green-light-darken-5'] = lighten(successBase, 40);
      tokens['yellow-light-darken-5'] = lighten(warningBase, 40);
      tokens['blue-light-darken-5'] = lighten(infoBase, 40);
    } else {
      tokens['red-light'] = withAlpha(dangerBase, 0.1);
      tokens['green-light'] = withAlpha(successBase, 0.1);
      tokens['yellow-light'] = withAlpha(warningBase, 0.1);
      tokens['blue-light'] = withAlpha(infoBase, 0.1);
      tokens['red-light-darken-5'] = withAlpha(dangerBase, 0.15);
      tokens['green-light-darken-5'] = withAlpha(successBase, 0.15);
      tokens['yellow-light-darken-5'] = withAlpha(warningBase, 0.15);
      tokens['blue-light-darken-5'] = withAlpha(infoBase, 0.15);
    }

    // ===================
    // Neutral scale (optional - mode-based defaults)
    // ===================
    tokens['neutral-50'] = def.neutral?.[50] ?? defaults.neutral[50];
    tokens['neutral-100'] = def.neutral?.[100] ?? defaults.neutral[100];
    tokens['neutral-200'] = def.neutral?.[200] ?? defaults.neutral[200];
    tokens['neutral-300'] = def.neutral?.[300] ?? defaults.neutral[300];
    tokens['neutral-400'] = def.neutral?.[400] ?? defaults.neutral[400];
    tokens['neutral-500'] = def.neutral?.[500] ?? defaults.neutral[500];
    tokens['neutral-600'] = def.neutral?.[600] ?? defaults.neutral[600];
    tokens['neutral-700'] = def.neutral?.[700] ?? defaults.neutral[700];
    tokens['neutral-800'] = def.neutral?.[800] ?? defaults.neutral[800];
    tokens['neutral-900'] = def.neutral?.[900] ?? defaults.neutral[900];
    tokens['neutral-950'] = def.neutral?.[950] ?? defaults.neutral[950];

    // ===================
    // Surface (optional - derived from background)
    // ===================
    tokens['surface'] = def.surface?.default ?? defaults.surface;
    tokens['surface-raised'] = def.surface?.raised ?? defaults.surfaceRaised;
    tokens['surface-overlay'] = def.surface?.overlay ?? defaults.surfaceOverlay;
    tokens['surface-sunken'] = def.surface?.sunken ?? defaults.surfaceSunken;

    // ===================
    // Input (optional - derived from border/background)
    // ===================
    const inputBg = def.input?.background ?? bgDefault;
    const inputBorder = def.input?.border ?? borderDefault;
    tokens['input-background'] = inputBg;
    tokens['input-border'] = inputBorder;
    tokens['input-border-hover'] = def.input?.borderHover ?? this.derive(inputBorder, 'hover', mode);
    tokens['input-border-focus'] = def.input?.borderFocus ?? def.primary.base;
    tokens['input-placeholder'] = def.input?.placeholder ?? defaults.textSubtle;
    tokens['input-disabled'] = def.input?.disabled ?? defaults.backgroundMuted;
    tokens['input-disabled-border'] = def.input?.disabledBorder ?? defaults.border;

    // ===================
    // Link (optional - derived from primary/info)
    // ===================
    const linkDefault = def.link?.default ?? infoBase;
    tokens['link'] = linkDefault;
    tokens['link-hover'] = def.link?.hover ?? this.derive(linkDefault, 'hover', mode);
    tokens['link-visited'] = def.link?.visited ?? (mode === 'light' ? '#7C3AED' : '#A78BFA');
    tokens['link-active'] = def.link?.active ?? this.derive(linkDefault, 'active', mode);

    // ===================
    // State (optional - derived from mode)
    // ===================
    tokens['state-disabled'] = def.state?.disabled ?? defaults.backgroundMuted;
    tokens['state-disabled-text'] = def.state?.disabledText ?? defaults.textSubtle;
    tokens['state-selected'] = def.state?.selected ?? withAlpha(def.primary.base, 0.1);
    tokens['state-selected-text'] = def.state?.selectedText ?? def.primary.base;
    tokens['state-hover'] = def.state?.hover ?? (mode === 'light'
      ? 'rgba(0, 0, 0, 0.04)' as ColorValue
      : 'rgba(255, 255, 255, 0.04)' as ColorValue);
    tokens['state-pressed'] = def.state?.pressed ?? (mode === 'light'
      ? 'rgba(0, 0, 0, 0.08)' as ColorValue
      : 'rgba(255, 255, 255, 0.08)' as ColorValue);

    // ===================
    // Shadow (optional - mode-based defaults)
    // ===================
    tokens['shadow-default'] = def.shadow?.default ?? defaults.shadowDefault;
    tokens['shadow-medium'] = def.shadow?.medium ?? defaults.shadowMedium;
    tokens['shadow-large'] = def.shadow?.large ?? defaults.shadowLarge;

    return tokens as unknown as ResolvedColorTokens;
  }

  /**
   * Derive a color using transformation rules
   */
  private derive(
    base: HexColor,
    transform: 'hover' | 'active',
    mode: ThemeMode
  ): HexColor {
    if (transform === 'hover') {
      return mode === 'light' ? darken(base, 10) : lighten(base, 10);
    } else {
      return mode === 'light' ? darken(base, 15) : lighten(base, 15);
    }
  }
}

/**
 * Convenience function to generate a color set
 */
export function generateColorSet(
  definition: ColorSetDefinition,
  options?: GeneratorOptions
): ResolvedColorSet {
  const generator = new ColorSetGenerator(options);
  return generator.generate(definition);
}

/**
 * Generate multiple color sets at once
 */
export function generateColorSets(
  definitions: ColorSetDefinition[],
  options?: GeneratorOptions
): ResolvedColorSet[] {
  const generator = new ColorSetGenerator(options);
  return definitions.map((def) => generator.generate(def));
}
