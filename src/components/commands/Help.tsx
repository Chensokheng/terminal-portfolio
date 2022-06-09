import React from "react";

type HelpCmd = {
	cmd: string;
	detail: string;
};
export default function Help() {
	const listOfHelpCommands: HelpCmd[] = [
		{ cmd: "bio", detail: "Show my bio information." },
		{ cmd: "skill", detail: "List all of my skills." },
		{ cmd: "contact", detail: "List all of the contacts." },
		{ cmd: "about", detail: "To see what is terminal portfolio." },
		{ cmd: "ctrl + l", detail: "To clear the history." },
	];
	return (
		<div className="w-11/12 mx-auto">
			{listOfHelpCommands.map(({ cmd, detail }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-yellow-200 w-20">{cmd}</h1>
						<p className="text-gray-300 flex-1 ">{detail}</p>
					</div>
				);
			})}
		</div>
	);
}
