import { describe, it, expect } from 'vitest';

import { dateHelper } from '../src/helper';

const holidays = [
  {
    id: 7,
    name: 'International Labor Day',
    date: '2023-05-01',
    desc: 'International Labor Day',
  },
  {
    id: 8,
    name: 'Visak Bochea Day',

    date: '2023-05-04',

    desc: 'Visak Bochea Day',
  },

  {
    id: 9,

    name: 'Royal Plowing Ceremony',

    date: '2023-05-08',

    desc: 'Royal Plowing Ceremony',
  },

  {
    id: 10,

    name: 'King Norodom Sihamoni’s Birthday',

    date: '2023-05-14',

    desc: 'King Norodom Sihamoni’s Birthday',
  },
];

describe('unit test', function () {
  it('should return different in days between start and end without the end date', () => {
    const today = new Date('2023-03-24');
    const prevDay = new Date('2023-03-29');
    const diffInDays = dateHelper.diffInDays(today, prevDay);
    expect(diffInDays).toBe(5);
  });
  it('should return different in days traverse', () => {
    const today = new Date('2023-03-25');
    const prevDay = new Date('2023-03-29');
    const diffInDays = dateHelper.diffInDays(today, prevDay);
    expect(diffInDays).toBe(4);
  });
  it('should return NaN for invalid date', () => {
    const today = new Date('25/03/25');
    const prevDay = new Date('2023-03-29');
    const diffInDays = dateHelper.diffInDays(today, prevDay);
    expect(diffInDays).toBe(NaN);
  });
  it('should return true if date overlaps with holiday', () => {
    const isHoliday = dateHelper.isHoliday('2023-05-01', holidays);
    expect(isHoliday).toBe(true);
  });
  it('should return false if date not holiday', () => {
    const isHoliday = dateHelper.isHoliday('2023-05-02', holidays);
    expect(isHoliday).toBe(false);
  });
  it('should return correct count', () => {
    const count = dateHelper.getDateRangeCount(
      '2023-05-01',
      '2023-05-10',
      holidays
    );
    expect(count).toEqual(5);
  });
  it('should return null if startdate and end date not provided', () => {
    const count = dateHelper.getDateRangeCount(
      '',
      '',
      holidays
    );
    expect(count).toBeNull;
  });
});
