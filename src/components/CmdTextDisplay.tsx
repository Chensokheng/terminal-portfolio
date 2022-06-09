import React from "react";
interface CmdTextDisplayProp {
	cmd: string;
}
export default function CmdTextDisplay({ cmd }: CmdTextDisplayProp) {
	return (
		<div className="flex justify-between items-center translate-y-2 -translate-x-3 w-full">
			<h1>{cmd}</h1>
			<h1 className="text-sm">{new Date().toLocaleTimeString()}</h1>
		</div>
	);
}
