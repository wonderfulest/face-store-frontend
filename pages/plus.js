import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";

const Plus = () => {
	const [isYearly, setIsYearly] = useState(false);
	const navigateTo = (url) => {
		window.location.href = url;
	};
	const questions = [
		// Pro Plan & Purchase
		{
			q: "How do I install and try out the watch face I like?",
			a:
				'Select your favorite watch face on the garminface.com website, enter its details page, click the <strong>"Download"</strong> button. ' +
				"You will be redirected to the Connect IQ Store app page. After clicking download, " +
				"the watch face will be synchronized to your device through Garmin Express or the CONNECT APP, completing the installation.",
		},
	];
	return (
		<Wrapper>
			<div className="container my-12">
				<div className="text-center">
					{/* 开通会员 */}
					<h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight mx-auto">
						Garmin Face Plus
					</h1>
					<div className="flex flex-col md:flex-row justify-center items-center gap-8">
						{/* Plus Plan */}
						<div className="border p-4 max-w-sm w-full">
							<h2 className="text-xl font-bold mb-4">
								{isYearly ? "Year" : "Month"} Plus
							</h2>
							<p className="font-semibold text-gray-700 mb-4">
								{isYearly
									? "USD $19.99/year"
									: "USD $3.99/month"}
							</p>
							<button
								className="bg-blue-500 text-white p-2 rounded w-4/5 hover:bg-blue-600 mb-4"
								onClick={() =>
									navigateTo("https://pay-to-use.com/?app=60")
								}
							>
								Subscribe For{" "}
								<span
									class={`font-bold ${
										isYearly ? "" : "text-white-500"
									}`}
								>
									{isYearly ? " Year " : " Month "}
								</span>
							</button>
							{/* */}
							<div className="flex justify-center mb-4">
								<div
									className={`text-white rounded-lg w-3/5 mb-3 ${
										isYearly ? "bg-red-500" : "bg-gray-400"
									}`}
								>
									<input
										type="checkbox"
										id="horns"
										name="horns"
										onChange={(e) =>
											setIsYearly(e.target.checked)
										}
									/>
									<label for="horns">
										{" "}
										Year Pass - Save!
									</label>
								</div>
							</div>
							<ul className="mt-4">
								<li>
									<span class="font-bold">
										All watch faces(400+)
									</span>{" "}
									on the website are available for one{" "}
									{isYearly ? "year" : "month"}.
								</li>
							</ul>
						</div>
					</div>
                   
					{/* Plus Helper */}
                    <div className="mt-10 text-left">
                        <h2 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
                            What are Plus privileges 
                        </h2>
                        <p className="my-8 text-xl ">
                            1. Plus privileges allow you to use all the watch faces on this website.<br/>
                            2. It is divided into two types: Yearly Plus and Monthly Plus.
                        </p>
                    </div>

                    <div className="mt-10 text-left">
                        <h2 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
                            How can I activate Plus?
                        </h2>
                        <div className="my-8 text-xl ">
                            <span>1. Click the Subscribe button above to navigate to <a href="https://pay-to-use.com/?app=60"><strong><u>https://pay-to-use.com/</u></strong></a>,
                            and follow the instructions to make a payment.</span><br/>
                            <span>2. Then, you will receive the following email, which contains your Plus Code. </span>
                           
                            <div className="flex justify-center w-full mt-8">
                                <img src="/unlock-code-email.png" alt="plus1" className="w-2/5 "/>
                            </div>
                            <span>3. In the watch face settings page of Connect IQ, enter the unlock code, and the watch face will be activated within 5 minutes.</span>
                            <div className="flex justify-center w-full mt-8">
                                <img src="/settings-unlock.png" alt="plus1" className="w-2/5 "/>
                            </div>
                        </div>
                       
                    </div>

					
				</div>
			</div>
		</Wrapper>
	);
};

export default Plus;
