import type { MouseEventHandler, ReactNode, Ref } from 'react';
import { Button as ButtonDef, type ButtonStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * Button component props.
 * Combines style props with specific allowed native props.
 */
export type ButtonProps = Prettify<
  ButtonStyleProps & {
    /** Button content */
    children?: ReactNode;
    /** Click handler */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /** Additional CSS class names */
    className?: string;
    /** Button type for forms */
    type?: 'button' | 'submit' | 'reset';
    /** Accessible label */
    'aria-label'?: string;
    /** Ref to the button element */
    ref?: Ref<HTMLButtonElement>;
  }
>;

/** Ref type for Button component */
export type ButtonRef = HTMLButtonElement;

const BaseButton = createComponent(ButtonDef, { type: 'button' });

/**
 * Button component with multiple variants, colors, and sizes.
 *
 * @example
 * ```tsx
 * <Button variant="filled" color="primary" size="md">
 *   Click me
 * </Button>
 *
 * <Button loading>Loading...</Button>
 *
 * <Button variant="outline" color="danger">
 *   Delete
 * </Button>
 * ```
 */
export const Button = BaseButton as React.ComponentType<ButtonProps>;
