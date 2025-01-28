import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Car } from "../types/car";
import { Fuel, Calendar } from "lucide-react";

export function CarCard({ car }: { car: Car }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={car.images[0] || "/placeholder.svg"}
          alt={`${car.make} ${car.model}`}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {car.make} {car.model}
        </h3>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{car.year}</Badge>
          <span className="text-lg font-bold text-blue-600">
            ${car.price.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Fuel className="w-4 h-4 mr-1" />
          <span className="mr-3">{car.fuelType}</span>
          <Calendar className="w-4 h-4 mr-1" />
          <span>{car.year}</span>
        </div>
        <Link href={`/car/${car.id}`} passHref>
          <Button className="w-full bg-green-500 rounded-xl text-white font-bold hover:bg-green-300 hover:text-white">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
