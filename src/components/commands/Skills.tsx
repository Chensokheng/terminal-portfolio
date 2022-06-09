import ProgressBar from "../ProgressBar";
import {
	SiExpress,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Tailwindcss",
		},
		{
			Icon: SiTypescript,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Typescript",
		},
		{
			Icon: SiExpress,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Express.js",
		},
		{
			Icon: SiNextdotjs,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Next.js",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
