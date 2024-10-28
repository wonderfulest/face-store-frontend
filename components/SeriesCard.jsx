import { getDiscountedPricePercentage } from "@/utils/helper";
import { GrLinkNext } from "react-icons/gr";
import { IoMdHeartEmpty, IoIosDownload, IoIosLink } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeriesCard = ({ data: { attributes: p, id } }) => {
	return (
		<Link
			href={`/category/${p.slug}`}
			className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
		>
			<Image width={500} height={500} src={p.url} alt={p.name} className={p.adapted == 1 ? "rounded-full" : ""} />
			<div className="p-4 text-black/[0.9] flex items-center justify-center">
				<div className="text-lg font-medium flex items-center gap-2">
					{p.name} <GrLinkNext size={20} />
				</div>
			</div>
		</Link>
	);
};

export default SeriesCard;
