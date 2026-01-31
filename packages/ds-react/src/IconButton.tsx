import type { MouseEventHandler, ReactNode, Ref } from 'react';
import { IconButton as IconButtonDef, type IconButtonStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * IconButton component props.
 * Combines style props with specific allowed native props.
 */
export type IconButtonProps = Prettify<
  IconButtonStyleProps & {
    /** Icon content (typically an SVG icon component) */
    children?: ReactNode;
    /** Click handler */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /** Additional CSS class names */
    className?: string;
    /** Button type for forms */
    type?: 'button' | 'submit' | 'reset';
    /** Disabled state */
    disabled?: boolean;
    /** Accessible label (required for icon-only buttons) */
    'aria-label'?: string;
    /** Ref to the button element */
    ref?: Ref<HTMLButtonElement>;
  }
>;

/** Ref type for IconButton component */
export type IconButtonRef = HTMLButtonElement;

const BaseIconButton = createComponent(IconButtonDef);

/**
 * IconButton component for icon-only action buttons.
 *
 * @example
 * ```tsx
 * <IconButton variant="filled" color="primary" aria-label="Settings">
 *   <SettingsIcon />
 * </IconButton>
 *
 * <IconButton variant="outline" shape="circle" aria-label="Close">
 *   <CloseIcon />
 * </IconButton>
 *
 * <IconButton variant="ghost" size="sm" aria-label="Delete">
 *   <DeleteIcon />
 * </IconButton>
 * ```
 */
export const IconButton = BaseIconButton as React.ComponentType<IconButtonProps>;
