import type { Schema } from './schema'

/**
 * 'nav.about': 'Sobre',
		'nav.about.label': 'Ir a la página de sobre.',
		'nav.bookshelf': 'Librería',
		'nav.bookshelf.label': 'Ir a la página Librería.',
		'nav.home': 'Inicio',
		'nav.home.label': 'Ir a la página de inicio.',
		'nav.mobile.close': 'Cerrar',
		'nav.mobile.close.label': 'Cerrar Menú de navegación.',
		'nav.meet': 'Conozca',
		'nav.meet.label': 'Ir a mi página de reservas Appointlet.',
		'nav.mobile.subTitle': 'Navegación',
		'nav.mobile.title': 'Menú',
		'nav.projects': 'Proyectos',
		'nav.projects.label': 'Ir a la página de proyectos.',
		'nav.uses': 'Usa',
		'nav.uses.label': 'Ir a la página de usos.',
 */

export const defaultLang = 'en'
export const routes: Record<Language, Record<AppRoutes, string>> = {
	en: {
		about: 'about',
		bookshelf: 'bookshelf',
		projects: 'projects',
		uses: 'uses',
	},
	es: {
		about: 'sobre',
		bookshelf: 'libreria',
		projects: 'proyectos',
		uses: 'usa',
	},
}
export const showDefaultLang = false
export const languages = {
	en: 'English',
	es: 'Español',
} as const

export type AppRoutes = 'about' | 'bookshelf' | 'projects' | 'uses'
export type Language = keyof typeof languages

const currentYear = new Date().getFullYear()

