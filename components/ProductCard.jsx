import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { attributes: p, id } }) => {
  const displayPrice = p.price === 0 ? "Free" : `$${p.price}`;
  const priceTextColor = p.price === 0 ? "text-green-500" : ""; // Choose the color you want for free
  const discountColor = p.price < p.original_price ? "text-green-500" : "";

  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
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

