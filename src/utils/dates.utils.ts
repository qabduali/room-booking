import { IDateRange } from "../types/types";

export const countIntersections = (bookings: IDateRange[], targetRange: IDateRange): number => {
  return bookings.filter(booking => {
    const bookingStart = new Date(booking.startDate);
    const bookingEnd = new Date(booking.endDate);
    const targetStart = new Date(targetRange.startDate);
    const targetEnd = new Date(targetRange.endDate);

    return bookingStart <= targetEnd && targetStart <= bookingEnd;
  }).length;
};

export const isDateRangeAvailable = (bookings: IDateRange[], targetRange: IDateRange): boolean => {
  return countIntersections(bookings, targetRange) === 0;
};

export const isValidDateRange = (startDate: string, endDate: string): boolean => {
  if (!startDate || !endDate) return false; 

  const start = new Date(startDate);
  const end = new Date(endDate);

  return start < end; 
};
