/**
 * Color Set Protocol (CSP) - Default Theme Preset
 * Minimal light mode theme - everything else uses smart defaults
 */

import type { ColorSetDefinition } from '../schema';

/**
 * Default light theme definition
 * Only specifies primary color - all other values use smart defaults
 */
export const defaultTheme: ColorSetDefinition = {
  id: 'default',
  name: 'Default Light Theme',
  mode: 'light',
  primary: { base: '#2563EB' }, // Blue-600
};
