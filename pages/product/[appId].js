import React, { useState } from "react";
import { IoMdHeartEmpty, IoIosDownload, IoIosUnlock } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage, shuffleArray } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
	const [selectedSize, setSelectedSize] = useState();
	const [showError, setShowError] = useState(false);
	const dispatch = useDispatch();
	const p = product?.data?.list?.[0];

	const notify = () => {
		toast.success("Success. Check your cart!", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	};

	return (
		<div className="w-full md:py-20">
			<ToastContainer />
			<Wrapper>
				<div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
					{/* left column start */}
					<div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
						<ProductDetailsCarousel images={[p?.heroFile]} />
					</div>
					{/* left column end */}

					{/* right column start */}
					<div className="flex-[1] py-3">
						{/* PRODUCT TITLE */}
						<div className="text-[34px] font-semibold mb-2 leading-tight">
							{p?.name}
						</div>

						{/* PRODUCT SUBTITLE */}
						<div className="text-lg font-semibold mb-5">
							{p?.description}
						</div>

						{/* PRODUCT PRICE */}
						{/* <div className="flex items-center">
							<p className="mr-2 text-lg font-semibold">
								$;{p.price}
							</p>
							{p.original_price && (
								<>
									<p className="text-base font-medium line-through">
										$;{p.original_price}
									</p>
									<p className="ml-auto text-base font-medium text-green-500">
										{getDiscountedPricePercentage(
											p.original_price,
											p.price
										)}
										% off
									</p>
								</>
							)}
						</div> */}

						{/* <div className="text-md font-medium text-black/[0.5]">
							excl. of taxes
						</div> */}
						<div className="text-md font-medium text-black/[0.5] mb-20">
							{/* {`(Also includes all applicable duties)`} */}
						</div>

						{/* ADD TO CART BUTTON START */}
						{/* <button
							className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
							onClick={() => {
								dispatch(
									addToCart({
										...product?.data?.[0],
										selectedSize,
										oneQuantityPrice: p.price,
									})
								);
								notify();
							}}
						>
							Add to Cart
						</button> */}
						{/* ADD TO CART BUTTON END */}

						{/* WHISHLIST BUTTON START */}
						{/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
							Whishlist
							<IoMdHeartEmpty size={20} />
						</button> */}
						{/* WHISHLIST BUTTON END */}

						{/* DOWNLOAD BUTTON START */}
						<button
							className="w-full py-4 rounded-full border-4 border-black bg-black text-white text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
							onClick={() => {
								window.open(p?.garminStoreUrl, "_blank");
							}}
						>
							Download
							<IoIosDownload size={20} />
						</button>
						{/* DOWNLOAD BUTTON END */}

						{/* Input the Code START */}
						<button
							className="w-full py-4 rounded-full border-4 hover:bg-gray-200 text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
							onClick={() => {
								window.open("https://kzl.io/code", "_blank");
							}}
						>
							Unlock Trial
							<IoIosUnlock size={20} />
						</button>
						{/* DOWNLOAD BUTTON END */}

						<div>
							<div className="text-lg font-bold mb-5">
								Product Details
							</div>
							<div className="markdown text-md mb-5">
								<ReactMarkdown>{p?.description}</ReactMarkdown>
							</div>
						</div>
					</div>
					{/* right column end */}
				</div>

				<RelatedProducts products={products} />
			</Wrapper>
		</div>
	);
};

export default ProductDetails;

export async function getStaticPaths() {
	const products = await fetchDataFromApi("/api/products/page?pageNum=1&pageSize=1000");
	const paths = products?.data?.list?.map((p) => ({
		params: {
			appId: p.appId.toString(),
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { appId } }) {
	const product = await fetchDataFromApi(
		`/api/products/page?pageNum=1&pageSize=1&appId=${appId}`
	);
	const categories = [
		"analog","animal","cartoon","christmas","cross-stitch","cyberpunk","digital","fantasy","fenix","flower","landscape","mandala","minimalist","neon","skull","stylish","venu","whole","world"
	];
	var randomCategory = categories[Math.floor(Math.random() * categories.length)];
	const products = await fetchDataFromApi(
		`/api/products/page?pageNum=1&pageSize=10&orderBy=download:desc&category=${randomCategory}&exclude=${appId}`
	);
	return {
		props: {
			product,
			products,
		},
	};
}
