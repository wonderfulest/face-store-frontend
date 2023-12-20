import React from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import SeriesCard from "@/components/SeriesCard";
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
					slidesToShow: 3,
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
			<div className="mt-24">
				<HeroBanner />
			</div>

			<Wrapper>
				{/* heading and paragaph start */}
				<div className="text-center max-w-[800px] mx-auto my-[50px] mb-[25px] md:my-[80px]">
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
				<div className="text-5xl mt-24 mb-12">New</div>
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
				<div className="text-5xl mt-24 mb-12">Series</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
					{series?.data?.map((product) => (
						<SeriesCard key={product?.id} data={product} />
					))}
				</div>
				{/* Series grid end */}

				{/* products grid start */}
				<div className="text-5xl mt-24 mb-12">🔥Hot🔥</div>
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
		"/api/products?populate=*&pagination[page]=1&pagination[pageSize]=21&sort=updatedAt:desc"
	);
	const series = {
		data: [
			{
				id: 1,
				attributes: {
					name: "Whole",
					slug: "whole",
					url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702476774/app_images_2_FC_8_A9_EEEB_4_EFA_D302_3_F9_A_9_E85238_CB_5_D3_2_F1702039498660_2655b3db59.png",
				},
			},
			{
				id: 2,
				attributes: {
					name: "Animal",
					slug: "animal",
					url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702629573/app_images_2_F6_A11_E6_B9_2_E45_3_E27_E167_EE_1_F1_E31592_B_2_F1700486288602_1e00257076.png",
				},
			},
			{
				id: 3,
				attributes: {
					name: "Flower",
					slug: "flower",
					url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702652213/app_images_2_F73_E3_CAED_1802_1_C33_F012_D662_D521_A451_2_F1699190724039_8359ea8ca2.png",
				},
			},
			// {
			// 	id: 4,
			// 	attributes: {
			// 		name: "Analog",
			// 		slug: "analog",
			// 		url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702643500/app_images_2_F451_C34_CB_0355_FA_95_0_A5_E_7_E70_ED_39_F322_2_F1697785985942_6679dbbaa8.png",
			// 	},
			// },
			{
				id: 5,
				attributes: {
					name: "Skull",
					slug: "skull",
					url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702689512/app_images_2_F587005_F0_7_AF_7_523_B_EB_16_3512188_B8118_2_F1697781243526_5692ed7ccf.png"
				},
			},
			{
				id: 6,
				attributes: {
					name: "Mandala",
					slug: "mandala",
					url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702629745/app_images_2_FE_8_FAF_511_DDBB_15_F8_20_FD_5_C7317_F82045_2_F1699240931600_990f19f83c.png"				},
			},
			{
				id: 7,
				attributes: {
					name: "Digital",
					slug: "digital",
					url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702613163/app_images_2_F5_B63_D7_B6_0_DC_2_7966_418_B_6_EA_497630071_2_F1699891467338_72aa534c4d.png",
				},
			},
			{
				id: 8,
				attributes: {
					name: "Venu",
					slug: "venu",
					url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702629312/app_images_2_FAED_2586_C_3762_CFEC_B9_CE_B9_F868_A8_A2_A4_2_F1698244461294_81d0747f6b.png",
				},
			},
			{
				id: 9,
				attributes: {
					name: "Christmas",
					slug: "christmas",
					url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702653226/app_images_2_FA_2863698_D275_139_E_869_A_513_BAF_44_B8_E4_2_F1702474905871_12057cabce.png"
				}
			}
		],
	};
	const populates = await fetchDataFromApi(
		"/api/products?populate=*&pagination[page]=1&pagination[pageSize]=60&sort[0]=purchases:desc&sort[1]=bundle_triggers:desc"
	);

	return {
		props: { productsNew, series, populates },
	};
}
