export const FEATURE_FLAGS = {
	menu: /(home|uses)/i,
}

export const HOME = {
	description:
		"I’m Cody, an American software developer and entrepreneur based in Colombia. I'm a Senior Frontend Developer at Bitcoin IRA where we are building the world's first and most trusted crypto IRA platform.",
	title: 'Software developer, veteran, and smoker of the meats.',
}

export const SITE = {
	author: 'Cody Brunner',
	copyright: [
		`© 2016-${new Date().getFullYear()} Cody Brunner.`,
		'All rights reserved.',
	],
	creativeCommons: 'http://creativecommons.org/licenses/by-nc-nd/4.0',
	description: 'My stretch of pipe in the world wide inter-tubes.',
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
