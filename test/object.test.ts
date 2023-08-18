import { describe, it, expect } from 'vitest';

import object from '../src/object';

describe('isValidObject', function () {
  it('should return true if it is an object', () => {
    const emptyObject = {};
    expect(object.isValidObject(emptyObject)).toBeTruthy();
  });
  it('should return false if it is an array', () => {
    const emptyObject = [];
    expect(object.isValidObject(emptyObject)).toBeFalsy();
  });
  it('should return false if it is string', () => {
    const emptyObject = 'empty';
    expect(object.isValidObject(emptyObject)).toBeFalsy();
  });
  it('should return false if it is null', () => {
    const emptyObject = null;
    expect(object.isValidObject(emptyObject)).toBeFalsy();
  });
  it('should return false if it is undefined', () => {
    const emptyObject = undefined;
    expect(object.isValidObject(emptyObject)).toBeFalsy();
  });
});

describe('isObjectEmpty', function () {
  it('should return true if object is empty', () => {
    const emptyObject = {};
    expect(object.isObjectEmpty(emptyObject)).toBeTruthy();
  });
  it('should return false if it is an array', () => {
    const emptyObject = [];
    expect(object.isObjectEmpty(emptyObject)).toBeTruthy();
  });
  it('should return false if object has props', () => {
    const emptyObject = { name: 'Rapol' };
    expect(object.isObjectEmpty(emptyObject)).toBeFalsy();
  });
});
