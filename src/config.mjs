export const ABOUT = {
	content: [
		'After several failed attempts at higher education and a stint in the US Navy with a tour in Afghanistan. I found myself working graveyard shift as a CNC laser operator and hating my life. I started teaching myself how to code as early as 2012, but never really thought it could be a career. It was not until I was six months away from an engineering degree that my heart was not in anymore that I decided to take the plunge and go all in on teaching myself software development.',
		'Growing up and spending roughly 30 uninterrupted years in the "middle of nowhere" Kansas; I made the choice to move across the country to Portland, Oregon in 2018. I spent two years there working my first job in the tech industry before moving to Colombia in 2020. I have been living outside of Bogotá and working on remote teams ever since.',
		'I met the love of my life here on the "inter-tubes" in 2013 in a language exchange chat room. After many years of being friends we got the chance to meet in person in 2019 and began dating. We tied the knot here in her home country of Colombia in 2020. I have called Colombia home ever since and am a very proud step dog dad to her golden retriever. When I am not working I enjoy spending time with my wife and our dog, running, playing guitar, tinkering with my Raspberry Pi, and smoking meats and cheeses.',
	],
	description: 'Learn more about me, my work, and my hobbies.',
	history:
		'I shipped the first iteration of this website in 2016 through GitHub Pages with just HTML & CSS. Over the years it has mostly been ReactJS using frameworks like NextJS, GatsbyJS, and Astro. Hosting for the most part has been through Vercel; however I now use Cloudflare Pages. This iteration has been built with Qwik/QwikCity & TailwindCSS with the blog running on MDX.',
	title:
		'I’m Cody Brunner. I live in Bogotá, Colombia, where I work on software of the future.',
}

export const BOOKSHELF = {
	current: [
		{
			authors: ['Jason Wilson'],
			image: 'https://m.media-amazon.com/images/I/41QIpvJNnpL.jpg',
			title:
				'Cry Like a Man: Fighting for Freedom from Emotional Incarceration',
			url: 'https://www.amazon.com/Cry-Like-Man-Emotional-Incarceration-ebook/dp/B07G1YJ7DZ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=',
		},
		{
			authors: ['Sean Moriarity'],
			image:
				'https://pragprog.com/titles/smgaelixir/genetic-algorithms-in-elixir/smgaelixir-500.jpg',
			title: 'Genetic Algorithms in Elixir',
			url: 'https://pragprog.com/titles/smgaelixir/genetic-algorithms-in-elixir/',
		},
	],
	description: 'Recommended books and what I am currently reading.',
	fiction: [
		{
			authors: ['Ayn Rand'],
			title: 'Anthem',
			url: 'https://a.co/d/8rHjOEy',
		},
		{
			authors: ['Ayn Rand'],
			title: 'Atlas Shrugged',
			url: 'https://a.co/d/88pro3Y',
		},
		{
			authors: ['Ayn Rand'],
			title: 'The Fountainhead',
			url: 'https://a.co/d/c3g8b5a',
		},
		{
			authors: ['Victor Hugo'],
			title: 'Les Misérables',
			url: 'https://a.co/d/1fPgHbY',
		},
		{
			authors: ['Paulo Coelho'],
			title: 'The Alchemist',
			url: 'https://a.co/d/h0a1C4I',
		},
		{
			authors: ['Michael Crichton'],
			title: 'State of Fear',
			url: 'https://a.co/d/f9dhfEP',
		},
	],
	finance: [
		{
			authors: ['Robert Kiyosaki'],
			title: 'Rich Dad Poor Dad',
			url: 'https://a.co/d/1HpPMo6',
		},
	],
	intro:
		'I do not read as much as I used to when I was a kid and I am working on changing that. I also am branching out and not just reading tech books. Here are some of my favorites over the 30 plus years I have been on this blue rock.',
	marriage: [
		{
			authors: ['Jeff Feldhahn', 'Shaunti Feldhahn'],
			title:
				'For Men Only: A Straightforward Guide to the Inner Lives of Women',
			url: 'https://a.co/d/bpcbrqV',
		},
		{
			authors: ['Eva A. Mendes'],
			title: "Marriage and Lasting Relationships with Asperger's Syndrome",
			url: 'https://a.co/d/3v2WXtL',
		},
	],
	selfHelp: [
		{
			authors: ['David Goggins'],
			title: "Can't Hurt Me",
			url: 'https://a.co/d/cnzBYda',
		},
		{
			authors: ['Jocko Willink', 'Leif Babin'],
			title: 'Extreme Ownership',
			url: 'https://a.co/d/0wK7AXT',
		},
		{
			authors: ['Connor Beaton'],
			title:
				"Men's Work: A Practical Guide to Face Your Darkness, End Self-Sabotage, and Find Freedom",
			url: 'https://a.co/d/97H7xq1',
		},
		{
			authors: ['Ryan Michler'],
			title: 'Sovereignty: The Battle for the Hearts and Minds of Men',
			url: 'https://a.co/d/1pZdVHt',
		},
		{
			authors: ['Mel Robbins'],
			title: 'The 5 Second Rule',
			url: 'https://a.co/d/ak4pIOE',
		},
	],
	technology: [
		{
			authors: ['James Edward Gray, II', 'Bruce A. Tate'],
			title: 'Designing Elixir Systems with OTP',
			url: 'https://pragprog.com/titles/jgotp/designing-elixir-systems-with-otp/',
		},
		{
			authors: ['Chris McCord', 'Bruce A. Tate', 'José Valim'],
			title: 'Programming Phoenix 1.4',
			url: 'https://pragprog.com/titles/phoenix14/programming-phoenix-1-4/',
		},
		{
			authors: ['Darin Wilson', 'Eric Meadows-Jönsson'],
			title: 'Programming Ecto',
			url: 'https://pragprog.com/titles/wmecto/programming-ecto/',
		},
		{
			authors: ['Bruce Williams', 'Ben Wilson'],
			title: 'Craft GraphQL APIs in Elixir with Absinthe',
			url: 'https://pragprog.com/titles/wwgraphql/craft-graphql-apis-in-elixir-with-absinthe/',
		},
		{
			authors: ['Bruce A. Tate', 'Sophie DeBenedetto'],
			title: 'Programming Phoenix LiveView',
			url: 'https://pragprog.com/titles/liveview/programming-phoenix-liveview/',
		},
	],
	title: 'Bookshelf',
}

