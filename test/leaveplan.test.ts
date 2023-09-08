import { describe, it, expect } from 'vitest';
let is_cancel = true;
let is_activate = true;

type Val = {
  is_cancel: boolean;
  is_activate: boolean;
  start: string;
};

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

const shouldShowEnableDisable = (isApproved: boolean, isRevising: boolean) => {
  return isApproved && isRevising;
};

const shouldEnableButton = (start: string) => new Date() < new Date(start);

const showDisableButton = (val: Val, shouldShowEnableDisable) => {
  if (!shouldEnableButton(val.start)) return false;
  return shouldShowEnableDisable && !val.is_cancel && !val.is_activate;
};
const showEnableButton = (val: Val, shouldShowEnableDisable) => {
  if (!shouldEnableButton(val.start)) return false;
  return shouldShowEnableDisable && val.is_cancel && !val.is_activate;
};

describe('should show enable button', function () {
  it('should return true if status is approved while mode isnt adjustment and is cancel', () => {
    const shouldShowEnableDisableButton = shouldShowEnableDisable(
      isApproved('approved'),
      !isRevising(
        requestType.Normal,
        'http://127.0.0.1:3000/timeoff/plan-request/15'
      )
    );
    const val: Val = {
      is_activate: false,
      is_cancel: true,
      start: '2023-09-25',
    };
    const isEnable = showEnableButton(val, shouldShowEnableDisableButton);
    expect(isEnable).toBeTruthy();
  });
  it('should return false if status is approved while mode isnt adjustment and is not cancel', () => {
    const shouldShowEnableDisableButton = shouldShowEnableDisable(
      isApproved('draft'),
      !isRevising(
        requestType.Revise,
        'http://127.0.0.1:3000/timeoff/plan-request/15/adjustment'
      )
    );
    const val: Val = {
      is_activate: true,
      is_cancel: false,
      start: '2023-08-25',
    };
    const isEnable = showDisableButton(val, shouldShowEnableDisableButton);
    expect(isEnable).toBeFalsy();
  });
  it('should hide button if date is smaller than current date', () => {
    const shouldShowEnableDisableButton = shouldShowEnableDisable(
      isApproved('draft'),
      !isRevising(
        requestType.Revise,
        'http://127.0.0.1:3000/timeoff/plan-request/15/adjustment'
      )
    );
    const val: Val = {
      is_activate: false,
      is_cancel: false,
      start: '2023-02-13',
    };
    const isHidden = !showDisableButton(val, shouldShowEnableDisableButton);
    expect(isHidden).toBeTruthy();
  });
  it('should show button if date is bigger than current date', () => {
    const shouldShowEnableDisableButton = shouldShowEnableDisable(
      isApproved('approved'),
      !isRevising(
        requestType.Normal,
        'http://127.0.0.1:3000/timeoff/plan-request/15'
      )
    );
    const val: Val = {
      is_activate: false,
      is_cancel: false,
      start: '2024-01-01',
    };
    const isHidden = showDisableButton(val, shouldShowEnableDisableButton);
    expect(isHidden).toBeTruthy();
  });
});
