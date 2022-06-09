import React from "react";
import { CmdHistory } from "../type";
import ReadOnlyCmdInput from "./ReadOnlyCmdInput";
interface EnteredCmdProps {
	enteredCmd: CmdHistory[];
}
export default function EnteredCmd({ enteredCmd }: EnteredCmdProps) {
	return (
		<div>
			{enteredCmd.map(({ cmd, Component, time }, index) => {
				return (
					<div key={index}>
						<ReadOnlyCmdInput cmd={cmd} time={time} />
						<div className="mt-3 mb-3">
							<Component />
						</div>
					</div>
				);
			})}
		</div>
	);
}
