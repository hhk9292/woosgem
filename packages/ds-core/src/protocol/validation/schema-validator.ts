/**
 * Color Set Protocol (CSP) - Schema Validator
 * Validates the structure and values of ColorSetDefinition
 *
 * Required fields: id, name, mode, primary.base
 * Everything else is optional with smart defaults.
 */

import type {
  ColorSetDefinition,
  ValidationResult,
  ValidationError,
  ValidationWarning,
  HexColor,
} from '../schema';
import { isValidHex } from '../transformer';

/**
 * Validation error codes
 */
export const ErrorCodes = {
  MISSING_FIELD: 'MISSING_FIELD',
  INVALID_HEX: 'INVALID_HEX',
  INVALID_MODE: 'INVALID_MODE',
  INVALID_ID: 'INVALID_ID',
} as const;

/**
 * Validation warning codes
 */
export const WarningCodes = {
  MISSING_OPTIONAL: 'MISSING_OPTIONAL',
} as const;

/**
 * Validate a hex color value
 */
function validateHex(value: unknown, path: string, errors: ValidationError[]): value is HexColor {
  if (typeof value !== 'string') {
    errors.push({
      path,
      message: `Expected hex color string, got ${typeof value}`,
      code: ErrorCodes.INVALID_HEX,
    });
    return false;
  }

  if (!isValidHex(value)) {
    errors.push({
      path,
      message: `Invalid hex color: '${value}'. Expected format: #RGB or #RRGGBB`,
      code: ErrorCodes.INVALID_HEX,
    });
    return false;
  }

  return true;
}

/**
 * Validate a required field exists
 */
function validateRequired(
  obj: Record<string, unknown>,
  field: string,
  path: string,
  errors: ValidationError[]
): boolean {
  if (obj[field] === undefined || obj[field] === null) {
    errors.push({
      path: path ? `${path}.${field}` : field,
      message: `Required field '${field}' is missing`,
      code: ErrorCodes.MISSING_FIELD,
    });
    return false;
  }
  return true;
}

/**
 * Validate optional hex color (only validate if present)
 */
function validateOptionalHex(
  value: unknown,
  path: string,
  errors: ValidationError[]
): boolean {
  if (value === undefined || value === null) {
    return true; // Optional, so missing is OK
  }
  return validateHex(value, path, errors);
}

/**
 * Validate a complete ColorSetDefinition
 *
 * Required: id, name, mode, primary.base
 * Optional: everything else
 */
