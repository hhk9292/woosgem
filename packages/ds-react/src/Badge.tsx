import type { ReactNode, Ref } from 'react';
import { Badge as BadgeDef, type BadgeStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * Badge component props.
 * Combines style props with specific allowed native props.
 */
export type BadgeProps = Prettify<
  BadgeStyleProps & {
    /** Badge content */
    children?: ReactNode;
    /** Additional CSS class names */
    className?: string;
    /** Accessible label */
    'aria-label'?: string;
    /** Ref to the span element */
    ref?: Ref<HTMLSpanElement>;
  }
>;

/** Ref type for Badge component */
export type BadgeRef = HTMLSpanElement;

const BaseBadge = createComponent(BadgeDef);

/**
 * Badge component for labels, tags, and status indicators.
 *
 * @example
 * ```tsx
 * <Badge variant="solid" color="primary">New</Badge>
 *
 * <Badge variant="outline" color="danger">Error</Badge>
 *
 * <Badge variant="subtle" color="success" size="sm">
 *   Active
 * </Badge>
 * ```
 */
export const Badge = BaseBadge as React.ComponentType<BadgeProps>;
