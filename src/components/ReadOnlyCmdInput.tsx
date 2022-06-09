import React from "react";
import BaseCmdInput from "./BaseCmdInput";
import CmdStatus from "./CmdStatus";
import CmdTextDisplay from "./CmdTextDisplay";

interface ReadOnlyCmdInputProps {
	cmd: string;
	time: string;
}

export default function ReadOnlyCmdInput({ cmd, time }: ReadOnlyCmdInputProps) {
	return (
		<BaseCmdInput
			CmdStatus={<CmdStatus cmd={cmd} />}
			Children={<CmdTextDisplay cmd={cmd} time={time} />}
		/>
	);
}
