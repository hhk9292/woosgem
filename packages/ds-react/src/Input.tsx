import type { ChangeEventHandler, FocusEventHandler, Ref } from 'react';
import { Input as InputDef, type InputStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * Input component props.
 * Combines style props with specific allowed native props.
 */
export type InputProps = Prettify<
  InputStyleProps & {
    /** Input value */
    value?: string;
    /** Default value for uncontrolled input */
    defaultValue?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Change handler */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /** Focus handler */
    onFocus?: FocusEventHandler<HTMLInputElement>;
    /** Blur handler */
    onBlur?: FocusEventHandler<HTMLInputElement>;
    /** Additional CSS class names */
    className?: string;
    /** Input type */
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
    /** Input name for forms */
    name?: string;
    /** Accessible label */
    'aria-label'?: string;
    /** Accessible description */
    'aria-describedby'?: string;
    /** Ref to the input element */
    ref?: Ref<HTMLInputElement>;
  }
>;

/** Ref type for Input component */
export type InputRef = HTMLInputElement;

const BaseInput = createComponent(InputDef);

/**
 * Input component with multiple variants and states.
 *
 * @example
 * ```tsx
 * <Input variant="outline" size="md" placeholder="Enter text" />
 *
 * <Input error placeholder="Invalid input" />
 *
 * <Input success placeholder="Valid input" />
 *
 * <Input variant="filled" disabled placeholder="Disabled" />
 * ```
 */
export const Input = BaseInput as React.ComponentType<InputProps>;
