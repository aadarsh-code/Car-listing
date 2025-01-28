"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FilterOptions, SortOption } from "../utils/getCarData";

interface FilterSortProps {
  initialFilters: FilterOptions;
  initialSort: SortOption;
}

const defaultFilters: FilterOptions = {
  minPrice: undefined,
  maxPrice: undefined,
  minYear: undefined,
  maxYear: undefined,
  make: "all",
};

const defaultSort: SortOption = "price_asc";

export function FilterSort({ initialFilters, initialSort }: FilterSortProps) {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  const [sort, setSort] = useState<SortOption>(initialSort);
  const router = useRouter();

  const handleFilterChange = (name: string, value: number | undefined) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleMakeChange = (value: string) => {
    setFilters((prev) => ({ ...prev, make: value }));
  };

  const handleSortChange = (value: SortOption) => {
    setSort(value);
  };

  const handleApply = () => {
    const searchParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) searchParams.append(key, value.toString());
    });
    searchParams.append("sort", sort);
    router.push(`/?${searchParams.toString()}`);
  };

  const handleClear = () => {
    setFilters(defaultFilters);
    setSort(defaultSort);
    router.push("/");
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="make" className="font-medium">
          Make
        </Label>
        <Select onValueChange={handleMakeChange} value={filters.make}>
          <SelectTrigger id="make" className="rounded-2xl border-gray-500">
            <SelectValue placeholder="Select Make" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all">All Makes</SelectItem>
            <SelectItem value="Toyota">Toyota</SelectItem>
            <SelectItem value="Honda">Honda</SelectItem>
            <SelectItem value="Ford">Ford</SelectItem>
            <SelectItem value="Chevrolet">Chevrolet</SelectItem>
            <SelectItem value="Nissan">Nissan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Price Range</Label>
        <div className="flex items-center space-x-2 mt-2">
          <Input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ""}
            onChange={(e) =>
              handleFilterChange(
                "minPrice",
                e.target.value ? Number(e.target.value) : undefined
              )
            }
            className="w-1/2 rounded-2xl border-gray-500"
          />
          <span>-</span>
          <Input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ""}
            onChange={(e) =>
              handleFilterChange(
                "maxPrice",
                e.target.value ? Number(e.target.value) : undefined
              )
            }
            className="w-1/2 rounded-2xl border-gray-500"
          />
        </div>
      </div>

      <div>
        <Label>Year Range</Label>
        <div className="flex items-center space-x-2 mt-2">
          <Input
            type="number"
            placeholder="Min"
            value={filters.minYear || ""}
            onChange={(e) =>
              handleFilterChange(
                "minYear",
                e.target.value ? Number(e.target.value) : undefined
              )
            }
            className="w-1/2 rounded-2xl border-gray-500"
          />
          <span>-</span>
          <Input
            type="number"
            placeholder="Max"
            value={filters.maxYear || ""}
            onChange={(e) =>
              handleFilterChange(
                "maxYear",
                e.target.value ? Number(e.target.value) : undefined
              )
            }
            className="w-1/2 rounded-2xl border-gray-500"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="sort">Sort By</Label>
        <Select onValueChange={handleSortChange} value={sort}>
          <SelectTrigger id="sort" className="rounded-2xl border-gray-500">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
            <SelectItem value="year_asc">Year: Oldest to Newest</SelectItem>
            <SelectItem value="year_desc">Year: Newest to Oldest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col space-y-2">
        <Button
          onClick={handleApply}
          className="bg-zinc-900 text-white rounded-xl p-4 font-bold hover:bg-zinc-500"
        >
          Apply Filters
        </Button>
        <Button
          className="bg-green-500 rounded-xl text-white font-bold hover:bg-green-300 hover:text-white"
          variant="outline"
          onClick={handleClear}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
