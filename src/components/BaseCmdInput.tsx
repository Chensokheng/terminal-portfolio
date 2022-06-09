import React from "react";
import { GiClover, GiOpenFolder } from "react-icons/gi";
import { GoTriangleRight } from "react-icons/go";

interface BaseCmdInputProps {
	Children: React.ReactNode;
	CmdStatus?: React.ReactNode;
}
export default function BaseCmdInput({
	Children,
	CmdStatus,
}: BaseCmdInputProps) {
	return (
		<div className="mt-2 mb-2">
			<div className="flex items-center">
				<div className="w-5 h-1 bg-blue-600"></div>
				<div className="flex gap-1 items-center bg-green-700 pl-2">
					<GiClover />
					<h1>chensokheng</h1>
				</div>
				<div
					className=" w-5 h-7 bg-green-700 z-20"
					style={{
						clipPath: "polygon(0 0, 100% 50%, 0 100%)",
					}}
				></div>
				<div className="flex items-center">
					<div className=" bg-blue-400 -translate-x-5">
						<div className="flex gap-1 items-center justify-center pl-8 text-black pr-2">
							<GiOpenFolder />
							<h1>/portfolio</h1>
						</div>
					</div>
					<div
						className="-translate-x-5 w-5 h-7 border-l-2 border-blue-400 bg-blue-400 z-20"
						style={{
							clipPath: "polygon(0 0, 100% 50%, 0 100%)",
						}}
					></div>
					<>{CmdStatus}</>
				</div>
			</div>
			<div className="flex items-center">
				<div className="h-10 w-1 bg-blue-600 -translate-y-3"></div>
				<div className="">
					<div className="h-1 w-4 bg-blue-600 translate-y-2 -translate-x-1"></div>
				</div>
				<div className="translate-y-2 -translate-x-3">
					<GoTriangleRight className="text-2xl text-blue-500" />
				</div>
				<>{Children}</>
			</div>
		</div>
	);
}
