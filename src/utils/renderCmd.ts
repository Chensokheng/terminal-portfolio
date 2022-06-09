import About from "../components/commands/About";
import Bio from "../components/commands/Bio";
import Contact from "../components/commands/Contact";
import Help from "../components/commands/Help";
import NotFound from "../components/commands/NotFound";
import Skills from "../components/commands/Skills";
import { CmdHistory } from "../type";

function renderCmd(cmd: string): CmdHistory {
	switch (cmd) {
		case "help":
			return {
				cmd,
				Component: Help,
			};
		case "bio":
			return {
				cmd,
				Component: Bio,
			};
		case "skill":
			return {
				cmd,
				Component: Skills,
			};
		case "contact":
			return {
				cmd,
				Component: Contact,
			};
		case "about": {
			return {
				cmd,
				Component: About,
			};
		}
		default:
			return {
				cmd,
				Component: NotFound,
			};
	}
}

export default renderCmd;
