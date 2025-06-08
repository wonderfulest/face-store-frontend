import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data, imgWidth = 400, imgHeight = 400 }) => {
  const displayPrice = data.price === 0 ? "Free" : `$${data.price}`;
  const priceTextColor = data.price === 0 ? "text-green-500" : "";

  return (
    <Link
      href={`/product/${data.appId}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer flex flex-col items-center"
    >
      <div className="flex justify-center w-full">
        <Image
          width={imgWidth}
          height={imgHeight}
          src={data.heroFile?.url || ""}
          alt={data.name}
          className="rounded-full"
        />
      </div>
      <div className="p-4 text-black/[0.9] text-center w-full">
        <h2 className="text-lg font-medium">{data.name}</h2>
        <div className="flex items-center justify-center text-black/[0.5]">
          <p className={`mr-2 text-lg font-semibold ${priceTextColor}`}>
            {displayPrice}
          </p>
        </div>
        {/* <div>{JSON.stringify(data)}</div> */}
      </div>
    </Link>
  );
};

export default ProductCard;

