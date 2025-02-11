import React from "react";
import RoomCard from "./room-card.component";
import { IRoom, IDateRange } from "../types/types";

interface RoomListProps {
  rooms: IRoom[];
  selectedDateRange: IDateRange;
  onBookRoom: (roomId: string) => void;
}

const RoomList: React.FC<RoomListProps> = ({
  rooms,
  selectedDateRange,
  onBookRoom,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          selectedDateRange={selectedDateRange}
          onBookRoom={onBookRoom}
        />
      ))}
    </div>
  );
};

export default RoomList;
