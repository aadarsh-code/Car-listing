"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBar({ initialSearch = "" }) {
  const [search, setSearch] = useState(initialSearch);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?search=${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by make, model, or year"
          className="pl-10 pr-4 py-2 w-full rounded-2xl border-gray-400 placeholder:text-gray-700"
        />
      </div>
      <Button
        type="submit"
        className="bg-zinc-800 text-white rounded-xl  font-semibold hover:bg-zinc-800 "
      >
        Search
      </Button>
    </form>
  );
}
