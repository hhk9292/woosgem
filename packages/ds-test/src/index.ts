/**
 * Shared test utilities for WooSGem Design System.
 */

/**
 * Common test helper to wait for a tick
 */
export const waitTick = () => new Promise((resolve) => setTimeout(resolve, 0));

/**
 * Protected attributes shared across frameworks
 */
export const PROTECTED_ATTRS = [
  'data-variant',
  'data-color',
  'data-size',
  'data-state',
  'data-full-width',
  'data-shape',
  'data-divider',
  'data-has-image',
  'data-orientation',
  'data-spacing',
  'role',
  'aria-selected',
  'aria-disabled',
  'aria-orientation',
] as const;
