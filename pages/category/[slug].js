import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import { shuffleArray } from "@/utils/helper";
import useSWR from "swr";
import { useRouter } from "next/router";
const maxResult = 99;

const Category = ({ category, products, slug }) => {
    console.log("category", category);
    console.log("products", products);
    console.log("slug", slug);
    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();

    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    const { data, error, isLoading } = useSWR(
        `/api/products/page?pageNum=${pageIndex}&pageSize=${maxResult}&orderBy=download:desc&category=${slug}`,
        fetchDataFromApi,
        {
            fallbackData: products,
        }
    );

    return (
        <div className="w-full md:py-20 relative">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {category?.name}
                    </div>
                </div>

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-14 px-5 md:px-0">
                    {data?.data?.list?.map((product) => (
                        <ProductCard key={product?.appId} data={product} />
                    ))}
                </div>
                {/* products grid end */}

                {/* PAGINATION BUTTONS START */}
                {data?.data?.total > maxResult && (
                    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={pageIndex === 1}
                            onClick={() => setPageIndex(pageIndex - 1)}
                        >
                            Previous
                        </button>

                        <span className="font-bold">{`${pageIndex} of ${
                            data && data.data.pages
                        }`}</span>

                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={
                                pageIndex ===
                                (data && data.data.pages)
                            }
                            onClick={() => setPageIndex(pageIndex + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
                {/* PAGINATION BUTTONS END */}
                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <img src="/logo.svg" width={150} />
                        <span className="text-2xl font-medium">Loading...</span>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Category;

export async function getStaticPaths() {
    const category = await fetchDataFromApi("/api/categories/all");
    const paths = category?.data?.map((c) => ({
        params: {
            slug: c.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
    const categories = await fetchDataFromApi("/api/categories/all");
    const category = categories?.data?.find((c) => c.slug === slug);
    const products = await fetchDataFromApi(
        `/api/products/page?pageNum=1&pageSize=${maxResult}&orderBy=download:desc&category=${slug}`
    );

    return {
        props: {
            category,
            products,
            slug,
        },
    };
}
