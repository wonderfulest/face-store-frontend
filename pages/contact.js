import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { makePostRequest } from "@/utils/api";

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const handleContact = async () => {
		try {
			setLoading(true);
			const res = await makePostRequest("/api/contacts", {
				products: cartItems,
			});
			console.log("contact res:", res);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	return (
		<Wrapper className="flex justify-center items-center ">
			<div className="container w-4/5 mx-auto min-h-[600px] my-12">
				<h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight mx-auto text-center py-8">
					Contact us
				</h1>
				<div className="mb-8 p-6 border border-gray-200 rounded-md bg-gray-50">
					<h2 className="text-[20px] font-semibold mb-4">Company Information</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<h3 className="text-[16px] font-medium mb-2">WuKong OÜ</h3>
							<p className="text-[14px] mb-1">Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551, Estonia</p>
							<p className="text-[14px]">Email: <a href="mailto:wonder.gface@gmail.com" className="text-blue-600 hover:underline">wonder.gface@gmail.com</a></p>
						</div>
						{/* <div>
							<h3 className="text-[16px] font-medium mb-2">Contact Agency: E-Residency Hub OÜ</h3>
							<p className="text-[14px] mb-1">Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 10151, Estonia</p>
							<p className="text-[14px]">Email: <a href="mailto:info@erhub.ee" className="text-blue-600 hover:underline">info@erhub.ee</a></p>
						</div> */}
					</div>
				</div>
				<p className="text-[14px] md:text-[18px] mb-5 leading-tight py-4">
					Do you have any questions or comments? Enter your details
					and we'll be happy to get back to you.
				</p>
				{/* <form action="/submit_form" method="post" className="flex flex-wrap justify-between"> */}

				<div className="flex flex-wrap justify-between py-8">
					<div className="w-full md:w-[48%] mb-5">
						<label for="username" className="block text-[14px] mb-2">
							Username:
						</label>
						<input
							type="text"
							id="username"
							name="username"
							className="w-full py-2 px-3 mb-5 border border-gray-300 rounded-md"
							required
						/>
					</div>

					<div className="w-full md:w-[48%] mb-5">
						<label for="email" className="block text-[14px] mb-2">
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full py-2 px-3 mb-5 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div className="w-full mb-5">
						<label for="suggestion" className="block text-[14px] mb-2">
							Suggestion:
						</label>
						<textarea
							id="suggestion"
							name="suggestion"
							className="w-full h-48 py-2 px-3 mb-5 border border-gray-300 rounded-md"
							required
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full py-3 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75"
						onClick={handleContact}
					>
						Submit
					</button>
				</div>
				{/* </form> */}
			</div>
		</Wrapper>
	);
};

export default Contact;
