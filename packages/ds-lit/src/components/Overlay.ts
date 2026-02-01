import { html, LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  Overlay as OverlayCore,
  type OverlayStyleProps,
  type OverlayOpacity,
  type OverlayLevel,
} from '@woosgem/ds-core';

/**
 * WooSGem Overlay - Lit Web Component
 *
 * Modal, BottomSheet, Drawer 등의 배경 오버레이
 *
 * @element wg-overlay
 *
 * @fires close - 오버레이 클릭 시 발생 (closeOnClick이 true일 때)
 *
 * @example
 * ```html
 * <wg-overlay visible @close=${handleClose}></wg-overlay>
 * <wg-overlay opacity="dark" blur-effect></wg-overlay>
 * ```
 */
@customElement('wg-overlay')
export class WgOverlay extends LitElement {
  /**
   * 배경 블러 효과 적용
   * (blur 대신 blurEffect 사용 - LitElement의 blur() 메서드와 충돌 방지)
   */
  @property({ type: Boolean, attribute: 'blur-effect', reflect: true })
  blurEffect = false;

  /**
   * 배경 불투명도
   */
  @property({ type: String, reflect: true })
  opacity: OverlayOpacity = 'medium';

  /**
   * z-index 레벨
   */
  @property({ type: String, reflect: true })
  level: OverlayLevel = 'modal';

  /**
   * 표시 상태 (애니메이션용)
   */
  @property({ type: Boolean, reflect: true })
  visible = true;

  /**
   * 클릭 시 닫기 여부
   */
  @property({ type: Boolean, attribute: 'close-on-click' })
  closeOnClick = true;

  private boundHandleKeyDown: (e: KeyboardEvent) => void;

  constructor() {
    super();
    this.boundHandleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Light DOM 사용
   */
  createRenderRoot(): HTMLElement {
    return this;
  }

  /**
   * Core mapPropsToAttrs에 전달할 props 객체 생성
   */
  private getStyleProps(): OverlayStyleProps {
    return {
      blur: this.blurEffect,
      opacity: this.opacity,
      level: this.level,
      visible: this.visible,
    };
  }

  /**
   * Core에서 생성된 attrs를 적용
   */
  private applyAttrs(): void {
    const attrs = OverlayCore.mapPropsToAttrs(this.getStyleProps());

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
    document.addEventListener('keydown', this.boundHandleKeyDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.boundHandleKeyDown);
  }

  /**
   * 클릭 핸들러
   */
  private handleClick(e: MouseEvent): void {
    if (this.closeOnClick && e.target === this) {
      this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
  }

  /**
   * ESC 키 핸들러
   */
  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.visible && this.closeOnClick) {
      this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
  }

  render(): TemplateResult {
    return html`<slot @click=${this.handleClick}></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wg-overlay': WgOverlay;
  }
}
