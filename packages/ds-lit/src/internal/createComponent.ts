/**
 * Core → Lit 변환 유틸리티
 *
 * 현재는 각 컴포넌트에서 직접 LitElement를 상속하고 있음.
 * 향후 반복 코드가 많아지면 팩토리 패턴으로 개선 예정.
 */

/**
 * 속성을 DOM에 적용하는 헬퍼
 */
export function applyAttrsToElement(
  element: HTMLElement,
  attrs: Record<string, unknown>
): void {
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'class') {
      const classes = String(value).split(' ').filter(Boolean);
      classes.forEach(cls => element.classList.add(cls));
    } else if (value === undefined || value === null || value === false) {
      element.removeAttribute(key);
    } else if (value === true) {
      element.setAttribute(key, '');
    } else {
      element.setAttribute(key, String(value));
    }
  });
}

/**
 * Core 컴포넌트 정의 타입
 */
export interface CoreComponentDefinition<
  StyleProps extends Record<string, unknown>,
  Attrs extends Record<string, unknown>,
> {
  displayName: string;
  defaultProps: Partial<StyleProps>;
  mapPropsToAttrs: (props: StyleProps) => Attrs;
  template: {
    tag: string;
    slots: readonly string[];
  };
}
