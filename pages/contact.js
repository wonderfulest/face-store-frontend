import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { makePostRequest } from "@/utils/api";

const Confetti = () => (
	<div className="confetti-absolute-wrapper">
		{[0, 1, 2].map((row) => (
			[...Array(18)].map((_, i) => (
				<div
					key={row * 100 + i}
					className={`confetti confetti-${i % 6}`}
					style={{
						left: `${5 + i * 5}%`,
						top: `${20 + row * 10}vh`,
						animationDelay: `${0.1 * (i % 6) + row * 0.2}s`,
					}}
				></div>
			))
		))}
		<style jsx>{`
			.confetti-absolute-wrapper {
				position: fixed;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				z-index: 50;
				pointer-events: none;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.confetti {
				position: absolute;
				width: 12px;
				height: 18px;
				border-radius: 3px;
				opacity: 0.85;
				animation: confetti-fall 1.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
			}
			.confetti-0 { background: #ffb300; }
			.confetti-1 { background: #e57373; }
			.confetti-2 { background: #64b5f6; }
			.confetti-3 { background: #81c784; }
			.confetti-4 { background: #ba68c8; }
			.confetti-5 { background: #ffd54f; }
			.confetti-0, .confetti-6, .confetti-12, .confetti-18, .confetti-24 { transform: rotate(-15deg); }
			.confetti-1, .confetti-7, .confetti-13, .confetti-19, .confetti-25 { transform: rotate(10deg); }
			.confetti-2, .confetti-8, .confetti-14, .confetti-20, .confetti-26 { transform: rotate(25deg); }
			.confetti-3, .confetti-9, .confetti-15, .confetti-21, .confetti-27 { transform: rotate(-30deg); }
			.confetti-4, .confetti-10, .confetti-16, .confetti-22, .confetti-28 { transform: rotate(5deg); }
			.confetti-5, .confetti-11, .confetti-17, .confetti-23, .confetti-29 { transform: rotate(-8deg); }
			@keyframes confetti-fall {
				0% { opacity: 1; }
				80% { opacity: 1; }
				100% { top: 80vh; opacity: 0; }
			}
		`}</style>
	</div>
);

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", content: "" });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleContact = async (e) => {
		e.preventDefault();
		setError("");
		setSuccess(false);
		setLoading(true);
		try {
			await makePostRequest("/api/engage/contact-us/create", {
				name: form.name,
				email: form.email,
				content: form.content,
			});
			setSuccess(true);
			setForm({ name: "", email: "", content: "" });
			setTimeout(() => setSuccess(false), 3000);
		} catch (err) {
			setError("Failed to submit. Please try again later.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Wrapper className="flex justify-center items-center ">
			<div className="container w-4/5 mx-auto min-h-[600px] my-12">
				<h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight mx-auto text-center py-8">
					Contact us
				</h1>
				
				<p className="text-[14px] md:text-[18px] mb-5 leading-tight py-4">
					Do you have any questions or comments? Enter your details
					and we'll be happy to get back to you.
				</p>
				<form className="flex flex-wrap justify-between py-8" onSubmit={handleContact}>
					<div className="w-full md:w-[48%] mb-5">
						<label htmlFor="name" className="block text-[14px] mb-2">
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full py-2 px-3 mb-5 border border-gray-300 rounded-md"
							required
							value={form.name}
							onChange={handleChange}
							disabled={loading}
						/>
					</div>

					<div className="w-full md:w-[48%] mb-5">
						<label htmlFor="email" className="block text-[14px] mb-2">
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full py-2 px-3 mb-5 border border-gray-300 rounded-md"
							required
							value={form.email}
							onChange={handleChange}
							disabled={loading}
						/>
					</div>
					<div className="w-full mb-5">
						<label htmlFor="content" className="block text-[14px] mb-2">
							Suggestion:
						</label>
						<textarea
							id="content"
							name="content"
							className="w-full h-48 py-2 px-3 mb-5 border border-gray-300 rounded-md"
							required
							value={form.content}
							onChange={handleChange}
							disabled={loading}
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full py-3 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75"
						disabled={loading}
					>
						{loading ? "Submitting..." : "Submit"}
					</button>
				</form>
				{success && (
					<>
						<Confetti />
						<div className="text-green-700 text-2xl font-bold mt-2 mb-4 animate-bounce" style={{position:'fixed',top:'60vh',left:0,right:0,zIndex:51,textAlign:'center'}}>Thank you! Your message has been sent 🎉</div>
					</>
				)}
				{error && <div className="text-red-600 text-center mt-4">{error}</div>}

				{/* <div className="mb-8 p-6 border border-gray-200 rounded-md bg-gray-50">
					<h2 className="text-[20px] font-semibold mb-4">Company Information</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<h3 className="text-[16px] font-medium mb-2">WuKong OÜ</h3>
							<p className="text-[14px] mb-1">Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551, Estonia</p>
							<p className="text-[14px]">Email: <a href="mailto:support@wristo.io" className="text-blue-600 hover:underline">support@wristo.io</a></p>
						</div>
					</div>
				</div> */}
			</div>
		</Wrapper>
	);
};

export default Contact;