export const translations: Schema = {
	en: {
		'about.content.history':
			'I shipped the first iteration of this website in 2016 through GitHub Pages with just HTML & CSS. Over the years it has mostly been ReactJS using frameworks like NextJS and GatsbyJS. Hosting for the most part has been through Vercel; however I now use Fly.io & Cloudflare. This iteration has been built with Astro & TailwindCSS with the blog running on MDX.',
		'about.content.paragraph-one':
			'After several failed attempts at higher education and a stint in the US Navy with a tour in Afghanistan. I found myself working graveyard shift as a CNC laser operator and hating my life. I started teaching myself how to code as early as 2012, but never really thought it could be a career. It was not until I was six months away from an engineering degree that my heart was not in anymore that I decided to take the plunge and go all in on teaching myself software development.',
		'about.content.paragraph-two':
			'Growing up and spending roughly 30 uninterrupted years in the "middle of nowhere" Kansas; I made the choice to move across the country to Portland, Oregon in 2018. I spent two years there working my first job in the tech industry before moving to Colombia in 2020. I have been living outside of Bogotá and working on remote teams ever since.',
		'about.content.paragraph-three':
			'I met the love of my life here on the "inter-tubes" in 2013 in a language exchange chat room. After many years of being friends we got the chance to meet in person in 2019 and began dating. We tied the knot here in her home country of Colombia in 2020. I have called Colombia home ever since and am a very proud step dog dad to her golden retriever. When I am not working I enjoy spending time with my wife and our dog, running, playing guitar, tinkering with my Raspberry Pi, and smoking meats and cheeses.',
		'about.content.title':
			'I’m Cody Brunner. I live in Bogotá, Colombia, where I work on software of the future.',
		'about.metadata.description':
			'Cody Brunner is an American expat living in Bogotá, Colombia. He served in the US Navy and one tour in Afghanistan. He is a Senior Frontend Developer at Bitcoin IRA, the world’s first and most trusted crypto IRA platform. He primarily works with GraphQL, ReactJS, and TypeScript. He is also a contributor to the open source community. Other technologies he works with include Astro, Elixir, Phoenix, Python, Qwik, Rust, SolidJS, and tRPC.',
		'about.metadata.imageAlt': 'Cody Brunner in Paipa, Colombia',
		'about.metadata.title': 'About',
		'bookshelf.content.intro':
			'I do not read as much as I used to when I was a kid and I am working on changing that. I also am branching out and not just reading tech books. Here are some of my favorites over the 30 plus years I have been on this blue rock.',
		'bookshelf.content.title': 'Bookshelf',
		'bookshelf.metadata.description':
			'Welcome to my bookshelf, a curated list of recommended books that I have read or am currently reading. Dive into a diverse range of genres, spanning from captivating fiction to enlightening non-fiction, empowering self-help, insightful finance, and cutting-edge technology books. Whether you are seeking thrilling stories, expanding your knowledge, or exploring personal growth, this collection has something for everyone. Discover gripping narratives, thought-provoking insights, and practical guidance within these pages. From timeless classics to contemporary bestsellers, each book on this list has left a lasting impact on me and has the potential to enrich your life as well. So, grab a cup of coffee, browse through these literary treasures, and embark on a journey of inspiration and enlightenment. Happy reading!',
		'bookshelf.metadata.title': 'Bookshelf',
		'bookshelf.section.one': 'Currently Reading',
		'bookshelf.section.two': 'Fiction',
		'bookshelf.section.three': 'Finance',
		'bookshelf.section.four': 'Relationship',
		'bookshelf.section.five': 'Self Help',
		'bookshelf.section.six': 'Technology',
		'footer.copyright': `2016-${currentYear} Cody Brunner`,
		'footer.rights': 'All rights reserved',
		'home.articles.alt': 'No Articles At This Time',
		'home.articles.heading': 'No Articles At This Time',
		'home.hero.description':
			"I'm Cody, an American expat, US Navy Veteran, and software developer, calling Colombia home. I am a Senior Frontend Developer at Bitcoin IRA, where we are pioneering the world's first and most trusted crypto IRA platform. Outside work, I savor top-shelf single malt whisky and smoking ribs and brisket.",
		'home.hero.heading':
			'Software developer, veteran, and smoker of the meats.',
		'home.profile.alt': 'Image of Cody Brunner',
		'home.resume.button': 'Download CV',
		'home.resume.button.label': 'Download CV',
		'home.resume.heading': 'Work',
		'home.resume.item.frontend': 'Frontend Developer',
		'home.resume.item.fullstack': 'Fullstack Developer',
		'home.resume.item.owner': 'Owner',
		'home.resume.item.present': 'Present',
		'home.resume.item.senior': 'Senior Frontend Developer',
		'home.resume.item.web': 'Web Developer',
		'home.resume.company.heading': 'Company',
		'home.resume.date.heading': 'Date',
		'home.resume.role.heading': 'Role',
		'locale.label': 'Switch to Spanish',
		'nav.about': 'About',
		'nav.about.label': 'Go to About Page.',
		'nav.bookshelf': 'Bookshelf',
		'nav.bookshelf.label': 'Go to Bookshelf Page.',
		'nav.home': 'Home',
		'nav.home.label': 'Go to Home Page.',
		'nav.meet': 'Meet',
		'nav.meet.label': 'Go to my Appointlet Booking Page.',
		'nav.mobile.close': 'Close',
		'nav.mobile.close.label': 'Close Navigation Menu.',
		'nav.mobile.subTitle': 'Navigation',
		'nav.mobile.title': 'Menu',
		'nav.projects': 'Projects',
		'nav.projects.label': 'Go to Projects Page.',
		'nav.uses': 'Uses',
		'nav.uses.label': 'Go to Uses Page.',
		'projects.content.intro':
			'After several years in the industry here is a few of the projects I have worked on over the years. From personal projects to open source contributions to professional work.',
		// TODO: Add 'projects.content.portfolio....'
		'projects.content.title': 'My Portfolio',
		'projects.metadata.description':
			'Welcome to my portfolio showcasing my journey as a software developer in the tech industry. Here, you will find a collection of my work that reflects my passion for coding and problem-solving. From personal side projects to enterprise-level applications and contributions to open source, this portfolio encompasses the breadth of my experience. I have leveraged an array of cutting-edge technologies throughout my projects, including JavaScript/TypeScript, ReactJS, TailwindCSS, Phoenix LiveView, Elixir, NextJS, and Remix. Each project represents a unique challenge and demonstrates my ability to build robust, scalable, and user-friendly solutions. Feel free to explore the diverse range of applications, delve into the code, and witness the creativity and craftsmanship that went into each endeavor.',
		'projects.metadata.title': 'Portfolio',
		'socials.email': 'Email me directly',
		'socials.github': 'Follow me on GitHub',
		'socials.instagram': 'Follow me on Instagram',
		'socials.linkedin': 'Follow me on LinkedIn',
		'socials.telegram': 'Follow me on Telegram',
		'socials.twitter': 'Follow me on Twitter',
		'uses.content.intro':
			'I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.',
		'uses.content.section-one.title': 'Workstation',
		'uses.content.section-two.title': 'Development Tools',
		'uses.content.section-three.title': 'Productivity',
		// TODO: Add 'uses.content.XXX....'
		'uses.content.title':
			'My Workstation, Development Tools, and Productivity Apps',
		'uses.metadata.description':
			'Welcome to my workstation and tools page, where you can discover the technology and tools that fuel my productivity and enable me to deliver exceptional results. At the heart of my setup is the powerful M1 MacBook Pro 14", providing me with unmatched performance and speed. For coding, I rely on the versatile and feature-rich Visual Studio Code (VS Code) editor, which enhances my development experience. To streamline my workflow and boost efficiency, I utilize productivity tools such as Alfred, a powerful search and automation tool, and Paste, a clipboard manager that helps me organize and access my copied content effortlessly. Additionally, I take advantage of Homebrew, a package manager for macOS, to effortlessly install and manage various software packages. Complementing my digital tools, I prioritize ergonomics with an Autonomous AI desk and chair, ensuring a comfortable and conducive work environment. To enhance my visual experience, I rely on a high-quality Dell monitor that offers crisp and vibrant colors. With this carefully curated combination of hardware and software, my workstation empowers me to achieve optimal productivity and deliver exceptional results.',
		'uses.metadata.title': 'Uses',
	},
	es: {
		'about.content.history':
			'Envié la primera iteración de este sitio web en 2016 a través de GitHub Pages con solo HTML y CSS. A lo largo de los años ha sido principalmente ReactJS usando frameworks como NextJS y GatsbyJS. El alojamiento en su mayor parte ha sido a través de Vercel; sin embargo, ahora uso Fly.io y Cloudflare. Esta iteración se ha construido con Astro y TailwindCSS con el blog que se ejecuta en MDX.',
		'about.content.paragraph-one':
			'Después de varios intentos fallidos en la educación superior y un período en la Marina de los EE.UU. con una gira en Afganistán. Me encontré trabajando en el turno de noche como operador de láser CNC y odiando mi vida. Empecé a aprender a programar en 2012, pero nunca pensé que podría ser una profesión. No fue hasta que estuve a seis meses de obtener un título de ingeniería en el que mi corazón ya no estaba que decidí dar el paso y entrar de lleno en enseñarme a mí mismo el desarrollo de software.',
		'about.content.paragraph-two':
			'Crecí y pasé aproximadamente 30 años ininterrumpidos en el "medio de la nada" Kansas; tomé la decisión de mudarme al otro lado del país a Portland, Oregón en 2018. Pasé dos años allí trabajando en mi primer empleo en la industria tecnológica antes de mudarme a Colombia en 2020. He estado viviendo fuera de Bogotá y trabajando en equipos remotos desde entonces.',
		'about.content.paragraph-three':
			'Conocí al amor de mi vida aquí en las "inter-tubes" en 2013 en un chat de intercambio de idiomas. Después de muchos años de ser amigos tuvimos la oportunidad de conocernos en persona en 2019 y empezamos a salir. Nos casamos aquí en su país natal, Colombia, en 2020. He llamado a Colombia mi hogar desde entonces y soy un muy orgulloso padrastro de su golden retriever. Cuando no estoy trabajando me gusta pasar tiempo con mi esposa y nuestro perro, correr, tocar la guitarra, juguetear con mi Raspberry Pi, y ahumar carnes y quesos.',
		'about.content.title':
			'Soy Cody Brunner. Vivo en Bogotá, Colombia, donde trabajo en el software del futuro.',
		'about.metadata.description':
			'Cody Brunner es un expatriado estadounidense que vive en Bogotá, Colombia. Sirvió en la Marina de los Estados Unidos y una vez en Afganistán. Es Desarrollador Frontend Senior en Bitcoin IRA, la primera y más confiable plataforma cripto IRA del mundo. Trabaja principalmente con GraphQL, ReactJS y TypeScript. También contribuye a la comunidad de código abierto. Otras tecnologías con las que trabaja incluyen Astro, Elixir, Phoenix, Python, Qwik, Rust, SolidJS y tRPC.',
		'about.metadata.imageAlt': 'Cody Brunner en Paipa, Colombia',
		'about.metadata.title': 'Sobre',
		'bookshelf.content.intro':
			'No leo tanto como cuando era niño y estoy trabajando para cambiar eso. También me estoy diversificando y no sólo leo libros de tecnología. Éstos son algunos de mis favoritos en los más de 30 años que llevo en esta roca azul.',
		'bookshelf.content.title': 'Librería',
		'bookshelf.metadata.description':
			'Bienvenido a mi estantería, una lista de libros recomendados que he leído o estoy leyendo actualmente. Sumérgete en una amplia gama de géneros, desde ficción cautivadora a no ficción esclarecedora, autoayuda, finanzas perspicaces y libros de tecnología punta. Si busca historias apasionantes, ampliar sus conocimientos o explorar el crecimiento personal, esta colección tiene algo para todos. Descubra en estas páginas relatos apasionantes, ideas que invitan a la reflexión y consejos prácticos. Desde clásicos atemporales hasta bestsellers contemporáneos, todos los libros de esta lista me han dejado un impacto duradero y tienen el potencial de enriquecer su vida también. Así que coge una taza de café, hojea estos tesoros literarios y embárcate en un viaje de inspiración e iluminación. ¡Feliz lectura!',
		'bookshelf.metadata.title': 'Librería',
		'bookshelf.section.one': 'Lectura actual',
		'bookshelf.section.two': 'Ficción',
		'bookshelf.section.three': 'Finanzas',
		'bookshelf.section.four': 'Relación',
		'bookshelf.section.five': 'Autoayuda',
		'bookshelf.section.six': 'Tecnología',
		'footer.copyright': `2016-${currentYear} Cody Brunner`,
		'footer.rights': 'Derechos reservados',
		'home.articles.alt': 'No hay artículos en este momento',
		'home.articles.heading': 'No hay artículos en este momento',
		'home.hero.description':
			'Soy Cody, un expatriado estadounidense, veterano de la marina de los EE.UU. y desarrollador de software, que vive en Colombia. Soy Desarrollador Frontend Senior en Bitcoin IRA, donde somos pioneros en la primera y más confiable plataforma cripto IRA del mundo. Fuera del trabajo, saboreo el mejor whisky de malta y ahumo costillas y falda.',
		'home.hero.heading':
			'Desarrollador de software, veterano y ahumador de carnes.',
		'home.profile.alt': 'Imagen de Cody Brunner',
		'home.resume.button': 'Descargar CV',
		'home.resume.button.label': 'Descargar CV',
		'home.resume.heading': 'Trabajo',
		'home.resume.item.frontend': 'Desarrollador Frontend',
		'home.resume.item.fullstack': 'Desarrollador Fullstack',
		'home.resume.item.owner': 'Propietario',
		'home.resume.item.present': 'Presente',
		'home.resume.item.senior': 'Desarrollador Frontend Senior',
		'home.resume.item.web': 'Desarrollador Web',
		'home.resume.company.heading': 'Compañía',
		'home.resume.date.heading': 'Fecha',
		'home.resume.role.heading': 'Función',
		'locale.label': 'Cambiar al Inglés',
		'nav.about': 'Sobre',
		'nav.about.label': 'Ir a la página de sobre.',
		'nav.bookshelf': 'Librería',
		'nav.bookshelf.label': 'Ir a la página Librería.',
		'nav.home': 'Inicio',
		'nav.home.label': 'Ir a la página de inicio.',
		'nav.mobile.close': 'Cerrar',
		'nav.mobile.close.label': 'Cerrar Menú de navegación.',
		'nav.meet': 'Conozca',
		'nav.meet.label': 'Ir a mi página de reservas Appointlet.',
		'nav.mobile.subTitle': 'Navegación',
		'nav.mobile.title': 'Menú',
		'nav.projects': 'Proyectos',
		'nav.projects.label': 'Ir a la página de proyectos.',
		'nav.uses': 'Usa',
		'nav.uses.label': 'Ir a la página de usos.',
		'projects.content.intro':
			'Después de varios años en el sector, he aquí algunos de los proyectos en los que he trabajado a lo largo de los años. Desde proyectos personales hasta contribuciones de código abierto y trabajos profesionales.',
		// TODO: Add 'projects.content.portfolio....'
		'projects.content.title': 'Mi Portafolio',
		'projects.metadata.description':
			'Bienvenido a mi portafolio que muestra mi trayectoria como desarrollador de software en la industria de la tecnología. Aquí encontrarás una colección de mis trabajos que reflejan mi pasión por la programación y la resolución de problemas. Desde proyectos personales hasta aplicaciones empresariales y contribuciones al código abierto, este portafolio abarca la amplitud de mi experiencia. He aprovechado una serie de tecnologías de vanguardia a través de mis proyectos, incluyendo JavaScript / TypeScript, ReactJS, TailwindCSS, Phoenix LiveView, Elixir, NextJS, y Remix. Cada proyecto representa un desafío único y demuestra mi capacidad para construir soluciones robustas, escalables y fáciles de usar. Siéntase libre de explorar la diversa gama de aplicaciones, profundizar en el código, y ser testigo de la creatividad y la artesanía que entró en cada esfuerzo.',
		'projects.metadata.title': 'Portafolio',
		'socials.email': 'Envíeme un correo electrónico directamente',
		'socials.github': 'Sígueme en GitHub',
		'socials.instagram': 'Sígueme en Instagram',
		'socials.linkedin': 'Sígueme en LinkedIn',
		'socials.telegram': 'Sígueme en Telegram',
		'socials.twitter': 'Sígueme en Twitter',
		'uses.content.intro':
			'Me preguntan mucho sobre las cosas que utilizo para crear software, mantenerme productivo o comprar para engañarme a mí mismo haciéndome creer que estoy siendo productivo cuando en realidad sólo estoy procrastinando. Aquí tienes una lista de mis cosas favoritas.',
		'uses.content.section-one.title': 'Estación de trabajo',
		'uses.content.section-two.title': 'Herramientas de desarrollo',
		'uses.content.section-three.title': 'Productividad',
		// TODO: Add 'uses.content.XXX....'
		'uses.content.title':
			'Mi estación de trabajo, herramientas de desarrollo y aplicaciones de productividad',
		'uses.metadata.description':
			'Bienvenido a la página de mi estación de trabajo y herramientas, donde podrás descubrir la tecnología y las herramientas que impulsan mi productividad y me permiten ofrecer resultados excepcionales. El corazón de mi configuración es el potente MacBook Pro M1 de 14", que me proporciona un rendimiento y una velocidad inigualables. Para programar, confío en el versátil y completo editor Visual Studio Code (VS Code), que mejora mi experiencia de desarrollo. Para agilizar mi flujo de trabajo y aumentar la eficiencia, utilizo herramientas de productividad como Alfred, una potente herramienta de búsqueda y automatización, y Paste, un gestor del portapapeles que me ayuda a organizar y acceder sin esfuerzo al contenido que copio. Además, aprovecho Homebrew, un gestor de paquetes para macOS, para instalar y gestionar sin esfuerzo diversos paquetes de software. Como complemento a mis herramientas digitales, doy prioridad a la ergonomía con un escritorio y una silla Autonomous AI, que garantizan un entorno de trabajo cómodo y propicio. Para mejorar mi experiencia visual, confío en un monitor Dell de alta calidad que ofrece colores nítidos y vibrantes. Con esta cuidada combinación de hardware y software, mi estación de trabajo me permite alcanzar una productividad óptima y ofrecer resultados excepcionales.',
		'uses.metadata.title': 'Usa',
	},
} as const
