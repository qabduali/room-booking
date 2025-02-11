import React, { useMemo } from "react";
import Button from "./button.component";
import { IRoom, IDateRange } from "../types/types";
import { isDateRangeAvailable } from "../utils/dates.utils";

interface RoomListProps {
  room: IRoom;
  selectedDateRange: IDateRange;
  onBookRoom: (roomId: string) => void;
}

const RoomCard: React.FC<RoomListProps> = ({
  room,
  selectedDateRange,
  onBookRoom,
}) => {
  const isAvailable = useMemo(() => {
    return isDateRangeAvailable(room.bookings, selectedDateRange);
  }, [room.bookings, selectedDateRange]);

  return (
    <div
      key={room.id}
      className="border rounded-lg p-4 shadow-md flex flex-col gap-4 bg-gray-50"
    >
      <h3 className="text-lg font-semibold">{room.name}</h3>
      <div className="flex flex-col gap-2 ml-2">
        <p>
          <span className="font-semibold">Bedrooms:</span> {room.bedrooms}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${room.price}/night
        </p>
        <p>
          <span className="font-semibold">View:</span> {room.view}
        </p>
      </div>
      <Button onClick={() => onBookRoom(room.id)} disabled={!isAvailable}>
        {isAvailable ? "Book Now" : "Unavailable"}
      </Button>
    </div>
  );
};

export default RoomCard;
