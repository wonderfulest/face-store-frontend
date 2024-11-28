import React, { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import SearchCard from "@/components/SearchCard";
import ProductCard from "@/components/ProductCard";
import SeriesCard from "@/components/SeriesCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { shuffleArray } from "@/utils/helper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home({ populates, series, productsNew }) {
  const [filteredProducts, setFilteredProducts] = useState({});

  const onSearch = async (searchTerm) => {
    if (searchTerm && searchTerm.length > 0) {
      searchTerm = searchTerm.toLowerCase();
      const results = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$contains]=${searchTerm}&sort[0]=download:desc&pagination[page]=1&pagination[pageSize]=60`
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts({});
    }
  };

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
      {/* <div className="mt-24">
				<HeroBanner />
			</div> */}

      <Wrapper>
        {/* <div className="mt-24"> */}
          {/* <SearchCard onSearch={onSearch} /> */}
          <div className="px-5 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
              {filteredProducts?.data?.map((product) => (
                <ProductCard key={product?.id} data={product} />
              ))}
            </div>
          {/* </div> */}
        </div>

        {/* New Slider start */}
        <div className="text-5xl mt-24 mb-12">New</div>
        <div className="px-5 md:px-0">
          <Slider {...settings}>
            {productsNew?.data?.map((product) => (
              <div key={product?.id} className="px-2">
                <ProductCard data={product} imgWidth={300} imgHeight={300} />
              </div>
            ))}
          </Slider>
        </div>
        {/* New Slider end */}

        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] mb-[25px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Unique, Stylish Wristwear！
          </div>
          <div className="text-md md:text-xl">
            Discover uniquely designed watch faces that embody both personality
            and health-conscious style, crafted exclusively for Garmin. Elevate
            your wristwear, showcasing individuality while prioritizing
            well-being.
          </div>
        </div>
        {/* heading and paragaph end */}
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
        id: 4,
        attributes: {
          name: "Halloween",
          slug: "halloween",
          // Playful Spirit
          url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1730082008/011dcca4_6adc_4e99_b56e_fa3a5b59fb0e_08d1c0d244.png",
          adapted: 1,
        },
      },
      {
        id: 1,
        attributes: {
          name: "Whole",
          slug: "whole",
          url:
            // Golden Textures
            "https://res.cloudinary.com/dpgpmyswj/image/upload/v1708740595/app_images_2_F601_D41_EE_A469_436_F_363_F_27212_AD_0213_C_2_F1708349200978_16588b0a11.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702476774/app_images_2_FC_8_A9_EEEB_4_EFA_D302_3_F9_A_9_E85238_CB_5_D3_2_F1702039498660_2655b3db59.png",
        },
      },
      {
        id: 8,
        attributes: {
          name: "Venu",
          slug: "venu",
          url:
            // Dark Sparkles
            "https://res.cloudinary.com/dpgpmyswj/image/upload/v1706322003/app_images_2_F3723489_E_0201_702_B_1_CAA_976_CA_93_A47_E9_2_F1706274670543_c6bd65f631.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702629312/app_images_2_FAED_2586_C_3762_CFEC_B9_CE_B9_F868_A8_A2_A4_2_F1698244461294_81d0747f6b.png",
        },
      },
      {
        id: 2,
        attributes: {
          name: "Animal",
          slug: "animal",
          // Majestic Elephants
          url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1704332909/app_images_2_F975488_C2_0_F21_7_FD_0_4_FB_5_263_C20535428_2_F1703249474628_9b4e32317c.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702629573/app_images_2_F6_A11_E6_B9_2_E45_3_E27_E167_EE_1_F1_E31592_B_2_F1700486288602_1e00257076.png",
        },
      },
      {
        id: 3,
        attributes: {
          name: "Flower",
          slug: "flower",
          // Pink Sakuri
          url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1704333410/app_images_2_F42_DE_00_F8_E314_95_FD_ECE_6_C1_E95_A6_C8337_2_F1703249865073_9acdd5422c.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702652213/app_images_2_F73_E3_CAED_1802_1_C33_F012_D662_D521_A451_2_F1699190724039_8359ea8ca2.png",
        },
      },
      
      // {
      // 	id: 5,
      // 	attributes: {
      // 		name: "Skull",
      // 		slug: "skull",
      // 		url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702689512/app_images_2_F587005_F0_7_AF_7_523_B_EB_16_3512188_B8118_2_F1697781243526_5692ed7ccf.png",
      // 	},
      // },
      // {
      // 	id: 6,
      // 	attributes: {
      // 		name: "Mandala",
      // 		slug: "mandala",
      // 		url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702629745/app_images_2_FE_8_FAF_511_DDBB_15_F8_20_FD_5_C7317_F82045_2_F1699240931600_990f19f83c.png"				},
      // },
      {
        id: 7,
        attributes: {
          name: "Digital",
          slug: "digital",
          url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1708854094/cover_image_23f5100a78.gif",
        },
      },
      // {
      // 	id: 9,
      // 	attributes: {
      // 		name: "Christmas",
      // 		slug: "christmas",
      // 		url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702653226/app_images_2_FA_2863698_D275_139_E_869_A_513_BAF_44_B8_E4_2_F1702474905871_12057cabce.png"
      // 	}
      // },
      {
        id: 10,
        attributes: {
          name: "Landscape",
          slug: "landscape",
          // Dwarf Pine
          url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1708740369/app_images_2_FA_3869262_D98_E_D5_B4_2178_DFEE_20_BD_4440_2_F1707916860499_ef0ce7331b.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702654379/app_images_2_FA_6179656_2_F28_53_FF_5427_422601_E9_C750_2_F1701869510452_1f1af7886d.png",
        },
      },
      {
        id: 13,
        attributes: {
          name: "Fantasy",
          slug: "fantasy",
          // Stellar Dawn
          url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1704334194/app_images_2_F975488_C2_0_F21_7_FD_0_4_FB_5_263_C20535428_2_F1703249142135_cef5f25bbe.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1704334194/app_images_2_F975488_C2_0_F21_7_FD_0_4_FB_5_263_C20535428_2_F1703249142135_cef5f25bbe.png",
        },
      },
    ],
  };
  const last100days = new Date(
    Date.now() - 120 * 24 * 60 * 60 * 1000
  ).toISOString();
  const last10days = new Date(
    Date.now() - 0 * 24 * 60 * 60 * 1000
  ).toISOString();
  const populates = await fetchDataFromApi(
    // filters[adapted][$eq]=1&
    `/api/products?populate=*&pagination[page]=1&pagination[pageSize]=60&sort[0]=download:desc&sort[1]=bundle_triggers:desc&filters[createdAt][$gt]=${last100days}&filters[createdAt][$lt]=${last10days}`
  );
  shuffleArray(populates.data);
  return {
    props: {
      productsNew,
      series,
      populates,
    },
  };
}
