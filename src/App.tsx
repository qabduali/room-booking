import React, { useEffect } from "react";
import { DateRangePicker, RoomFilters, RoomList } from "./components";
import { isValidDateRange } from "./utils/dates.utils";
import { IRoom, IDateRange, IRoomFilters } from "./types/types";
import { MOCK_ROOMS } from "./consts/consts";

export default function App() {
  const [rooms, setRooms] = React.useState<IRoom[]>(MOCK_ROOMS);
  const [filteredRooms, setFilteredRooms] = React.useState<IRoom[]>(MOCK_ROOMS);
  const [selectedDateRange, setSelectedDateRange] = React.useState<IDateRange>({
    startDate: "",
    endDate: "",
  });
  const [selectedFilters, setFilters] = React.useState<IRoomFilters>({
    minBedrooms: 1,
    maxPrice: 1000,
    view: "any",
  });

  const applyFilters = (rooms: IRoom[], filters: IRoomFilters) => {
    return rooms.filter(
      (room) =>
        room.bedrooms >= filters.minBedrooms &&
        room.price <= filters.maxPrice &&
        (filters.view === "any" || room.view === filters.view)
    );
  };

  const handleFilterChange = (filters: IRoomFilters) => {
    setFilters(filters);
    setFilteredRooms(applyFilters(rooms, filters));
  };

  const handleBookRoom = (roomId: string) => {
    const { startDate, endDate } = selectedDateRange;

    if (!startDate || !endDate) {
      alert("Please select a date range");
      return;
    }

    if (!isValidDateRange(startDate, endDate)) {
      alert("Please select an appropriate date range");
      return;
    }

    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? {
              ...room,
              bookings: [...room.bookings, selectedDateRange],
            }
          : room
      )
    );

    alert("Room booked successfully!");
  };

  useEffect(() => {
    setFilteredRooms(applyFilters(rooms, selectedFilters));
  }, [rooms, selectedFilters]);

  return (
    <div className="container p-8 w-screen flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Room Booking System</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <RoomFilters
          filters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        <div className="md:col-span-3">
          <DateRangePicker
            dateRange={selectedDateRange}
            onChange={setSelectedDateRange}
          />
          <RoomList
            rooms={filteredRooms}
            selectedDateRange={selectedDateRange}
            onBookRoom={handleBookRoom}
          />
        </div>
      </div>
    </div>
  );
}
