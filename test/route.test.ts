// let isActive = false
//   const current = route.path.split('/')
//   const url = path.split('/')
//   url.forEach((e, i) => {
//     isActive = e === current[i]
//   })
//   return isActive;

import { describe, it, expect } from 'vitest';

describe('unit test', function () {
  it('should return true for parent route match', () => {
    let isActive = false;
    const current = '/timeoff/request-change/1'.split('/');
    const url = '/timeoff/request-change'.split('/');
    url.forEach((e, i) => {
      isActive = e === current[i];
    });
    expect(isActive).toBeTruthy();
  });
  it('should return false for route includes but not match', () => {
    let isActive = false;
    const current = '/timeoff/request'.split('/');
    const url = '/timeoff/request-change'.split('/');
    url.forEach((e, i) => {
      isActive = e === current[i];
    });
    expect(isActive).toBeFalsy();
  });
  it('should return false for route includes but not match with params', () => {
    let isActive = false;
    const current = '/timeoff/request?start_date=2023-05-13'.split('/');
    const url = '/timeoff/request-change'.split('/');
    url.forEach((e, i) => {
      isActive = e === current[i];
    });
    expect(isActive).toBeFalsy();
  });
});
