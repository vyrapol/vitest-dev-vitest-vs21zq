import { describe, it, expect } from 'vitest';
import { dateHelper } from '../src/date';

describe('diff is days', function () {
  it('should return number of days different', () => {
    const previous = new Date('2023-08-10');
    const latter = new Date('2023-08-20');
    const dayDiff = dateHelper.diffInDays(latter, previous);
    expect(dayDiff).toEqual(10);
  });
});

describe('calculateTimeOff', function () {
  it('should return empty when leftTime is null', () => {
    const previous = null;
    const latter = '';
    const dayDiff = dateHelper.calculateTimeOff(latter, previous);
    expect(dayDiff).toEqual('');
  });
  it('should return empty when leftTime is undefined', () => {
    const previous = undefined;
    const latter = '00:00';
    const dayDiff = dateHelper.calculateTimeOff(latter, previous);
    expect(dayDiff).toEqual('');
  });
  it('should return empty when leftTime is empty', () => {
    const previous = '';
    const latter = '00:00';
    const dayDiff = dateHelper.calculateTimeOff(latter, previous);
    expect(dayDiff).toEqual('');
  });
  it('should return empty when rightTime is null', () => {
    const latter = null;
    const previous = '';
    const dayDiff = dateHelper.calculateTimeOff(latter, previous);
    expect(dayDiff).toEqual('');
  });
  it('should return empty when rightTime is undefined', () => {
    const latter = undefined;
    const previous = '00:00';
    const dayDiff = dateHelper.calculateTimeOff(latter, previous);
    expect(dayDiff).toEqual('');
  });
  it('should return empty when rightTime is empty', () => {
    const latter = '';
    const previous = '00:00';
    const dayDiff = dateHelper.calculateTimeOff(latter, previous);
    expect(dayDiff).toEqual('');
  });
  it('should return only diff in hours if more than one hour and minute is less than one', () => {
    const previous = '00:00';
    const latter = '05:00';
    const dayDiff = dateHelper.calculateTimeOff(previous, latter);
    expect(dayDiff).toEqual('5H');
  });
  it('should return only diff in minutes if less than one hour and minute is at least one', () => {
    const previous = '00:00';
    const latter = '00:02';
    const dayDiff = dateHelper.calculateTimeOff(previous, latter);
    expect(dayDiff).toEqual('2mn');
  });
  it('should return diff in hours and minutes if hour is more than one and minute is more than zero', () => {
    const previous = '00:00';
    const latter = '05:02';
    const dayDiff = dateHelper.calculateTimeOff(previous, latter);
    expect(dayDiff).toEqual('5H 2mn');
  });
});

describe('setDisplayHour', function () {
  it('should return empty if previous is empty', () => {
    const previous = '';
    const latter = '00:00';
    const displayHour = dateHelper.setDisplayHour(latter, previous);
    expect(displayHour).toEqual('');
  });
  it('should return empty if latter is empty', () => {
    const previous = '00:05';
    const latter = '';
    const displayHour = dateHelper.setDisplayHour(latter, previous);
    expect(displayHour).toEqual('');
  });
  it('should return correct display hour format HOUR:MINUTE 一 HOUR:MINUTE AM/PM', () => {
    const left = '00:05';
    const right = '05:10';
    const displayHour = dateHelper.setDisplayHour(left, right);
    expect(displayHour).toEqual('00:05 一 05:10 AM');
  });
});

describe('setDisplayDate', function () {
  it('display date as format MM/DD/YYYY', () => {
    const date = new Date('2023-08-18')
    const displayDate = dateHelper.setDisplayDate(date);
    expect(displayDate).toEqual('08/18/2023');
  });
  it('display date as format MM/DD/YYYY when with date string', () => {
    const date = '2023-08-18'
    const displayDate = dateHelper.setDisplayDate(date);
    expect(displayDate).toEqual('08/18/2023');
  });
});