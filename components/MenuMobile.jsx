import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "New", url: "/new" },
	{ id: 3, name: "Categories", subMenu: true },
	{ id: 4, name: "FAQ", url: "/faq" },
    // { id: 5, name: "Code", url: "https://pay.wristo.io/code" },
    // { id: 6, name: "Contact", url: "/contact" },
];

const MenuMobile = ({
    showCatMenu,
    setShowCatMenu,
    setMobileMenu,
    categories,
}) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className="flex justify-between items-center">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>

                                {showCatMenu && (
                                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                        {categories?.map(
                                            (c) => (
                                                <Link
                                                    key={c.id}
                                                    href={`/category/${c.slug}`}
                                                    onClick={() => {
                                                        setShowCatMenu(false);
                                                        setMobileMenu(false);
                                                    }}
                                                >
                                                    <li className="py-4 px-8 border-t flex justify-between">
                                                        {c.name}
                                                    </li>
                                                </Link>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="py-4 px-5 border-b">
                                <Link
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default MenuMobile;
