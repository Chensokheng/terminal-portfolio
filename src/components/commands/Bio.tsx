import { GoVerified } from "react-icons/go";
import { SiGithub, SiPatreon, SiYoutube } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/Chensokheng",
			text: "@Chensokheng",
		},
		{
			title: "Youtube",
			Icon: SiYoutube,
			href: "https://www.youtube.com/c/DailyWebCoding",
			text: "@Dailywebcoding",
		},
		{
			title: "Patreon",
			Icon: SiPatreon,
			href: "https://www.patreon.com/dailywebcoding",
			text: "@Patreon",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/52232579?s=400&u=66d824859d14da9ffc4dcb32f3aca6631abb95af&v=4"
					alt="Chensokheng"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Chensokheng</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 22 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a software developer/youtuber. Passionate with web
				development and like to learn new thing related to coding and sharing it
				to the internet through my youtube.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
