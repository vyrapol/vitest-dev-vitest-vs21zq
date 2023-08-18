import { describe, it, expect } from 'vitest';

import color from '../src/color';

describe('getBrightness', function () {
  it('should return dark color if valid hex', () => {
    const hex = '#111111';
    expect(color.getBrightness(hex)).toBeLessThan(40);
  });
  it('should return light color if valid hex', () => {
    const hex = '#FFFFFF';
    expect(color.getBrightness(hex)).toBeGreaterThan(40);
  });
  it('should return NaN if not valid hex code', () => {
    const hex = 'ZZZZZZ';
    expect(color.getBrightness(hex)).toBeNaN();
  });
});