export const FEATURE_FLAGS = {
	menu: /(about|bookshelf|home|projects|uses)/i,
}

export const HOME = {
	description:
		"I'm Cody, an American expat, US Navy Veteran, and software developer, calling Colombia home. I am a Senior Frontend Developer at Bitcoin IRA, where we are pioneering the world's first and most trusted crypto IRA platform. Outside work, I savor top-shelf single malt whisky and smoking ribs and brisket.",
	title: 'Software developer, veteran, and smoker of the meats.',
}

export const NOT_FOUND = {
	description: 'Are you lost? There is nothing here. Go back home.',
	title: 'Not Found',
}

export const PROJECTS = {
	description: 'My portfolio of projects I have worked on over the years.',
	intro:
		'After several years in the industry here is a few of the projects I have worked on over the years. From personal projects to open source contributions to professional work.',
	portfolio: [
		{
			name: 'microauth-vkontakte',
			description: 'Vkontakte OAuth strategy for the MicroJS framework.',
			link: {
				href: 'https://www.npmjs.com/package/microauth-vkontakte',
				label: 'npmjs.com',
			},
			logo: '/icons/npm.svg',
		},
		{
			name: 'pardall_markdown',
			description:
				'Reactive publishing framework, filesystem-based with support for Markdown, nested hierarchies, and instant content rebuilding. Written in Elixir.',
			link: {
				href: 'https://hex.pm/packages/pardall_markdown',
				label: 'hex.pm',
			},
			logo: '/icons/hex.svg',
		},
		{
			name: 'rehype-code-titles',
			description:
				'Rehype plugin for parsing code blocks and adding titles to code blocks.',
			link: {
				href: 'https://www.npmjs.com/package/rehype-code-titles',
				label: 'npmjs.com',
			},
			logo: '/icons/npm.svg',
		},
		{
			name: 'ectogram',
			description: 'An Instagram clone written in Elixir and Ecto',
			link: {
				href: 'https://github.com/rockchalkwushock/ectogram',
				label: 'github.com',
			},
			logo: '/icons/elixir.svg',
		},
		{
			name: 'citax',
			description: 'A Calendly clone written in Elixir and Phoenix LiveView.',
			link: {
				href: 'https://github.com/rockchalkwushock/citax',
				label: 'github.com',
			},
			logo: '/icons/phoenix.svg',
		},
		{
			name: 'weather-app',
			description: 'Weather App that makes use of the OpenWeather API.',
			link: {
				href: 'https://weather-app-rockchalkwushock.vercel.app/',
				label: 'vercel.app',
			},
			logo: '/icons/react.svg',
		},
		{
			name: 'tic-tac-toe',
			description: 'Tic-tac-toe written using the React Context API.',
			link: {
				href: 'https://tic-tac-toe-indol-chi.vercel.app/',
				label: 'vercel.app',
			},
			logo: '/icons/react.svg',
		},
		{
			name: '@appointlet/appointlet-js',
			description: 'JavaScript SDK for Appointlet.',
			link: {
				href: 'https://www.npmjs.com/package/@appointlet/appointlet.js',
				label: 'npmjs.com',
			},
			logo: '/icons/appointlet.svg',
		},
		{
			name: 'Appointlet Chrome Extension',
			description: 'Chrome Extension for Appointlet.',
			link: {
				href: 'https://chrome.google.com/webstore/detail/appointlet/oanmefncibhopinffldmcfpkhjfcnggo',
				label: 'chrome.google.com',
			},
			logo: '/icons/appointlet.svg',
		},
		{
			name: 'Appointlet Dashboard Application',
			description:
				"Dashboard for user's to manage their meetings and meeting types for Appointlet.",
			link: {
				href: 'https://www.appointlet.com/',
				label: 'appointlet.com',
			},
			logo: '/icons/appointlet.svg',
		},
		{
			name: 'XLR8',
			description:
				'Arrive Logistic offers scalable capacity solutions. Our customer-obsessed team strategically delivers unmatched scalable capacity solutions.',
			link: {
				href: 'https://www.arrivelogistics.com/',
				label: 'arrivelogistics.com',
			},
			logo: '/icons/arrive-logistics.svg',
		},
		{
			name: 'Bitcoin IRA',
			description: "The world's first crypto investment platform.",
			link: {
				href: 'https://bitcoinira.com/',
				label: 'bitcoinira.com',
			},
			logo: '/icons/bitcoin-ira.svg',
		},
		{
			name: 'Weeldi',
			description:
				'Weeldi is the easiest way to automate any task you do on the web w/ NO coding required',
			link: {
				href: 'https://weeldi.com/',
				label: 'weeldi.com',
			},
			logo: '/icons/weeldi.svg',
		},
		{
			name: 'DM.app',
			description:
				'DM is the simplest free messaging platform to engage your community on web/mobile/SMS. No ads. No algorithms. No app download required.',
			link: {
				href: 'https://dm.app',
				label: 'dm.app',
			},
			logo: '/icons/dm.svg',
		},
	],
	title: 'My Portfolio',
}

