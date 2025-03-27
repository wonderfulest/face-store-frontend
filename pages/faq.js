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
		"Time & Date Settings": [
		
			{
				q: "How do I switch between 12-hour and 24-hour formats on my watch?",
				a:
					"You can change the time format on your watch by navigating to: Clocks => Time => Time Format. " +
					"Select 12-hour format to use AM/PM notation. " +
					"Select 24-hour format to display time in the 00:00 ~ 23:59 format."
			},
			{
				q: "How can I hide the leading zero in the 12-hour format?",
				a:
					"On your Connect App, you can choose whether to display a leading zero for the hour: " +
					"<br>Leading Zero Enabled: 08:30 AM " +
					"<br>Leading Zero Disabled: 8:30 AM " +
					"<br>You can find this option in the watch face settings within the Connect App."
			},
			{
				q: "How do I enable AM/PM in the 12-hour format?",
				a:
					"When using the 12-hour format, the watch typically displays AM (morning) / PM (afternoon) to distinguish between different times of the day, for example: " +
					"<br>8:30 AM " +
					"<br>2:45 PM " +
					"<br>If AM/PM is not displayed on your watch face, check the watch face settings and enable the AM/PM option if available."
			},
			{
				q: "How is the 24-hour format displayed?",
				a:
					"When the 24-hour format is enabled, the time will be displayed in the 00:00 - 23:59 format without AM/PM notation. For example: " +
					"<br>08:30 (morning) " +
					"<br>14:45 (afternoon)"
			},
			{
				q: "Can I display AM/PM above the seconds?",
				a:
					"This depends on the specific watch face design. Some watch faces allow custom positioning of AM/PM, so you may be able to place it above the seconds. You can try the following: " +
					"<br>1. Check the watch face settings for an AM/PM display option and adjust its position. " +
					"<br>2. Use a custom watch face or third-party app to modify the AM/PM display."
			},
			{
				q: "What does the \"24H\" label mean?",
				a:
					"Some watches or apps may display a \"24H\" indicator to show that the watch is currently using the 24-hour format instead of the 12-hour AM/PM format."
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
		"IQ Error Troubleshooting": [
			{
				q: "What should I do if I encounter an IQ error?",
				a:
					"If you experience an IQ error on your Garmin device, please follow these steps:<br>" +
					"1. Connect your Garmin device to a computer.<br>" +
					"2. Navigate to the directory <code>/Garmin/Apps/Logs/</code>.<br>" +
					"3. Locate the log file <code>CIQ_LOG.bak</code>.<br>" +
					"4. Send the log file to <strong>wonder.gface@gmail.com</strong>, along with a brief description of the issue."
			},
			{
				q: "How long will it take to get a response after sending the log file?",
				a:
					"We typically review log files and provide solutions or further guidance within <strong>1-3 business days</strong>."
			},
			{
				q: "What if I can't find the `CIQ_LOG.bak` file?",
				a:
					"Please ensure your Garmin device is properly connected to your computer and that the directory exists. If the file is still missing, try restarting your device and check the directory again after running the app."
			},
			{
				q: "Are there alternative ways to retrieve the log file?",
				a:
					"Some devices may store log files differently. If <code>CIQ_LOG.bak</code> is missing, check the <code>/Garmin/Apps/Logs/</code> directory for other files with <code>.bak</code> or <code>.log</code> extensions and send them to us as well."
			},
			{
				q: "What additional information should I provide when sending the log file?",
				a:
					"To help us diagnose the issue faster, please include the following details in your email:<br>" +
					"- Your Garmin device model (e.g., Fenix 7, Forerunner 955, etc.).<br>" +
					"- The name of the watch face or app installed (if applicable).<br>" +
					"- A brief description of the issue (e.g., when it occurred, any specific actions that triggered it)."
			},
			{
				q: "How can I prevent IQ errors from occurring?",
				a:
					"While not all IQ errors can be prevented, you can minimize their occurrence by:<br>" +
					"1. Keeping your Garmin device firmware updated to the latest version.<br>" +
					"2. Ensuring your Connect IQ apps and watch faces are updated.<br>" +
					"3. Avoiding installing too many Connect IQ apps simultaneously, as this can strain device memory.<br>" +
					"4. Restarting your device periodically to clear temporary data."
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
