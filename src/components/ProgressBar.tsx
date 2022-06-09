import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface ProgressBarProps {
	Icon: IconType;
	percentageValue: string;
	barWidth: string;
	text: string;
}

export default function ProgressBar({
	Icon,
	percentageValue,
	barWidth,
	text,
}: ProgressBarProps) {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div className="w-11/12 mx-auto mt-5 mb-5">
			<div className={`${barWidth} flex justify-between mb-3`}>
				<div className="flex gap-1 items-center">
					<Icon className="text-3xl" />
					<h1>{text}</h1>
				</div>
				<h1>{percentageValue}</h1>
			</div>
			<div className="w-full bg-gray-800 rounded-md">
				<div
					className={`${
						animate ? barWidth : "w-0"
					} transition-all duration-700 h-2.5 bg-blue-500 rounded-md`}
				></div>
			</div>
		</div>
	);
}