export const SITE = {
	author: 'Cody Brunner',
	copyright: [
		`© 2016-${new Date().getFullYear()} Cody Brunner.`,
		'All rights reserved.',
	],
	creativeCommons: 'http://creativecommons.org/licenses/by-nc-nd/4.0',
	description:
		"Welcome to Cody's personal website and tech blog! Based in Colombia, Cody is a Senior Frontend Developer at Bitcoin IRA, the world's first trusted crypto IRA platform. Explore his journey and insights in software development.",
	email: 'me@codybrunner.com',
	lang: 'en-US',
	origin: 'https://codybrunner.com',
	socials: {
		github: 'https://github.com/rockchalkwushock',
		instagram: 'https://www.instagram.com/rockchalkwushock',
		linkedin: 'https://www.linkedin.com/in/cody-brunner',
		telegram: 'https://t.me/rockchalkwushock',
		twitter: 'https://twitter.com/RockChalkDev',
	},
	tech: {
		mdx: 'https://mdxjs.com',
		qwik: 'https://qwik.builder.io',
		tailwind: 'https://tailwindcss.com',
	},
	title: 'codybrunner.com',
	twitter: '@RockChalkDev',
}

export const USES = {
	description:
		'My workstation, development tools, and recommended productivity apps.',
	devTools: [
		{
			description:
				'I have used VSCode for years now and I honestly can not see myself changing anytime soon. With integrations for GitHub and GitHub Copilot as well as thousands of extensions to reach for it will be my editor of choice for many years to come.',
			href: 'https://code.visualstudio.com',
			title: 'Visual Studio Code',
		},
		{
			description:
				'Like VSCode I have used iTerm2 for years now and again likely will not change for years to come if ever.',
			href: 'https://iterm2.com',
			title: 'iTerm2',
		},
		{
			description:
				'I use Docker a fair amount for running containers on my machine when I do not want to install something locally. I also use it for running databases locally.',
			href: 'https://www.docker.com',
			title: 'Docker',
		},
		{
			description:
				'ASDF has been an absolute game changer for me. Managing multiple versions of Elixir, Erlang, Node, Python and Rust has never been easier.',
			href: 'https://asdf-vm.com/guide/getting-started.html',
			title: 'asdf-vm',
		},
		{
			description: 'The OG of package managers. I use it for most everything.',
			href: 'https://brew.sh',
			title: 'Homebrew',
		},
		{
			description:
				'I do not do a whole lot of fullstack development but when I do I prefer to use Beekeeper for managing my databases. It is a great tool and I highly recommend it.',
			href: 'https://www.beekeeperstudio.io',
			title: 'Beekeeper Studio',
		},
		{
			description:
				'I am forgetful and tldr is there to help me remember how to use commands. Great drop in replacement for `man`.',
			href: 'https://tldr.sh',
			title: 'tldr',
		},
	],
	intro:
		'I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.',
	productivity: [
		{
			description:
				'Spotlight has made great strides from when I started using macOS in 2014, but I am sorry Apple Alfred is still better.',
			href: 'https://www.alfredapp.com',
			title: 'Alfred',
		},
		{
			description:
				'I have a certain level of OCD about things and my menu bar being full of icons is one of them Bartender cleans that up for me.',
			href: 'https://www.macbartender.com',
			title: 'Bartender',
		},
		{
			description:
				'This is dope with a capital "D". I use Numi for fast conversions especially when I am working with currencies.',
			href: 'https://numi.app',
			title: 'Numi',
		},
		{
			description:
				'I have used a lot of different note taking apps over the years. I prefer Obsidian because it is open source and all the customizations I can do with it. I pay for the sync service because I want to support the developers.',
			href: 'https://obsidian.md',
			title: 'Obsidian',
		},
		{
			description:
				'I have used this I think since the developer initially delivered it to the App Store. Still rocking that legacy payment plan! Seriously if you are looking for a clipboard app you can not go wrong with Paste.',
			href: 'https://pasteapp.io',
			title: 'Paste',
		},
		{
			description:
				'Living in Colombia and working with people in the USA, Europe, and even sometimes Asia this has been a nice app to show me what time it is in other parts of the world.',
			href: 'http://overdesigned.net/worldclock',
			title: 'World Clock',
		},
	],
	title: 'My Workstation, Development Tools, and Productivity Apps',
	workStation: [
		{
			description:
				'I had been using a 2020 Intel iMac previously and missed the ability to travel with my workstation. This thing is an absolute beast of a machine and I love it. The 14" form factor is perfect too. I have never been happier with a purchase.',
			href: 'https://www.apple.com/macbook-pro',
			title: '14” MacBook Pro, M1 Pro, 32GB RAM (2021)',
		},
		{
			description:
				'When I am at home I want the luxury of a big screen and 32 more inches of real estate is perfect. I love this monitor and it is a great value.',
			href: 'https://a.co/d/igC03ER',
			title: '32” Dell Curved 4K UHD Monitor',
		},
		{
			description:
				'My first job introduced me to the wonders of standing desks and after working in some not so ideal environments during the pandemic my back has thanked me for getting a standing desk again.',
			href: 'https://www.autonomous.ai/standing-desks/smartdesk-2-home',
			title: 'Autonomous AI SmartDesk 2',
		},
		{
			description:
				'When I am not standing I wanted a chair that was comfortable and ergonomic. This chair is both of those things and I love it.',
			href: 'https://www.autonomous.ai/sale/evergreen-ergochair-pro-for-sale',
			title: 'Autonomous AI Ergo Pro Chair',
		},
		{
			description:
				'I used a Magic Mouse for years and up until the boneheaded idea to put the charging port on the bottom of the Magic Mouse 2 I was more than happy with it. I never wanted to change mice because I would miss the gestures that Apple has built into macOS that the Magic Mouse takes advantage of. The MX Master 3 can do it all though and it has been a game changer.',
			href: 'https://a.co/d/j741osy',
			title: 'Logitech MX Master 3',
		},
		{
			description:
				'As with the Magic Mouse I used the Magic Keyboard for years. I wanted to try a different keyboard and my only requirement was for it to have low profile keys. I am not a fan of the mechanical keyboards with huge keys. Feels like my fingers are doing the tire drills from football practice. This keyboard has been great.',
			href: 'https://a.co/d/agUkKEp',
			title: 'Logitech Ergo K860 Split Wireless Keyboard',
		},
		{
			description:
				'I have another MBP that is for work and it has been a real pain in the ass...and I am talking first world pain in the ass to unplug all the cables and swap machines into my at home setup. This dock is a real banger. I have my personal monitor and work monitor plugged in as well as the dongles for the mouse and keyboard. Everything runs through the one Thunderbolt 4 cable to whichever MBP is plugged in.',
			href: 'https://www.amazon.com/dp/B0BQM9ZH41?ref=ppx_yo2ov_dt_b_product_details&th=1',
			title: 'Kensington Thunderbolt 4 Docking Station',
		},
	],
}
