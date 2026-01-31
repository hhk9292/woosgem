import type { MouseEventHandler, ReactNode, Ref } from 'react';
import { ListItem as ListItemDef, type ListItemStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * ListItem component props.
 * Combines style props with specific allowed native props.
 */
export type ListItemProps = Prettify<
  ListItemStyleProps & {
    /** ListItem content */
    children?: ReactNode;
    /** Click handler */
    onClick?: MouseEventHandler<HTMLLIElement>;
    /** Additional CSS class names */
    className?: string;
    /** Accessible label */
    'aria-label'?: string;
    /** Ref to the li element */
    ref?: Ref<HTMLLIElement>;
  }
>;

/** Ref type for ListItem component */
export type ListItemRef = HTMLLIElement;

const BaseListItem = createComponent(ListItemDef);

/**
 * ListItem component with variants and states.
 *
 * @example
 * ```tsx
 * <ListItem variant="default">
 *   Item 1
 * </ListItem>
 *
 * <ListItem variant="interactive" selected>
 *   Selected Item
 * </ListItem>
 *
 * <ListItem disabled divider>
 *   Disabled Item
 * </ListItem>
 * ```
 */
export const ListItem = BaseListItem as React.ComponentType<ListItemProps>;
