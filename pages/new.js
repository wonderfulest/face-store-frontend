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

export default function Home({ productsNew }) {
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
      <Wrapper>
        {/* New Slider start */}
        <div className="text-5xl mt-24 mb-12">New</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            {productsNew?.data?.map((product) => (
              <div key={product?.id} className="px-2">
                <ProductCard data={product} />
                </div>
            ))}
        </div>
        {/* New Slider end */}
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const productsNew = await fetchDataFromApi(
    "/api/products?populate=*&pagination[page]=1&pagination[pageSize]=99&sort=updatedAt:desc"
  );

//   shuffleArray(productsNew.data);
  return {
    props: {
      productsNew,
    },
  };
}
