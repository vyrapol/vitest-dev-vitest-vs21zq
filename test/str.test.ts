import { describe, it, expect } from 'vitest';

import {
  capitalize,
  splitGetFirst,
  underscoreToCamel,
  toLowerKebab,
} from '../src/str';

describe('capitalize', function () {
  it('should return capitalize string', () => {
    const str = 'say my name';
    const expected = 'Say My Name';
    expect(capitalize(str)).toBe(expected);
  });
});

describe('splitGetFirst', function () {
  it('should return each first letter of string', () => {
    const str = 'say my name';
    const expected = 'SMN';
    expect(splitGetFirst(str)).toBe(expected);
  });
  it('should return undefined when undefined provided', () => {
    const str = undefined;
    const expected = undefined;
    expect(splitGetFirst(str)).toBe(expected);
  });
});

describe('toLowerKebab', function () {
  it('should return kebab case for the string', () => {
    const str = 'say my name';
    const expected = 'say-my-name';
    expect(toLowerKebab(str)).toBe(expected);
  });
  it('should return kebab case for the string', () => {
    const str = 'wh2(er @* you Now? (0';
    const expected = 'wh2(er-@*-you-now?-(0';
    expect(toLowerKebab(str)).toBe(expected);
  });
});

describe('underscoreToCamel', function () {
  it('should convert kebab case to camel case', () => {
    const str = 'say_my_name';
    const expected = 'Say My Name';
    expect(underscoreToCamel(str)).toBe(expected);
  });
  it('should return camelcase', () => {
    const str = 'wh2(er @* you Now? (0';
    const expected = 'Wh2(er @* You Now? (0';
    expect(underscoreToCamel(str)).toBe(expected);
  });
});
