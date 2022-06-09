import React from "react";
import TerminalBox from "./components/TerminalBox";

export default function App() {
	return (
		<div className="bg-black h-screen w-full flex justify-center items-center  font-josefin">
			<div className="w-full">
				<div className="block sm:hidden mb-10 bg-yellow-200 py-3  text-center text-xl text-gray-700">
					<p>For better experience please try this with pc!</p>
					<p>This is not design for mobile view.</p>
					<a href="https://chensokheng.me" className="block p-2 underline">
						Visit this instead
					</a>
				</div>
				<TerminalBox />
			</div>
		</div>
	);
}
