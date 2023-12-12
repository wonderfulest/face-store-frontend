import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
// import "@/styles/Wrapper.module.css";

const Faq = () => {
	const faqStyle = {
		fontWeight: "bold",
        backgroundColor: "red", // Set background color to red
        textAlign: "center",   // Center align text content
	};

	const questionStyle = {
		textDecoration: "underline",
		fontWeight: "bold",
	};

	const titleStyle = {
		textDecoration: "underline",
		fontWeight: "bold",
        textAlign: "center",   // Center align text content
	};

	const questions = [
   
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
            a: "Weather Forecast(outdoor): Currently, only Garmin's built-in weather API is supported. If displayed as '--,' it indicates that the current device is not supported. \n" + 
            "Sensor temperature(indoor): Display the measured values of the Garmin device's temperature sensor. If displayed as '--,' it indicates that the current device is not supported.",
        }
		// Add more questions as needed
	];

	return (
		<Wrapper >
			<div >
				<h1 class="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight mx-auto text-center">FAQ</h1>
				<p class="text-[14px] md:text-[18px] mb-5 leading-tight">Here are some frequently asked questions:</p>

				<ol className="mx-auto text-center">
					{questions.map((question, index) => (
						<li key={index}>
							<Link
								href={`#question${index + 1}`}
								className="underline"
							>
								{question.q}
							</Link>
                         
                 
						</li>
                
					))}
              
				</ol>
                <br />
                <br />
                <br />

                {questions.map((question, index) => (
                    <section id="question1" >
                        <h2 class="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">Q: {question.q}</h2>
                        <p>A: {question.a}</p>
                    </section>
                ))}

			
				{/* Add more sections for additional questions and answers */}
			</div>
		</Wrapper>
	);
};

export default Faq;
