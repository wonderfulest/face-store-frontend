import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { makePaymentRequest } from "@/utils/api";

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const handleContact = async () => {
		try {
			setLoading(true);
			const res = await makePaymentRequest("/api/contacts", {
				products: cartItems,
			});
			console.log("contact res:", res);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	return (
		<Wrapper class="flex justify-center items-center ">
			<div class="w-4/5 mx-auto min-h-[600px]">
				<h1 class="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight mx-auto text-center">
					Contact us
				</h1>
				<p class="text-[14px] md:text-[18px] mb-5 leading-tight">
					Do you have any questions or comments? Enter your details
					and we’ll be happy to get back to you.
				</p>
				{/* <form action="/submit_form" method="post" class="flex flex-wrap justify-between"> */}

				<div class="flex flex-wrap justify-between">
					<div class="w-full md:w-[48%] mb-5">
						<label for="username" class="block text-[14px] mb-2">
							Username:
						</label>
						<input
							type="text"
							id="username"
							name="username"
							class="w-full py-2 px-3 mb-5 border border-gray-300 rounded-md"
							required
						/>
					</div>

					<div class="w-full md:w-[48%] mb-5">
						<label for="email" class="block text-[14px] mb-2">
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							class="w-full py-2 px-3 mb-5 border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div class="w-full mb-5">
						<label for="suggestion" class="block text-[14px] mb-2">
							Suggestion:
						</label>
						<textarea
							id="suggestion"
							name="suggestion"
							class="w-full h-48 py-2 px-3 mb-5 border border-gray-300 rounded-md"
							required
						></textarea>
					</div>
					<button
						type="submit"
						class="w-full py-3 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75"
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
