/**
 * @woosgem/ds-lit
 *
 * WooSGem Design System - Lit Web Components
 *
 * @example
 * ```html
 * <script type="module">
 *   import '@woosgem/ds-lit';
 *   import '@woosgem/ds-styles';
 * </script>
 *
 * <wg-button variant="filled" color="primary">Click me</wg-button>
 * ```
 */

// Components
export * from './components';

// Internal utilities (for advanced usage)
export * from './internal';

// Re-export core types for convenience
export type {
  ButtonStyleProps,
  ButtonVariant,
  ButtonColor,
  ButtonSize,
  OverlayStyleProps,
  OverlayOpacity,
  OverlayLevel,
} from '@woosgem/ds-core';
