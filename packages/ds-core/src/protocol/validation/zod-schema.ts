/**
 * Color Set Protocol (CSP) - Zod Schema Definitions
 * Runtime validation using Zod
 */

import { z } from 'zod';

/** Hex color regex pattern */
const HEX_COLOR_REGEX = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

/** Hex color schema */
export const HexColorSchema = z.string().regex(HEX_COLOR_REGEX, {
  message: 'Invalid hex color. Expected format: #RGB or #RRGGBB',
});

/** Color value (hex or rgba) */
export const ColorValueSchema = z.union([
  HexColorSchema,
  z.string().regex(/^rgba\(.+\)$/),
]);

/** Color with optional states */
export const ColorWithStatesSchema = z.object({
  base: HexColorSchema,
  hover: HexColorSchema.optional(),
  active: HexColorSchema.optional(),
});

/** Partial color with states */
export const PartialColorWithStatesSchema = z.object({
  base: HexColorSchema.optional(),
  hover: HexColorSchema.optional(),
  active: HexColorSchema.optional(),
});

/** Semantic color definition */
export const SemanticColorDefSchema = z.object({
  base: HexColorSchema,
  hover: HexColorSchema.optional(),
  active: HexColorSchema.optional(),
});

/** Text colors */
export const TextColorsSchema = z.object({
  default: HexColorSchema,
  muted: HexColorSchema,
  subtle: HexColorSchema,
  inverse: HexColorSchema,
});

/** Background colors */
export const BackgroundColorsSchema = z.object({
  default: HexColorSchema,
  subtle: HexColorSchema,
  muted: HexColorSchema,
  elevated: HexColorSchema,
});

/** Border colors */
export const BorderColorsSchema = z.object({
  default: HexColorSchema,
  hover: HexColorSchema.optional(),
});

/** Semantic colors group */
export const SemanticColorsSchema = z.object({
  danger: SemanticColorDefSchema,
  success: SemanticColorDefSchema,
  warning: SemanticColorDefSchema,
  info: SemanticColorDefSchema,
});

/** Theme mode */
export const ThemeModeSchema = z.enum(['light', 'dark']);

/** Neutral scale */
export const NeutralScaleSchema = z.object({
  50: HexColorSchema,
  100: HexColorSchema,
  200: HexColorSchema,
  300: HexColorSchema,
  400: HexColorSchema,
  500: HexColorSchema,
  600: HexColorSchema,
  700: HexColorSchema,
  800: HexColorSchema,
  900: HexColorSchema,
  950: HexColorSchema,
});

/** Surface colors */
export const SurfaceColorsSchema = z.object({
  default: HexColorSchema,
  raised: HexColorSchema,
  overlay: ColorValueSchema,
  sunken: HexColorSchema,
});

/** Input colors */
export const InputColorsSchema = z.object({
  background: HexColorSchema,
  border: HexColorSchema,
  borderHover: HexColorSchema,
  borderFocus: HexColorSchema,
  placeholder: HexColorSchema,
  disabled: HexColorSchema,
  disabledBorder: HexColorSchema,
});

/** Link colors */
export const LinkColorsSchema = z.object({
  default: HexColorSchema,
  hover: HexColorSchema,
  visited: HexColorSchema,
  active: HexColorSchema,
});

/** State colors */
export const StateColorsSchema = z.object({
  disabled: HexColorSchema,
  disabledText: HexColorSchema,
  selected: HexColorSchema,
  selectedText: HexColorSchema,
  hover: ColorValueSchema,
  pressed: ColorValueSchema,
});

/** Shadow colors */
export const ShadowColorsSchema = z.object({
  default: ColorValueSchema,
  medium: ColorValueSchema,
  large: ColorValueSchema,
});

/**
 * Color Set Definition Schema - the main input schema for CSP
 *
 * REQUIRED: id, name, mode, primary.base
 * OPTIONAL: Everything else (smart defaults applied)
 */
export const ColorSetDefinitionSchema = z.object({
  id: z.string().min(1).regex(/^[a-z0-9-]+$/, {
    message: 'ID must contain only lowercase letters, numbers, and hyphens',
  }),
  name: z.string().min(1),
  mode: ThemeModeSchema,
  primary: ColorWithStatesSchema,
  secondary: PartialColorWithStatesSchema.optional(),
  semantic: z.object({
    danger: SemanticColorDefSchema.partial().optional(),
    success: SemanticColorDefSchema.partial().optional(),
    warning: SemanticColorDefSchema.partial().optional(),
    info: SemanticColorDefSchema.partial().optional(),
  }).partial().optional(),
  text: TextColorsSchema.partial().optional(),
  background: BackgroundColorsSchema.partial().optional(),
  border: BorderColorsSchema.partial().optional(),
  focusRing: HexColorSchema.optional(),
  neutral: NeutralScaleSchema.partial().optional(),
  surface: SurfaceColorsSchema.partial().optional(),
  input: InputColorsSchema.partial().optional(),
  link: LinkColorsSchema.partial().optional(),
  state: StateColorsSchema.partial().optional(),
  shadow: ShadowColorsSchema.partial().optional(),
});

/** Inferred TypeScript type from Zod schema */
export type ColorSetDefinitionInput = z.infer<typeof ColorSetDefinitionSchema>;

/**
 * Validate a color set definition using Zod
 * Returns the validated data or throws ZodError
 */
export function validateColorSet(input: unknown): ColorSetDefinitionInput {
  return ColorSetDefinitionSchema.parse(input);
}

/**
 * Safely validate a color set definition
 * Returns { success: true, data } or { success: false, error }
 */
export function safeValidateColorSet(input: unknown) {
  return ColorSetDefinitionSchema.safeParse(input);
}

/**
 * Type guard using Zod
 */
export function isColorSetDefinition(input: unknown): input is ColorSetDefinitionInput {
  return ColorSetDefinitionSchema.safeParse(input).success;
}
