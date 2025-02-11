import React from "react";
import Input from "./input.component";
import Select from "./select.component";
import { IRoomFilters } from "../types/types";
import { viewOptions } from "../consts/consts";

interface RoomFiltersProps {
  filters: IRoomFilters;
  onFilterChange: (filters: IRoomFilters) => void;
}

const RoomFilters: React.FC<RoomFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  const handleChange = (key: keyof IRoomFilters, value: string | number) => {
    const newFilters = { ...filters, [key]: value };
    onFilterChange(newFilters);
  };

  return (
    <div className="md:col-span-1 bg-gray-50 rounded-lg h-fit">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-col gap-4 p-4">
          <Input
            type="number"
            min="1"
            value={filters.minBedrooms}
            onChange={(e) =>
              handleChange("minBedrooms", parseInt(e.target.value))
            }
            label="Minimum Bedrooms"
          />
          <Input
            type="number"
            min="1"
            value={filters.maxPrice}
            onChange={(e) => handleChange("maxPrice", parseInt(e.target.value))}
            label="Maximum Price"
          />
          <Select
            label="View"
            options={viewOptions}
            onChange={(e) => handleChange("view", e.target.value)}
            value={filters.view}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomFilters;
