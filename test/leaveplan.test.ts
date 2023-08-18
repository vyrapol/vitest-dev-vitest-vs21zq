import { describe, it, expect } from 'vitest';
let isCancel = true;

const requestType = {
  Normal: 'normal',
  Cancel: 'cancel',
  Revise: 'adjustment',
};

const isApproved = (status: string) => {
  return status === 'approved';
};

const isRevising = (request_type: string, route: string) => {
  const isTypeRevise = request_type === requestType.Revise;
  const isPathRevise = route.includes(requestType.Revise);

  return isTypeRevise || isPathRevise;
};

describe('should show enable button', function () {
  it('should return true if status is approved while mode isnt adjustment and is cancel', () => {
    const isEnable =
      isApproved('approved') &&
      !isRevising(
        requestType.Normal,
        'http://127.0.0.1:3000/timeoff/plan-request/15'
      ) &&
      isCancel;
    expect(isEnable).toBeTruthy();
  });
  it('should return false if status is approved while mode isnt adjustment and is not cancel', () => {
    const isEnable =
      isApproved('draft') &&
      !isRevising(
        requestType.Revise,
        'http://127.0.0.1:3000/timeoff/plan-request/15/adjustment'
      ) &&
      !isCancel;
    expect(isEnable).toBeFalsy();
  });
});