export function validateColorSetSchema(definition: unknown): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];

  // Check if it's an object
  if (!definition || typeof definition !== 'object') {
    errors.push({
      path: '',
      message: 'Color set definition must be an object',
      code: ErrorCodes.MISSING_FIELD,
    });
    return { valid: false, errors, warnings };
  }

  const def = definition as Record<string, unknown>;

  // ===================
  // Required fields
  // ===================

  // Validate id
  if (!validateRequired(def, 'id', '', errors)) {
    // already added error
  } else if (typeof def.id !== 'string' || def.id.length === 0) {
    errors.push({
      path: 'id',
      message: 'ID must be a non-empty string',
      code: ErrorCodes.INVALID_ID,
    });
  } else if (!/^[a-z0-9-]+$/.test(def.id)) {
    errors.push({
      path: 'id',
      message: 'ID must contain only lowercase letters, numbers, and hyphens',
      code: ErrorCodes.INVALID_ID,
    });
  }

  // Validate name
  if (!validateRequired(def, 'name', '', errors)) {
    // already added error
  } else if (typeof def.name !== 'string' || def.name.length === 0) {
    errors.push({
      path: 'name',
      message: 'Name must be a non-empty string',
      code: ErrorCodes.MISSING_FIELD,
    });
  }

  // Validate mode
  if (!validateRequired(def, 'mode', '', errors)) {
    // already added error
  } else if (def.mode !== 'light' && def.mode !== 'dark') {
    errors.push({
      path: 'mode',
      message: `Invalid mode: '${def.mode}'. Must be 'light' or 'dark'`,
      code: ErrorCodes.INVALID_MODE,
    });
  }

  // Validate primary (required with at least base)
  if (!validateRequired(def, 'primary', '', errors)) {
    // already added error
  } else if (typeof def.primary !== 'object' || def.primary === null) {
    errors.push({
      path: 'primary',
      message: 'Primary must be an object with at least a base color',
      code: ErrorCodes.MISSING_FIELD,
    });
  } else {
    const primary = def.primary as Record<string, unknown>;
    if (!validateRequired(primary, 'base', 'primary', errors)) {
      // already added error
    } else {
      validateHex(primary.base, 'primary.base', errors);
    }
    // hover and active are optional
    validateOptionalHex(primary.hover, 'primary.hover', errors);
    validateOptionalHex(primary.active, 'primary.active', errors);
  }

  // ===================
  // Optional fields (validate format if present)
  // ===================

  // Secondary
  if (def.secondary && typeof def.secondary === 'object') {
    const secondary = def.secondary as Record<string, unknown>;
    validateOptionalHex(secondary.base, 'secondary.base', errors);
    validateOptionalHex(secondary.hover, 'secondary.hover', errors);
    validateOptionalHex(secondary.active, 'secondary.active', errors);
  }

  // Semantic colors
  if (def.semantic && typeof def.semantic === 'object') {
    const semantic = def.semantic as Record<string, unknown>;
    for (const key of ['danger', 'success', 'warning', 'info']) {
      if (semantic[key] && typeof semantic[key] === 'object') {
        const color = semantic[key] as Record<string, unknown>;
        validateOptionalHex(color.base, `semantic.${key}.base`, errors);
        validateOptionalHex(color.hover, `semantic.${key}.hover`, errors);
        validateOptionalHex(color.active, `semantic.${key}.active`, errors);
      }
    }
  }

  // Text colors
  if (def.text && typeof def.text === 'object') {
    const text = def.text as Record<string, unknown>;
    validateOptionalHex(text.default, 'text.default', errors);
    validateOptionalHex(text.muted, 'text.muted', errors);
    validateOptionalHex(text.subtle, 'text.subtle', errors);
    validateOptionalHex(text.inverse, 'text.inverse', errors);
  }

  // Background colors
  if (def.background && typeof def.background === 'object') {
    const bg = def.background as Record<string, unknown>;
    validateOptionalHex(bg.default, 'background.default', errors);
    validateOptionalHex(bg.subtle, 'background.subtle', errors);
    validateOptionalHex(bg.muted, 'background.muted', errors);
    validateOptionalHex(bg.elevated, 'background.elevated', errors);
  }

  // Border colors
  if (def.border && typeof def.border === 'object') {
    const border = def.border as Record<string, unknown>;
    validateOptionalHex(border.default, 'border.default', errors);
    validateOptionalHex(border.hover, 'border.hover', errors);
  }

  // Focus ring
  validateOptionalHex(def.focusRing, 'focusRing', errors);

  // Neutral scale
  if (def.neutral && typeof def.neutral === 'object') {
    const neutral = def.neutral as Record<string, unknown>;
    for (const key of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]) {
      validateOptionalHex(neutral[key], `neutral.${key}`, errors);
    }
  }

  // Surface colors
  if (def.surface && typeof def.surface === 'object') {
    const surface = def.surface as Record<string, unknown>;
    validateOptionalHex(surface.default, 'surface.default', errors);
    validateOptionalHex(surface.raised, 'surface.raised', errors);
    // overlay can be rgba, skip strict hex validation
    validateOptionalHex(surface.sunken, 'surface.sunken', errors);
  }

  // Input colors
  if (def.input && typeof def.input === 'object') {
    const input = def.input as Record<string, unknown>;
    validateOptionalHex(input.background, 'input.background', errors);
    validateOptionalHex(input.border, 'input.border', errors);
    validateOptionalHex(input.borderHover, 'input.borderHover', errors);
    validateOptionalHex(input.borderFocus, 'input.borderFocus', errors);
    validateOptionalHex(input.placeholder, 'input.placeholder', errors);
    validateOptionalHex(input.disabled, 'input.disabled', errors);
    validateOptionalHex(input.disabledBorder, 'input.disabledBorder', errors);
  }

  // Link colors
  if (def.link && typeof def.link === 'object') {
    const link = def.link as Record<string, unknown>;
    validateOptionalHex(link.default, 'link.default', errors);
    validateOptionalHex(link.hover, 'link.hover', errors);
    validateOptionalHex(link.visited, 'link.visited', errors);
    validateOptionalHex(link.active, 'link.active', errors);
  }

  // State colors
  if (def.state && typeof def.state === 'object') {
    const state = def.state as Record<string, unknown>;
    validateOptionalHex(state.disabled, 'state.disabled', errors);
    validateOptionalHex(state.disabledText, 'state.disabledText', errors);
    validateOptionalHex(state.selected, 'state.selected', errors);
    validateOptionalHex(state.selectedText, 'state.selectedText', errors);
    // hover and pressed can be rgba
  }

  // Shadow colors (can be rgba, skip validation)

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Type guard to check if a definition is valid
 */
export function isValidColorSetDefinition(
  definition: unknown
): definition is ColorSetDefinition {
  const result = validateColorSetSchema(definition);
  return result.valid;
}
