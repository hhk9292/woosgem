import type { MouseEventHandler, ReactNode, Ref } from 'react';
import { Tab as TabDef, type TabStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * Tab component props.
 * Combines style props with specific allowed native props.
 */
export type TabProps = Prettify<
  TabStyleProps & {
    /** Tab content */
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

/** Ref type for Tab component */
export type TabRef = HTMLButtonElement;

const BaseTab = createComponent(TabDef);

/**
 * Tab component with variants, sizes, and selection states.
 *
 * @example
 * ```tsx
 * <Tab variant="underline" size="md" selected>
 *   Home
 * </Tab>
 *
 * <Tab variant="filled" disabled>
 *   Disabled
 * </Tab>
 *
 * <Tab fullWidth>
 *   Full Width
 * </Tab>
 * ```
 */
export const Tab = BaseTab as React.ComponentType<TabProps>;
