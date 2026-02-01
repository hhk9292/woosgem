import { Button as ButtonCore, type ButtonStyleProps } from '@woosgem/ds-core';
import { createLitComponent } from '../internal/createComponent';

/**
 * WooSGem Button - Lit Web Component
 *
 * @element wg-button
 *
 * @slot - 버튼 내용
 *
 * @example
 * ```html
 * <wg-button variant="filled" color="primary">Click me</wg-button>
 * <wg-button variant="outline" color="danger" disabled>Disabled</wg-button>
 * ```
 */
export const WgButton = createLitComponent(
  ButtonCore,
  'wg-button',
  {
    props: {
      variant: { type: String, default: 'filled' },
      color: { type: String, default: 'primary' },
      size: { type: String, default: 'md' },
      loading: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      fullWidth: { type: Boolean, default: false, attribute: 'full-width' },
    },
    events: {
      click: (e, component) => {
        const el = component as unknown as { loading: boolean; disabled: boolean };
        if (el.loading || el.disabled) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
    },
  }
);

// Custom Element 등록
customElements.define('wg-button', WgButton);

declare global {
  interface HTMLElementTagNameMap {
    'wg-button': InstanceType<typeof WgButton>;
  }
}
