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
    <main className="bg-gray-50">
      {/* Search Section with blue gradient background */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12 mb-0 border-b border-gray-200 shadow-sm">
        <Wrapper>
          <div className="flex justify-center items-center">
            <div className="w-full">
              <SearchCard onSearch={onSearch} />
            </div>
          </div>
        </Wrapper>
      </section>
      
      {/* Search Results Section */}
      {filteredProducts?.data?.length > 0 && (
        <section className="py-16 bg-white">
          <Wrapper>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold">Search Results</h2>
              <span className="text-gray-500">{filteredProducts?.data?.length} items found</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
              {filteredProducts?.data?.map((product) => (
                <div className="flex justify-center">
                  <ProductCard key={product?.id} data={product} imgWidth={340} imgHeight={340} />
                </div>
              ))}
            </div>
          </Wrapper>
        </section>
      )}

      {/* New Watches Section with light background */}
      <section className="py-16 bg-white">
        <Wrapper>
          <div className="flex items-center mb-10">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold">New Arrivals</h2>
          </div>
          <div className="px-4 md:px-0">
            <Slider {...settings}>
              {productsNew?.data?.list?.map((product) => (
                <div key={product?.appId} className="px-1 flex justify-center">
                  <ProductCard data={product} imgWidth={340} imgHeight={340} />
                </div>
              ))}
            </Slider>
          </div>
        </Wrapper>
      </section>

      {/* Feature Section with full width and gradient */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20 rounded-3xl shadow-lg overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-100 rounded-full opacity-50 translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/4 right-10 w-8 h-8 bg-yellow-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-1/4 left-10 w-10 h-10 bg-green-200 rounded-full opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-pink-200 rounded-full opacity-70"></div>
          
          {/* Content */}
          <div className="relative text-center z-10">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 transform hover:scale-105 transition-transform">
              ELEVATE YOUR GARMIN EXPERIENCE
            </div>
            
            <h2 className="text-[36px] md:text-[48px] mb-8 font-bold leading-tight bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
              Transform Your Watch Into A Masterpiece
            </h2>
            
            <div className="text-md md:text-xl text-gray-700 max-w-[800px] mx-auto leading-relaxed">
              Discover our curated collection of premium watch faces designed exclusively for Garmin devices. Each design balances stunning aesthetics with practical functionality, giving you:
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mb-4 inline-block">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Unique Style</h3>
                  <p className="text-gray-600">Express your personality with designs you won't find anywhere else</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mb-4 inline-block">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Health Tracking</h3>
                  <p className="text-gray-600">Monitor your vitals with beautiful, easy-to-read displays</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full p-3 mb-4 inline-block">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Battery Efficient</h3>
                  <p className="text-gray-600">Optimized designs that won't drain your watch battery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Series Section with white background */}
      <section className="py-16 bg-white">
        <Wrapper>
          <div className="flex items-center mb-10">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Browse by Series</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
            {series?.data?.map((product) => (
              <div className="flex justify-center">
                <SeriesCard key={product?.id} data={product} />
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Hot Products Section with white background */}
      <section className="py-16 bg-white border-t border-gray-100">
        <Wrapper>
          <div className="flex items-center mb-10">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
              <span className="text-red-500 text-xl">🔥</span>
            </div>
            <h2 className="text-3xl font-bold">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
            {populates?.data?.list?.map((product) => (
              <div className="flex justify-center">
                <ProductCard key={product?.appId} data={product} imgWidth={340} imgHeight={340} />
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const productsNew = await fetchDataFromApi(
    "/api/products/page?pageNum=1&pageSize=21&orderBy=updated_at:desc"
  );
  const series = {
    data: [
      // {
      // 	id: 9,
      // 	attributes: {
      // 		name: "Christmas",
      // 		slug: "christmas",
      // 		url: "https://garmin-face.s3.ap-southeast-2.amazonaws.com/591d20b3_6c75_43b0_9204_6f9549eaf384_5b5a21e52a.png",
      //     adapted: 1,
      // 	}
      // },
      // {
      //   id: 4,
      //   attributes: {
      //     name: "Halloween",
      //     slug: "halloween",
      //     // Playful Spirit
      //     url: "https://res.cloudinary.com/dpgpmyswj/image/upload/v1730082008/011dcca4_6adc_4e99_b56e_fa3a5b59fb0e_08d1c0d244.png",
      //     adapted: 1,
      //   },
      // },
      {
        id: 1,
        attributes: {
          name: "Whole",
          slug: "whole",
          url:
            // Daisy Circle
            "https://files.garminface.com/864f5645_87cc_4856_8fc7_04faf9d68d51_f5dbb03457.png"
            // Golden Textures
            // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1708740595/app_images_2_F601_D41_EE_A469_436_F_363_F_27212_AD_0213_C_2_F1708349200978_16588b0a11.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702476774/app_images_2_FC_8_A9_EEEB_4_EFA_D302_3_F9_A_9_E85238_CB_5_D3_2_F1702039498660_2655b3db59.png",
        },
      },
      {
        id: 8,
        attributes: {
          name: "Venu",
          slug: "venu",
          url:
          // Pink Whisper
          "https://files.garminface.com/431cefe7_555e_49f2_ac60_aa41fe23bcb0_729e7a1b85.png"
            // Dark Sparkles
            // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1706322003/app_images_2_F3723489_E_0201_702_B_1_CAA_976_CA_93_A47_E9_2_F1706274670543_c6bd65f631.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702629312/app_images_2_FAED_2586_C_3762_CFEC_B9_CE_B9_F868_A8_A2_A4_2_F1698244461294_81d0747f6b.png",
        },
      },
      {
        id: 2,
        attributes: {
          name: "Animal",
          slug: "animal",
          url:
           // Monochrome Cat
           "https://files.garminface.com/wonder/fdbabe9e_8dd5_4f23_bab5_ef28be952380_aefd324974.png",
           // Majestic Elephants
           // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1704332909/app_images_2_F975488_C2_0_F21_7_FD_0_4_FB_5_263_C20535428_2_F1703249474628_9b4e32317c.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702629573/app_images_2_F6_A11_E6_B9_2_E45_3_E27_E167_EE_1_F1_E31592_B_2_F1700486288602_1e00257076.png",
        },
      },
      {
        id: 3,
        attributes: {
          name: "Flower",
          slug: "flower",
          url: 
          // Water Droplets
          "https://files.garminface.com/wonder/7b1e601a_04e0_4a11_a6b7_3a35420eaff2_f4eb07825d.png"
          // Pink Sakuri
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1704333410/app_images_2_F42_DE_00_F8_E314_95_FD_ECE_6_C1_E95_A6_C8337_2_F1703249865073_9acdd5422c.png",
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
          url:
          //Arctic Fox
          "https://files.garminface.com/a019f7d9_889f_4b4c_bbcf_4f491d3fba89_899762bd69.png"
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1708854094/cover_image_23f5100a78.gif",
        },
      },
      {
        id: 10,
        attributes: {
          name: "Landscape",
          slug: "landscape",
          url: 
          // Peak Embrace
          "https://files.garminface.com/823704cd_043c_4338_b782_fc765b6816a4_450c20850f.png"
             // Dwarf Pine
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1708740369/app_images_2_FA_3869262_D98_E_D5_B4_2178_DFEE_20_BD_4440_2_F1707916860499_ef0ce7331b.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1702654379/app_images_2_FA_6179656_2_F28_53_FF_5427_422601_E9_C750_2_F1701869510452_1f1af7886d.png",
        },
      },
      {
        id: 13,
        attributes: {
          name: "Fantasy",
          slug: "fantasy",
          url: 
          // Pulse Shine
          "https://files.garminface.com/60b8b211_1bd5_483a_a0ca_83600168ded9_5a235d73bc.png"
          // Stellar Dawn
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1704334194/app_images_2_F975488_C2_0_F21_7_FD_0_4_FB_5_263_C20535428_2_F1703249142135_cef5f25bbe.png",
          // "https://res.cloudinary.com/dpgpmyswj/image/upload/v1704334194/app_images_2_F975488_C2_0_F21_7_FD_0_4_FB_5_263_C20535428_2_F1703249142135_cef5f25bbe.png",
        },
      },
      {
        id: 14,
        attributes: {
          name: "Galaxy",
          slug: "galaxy",
          url: 
          // Icey Terrain
          "https://files.garminface.com/793d93ae_8201_40a0_a235_ac6b1c26262d_1dcc1dc45e.png"
       
          // Blue Cosmos
           // "https://files.garminface.com/0017eccf_3c1c_4e19_a634_0a724723e914_f600039ecb.png"
        },
      }
    ],
  };
  const populates = await fetchDataFromApi(
    "/api/products/page?pageNum=1&pageSize=33&orderBy=download:desc"
  );
  console.log("populates", populates);
  shuffleArray(populates.data.list);
  return {
    props: {
      productsNew,
      series,
      populates,
    },
  };
}
