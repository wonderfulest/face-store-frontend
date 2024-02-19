import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
// import "@/styles/Wrapper.module.css";

const Faq = () => {
	const questions = [
		// Pro Plan & Purchase
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
				'Open the link <a href="https://kzl.io/code"><strong><u>https://kzl.io/code</u></strong></a>, enter the six-digit number on the watch face, complete the payment as guided, ' +
				"and the watch face will automatically refresh to a usable state. The refresh time is generally within five minutes (pay attention to the progress bar at the edge of the watch face)." +
				" If the watch face does not appear for a long time, try synchronizing with the Connect APP or switching networks.",
		},
		{
			q: "I do not want to purchase this app/clockface. How do I stop these messages?",
			a:
				"These messages are shown because you are using a paid app or clockface of which the trial has expired." +
				"If you do not want to pay for the app or clockface, remove the app, or install another clockface from the appstore, and the messages will automatically stop.",
		},
		// Theme Settings
		{
			q: "Is it possible to change text size?",
			a:
				"Certainly! You just need to select the desired font size in the settings, and you can choose from normal, or large."
		},
		{
			q: "What is the purpose of the Mirror feature?",
			a:
				"Originally designed for left-handed users, sometimes it also produces very interesting effects."
		},
		// {
		// 	q: "AOD mode?",
		// 	a:
		// 		"Certainly! You just need to select the desired font size in the settings, and you can choose from normal, or large."
		// },
		// Time Settings
		
		// Date Settings
		{
			q: "How to change the date format?",
			a:
				"You can choose your preferred display style based on the hints in the Date Format settings; for example, if you want to display 'Mon, Feb 19', you need to fill in the input box according to the hint with '%w, %m %d'; similarly, if you fill in '%y/%m/%d', the date area will display a string in the format '2024/02/19'."
		},
		// {
		// 	q: "How to change the week start day ?",
		// 	a:
		// 		"Select the desired week start day in the settings, and you can choose from Sunday, Monday, or Saturday. 默认为系统设置"
		// },
		// 

		// Field Settings
		{
			q: "How to modify the icon color settings",
			a:
				'I recommend selecting the Default setting, where we will use default colors based on different data fields, and some icons may also have a flashing effect. Of course, if you want to customize the colors of the icons, you can also make your selection.'
		},
		{
			q: "When will the metric data display units?",
			a:
				'The metric data will display units when the "ShowUnit" setting is enabled, and the combined length of the data item and it\'s unit is less than or equal to "MaxFieldLength". ' +
				"<br>" +
				"If these conditions are met, the unit will be shown; otherwise, only the numeric value will be displayed. Make sure to correctly configure the parameters to ensure the desired unit display.",
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
		// Indicator Settings
		// {
		// 	q: "What is the purpose of the Indicator?",
		// 	a:
		// 		"The indicator is a visual reminder of the time you have been inactive. It will fill up as you remain inactive, and will disappear once you start moving."
		// },
		// {
		// 	q: "How to set the Indicator?",
		// 	a:
		// 		"Select the desired Indicator setting in the settings, and you can choose from Auto, Always, or Off."
		// },

		// Movebar Settings
		// {
		// 	q: "What is the purpose of the Movebar?",
		// 	a:
		// 		"The Movebar is a visual reminder of the time you have been inactive. It will fill up as you remain inactive, and will disappear once you start moving."
		// },
		// {
		// 	q: "How to set the Movebar?",
		// 	a:
		// 		"Select the desired Movebar setting in the settings, and you can choose from Auto, Always, or Off."
		// },

		// {
		// 	q: "是否增加秒针?",
		// 	a: ""
		// },

		// {
		// 	q: "change miles to kilometers?",
		// 	a: ""
		// },

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
