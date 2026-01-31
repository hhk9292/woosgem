/**
 * Color Set Protocol (CSP) - Dark Theme Preset
 * Minimal dark mode theme - everything else uses smart defaults
 */

import type { ColorSetDefinition } from '../schema.js';

/**
 * Dark theme definition
 * Only specifies primary color - all other values use smart defaults
 */
export const darkTheme: ColorSetDefinition = {
  id: 'dark',
  name: 'Dark Theme',
  mode: 'dark',
  primary: { base: '#3B82F6' }, // Blue-500 (brighter for dark mode)
};
