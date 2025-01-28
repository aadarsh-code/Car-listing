import type { Car } from "../types/car";

const carData: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2022,                     
    price: 25000,
    mileage: 15000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Silver",
    description: "A reliable and efficient sedan, perfect for daily commutes and family trips.",

    images:[
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1621993202323-f438eec934ff?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1611580568660-28050c1d5b5c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1535053073254-1ffc1915425d?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    ]
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic",
    year: 2021,
    price: 22000,
    mileage: 20000,
    fuelType: "Gasoline",
    transmission: "CVT",
    color: "Blue",
    description: "A compact car known for its fuel efficiency and sporty handling.",
    images:[
        "https://images.unsplash.com/photo-1610768207795-72169abdf0d4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1622474858173-46902635dcdd?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1639673971724-0f150179ab39?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1681392353566-c32e8975cc21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  },
  {
    id: "3",
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 35000,
    mileage: 5000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Red",
    description: "A classic muscle car with powerful performance.",
    images:[
      "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1590053936004-faca6038bfec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627822607447-d0008523a517?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]
  },
  {
    id: "4",
    make: "Chevrolet",
    model: "Malibu",
    year: 2022,
    price: 27000,
    mileage: 12000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Black",
    description: "A comfortable and spacious mid-size sedan.",
    images:[
      "https://images.unsplash.com/photo-1599115401779-da13f5d76969?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1521657142174-c7353dc830cd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1521657249896-063c0c611fe5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  },
  {
    id: "5",
    make: "Nissan",
    model: "Altima",
    year: 2021,
    price: 24000,
    mileage: 18000,
    fuelType: "Gasoline",
    transmission: "CVT",
    color: "White",
    description: "A fuel-efficient sedan with a smooth ride.",
    images:[
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718489085694-c4330e73e731?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1688649669390-ba887e9b55ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1660209018878-b0a5d79d7738?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]
  },
  {
    id: "6",
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 45000,
    mileage: 2000,
    fuelType: "Electric",
    transmission: "Automatic",
    color: "Gray",
    description: "A high-performance electric vehicle with advanced technology.",
    images:[
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549822701-09dcb3dd5ef2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]
  },
  {
    id: "7",
    make: "BMW",
    model: "3 Series",
    year: 2022,
    price: 40000,
    mileage: 10000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Blue",
    description: "A luxury sedan with a sporty design and powerful engine.",
    images:[
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614026480209-cd9934144671?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]
  },
  {
    id: "8",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 43000,
    mileage: 8000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Silver",
    description: "A sophisticated luxury sedan with advanced features.",
    images:[
      "https://images.unsplash.com/photo-1630165646015-77e71874fa68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608994751987-e647252b1fd9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599912027765-a69c78bfa3aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]
  },
  {
    id: "9",
    make: "Audi",
    model: "A4",
    year: 2022,
    price: 39000,
    mileage: 13000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Black",
    description: "A stylish and refined luxury sedan.",

    images:[
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]
  },
  {
    id: "10",
    make: "Lexus",
    model: "ES",
    year: 2023,
    price: 41000,
    mileage: 7000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "White",
    description: "A luxurious and comfortable sedan with a smooth ride.",
    images:[
      "https://images.unsplash.com/photo-1716466792842-1fa8dc082870?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1696590126889-2ad3c55d64c5?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1716466792842-1fa8dc082870?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
""
]
  },
];

export type SortOption = "price_asc" | "price_desc" | "year_asc" | "year_desc";
export interface FilterOptions {
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  make?: string;
}


export async function getCarData(

  page = 1,
  pageSize = 10,
  search = "",
  sort: SortOption = "price_asc",
  filters: FilterOptions = {}
): Promise<{ cars: Car[]; total: number }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  let filteredCars = carData;

  // Apply search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredCars = filteredCars.filter(
      (car) =>
        car.make.toLowerCase().includes(searchLower) ||
        car.model.toLowerCase().includes(searchLower) ||
        car.year.toString().includes(searchLower)
    );
  }

  // Apply filters
  if (filters.minPrice)
    filteredCars = filteredCars.filter((car) => car.price >= filters.minPrice!);
  if (filters.maxPrice)
    filteredCars = filteredCars.filter((car) => car.price <= filters.maxPrice!);
  if (filters.minYear)
    filteredCars = filteredCars.filter((car) => car.year >= filters.minYear!);
  if (filters.maxYear)
    filteredCars = filteredCars.filter((car) => car.year <= filters.maxYear!);
  if (filters.make)
    filteredCars = filteredCars.filter(
      (car) => car.make.toLowerCase() === filters.make!.toLowerCase()
    );

  // Apply sorting
  filteredCars.sort((a, b) => {
    switch (sort) {
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "year_asc":
        return a.year - b.year;
      case "year_desc":
        return b.year - a.year;
      default:
        return 0;
    }
  });

  const total = filteredCars.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedCars = filteredCars.slice(start, end);

  return { cars: paginatedCars, total };
}
export async function getCarById(id: string): Promise<Car | undefined> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
  
    return carData.find((car) => car.id === id)
  }
  
