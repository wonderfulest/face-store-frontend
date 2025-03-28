import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { attributes: p, id }, imgWidth = 500, imgHeight = 500 }) => {
  const displayPrice = p.original_price === 0 ? "Free" : `$${p.original_price}`;
  const priceTextColor = p.price === 0 ? "text-green-500" : ""; // Choose the color you want for free
  const discountColor = p.price < p.original_price ? "text-green-500" : "";

  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer flex flex-col items-center"
    >
      <div className="flex justify-center w-full">
        <Image
          width={imgWidth}
          height={imgHeight}
          src={p.thumbnail?.data?.attributes?.url || ''}
          alt={p.name}
          className={p.adapted === 1 ? "rounded-full" : ""}
        />
      </div>
      <div className="p-4 text-black/[0.9] text-center w-full">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center justify-center text-black/[0.5]">
          <p className={`mr-2 text-lg font-semibold ${priceTextColor}`}>
            {/* {displayPrice} */}
          </p>
          {/* 
          {p.original_price > 0 && (
            <>
              <p className="text-base font-medium line-through">
                ${p.original_price}
              </p>
              <p className={`ml-auto text-base font-medium ${discountColor}`}>
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )} */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

