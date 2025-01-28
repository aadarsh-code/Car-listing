import { Suspense } from "react";
import {
  getCarData,
  type FilterOptions,
  type SortOption,
} from "../utils/getCarData";
import { CarCard } from "../components/CarCard";
import { SearchBar } from "../components/SearchBar";
import { FilterSort } from "../components/FilterSort";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

// interface SearchParams {
//   [key: string]: string | string[] | undefined;
// }
type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

function sanitizeSearchParams(
  params: Record<string, string | string[] | undefined>
): Record<string, string> {
  const sanitized: Record<string, string> = {};
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (typeof value === "string") {
      sanitized[key] = value;
    } else if (Array.isArray(value)) {
      sanitized[key] = value.join(",");
    }
  });
  return sanitized;
}

async function getSearchParams(
  searchParams: Record<string, string | string[] | undefined>
) {
  const sanitizedParams = sanitizeSearchParams(searchParams);
  const page = Number(sanitizedParams.page) || 1;
  const pageSize = 9;
  const search = sanitizedParams.search || "";
  const sort = (sanitizedParams.sort as SortOption) || "price_asc";

  const filters: FilterOptions = {
    minPrice: sanitizedParams.minPrice
      ? Number(sanitizedParams.minPrice)
      : undefined,
    maxPrice: sanitizedParams.maxPrice
      ? Number(sanitizedParams.maxPrice)
      : undefined,
    minYear: sanitizedParams.minYear
      ? Number(sanitizedParams.minYear)
      : undefined,
    maxYear: sanitizedParams.maxYear
      ? Number(sanitizedParams.maxYear)
      : undefined,
    make: sanitizedParams.make,
  };

  return { page, pageSize, search, sort, filters, sanitizedParams };
}

function createQueryString(params: Record<string, string>, newPage: number) {
  const newParams = new URLSearchParams(params);
  newParams.set("page", newPage.toString());
  return newParams.toString();
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedParams = await searchParams;

  const { page, pageSize, search, sort, filters, sanitizedParams } =
    await getSearchParams(resolvedParams);

  const { cars, total } = await getCarData(
    page,
    pageSize,
    search,
    sort,
    filters
  );
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Find Your Perfect Car
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBar initialSearch={search} />
          </Suspense>
        </div>
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <aside>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <Suspense fallback={<div>Loading...</div>}>
                <FilterSort initialFilters={filters} initialSort={sort} />
              </Suspense>
            </div>
          </aside>
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Available Cars</h2>
              <p className="text-gray-600">
                Showing {cars.length} of {total} cars
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                {page > 1 && (
                  <Link
                    href={`/?${createQueryString(sanitizedParams, page - 1)}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-zinc-900 text-white rounded-xl p-4 font-bold hover:bg-zinc-500"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1 " /> Previous
                    </Button>
                  </Link>
                )}
                <span className="text-sm text-gray-600">
                  Page {page} of {totalPages}
                </span>
                {page < totalPages && (
                  <Link
                    href={`/?${createQueryString(sanitizedParams, page + 1)}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-zinc-900 text-white rounded-xl p-4 font-bold hover:bg-zinc-500"
                    >
                      Next <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
