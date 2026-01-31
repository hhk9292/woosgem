import type { ChangeEventHandler, ReactNode, Ref } from 'react';
import { Checkbox as CheckboxDef, type CheckboxStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * Checkbox component props.
 * Combines style props with specific allowed native props.
 */
export type CheckboxProps = Prettify<
  CheckboxStyleProps & {
    /** Checkbox label content */
    children?: ReactNode;
    /** Change handler */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /** Additional CSS class names */
    className?: string;
    /** Checkbox name for forms */
    name?: string;
    /** Checkbox value for forms */
    value?: string;
    /** Accessible label */
    'aria-label'?: string;
    /** Accessible description */
    'aria-describedby'?: string;
    /** Ref to the div element */
    ref?: Ref<HTMLDivElement>;
  }
>;

/** Ref type for Checkbox component */
export type CheckboxRef = HTMLDivElement;

const BaseCheckbox = createComponent(CheckboxDef);

/**
 * Checkbox component with support for checked, indeterminate, and disabled states.
 *
 * @example
 * ```tsx
 * <Checkbox checked>Accept terms</Checkbox>
 *
 * <Checkbox indeterminate>Select all</Checkbox>
 *
 * <Checkbox disabled>Disabled option</Checkbox>
 *
 * <Checkbox size="lg" checked>Large checkbox</Checkbox>
 * ```
 */
export const Checkbox = BaseCheckbox as React.ComponentType<CheckboxProps>;
