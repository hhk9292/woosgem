/**
 * Color Set Protocol (CSP) - Color Transformer
 * Pure color manipulation functions with no external dependencies
 */

import type { HexColor, RgbColor, HslColor, ColorValue } from './schema';

/**
 * Parse a hex color string to RGB values
 */
export function hexToRgb(hex: HexColor): RgbColor {
  // Remove # prefix
  let hexValue = hex.replace('#', '');

  // Handle shorthand (e.g., #F00 -> #FF0000)
  if (hexValue.length === 3) {
    hexValue = hexValue
      .split('')
      .map((c) => c + c)
      .join('');
  }

  const num = parseInt(hexValue, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

/**
 * Convert RGB to hex color string
 */
export function rgbToHex(rgb: RgbColor): HexColor {
  const toHex = (n: number) => {
    const clamped = Math.max(0, Math.min(255, Math.round(n)));
    return clamped.toString(16).padStart(2, '0');
  };

  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`.toUpperCase() as HexColor;
}

/**
 * Convert RGB to HSL
 */
export function rgbToHsl(rgb: RgbColor): HslColor {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Convert HSL to RGB
 */
export function hslToRgb(hsl: HslColor): RgbColor {
  const h = hsl.h / 360;
  const s = hsl.s / 100;
  const l = hsl.l / 100;

  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

/**
 * Darken a color by a percentage
 * @param hex - Input hex color
 * @param percent - Percentage to darken (0-100)
 */
export function darken(hex: HexColor, percent: number): HexColor {
  const hsl = rgbToHsl(hexToRgb(hex));
  hsl.l = Math.max(0, hsl.l - percent);
  return rgbToHex(hslToRgb(hsl));
}

/**
 * Lighten a color by a percentage
 * @param hex - Input hex color
 * @param percent - Percentage to lighten (0-100)
 */
export function lighten(hex: HexColor, percent: number): HexColor {
  const hsl = rgbToHsl(hexToRgb(hex));
  hsl.l = Math.min(100, hsl.l + percent);
  return rgbToHex(hslToRgb(hsl));
}

/**
 * Apply alpha transparency to a color
 * @param hex - Input hex color
 * @param alpha - Alpha value (0-1)
 */
export function withAlpha(hex: HexColor, alpha: number): ColorValue {
  const rgb = hexToRgb(hex);
  const clampedAlpha = Math.max(0, Math.min(1, alpha));
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${clampedAlpha})` as ColorValue;
}

/**
 * Mix two colors together
 * @param color1 - First hex color
 * @param color2 - Second hex color
 * @param weight - Weight of first color (0-1, default 0.5)
 */
export function mix(color1: HexColor, color2: HexColor, weight: number = 0.5): HexColor {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const w = Math.max(0, Math.min(1, weight));

  return rgbToHex({
    r: Math.round(rgb1.r * w + rgb2.r * (1 - w)),
    g: Math.round(rgb1.g * w + rgb2.g * (1 - w)),
    b: Math.round(rgb1.b * w + rgb2.b * (1 - w)),
  });
}

/**
 * Calculate relative luminance of a color
 * Used for contrast calculations (WCAG 2.1)
 */
export function luminance(hex: HexColor): number {
  const rgb = hexToRgb(hex);

  const toLinear = (c: number) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  };

  const r = toLinear(rgb.r);
  const g = toLinear(rgb.g);
  const b = toLinear(rgb.b);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate contrast ratio between two colors
 * @returns Ratio from 1 to 21
 */
export function contrastRatio(color1: HexColor, color2: HexColor): number {
  const l1 = luminance(color1);
  const l2 = luminance(color2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Adjust saturation of a color
 * @param hex - Input hex color
 * @param percent - Percentage adjustment (-100 to 100)
 */
export function saturate(hex: HexColor, percent: number): HexColor {
  const hsl = rgbToHsl(hexToRgb(hex));
  hsl.s = Math.max(0, Math.min(100, hsl.s + percent));
  return rgbToHex(hslToRgb(hsl));
}

/**
 * Desaturate a color (shorthand for negative saturate)
 */
export function desaturate(hex: HexColor, percent: number): HexColor {
  return saturate(hex, -percent);
}

/**
 * Invert a color
 */
export function invert(hex: HexColor): HexColor {
  const rgb = hexToRgb(hex);
  return rgbToHex({
    r: 255 - rgb.r,
    g: 255 - rgb.g,
    b: 255 - rgb.b,
  });
}

/**
 * Get complementary color (180 degree hue rotation)
 */
export function complement(hex: HexColor): HexColor {
  const hsl = rgbToHsl(hexToRgb(hex));
  hsl.h = (hsl.h + 180) % 360;
  return rgbToHex(hslToRgb(hsl));
}

/**
 * Check if a color is considered "light"
 * Useful for determining text color on backgrounds
 */
export function isLight(hex: HexColor): boolean {
  return luminance(hex) > 0.179;
}

/**
 * Check if a color is considered "dark"
 */
export function isDark(hex: HexColor): boolean {
  return !isLight(hex);
}

/**
 * Parse any color format to HexColor
 * Supports: #RGB, #RRGGBB
 */
export function parseColor(input: string): HexColor | null {
  const hex = input.trim();

  // Already valid hex
  if (/^#[0-9A-Fa-f]{3}$/.test(hex) || /^#[0-9A-Fa-f]{6}$/.test(hex)) {
    // Normalize to 6-digit uppercase
    if (hex.length === 4) {
      const expanded = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
      return expanded.toUpperCase() as HexColor;
    }
    return hex.toUpperCase() as HexColor;
  }

  return null;
}

/**
 * Validate if a string is a valid hex color
 */
export function isValidHex(input: string): input is HexColor {
  return parseColor(input) !== null;
}
