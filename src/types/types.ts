export interface IDateRange {
  startDate: string;
  endDate: string;
}

export interface IRoom {
  id: string;
  name: string;
  bedrooms: number;
  price: number;
  view: string;
  bookings: IDateRange[];
}

export interface IRoomFilters {
  minBedrooms: number;
  maxPrice: number;
  view: string;
}

export type OptionType = { value: string | number; label: string }