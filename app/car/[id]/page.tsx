import { notFound } from "next/navigation";
import Link from "next/link";
import { getCarById } from "../../../utils/getCarData";
import { CarImageCarousel } from "../../../components/CarImageCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  Fuel,
  Gauge,
  PaintBucket,
  Cog,
} from "lucide-react";

interface CarDetailsPageProps {
  params: { id: string };
}

export default async function CarDetails({ params }: CarDetailsPageProps) {
  const car = await getCarById(params.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Listings
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <CarImageCarousel images={car.images} />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">
            {car.make} {car.model}
          </h1>
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary">{car.year}</Badge>
            <Badge variant="outline">{car.transmission}</Badge>
            <Badge variant="outline">{car.fuelType}</Badge>
          </div>

          <p className="text-4xl font-bold text-blue-600 mb-6">
            ${car.price.toLocaleString()}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-gray-500" />
              <span>Year: {car.year}</span>
            </div>
            <div className="flex items-center">
              <Gauge className="h-5 w-5 mr-2 text-gray-500" />
              <span>Mileage: {car.mileage.toLocaleString()} miles</span>
            </div>
            <div className="flex items-center">
              <Fuel className="h-5 w-5 mr-2 text-gray-500" />
              <span>Fuel Type: {car.fuelType}</span>
            </div>
            <div className="flex items-center">
              <Cog className="h-5 w-5 mr-2 text-gray-500" />
              <span>Transmission: {car.transmission}</span>
            </div>
            <div className="flex items-center">
              <PaintBucket className="h-5 w-5 mr-2 text-gray-500" />
              <span>Color: {car.color}</span>
            </div>
          </div>

          <Separator className="my-6" />

          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 mb-6">{car.description}</p>

          <Button size="lg" className="w-full">
            Contact Seller
          </Button>
        </div>
      </div>

      <Separator className="my-8" />

      <div>
        <h2 className="text-2xl font-semibold mb-4">Additional Features</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Bluetooth",
            "Navigation System",
            "Leather Seats",
            "Backup Camera",
            "Sunroof",
            "Keyless Entry",
          ].map((feature) => (
            <li key={feature} className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
