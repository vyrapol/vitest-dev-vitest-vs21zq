interface IHoliday {
  date: string;
}

export const dateHelper = {
  diffInDays: (prev, next) => {
    return Math.round(
      Math.abs(prev.getTime() - next.getTime()) / (24 * 60 * 60 * 1000)
    );
  },
  isHoliday: (date: string | Date, holidays: Array<IHoliday>) => {
    const dateString = new Date(date).toISOString().split('T')[0];
    return holidays.some((holiday) => holiday.date === dateString);
  },
  getDateRangeCount: (
    startDate: string | Date,
    endDate: string | Date,
    holidays: Array<IHoliday>
  ) => {
    if (!startDate && !endDate) {
      return null;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const oneDay = 1000 * 60 * 60 * 24; // Number of milliseconds in one day
    let currentDate = new Date(start);
    let differenceInDays = 0;

    // Loop through each day between start and end dates
    while (currentDate <= end) {
      const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
      // Check if the day is not Saturday (6) or Sunday (0) and not a holiday
      if (
        dayOfWeek !== 0 &&
        dayOfWeek !== 6 &&
        !dateHelper.isHoliday(currentDate, holidays)
      ) {
        differenceInDays++;
      }
      currentDate = new Date(currentDate.getTime() + oneDay); // Move to the next day
    }
    return differenceInDays;
  },
};
