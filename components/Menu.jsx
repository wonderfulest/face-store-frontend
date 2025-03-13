import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
	{ id: 1, name: "Home", url: "/" },
	{ id: 2, name: "New", url: "/new" },
	{ id: 3, name: "Categories", subMenu: true },
	{ id: 4, name: "FAQ", url: "/faq" },
	// { id: 4, name: "Plus", url: "/plus" },
	// { id: 4, name: "Contact", url: "/contact" },
	// { id: 5, name: "About", url: "/about" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
	const [menuTimeoutId, setMenuTimeoutId] = useState(null);
	const menuRef = useRef(null);
	
	// Handle mouse enter on the menu item
	const handleMouseEnter = () => {
		// Clear any existing timeout to close the menu
		if (menuTimeoutId) {
			clearTimeout(menuTimeoutId);
			setMenuTimeoutId(null);
		}
		setShowCatMenu(true);
	};
	
	// Handle mouse leave with delay
	const handleMouseLeave = () => {
		// Set a timeout before closing the menu
		const timeoutId = setTimeout(() => {
			setShowCatMenu(false);
		}, 300); // 300ms delay before closing
		setMenuTimeoutId(timeoutId);
	};
	
	// Clean up timeout on unmount
	useEffect(() => {
		return () => {
			if (menuTimeoutId) {
				clearTimeout(menuTimeoutId);
			}
		};
	}, [menuTimeoutId]);

	return (
		<ul className="hidden md:flex items-center gap-8 font-semibold text-black text-[18px]">
			{data.map((item) => {
				return (
					<React.Fragment key={item.id}>
						{!!item?.subMenu ? (
							<li
								ref={menuRef}
								className="cursor-pointer flex items-center gap-2 relative hover:text-blue-600 transition-colors"
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								{item.name}
								<BsChevronDown size={16} />

								{showCatMenu && (
									<ul 
										className="bg-white absolute top-8 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg rounded-md z-50"
										onMouseEnter={handleMouseEnter}
										onMouseLeave={handleMouseLeave}
									>
										{categories?.map(
											({ attributes: c, id }) => {
												return (
													<Link
														key={id}
														href={`/category/${c.slug}`}
														onClick={() => setShowCatMenu(false)}
													>
														<li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] hover:text-blue-600 rounded-md text-[16px]">
															{c.name}
															{/* <span className="opacity-50 text-sm">
																{`(${c.products.data.length})`}
															</span> */}
														</li>
													</Link>
												);
											}
										)}
									</ul>
								)}
							</li>
						) : (
							<li className="cursor-pointer hover:text-blue-600 transition-colors">
								<Link href={item?.url}>{item.name}</Link>
							</li>
						)}
					</React.Fragment>
				);
			})}
		</ul>
	);
};

export default Menu;
