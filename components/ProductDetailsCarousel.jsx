import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const ProductDetailsCarousel = ({ images }) => {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);

	const handleShow = (index) => {
		setPhotoIndex(index);
		setShowModal(true);
	};

	return (
		<div className="bg-white rounded-[2rem] md:p-4">
			<div className="relative">
				<div className="relative h-[300px] md:h-[540px] w-full overflow-hidden rounded-full">
					<Image
						src={images?.[0]?.url || ""}
						alt={images?.[0]?.name || ""}
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
					{images?.map((img, index) => (
						<div
							key={index}
							className={`h-2 w-2 rounded-full ${
								index === photoIndex ? "bg-black" : "bg-gray-300"
							}`}
						/>
					))}
				</div>
			</div>

			{/* 缩略图列表 */}
			<div className="hidden md:flex gap-4 mt-4">
				{images?.map((img, index) => (
					<div
						key={index}
						className="relative h-24 w-24 rounded-full overflow-hidden cursor-pointer"
						onClick={() => handleShow(index)}
					>
						<Image
							src={img.url || ""}
							alt={img.name || ""}
							fill
							className="object-cover"
						/>
					</div>
				))}
			</div>

			{/* 图片预览模态框 */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
					<div className="relative w-full max-w-4xl h-[80vh]">
						<Image
							src={images?.[photoIndex]?.url || ""}
							alt={images?.[photoIndex]?.name || ""}
							fill
							className="object-contain rounded-full"
						/>
						<button
							className="absolute top-4 right-4 text-white text-2xl"
							onClick={() => setShowModal(false)}
						>
							<IoMdClose />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetailsCarousel;
