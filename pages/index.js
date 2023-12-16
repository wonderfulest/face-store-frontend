import React from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home({ populates, series, productsNew }) {

	const settings = {
		dots: false,
		infinite: true,
		speed: 1500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 1000,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<main>
			<br />
			<br />
			<HeroBanner />
			<Wrapper>
				{/* heading and paragaph start */}
				<div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
					<div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
						Unique, Stylish Wristwear！
					</div>
					<div className="text-md md:text-xl">
						Discover uniquely designed watch faces that embody both
						personality and health-conscious style, crafted
						exclusively for Garmin. Elevate your wristwear,
						showcasing individuality while prioritizing well-being.
					</div>
				</div>
				{/* heading and paragaph end */}

				{/*  New Slider start */}
				<div class="text-5xl mt-24 mb-12">New</div>
				<div className="px-5 md:px-0">
					<Slider {...settings}>
						{productsNew?.data?.map((product) => (
							<div key={product?.id} className="px-2">
								<ProductCard data={product} />
							</div>
						))}
					</Slider>
				</div>
				{/*  New Slider end */}

				{/* Series grid start */}
				<div class="text-5xl mt-24 mb-12">Series</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
					{series?.data?.map((product) => (
						<ProductCard key={product?.id} data={product} />
					))}
				</div>
				{/* Series grid end */}

				{/* products grid start */}
				<div class="text-5xl mt-24 mb-12">🔥Hot🔥</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
					{populates?.data?.map((product) => (
						<ProductCard key={product?.id} data={product} />
					))}
				</div>
				{/* products grid end */}
			</Wrapper>
		</main>
	);
}

export async function getStaticProps() {
	const productsNew = await fetchDataFromApi(
		"/api/products?populate=*&pagination[page]=1&pagination[pageSize]=21"
	);
	const series = await fetchDataFromApi(
		"/api/products?populate=*&pagination[page]=1&pagination[pageSize]=8"
	);
	const populates = await fetchDataFromApi(
		"/api/products?populate=*&pagination[page]=1&pagination[pageSize]=21"
	);

	return {
		props: { productsNew, series, populates },
	};
}
