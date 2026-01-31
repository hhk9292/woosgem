/**
 * Core component definition interface.
 * Framework-agnostic blueprint for creating components.
 */
export interface ComponentDefinition<
  StyleProps,
  Attrs extends { class: string },
  Tag extends keyof HTMLElementTagNameMap
> {
  /** Display name for debugging and DevTools */
  readonly displayName: string;
  /** Default values for all style props */
  readonly defaultProps: Required<StyleProps>;
  /** Allowed values for each style prop (for validation/documentation) */
  readonly propTypes: { [K in keyof StyleProps]?: readonly StyleProps[K][] };
  /** Maps style props to DOM attributes */
  readonly mapPropsToAttrs: (props: StyleProps) => Attrs;
  /** Template information for rendering */
  readonly template: { tag: Tag; slots: readonly string[] };
}

/** Extract StyleProps type from a ComponentDefinition */
export type ExtractStyleProps<T> = T extends ComponentDefinition<infer P, any, any> ? P : never;

/** Extract Attrs type from a ComponentDefinition */
export type ExtractAttrs<T> = T extends ComponentDefinition<any, infer A, any> ? A : never;

/** Extract Tag type from a ComponentDefinition */
export type ExtractTag<T> = T extends ComponentDefinition<any, any, infer Tag> ? Tag : never;

/** Utility type to flatten intersection types for better IDE display */
export type Prettify<T> = { [K in keyof T]: T[K] } & {};
