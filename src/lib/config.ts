export const siteConfig = {
	name: 'Nicholas Hagans',
	url: 'https://nicholashagans.com',
	description: 'Personal website and blog of Nicholas Hagans',
	author: 'Nicholas Hagans',
	email: 'hagansna@gmail.com', 
	links: {
		github: 'https://github.com/hagansna',
		linkedin: 'https://linkedin.com/in/hagansna',
		x: 'https://x.com/hagansna'
	},
	nav: [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Blog', href: '/blog' },
		{ title: 'Resume', href: '/resume' },
		{ title: 'Contact', href: '/contact' }
	]
};

export type SiteConfig = typeof siteConfig;
