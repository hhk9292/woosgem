import type { ReactNode, Ref } from 'react';
import { Avatar as AvatarDef, type AvatarStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * Avatar component props.
 * Combines style props with specific allowed native props.
 */
export type AvatarProps = Prettify<
  AvatarStyleProps & {
    /** Avatar content (fallback text or custom content) */
    children?: ReactNode;
    /** Additional CSS class names */
    className?: string;
    /** Accessible label */
    'aria-label'?: string;
    /** Ref to the div element */
    ref?: Ref<HTMLDivElement>;
  }
>;

/** Ref type for Avatar component */
export type AvatarRef = HTMLDivElement;

const BaseAvatar = createComponent(AvatarDef);

/**
 * Avatar component with different sizes and shapes.
 *
 * @example
 * ```tsx
 * <Avatar size="md" shape="circle" src="/avatar.jpg" alt="User" />
 *
 * <Avatar size="lg" shape="square" fallback="AB">
 *   AB
 * </Avatar>
 *
 * <Avatar size="sm">
 *   JD
 * </Avatar>
 * ```
 */
export const Avatar = BaseAvatar as React.ComponentType<AvatarProps>;
