"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt={`Product image ${current + 1}`}
        width={1000}
        height={1000}
        className="w-full min-h-[300px] object-cover rounded-lg object-center"
        priority={true}
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(" border mr-2 cursor-pointer hover:border-blue-600", {
              "ring-2 ring-blue-500": current === index,
            })}
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
