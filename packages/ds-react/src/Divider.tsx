import type { Ref } from 'react';
import { Divider as DividerDef, type DividerStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * Divider component props.
 * Combines style props with specific allowed native props.
 */
export type DividerProps = Prettify<
  DividerStyleProps & {
    /** Additional CSS class names */
    className?: string;
    /** Accessible label */
    'aria-label'?: string;
    /** Ref to the hr element */
    ref?: Ref<HTMLHRElement>;
  }
>;

/** Ref type for Divider component */
export type DividerRef = HTMLHRElement;

const BaseDivider = createComponent(DividerDef);

/**
 * Divider component for visual separation.
 *
 * @example
 * ```tsx
 * <Divider />
 *
 * <Divider variant="dashed" spacing="lg" />
 *
 * <Divider orientation="vertical" spacing="sm" />
 * ```
 */
export const Divider = BaseDivider as React.ComponentType<DividerProps>;
