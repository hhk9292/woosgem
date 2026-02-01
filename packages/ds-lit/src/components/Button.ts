import { html, LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  Button as ButtonCore,
  type ButtonStyleProps,
  type ButtonVariant,
  type ButtonColor,
  type ButtonSize,
} from '@woosgem/ds-core';

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
@customElement('wg-button')
export class WgButton extends LitElement {
  /**
   * 버튼 스타일 변형
   */
  @property({ type: String, reflect: true })
  variant: ButtonVariant = 'filled';

  /**
   * 버튼 색상
   */
  @property({ type: String, reflect: true })
  color: ButtonColor = 'primary';

  /**
   * 버튼 크기
   */
  @property({ type: String, reflect: true })
  size: ButtonSize = 'md';

  /**
   * 로딩 상태
   */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /**
   * 비활성화 상태
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * 전체 너비 사용
   */
  @property({ type: Boolean, attribute: 'full-width', reflect: true })
  fullWidth = false;

  /**
   * Light DOM 사용 (Shadow DOM 비활성화)
   */
  createRenderRoot(): HTMLElement {
    return this;
  }

  /**
   * Core mapPropsToAttrs에 전달할 props 객체 생성
   */
  private getStyleProps(): ButtonStyleProps {
    return {
      variant: this.variant,
      color: this.color,
      size: this.size,
      loading: this.loading,
      disabled: this.disabled,
      fullWidth: this.fullWidth,
    };
  }

  /**
   * Core에서 생성된 attrs를 적용
   */
  private applyAttrs(): void {
    const attrs = ButtonCore.mapPropsToAttrs(this.getStyleProps());

    Object.entries(attrs).forEach(([key, value]) => {
      if (key === 'class') {
        this.classList.add(...String(value).split(' ').filter(Boolean));
      } else if (value === undefined || value === null || value === false) {
        this.removeAttribute(key);
      } else if (value === true) {
        this.setAttribute(key, '');
      } else {
        this.setAttribute(key, String(value));
      }
    });
  }

  updated(): void {
    this.applyAttrs();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.applyAttrs();
  }

  /**
   * 클릭 핸들러 (로딩/비활성화 시 이벤트 차단)
   */
  private handleClick(e: MouseEvent): void {
    if (this.loading || this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  render(): TemplateResult {
    return html`<slot @click=${this.handleClick}></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wg-button': WgButton;
  }
}
