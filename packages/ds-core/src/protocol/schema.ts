/**
 * Color Set Protocol (CSP) - Schema Definitions
 * TypeScript interfaces for theme interoperability
 *
 * Minimal required fields: id, name, mode, primary.base
 * Everything else has smart defaults based on mode.
 */

/** Valid hex color string (e.g., '#FF0000' or '#F00') */
export type HexColor = `#${string}`;

/** Color value that can be hex or rgba string */
export type ColorValue = HexColor | `rgba(${string})`;

/** RGB color representation */
export interface RgbColor {
  r: number; // 0-255
  g: number; // 0-255
  b: number; // 0-255
}

/** RGBA color representation */
export interface RgbaColor extends RgbColor {
  a: number; // 0-1
}

/** HSL color representation */
export interface HslColor {
  h: number; // 0-360
  s: number; // 0-100
  l: number; // 0-100
}

/** Color with optional hover and active states */
export interface ColorWithStates {
  base: HexColor;
  hover?: HexColor;
  active?: HexColor;
}

/** Partial color with states - base is also optional for defaults */
export interface PartialColorWithStates {
  base?: HexColor;
  hover?: HexColor;
  active?: HexColor;
}

/** Semantic color definition with optional states */
export interface SemanticColorDef {
  base: HexColor;
  hover?: HexColor;
  active?: HexColor;
}

/** Text color definitions */
export interface TextColors {
  default: HexColor;
  muted: HexColor;
  subtle: HexColor;
  inverse: HexColor;
}

/** Background color definitions */
export interface BackgroundColors {
  default: HexColor;
  subtle: HexColor;
  muted: HexColor;
  elevated: HexColor;
}

/** Border color definitions */
export interface BorderColors {
  default: HexColor;
  hover?: HexColor;
}

/** Semantic colors group */
export interface SemanticColors {
  danger: SemanticColorDef;
  success: SemanticColorDef;
  warning: SemanticColorDef;
  info: SemanticColorDef;
}

/** Theme mode - affects auto-derivation logic */
export type ThemeMode = 'light' | 'dark';

// ===================
// New Optional Categories
// ===================

/** Neutral gray scale (50-900) */
export interface NeutralScale {
  50: HexColor;
  100: HexColor;
  200: HexColor;
  300: HexColor;
  400: HexColor;
  500: HexColor;
  600: HexColor;
  700: HexColor;
  800: HexColor;
  900: HexColor;
  950: HexColor;
}

/** Surface colors for layered UI */
export interface SurfaceColors {
  default: HexColor;    // Card backgrounds
  raised: HexColor;     // Popover, dropdown
  overlay: HexColor;    // Modal backdrop (usually with alpha)
  sunken: HexColor;     // Inset areas, wells
}

/** Input-specific colors */
export interface InputColors {
  background: HexColor;
  border: HexColor;
  borderHover: HexColor;
  borderFocus: HexColor;
  placeholder: HexColor;
  disabled: HexColor;
  disabledBorder: HexColor;
}

/** Link colors */
export interface LinkColors {
  default: HexColor;
  hover: HexColor;
  visited: HexColor;
  active: HexColor;
}

/** Interactive state colors */
export interface StateColors {
  disabled: HexColor;
  disabledText: HexColor;
  selected: HexColor;
  selectedText: HexColor;
  hover: HexColor;
  pressed: HexColor;
}

/** Shadow/elevation colors */
export interface ShadowColors {
  default: ColorValue;  // Usually rgba
  medium: ColorValue;
  large: ColorValue;
}

/**
 * Color Set Definition - the main input schema for CSP
 *
 * REQUIRED: id, name, mode, primary.base
 * OPTIONAL: Everything else (smart defaults applied)
 */
export interface ColorSetDefinition {
  /** Unique identifier for the theme (e.g., 'ocean-blue') */
  id: string;

  /** Human-readable theme name */
  name: string;

  /** Theme mode - affects how colors are auto-derived */
  mode: ThemeMode;

  /** Primary brand color (REQUIRED: at least base) */
  primary: ColorWithStates;

  /** Secondary color (optional - defaults to neutral gray) */
  secondary?: PartialColorWithStates;

  /** Semantic colors for states (optional - universal defaults) */
  semantic?: Partial<{
    danger: Partial<SemanticColorDef>;
    success: Partial<SemanticColorDef>;
    warning: Partial<SemanticColorDef>;
    info: Partial<SemanticColorDef>;
  }>;

  /** Text colors (optional - derived from mode) */
  text?: Partial<TextColors>;

  /** Background colors (optional - derived from mode) */
  background?: Partial<BackgroundColors>;

  /** Border colors (optional - derived from background) */
  border?: Partial<BorderColors>;

  /** Focus ring color (optional - defaults to primary) */
  focusRing?: HexColor;

  // ===================
  // New Optional Categories
  // ===================

  /** Neutral gray scale (optional - derived from mode) */
  neutral?: Partial<NeutralScale>;

  /** Surface colors (optional - derived from background) */
  surface?: Partial<SurfaceColors>;

  /** Input-specific colors (optional - derived from border/background) */
  input?: Partial<InputColors>;

  /** Link colors (optional - derived from primary/info) */
  link?: Partial<LinkColors>;

