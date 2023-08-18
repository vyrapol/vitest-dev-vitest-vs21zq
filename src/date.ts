import { format, intervalToDuration } from 'date-fns';

export const dateHelper = {
  diffInDays: (latterDate: Date, previousDate: Date) => {
    return Math.round(
      Math.abs(latterDate.getTime() - previousDate.getTime()) /
        (24 * 60 * 60 * 1000)
    );
  },
  calculateTimeOff: (leftTime: string, rightTime: string) => {
    switch (leftTime) {
      case undefined:
      case '':
      case null:
        return '';
    }
    switch (rightTime) {
      case undefined:
      case '':
      case null:
        return '';
    }
    const today = format(new Date(), 'yyyy-MM-dd');
    const leftDate = new Date(`${today} ${leftTime}`);
    const rightDate = new Date(`${today} ${rightTime}`);
    const diff = intervalToDuration({ start: leftDate, end: rightDate });
    if (diff.hours < 1 && diff.minutes > 0) {
      return `${diff.minutes}mn`;
    }
    if (diff.minutes < 1) {
      return `${diff.hours}H`;
    }
    return `${diff.hours}H ${diff.minutes}mn`;
  },
  setDisplayDate: (date: string | Date) => {
    return format(new Date(date), 'MM/dd/yyyy');
  },
  setDisplayHour: (leftTime: string, rightTime: string) => {
    if (leftTime === '' || rightTime === '') {
      return '';
    }
    const today = format(new Date(), 'yyyy-MM-dd');
    const leftDate = new Date(`${today} ${leftTime}`);
    const rightDate = new Date(`${today} ${rightTime}`);
    const formattedLeftDate = format(leftDate, 'KK:mm');
    const formattedRightDate = format(rightDate, 'KK:mm a');
    return formattedLeftDate + ' 一 ' + formattedRightDate;
  },
};
