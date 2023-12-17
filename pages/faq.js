import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
// import "@/styles/Wrapper.module.css";

const Faq = () => {
	const questions = [
		{
			q: "How do I install and try out the watch face I like?",
			a:
				'Select your favorite watch face on the garminface.com website, enter its details page, click the <strong>"Download"</strong> button. ' +
				"You will be redirected to the Connect IQ Store app page. After clicking download, " +
				"the watch face will be synchronized to your device through Garmin Express or the CONNECT APP, completing the installation.",
		},
		{
			q: "How do I input the Code to unlock the trial?",
			a:
				"Open the link <a href=\"https://kzl.io/code\"><strong><u>https://kzl.io/code</u></strong></a>, enter the six-digit number on the watch face, complete the payment as guided, " +
				"and the watch face will automatically refresh to a usable state. The refresh time is generally within five minutes (pay attention to the progress bar at the edge of the watch face)." +
				" If the watch face does not appear for a long time, try synchronizing with the Connect APP or switching networks.",
		},
		{
			q: "I do not want to purchase this app/clockface. How do I stop these messages?",
			a:
				"These messages are shown because you are using a paid app or clockface of which the trial has expired." +
				"If you do not want to pay for the app or clockface, remove the app, or install another clockface from the appstore, and the messages will automatically stop.",
		},
		{
			q: "How to set temperature Celsius or Fahrenheit?",
			a: "You can select on your device or in the Connect app, the location is at: Settings -> Format -> Units -> Temperature.",
		},
		{
			q: "How to change the temperature unit?",
			a: "When the switch is turned off, no unit is displayed; when turned on, Celsius is represented by 'C,' and Fahrenheit is represented by 'F.'",
		},
		{
			q: "What different between temperature type?",
			a:
				"Weather Forecast(outdoor): Currently, only Garmin's built-in weather API is supported. If displayed as '--,' it indicates that the current device is not supported. \n" +
				"Sensor temperature(indoor): Display the measured values of the Garmin device's temperature sensor. If displayed as '--,' it indicates that the current device is not supported.",
		},

		// Add more questions as needed
	];

	return (
		<Wrapper>
			<div className="container my-12">
				<h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight mx-auto text-center">
					FAQ
				</h1>
				<p className="text-xl md:text-xl mb-5 leading-tight">
					Here are some frequently asked questions:
				</p>
				<ol className="mx-auto text-center text-xl">
					{questions.map((question, index) => (
						<li key={index}>
							<Link
								href={`#question${index + 1}`}
								className="underline"
							>
								<span
									dangerouslySetInnerHTML={{
										__html: question.q,
									}}
								/>
							</Link>
						</li>
					))}
				</ol>
				<br />
				<br />
				<br />

				{questions.map((question, index) => (
					<section id="question1">
						<h2 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
							Q: {question.q}
						</h2>
						<p className="my-8 text-xl ">
							A:{" "}
							<span
								dangerouslySetInnerHTML={{ __html: question.a }}
							/>{" "}
						</p>
					</section>
				))}

				{/* Add more sections for additional questions and answers */}
			</div>
		</Wrapper>
	);
};

export default Faq;