  /** Interactive state colors (optional - derived from mode) */
  state?: Partial<StateColors>;

  /** Shadow colors (optional - derived from mode) */
  shadow?: Partial<ShadowColors>;
}

/**
 * Resolved color set with all tokens fully computed
 * This is the output of the ColorSetGenerator
 */
export interface ResolvedColorSet {
  /** Original theme metadata */
  id: string;
  name: string;
  mode: ThemeMode;

  /** All resolved color tokens */
  tokens: ResolvedColorTokens;
}

/**
 * All color tokens in their final resolved form
 * Maps directly to CSS custom properties
 */
export interface ResolvedColorTokens {
  // Primary
  primary: ColorValue;
  'primary-hover': ColorValue;
  'primary-active': ColorValue;
  'primary-alpha-10': ColorValue;
  'primary-alpha-20': ColorValue;

  // Secondary
  secondary: ColorValue;
  'secondary-hover': ColorValue;
  'secondary-active': ColorValue;
  'secondary-alpha-10': ColorValue;

  // Semantic - Danger
  danger: ColorValue;
  'danger-hover': ColorValue;
  'danger-active': ColorValue;
  'danger-alpha-20': ColorValue;
  'danger-lighten-20': ColorValue;

  // Semantic - Success
  success: ColorValue;
  'success-hover': ColorValue;
  'success-active': ColorValue;
  'success-alpha-20': ColorValue;
  'success-lighten-20': ColorValue;

  // Semantic - Warning
  warning: ColorValue;
  'warning-hover': ColorValue;
  'warning-active': ColorValue;

  // Semantic - Info
  info: ColorValue;
  'info-hover': ColorValue;
  'info-active': ColorValue;

  // Text
  text: ColorValue;
  'text-muted': ColorValue;
  'text-subtle': ColorValue;
  'text-inverse': ColorValue;

  // Background
  background: ColorValue;
  'background-subtle': ColorValue;
  'background-muted': ColorValue;
  'background-elevated': ColorValue;
  'background-muted-darken-3': ColorValue;
  'background-subtle-darken-3': ColorValue;

  // Border
  border: ColorValue;
  'border-hover': ColorValue;

  // Accent light colors
  'red-light': ColorValue;
  'green-light': ColorValue;
  'yellow-light': ColorValue;
  'blue-light': ColorValue;

  // Accent light darken variants
  'red-light-darken-5': ColorValue;
  'green-light-darken-5': ColorValue;
  'yellow-light-darken-5': ColorValue;
  'blue-light-darken-5': ColorValue;

  // Focus
  'focus-ring': ColorValue;

  // ===================
  // New Tokens
  // ===================

  // Neutral scale
  'neutral-50': ColorValue;
  'neutral-100': ColorValue;
  'neutral-200': ColorValue;
  'neutral-300': ColorValue;
  'neutral-400': ColorValue;
  'neutral-500': ColorValue;
  'neutral-600': ColorValue;
  'neutral-700': ColorValue;
  'neutral-800': ColorValue;
  'neutral-900': ColorValue;
  'neutral-950': ColorValue;

  // Surface
  surface: ColorValue;
  'surface-raised': ColorValue;
  'surface-overlay': ColorValue;
  'surface-sunken': ColorValue;

  // Input
  'input-background': ColorValue;
  'input-border': ColorValue;
  'input-border-hover': ColorValue;
  'input-border-focus': ColorValue;
  'input-placeholder': ColorValue;
  'input-disabled': ColorValue;
  'input-disabled-border': ColorValue;

  // Link
  link: ColorValue;
  'link-hover': ColorValue;
  'link-visited': ColorValue;
  'link-active': ColorValue;

  // State
  'state-disabled': ColorValue;
  'state-disabled-text': ColorValue;
  'state-selected': ColorValue;
  'state-selected-text': ColorValue;
  'state-hover': ColorValue;
  'state-pressed': ColorValue;

  // Shadow
  'shadow-default': ColorValue;
  'shadow-medium': ColorValue;
  'shadow-large': ColorValue;
}

/** Type for token names */
export type ColorTokenName = keyof ResolvedColorTokens;

/**
 * Transformation function type
 * Takes a base color and returns a derived color
 */
export type ColorTransformFn = (color: HexColor) => ColorValue;

/**
 * Transformation rule definition
 */
export interface TransformationRule {
  /** Source token to derive from */
  source: string;
  /** Transformation to apply */
  transform: ColorTransformFn;
}

/**
 * Mode-specific transformation rules
 */
export interface TransformationRules {
  light: Record<string, TransformationRule>;
  dark: Record<string, TransformationRule>;
}

/**
 * Validation result
 */
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  path: string;
  message: string;
  code: string;
}

export interface ValidationWarning {
  path: string;
  message: string;
  code: string;
}

/**
 * Contrast check result
 */
export interface ContrastResult {
  ratio: number;
  passesAA: boolean;
  passesAAA: boolean;
  passesAALarge: boolean;
}

/**
 * Output format options
 */
export interface OutputOptions {
  /** CSS custom property prefix (default: 'wg-color') */
  prefix?: string;
  /** Include comments in output */
  includeComments?: boolean;
  /** Minify output (remove whitespace) */
  minify?: boolean;
}
