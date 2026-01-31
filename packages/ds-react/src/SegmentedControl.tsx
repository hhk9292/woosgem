import type { MouseEventHandler, ReactNode, Ref } from 'react';
import {
  SegmentedControl as SegmentedControlDef,
  SegmentedControlItem as SegmentedControlItemDef,
  type SegmentedControlStyleProps,
  type SegmentedControlItemStyleProps,
  type Prettify,
} from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * SegmentedControl component props.
 * Combines style props with specific allowed native props.
 */
export type SegmentedControlProps = Prettify<
  SegmentedControlStyleProps & {
    /** SegmentedControl content (should contain SegmentedControlItem children) */
    children?: ReactNode;
    /** Additional CSS class names */
    className?: string;
    /** Accessible label */
    'aria-label'?: string;
    /** Ref to the div element */
    ref?: Ref<HTMLDivElement>;
  }
>;

/**
 * SegmentedControlItem component props.
 * Combines style props with specific allowed native props.
 */
export type SegmentedControlItemProps = Prettify<
  SegmentedControlItemStyleProps & {
    /** Item content */
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

/** Ref type for SegmentedControl component */
export type SegmentedControlRef = HTMLDivElement;

/** Ref type for SegmentedControlItem component */
export type SegmentedControlItemRef = HTMLButtonElement;

const BaseSegmentedControl = createComponent(SegmentedControlDef);
const BaseSegmentedControlItem = createComponent(SegmentedControlItemDef);

/**
 * SegmentedControl component for grouped button selections.
 *
 * @example
 * ```tsx
 * <SegmentedControl size="md">
 *   <SegmentedControl.Item selected>Option 1</SegmentedControl.Item>
 *   <SegmentedControl.Item>Option 2</SegmentedControl.Item>
 *   <SegmentedControl.Item disabled>Option 3</SegmentedControl.Item>
 * </SegmentedControl>
 *
 * <SegmentedControl size="lg" fullWidth>
 *   <SegmentedControl.Item>All</SegmentedControl.Item>
 *   <SegmentedControl.Item selected>Active</SegmentedControl.Item>
 *   <SegmentedControl.Item>Archived</SegmentedControl.Item>
 * </SegmentedControl>
 * ```
 */
export const SegmentedControl = BaseSegmentedControl as unknown as React.ComponentType<SegmentedControlProps> & {
  Item: React.ComponentType<SegmentedControlItemProps>;
};

/**
 * SegmentedControlItem component for individual items within SegmentedControl.
 */
export const SegmentedControlItem = BaseSegmentedControlItem as React.ComponentType<SegmentedControlItemProps>;

// Attach Item as a property for compound component pattern
SegmentedControl.Item = SegmentedControlItem;
