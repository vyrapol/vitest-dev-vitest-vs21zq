import { describe, it, expect } from 'vitest';

import { arrayHelper } from '../src/array';

describe('getBrightness', function () {
  it('should remove second item', () => {
    const arr = [1, 2, 3];
    arrayHelper.removeByIndex(1, arr);
    expect(arr).toStrictEqual([1, 3]);
  });
  it('should not remove if item is only one', () => {
    const arr = [1];
    arrayHelper.removeByIndex(0, arr);
    expect(arr).toStrictEqual([1]);
  });
  it('should be unchanged when index out of range', () => {
    const arr = [1, 2, 3];
    arrayHelper.removeByIndex(4, arr);
    expect(arr).toStrictEqual([1, 2, 3]);
  });
});
