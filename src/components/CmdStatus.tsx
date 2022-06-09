import React from "react";
import { BiGitBranch } from "react-icons/bi";
interface CmdStatusProp {
	cmd: string;
}
export default function CmdStatus({ cmd }: CmdStatusProp) {
	if (!cmd) {
		return <></>;
	}
	return (
		<div className="flex items-center">
			<div className=" bg-yellow-200 -translate-x-10">
				<div className="flex gap-1 items-center justify-center pl-8 text-black pr-2">
					<BiGitBranch />
					<h1 className="text-end">{cmd}</h1>
				</div>
			</div>
			<div
				className="-translate-x-10 w-5 h-7 border-l-2 border-yellow-200 bg-yellow-200 z-20"
				style={{
					clipPath: "polygon(0 0, 100% 50%, 0 100%)",
				}}
			></div>
		</div>
	);
}
