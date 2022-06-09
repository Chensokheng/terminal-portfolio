import React from "react";
import BaseCmdInput from "./BaseCmdInput";
import CmdStatus from "./CmdStatus";
import CmdTextDisplay from "./CmdTextDisplay";

interface ReadOnlyCmdInputProps {
	cmd: string;
}

export default function ReadOnlyCmdInput({ cmd }: ReadOnlyCmdInputProps) {
	return (
		<BaseCmdInput
			CmdStatus={<CmdStatus cmd={cmd} />}
			Children={<CmdTextDisplay cmd={cmd} />}
		/>
	);
}
