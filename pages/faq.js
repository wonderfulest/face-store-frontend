import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Faq = () => {
	// Organize questions by category
	const questionsByCategory = {
		"Installation & Purchase": [
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
					"These messages are shown because you are using a paid app or clockface of which the trial has expired. " +
					"If you do not want to pay for the app or clockface, remove the app, or install another clockface from the appstore, and the messages will automatically stop.",
			},
		],
		"Theme & Display Settings": [
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
			{
				q: "How to change the date format?",
				a:
					"You can choose your preferred display style based on the hints in the Date Format settings; for example, if you want to display 'Mon, Feb 19', you need to fill in the input box according to the hint with '%w, %m %d'; similarly, if you fill in '%y/%m/%d', the date area will display a string in the format '2024/02/19'."
			},
		],
		"Data & Units": [
			{
				q: "How to modify the icon color settings?",
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
		],
	};

	// State for active category and active question
	const [activeCategory, setActiveCategory] = useState(Object.keys(questionsByCategory)[0]);
	// Flatten questions for ID generation
	const allQuestions = Object.values(questionsByCategory).flat();
	
	// Function to generate unique IDs for each question
	const getQuestionId = (question) => {
		const index = allQuestions.findIndex(q => q.q === question.q);
		return `question-${index + 1}`;
	};

	return (
		<Wrapper>
			<div className="container mx-auto my-12 px-4 max-w-full w-11/12">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Find answers to common questions about our watch faces, installation process, and customization options.
					</p>
				</div>

				{/* Main content */}
				<div className="flex flex-col md:flex-row gap-8">
					{/* Categories sidebar */}
					<div className="md:w-1/5">
						<div className="sticky top-24 bg-white rounded-lg shadow-md p-4">
							<h2 className="text-xl font-semibold mb-4 pb-2 border-b">Categories</h2>
							<nav>
								<ul className="space-y-2">
									{Object.keys(questionsByCategory).map((category) => (
										<li key={category}>
											<button
												className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeCategory === category ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
												onClick={() => setActiveCategory(category)}
											>
												{category}
											</button>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>

					{/* Questions and answers */}
					<div className="md:w-4/5">
						<div className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-2xl font-bold mb-6 pb-2 border-b text-blue-800">{activeCategory}</h2>
							
							{/* Questions list */}
							<div className="space-y-6">
								{questionsByCategory[activeCategory].map((question, index) => (
									<div 
										key={index} 
										id={getQuestionId(question)}
										className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors"
									>
										<h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-start">
											<span className="mr-2 text-blue-500">Q:</span>
											<span dangerouslySetInnerHTML={{ __html: question.q }} />
										</h3>
										<div className="mt-2 text-gray-700 pl-6 border-l-2 border-gray-200">
											<p className="text-lg">
												<span className="text-blue-500 font-medium">A:</span>{" "}
												<span dangerouslySetInnerHTML={{ __html: question.a }} />
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Quick navigation for all questions */}
						<div className="mt-8 bg-white rounded-lg shadow-md p-6">
							<h3 className="text-xl font-semibold mb-4">All Questions</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{Object.entries(questionsByCategory).map(([category, questions]) => (
									<div key={category} className="border rounded-lg p-4 bg-gray-50">
										<h4 className="font-medium text-lg text-blue-700 mb-3 pb-2 border-b">{category}</h4>
										<div className="space-y-2">
											{questions.map((question, qIndex) => (
												<Link 
													key={qIndex}
													href={`#${getQuestionId(question)}`}
													className="block text-blue-600 hover:text-blue-800 hover:underline text-sm py-1.5 px-2 rounded hover:bg-blue-50 transition-colors"
													onClick={() => setActiveCategory(category)}
												>
													• <span dangerouslySetInnerHTML={{ __html: question.q }} />
												</Link>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Faq;
