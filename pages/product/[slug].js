import React, { useState } from "react";
import { IoMdHeartEmpty, IoIosDownload } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
	const [selectedSize, setSelectedSize] = useState();
	const [showError, setShowError] = useState(false);
	const dispatch = useDispatch();
	const p = product?.data?.[0]?.attributes;

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
						<ProductDetailsCarousel images={p.image.data} />
					</div>
					{/* left column end */}

					{/* right column start */}
					<div className="flex-[1] py-3">
						{/* PRODUCT TITLE */}
						<div className="text-[34px] font-semibold mb-2 leading-tight">
							{p.name}
						</div>

						{/* PRODUCT SUBTITLE */}
						<div className="text-lg font-semibold mb-5">
							{p.subtitle}
						</div>

						{/* PRODUCT PRICE */}
						<div className="flex items-center">
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
						</div>

						<div className="text-md font-medium text-black/[0.5]">
                            excl. of taxes
						</div>
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
							className="w-full py-4 rounded-full border bg-black text-white text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
							onClick={() => {
								window.open(p.garmin_appstore_url, "_blank");
								// window.location.href = p.garmin_appstore_url;
								// notify();
							}}
						>
							Download
							<IoIosDownload size={20} />
						</button>
						{/* DOWNLOAD BUTTON END */}

						<div>
							<div className="text-lg font-bold mb-5">
								Product Details
							</div>
							<div className="markdown text-md mb-5">
								<ReactMarkdown>{p.description}</ReactMarkdown>
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
	// 获取全部产品的slug, 需要优化，直接获取 slug, 而不是遍历产品列表
	const products = await fetchDataFromApi("/api/products?populate=*&pagination[page]=1&pagination[pageSize]=100");
	const paths = products?.data?.map((p) => ({
		params: {
			slug: p.attributes.slug,
		},
	}));
	if (products.meta.pagination.page < products.meta.pagination.pageCount) {
		const paths2 = await fetchDataFromApi(`/api/products?populate=*&pagination[page]=${products.meta.pagination.page + 1}&pagination[pageSize]=100`);
		paths2?.data?.map((p) => {
			paths.push({
				params: {
					slug: p.attributes.slug,
				},
			});
		});
	}
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const product = await fetchDataFromApi(
		`/api/products?populate=*&filters[slug][$eq]=${slug}`
	);
	const products = await fetchDataFromApi(
		`/api/products?populate=*&[filters][slug][$ne]=${slug}`
	);
	return {
		props: {
			product,
			products,
		},
	};
}
