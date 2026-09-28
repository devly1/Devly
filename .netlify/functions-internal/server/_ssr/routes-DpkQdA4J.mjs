import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Menu, c as Instagram, d as ChevronDown, f as Check, i as MessageCircle, l as Facebook, n as Send, o as MapPin, p as ArrowRight, r as RotateCcw, s as Mail, t as X, u as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DpkQdA4J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var devly_logo_png_default = "/assets/devly-logo.png-Efdgvyqc.png";
/**
* Datos de contacto y contenido editable de Devly.
* Reemplaza los placeholders por los datos reales cuando estén disponibles.
*/
var WHATSAPP_NUMBER = "526621617989";
var INSTAGRAM_URL = "https://www.instagram.com/devly.web";
var FACEBOOK_URL = "https://www.facebook.com/devly.Weeb/";
var EMAIL = "devlycontact1@gmail.com";
var WHATSAPP_MESSAGE = "Hola Devly, me interesa una página web para mi negocio. Quiero recibir información.";
function whatsappLink(message = WHATSAPP_MESSAGE) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
var NAV_LINKS = [
	{
		label: "Inicio",
		href: "#inicio"
	},
	{
		label: "Servicios",
		href: "#servicios"
	},
	{
		label: "Proyectos",
		href: "#proyectos"
	},
	{
		label: "Proceso",
		href: "#proceso"
	},
	{
		label: "Precios",
		href: "#precios"
	},
	{
		label: "FAQ",
		href: "#faq"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-out", scrolled ? "glass-panel border-b" : "border-b border-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Navegación principal",
			className: "mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:h-24 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#inicio",
					className: "flex min-w-0 items-center",
					"aria-label": "Devly Web Studio, inicio",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: devly_logo_png_default,
						alt: "Devly Web Studio",
						width: 472,
						height: 406,
						className: "h-16 w-auto shrink-0 rounded-sm object-contain sm:h-20"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "ml-auto hidden items-center gap-1 lg:flex",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors",
						children: link.label
					}) }, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2 lg:ml-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#cotizar",
						className: "button-primary rounded-md px-4 py-2.5 text-sm font-semibold whitespace-nowrap sm:px-5",
						children: "Hablemos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Cerrar menú" : "Abrir menú",
						"aria-expanded": open,
						className: "border-border text-foreground hover:bg-surface-2 grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("glass-panel overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-out lg:hidden", open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col p-3",
				children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "text-foreground/90 hover:bg-surface-2 block rounded-lg px-4 py-3 text-base font-medium transition-colors",
					children: link.label
				}) }, link.href))
			})
		})]
	});
}
var hero_mockup_default = "/assets/hero-mockup-BwEzvalq.jpg";
/** Anima el contenido con un fade + slide-up suave al entrar en el viewport. */
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", visible && "reveal-in", className),
		children
	});
}
var TAGS = [
	"Páginas para negocios",
	"Tiendas en línea",
	"Sistemas a medida"
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "inicio",
		className: "pt-28 pb-16 sm:pt-36 sm:pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "text-brand inline-flex items-center gap-2 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "h-4 w-4",
						"aria-hidden": true
					}), "Hermosillo, Sonora · proyectos en todo México"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "h1",
					delay: 80,
					className: "mt-6 max-w-[13ch] text-4xl leading-[1.08] font-bold sm:text-6xl",
					children: ["Una página clara, hecha para ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: "tu negocio."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "p",
					delay: 160,
					className: "text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg",
					children: "Te ayudamos a explicar lo que haces, mostrar por qué elegirte y recibir mensajes de clientes desde su celular."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 240,
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#cotizar",
						className: "button-primary group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold",
						children: ["Cuéntame qué necesitas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#proyectos",
						className: "border-border-strong text-foreground hover:bg-surface-2 inline-flex items-center justify-center rounded-md border px-6 py-3.5 text-base font-semibold transition-colors",
						children: "Ver conceptos"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 320,
					className: "border-border mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t pt-5",
					as: "ul",
					children: TAGS.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-muted-foreground text-sm",
						children: tag
					}, tag))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 200,
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "image-frame relative p-2 sm:p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_mockup_default,
						alt: "Vista de una página web adaptada a computadora y celular",
						width: 1408,
						height: 1104,
						fetchPriority: "high",
						className: "aspect-[1.2] w-full object-cover object-center"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-5 max-w-md border-l-2 border-brand/60 pl-3 text-sm leading-relaxed",
					children: "Diseño, desarrollo y publicación, con una persona real al otro lado."
				})]
			})]
		})
	});
}
var DELIVERABLES = [
	{
		number: "01",
		title: "Una estructura clara",
		detail: "La información importante queda en el lugar donde el cliente espera encontrarla."
	},
	{
		number: "02",
		title: "Una experiencia cuidada",
		detail: "La página se revisa en celular y computadora antes de publicarse."
	},
	{
		number: "03",
		title: "Un siguiente paso concreto",
		detail: "WhatsApp, formulario o llamada: dejamos claro cómo puede contactarte la gente."
	}
];
function Deliverables() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Qué incluye trabajar con Devly",
		className: "bg-surface border-border border-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl divide-y divide-border px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8",
			children: DELIVERABLES.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "article",
				delay: index * 80,
				className: "grid grid-cols-[2.25rem_1fr] gap-x-4 py-6 first:pt-7 last:pb-7 md:px-7 md:py-7 md:first:pl-0 md:last:pr-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-brand/80 text-sm font-semibold",
					children: item.number
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-1.5 text-sm leading-relaxed",
					children: item.detail
				})] })]
			}, item.number))
		})
	});
}
var CATEGORIES = [
	"Restaurantes",
	"Barberías",
	"Servicios",
	"Eventos",
	"Tiendas",
	"Profesionales"
];
function Trust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Tipos de negocio",
		className: "bg-surface border-border border-y py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "p",
					className: "text-foreground text-sm font-semibold sm:max-w-48",
					children: "Hecho para negocios como el tuyo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-x-6 gap-y-3",
					children: CATEGORIES.map((category, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-muted-foreground inline-flex text-sm ${i === 0 ? "" : "border-border border-l pl-3"}`,
							children: category
						})
					}, category))
				})]
			})
		})
	});
}
function SectionHeading({ eyebrow, title, subtitle, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mx-0 max-w-3xl text-left", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "p",
				className: "text-brand border-brand border-l-2 pl-3 text-xs font-bold uppercase",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "h2",
				delay: 60,
				className: "mt-4 text-3xl leading-tight font-bold sm:text-4xl",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "p",
				delay: 120,
				className: "text-muted-foreground mt-4 text-base sm:text-lg",
				children: subtitle
			}) : null
		]
	});
}
var SERVICES$1 = [
	{
		title: "Landing Pages",
		description: "Páginas modernas diseñadas para presentar tu negocio, servicio o producto y generar contactos.",
		features: [
			"Diseño personalizado",
			"Responsive",
			"WhatsApp",
			"Galería",
			"Formularios",
			"CTA estratégicos"
		]
	},
	{
		title: "Sitios Web Empresariales",
		description: "Una presencia digital completa para mostrar tus servicios, información y convertir visitantes en clientes.",
		features: [
			"Varias secciones",
			"Diseño profesional",
			"SEO básico",
			"Google Maps",
			"Formularios",
			"Integraciones"
		]
	},
	{
		title: "E-commerce",
		description: "Tiendas online para mostrar productos, recibir pedidos y comenzar a vender por internet.",
		features: [
			"Catálogo",
			"Productos",
			"Carrito",
			"Pedidos",
			"Diseño personalizado"
		]
	},
	{
		title: "Soluciones Digitales",
		description: "Desarrollamos herramientas adaptadas a las necesidades específicas de tu negocio.",
		features: [
			"Sistemas personalizados",
			"Automatización",
			"Integraciones",
			"Funciones especiales"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Lo que hacemos",
				title: "Construimos solo lo que tu negocio necesita.",
				subtitle: "Desde una página sencilla hasta una solución más completa. Definimos el alcance contigo antes de empezar."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-x-10 sm:grid-cols-2",
				children: SERVICES$1.map(({ title, description, features }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group border-border grid h-full grid-cols-[2.25rem_1fr] gap-x-4 border-t py-6 transition-colors duration-200 hover:border-brand/45",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-brand/80 row-span-3 pt-1 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-0.5",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold transition-colors duration-200 group-hover:text-brand",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-3 text-sm leading-relaxed",
								children: description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "text-muted-foreground mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs",
								children: features.slice(0, 4).map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "text-brand h-3.5 w-3.5",
										"aria-hidden": true
									}), feature]
								}, feature))
							})
						]
					})
				}, title))
			})]
		})
	});
}
var project_barberia_default = "/assets/project-barberia-Bv6P7ryg.jpg";
var project_restaurante_default = "/assets/project-restaurante-B3gmcsqq.jpg";
var project_eventos_default = "/assets/project-eventos-B3Xw3UB9.jpg";
var project_fotografia_default = "/assets/project-fotografia-BZbSxlkV.jpg";
var project_tienda_default = "/assets/project-tienda-CcdwW5pi.jpg";
var FILTERS = [
	"Todos",
	"Landing Pages",
	"Negocios",
	"Restaurantes",
	"Barberías",
	"Profesionales",
	"E-commerce"
];
/** Conceptos visuales para mostrar distintos tipos de proyecto, no trabajos de clientes. */
var PROJECTS = [
	{
		name: "Concepto para barbería",
		category: "Barberías",
		tags: ["Barberías", "Landing Pages"],
		description: "Horarios, servicios y una forma sencilla de reservar desde el celular.",
		image: project_barberia_default
	},
	{
		name: "Concepto para restaurante",
		category: "Restaurantes",
		tags: ["Restaurantes", "Negocios"],
		description: "Menú, ubicación y contacto, sin hacer que el cliente tenga que buscar.",
		image: project_restaurante_default
	},
	{
		name: "Concepto para eventos",
		category: "Negocios",
		tags: ["Negocios", "Landing Pages"],
		description: "Espacios, paquetes y detalles importantes para quien está organizando.",
		image: project_eventos_default
	},
	{
		name: "Concepto para fotografía",
		category: "Landing Pages",
		tags: ["Landing Pages", "Negocios"],
		description: "Una galería que deja que el trabajo hable y facilita pedir una sesión.",
		image: project_fotografia_default
	},
	{
		name: "Concepto de tienda en línea",
		category: "E-commerce",
		tags: ["E-commerce"],
		description: "Productos, precios y pedidos reunidos en un solo lugar.",
		image: project_tienda_default
	},
	{
		name: "Concepto para profesionales",
		category: "Profesionales",
		tags: ["Profesionales", "Negocios"],
		description: "Servicios, experiencia y contacto organizados para generar confianza.",
		image: hero_mockup_default
	}
];
function Portfolio() {
	const [filter, setFilter] = (0, import_react.useState)("Todos");
	const visible = filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proyectos",
		className: "bg-surface/30 border-border border-y py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Ideas en pantalla",
					title: "Así podría tomar forma tu página.",
					subtitle: "Son conceptos de muestra, no trabajos de clientes. Cada proyecto real empieza desde cero contigo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "border-border mt-10 flex flex-wrap gap-x-5 border-b",
					as: "div",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f),
						"aria-pressed": filter === f,
						className: cn("border-b-2 px-1 py-3 text-sm font-medium transition-colors", filter === f ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border-strong"),
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: visible.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-premium group h-full overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: `Mockup del proyecto: ${project.name}`,
									loading: "lazy",
									width: 1200,
									height: 912,
									className: "aspect-[4/3] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-brand text-xs font-semibold tracking-[0.18em] uppercase",
										children: project.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-base font-semibold",
										children: project.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground mt-2 text-sm leading-relaxed",
										children: project.description
									})
								]
							})]
						})
					}, project.name))
				})
			]
		})
	});
}
var BENEFITS = [
	{
		title: "Primero entendemos qué haces",
		description: "La estructura y el contenido parten de tu negocio, no de una plantilla genérica."
	},
	{
		title: "Pensada para el celular",
		description: "Tus clientes pueden leer, explorar y contactarte desde el teléfono que ya usan."
	},
	{
		title: "Sin vueltas para encontrar lo importante",
		description: "Ordenamos la información para que tus servicios y datos de contacto estén claros."
	},
	{
		title: "Hablas con quien hace tu sitio",
		description: "Revisamos contigo cada decisión y te explicamos qué estamos construyendo."
	}
];
function WhyDevly() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "por-que-devly",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "La forma de trabajar",
				title: "Tu negocio no cabe en una plantilla."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2",
				children: BENEFITS.map(({ title, description }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-border grid h-full min-w-0 grid-cols-[2.25rem_1fr] gap-x-4 border-t py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-brand/80 pt-0.5 text-sm font-semibold",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm leading-relaxed",
								children: description
							})]
						})]
					})
				}, title))
			})]
		})
	});
}
var STEPS = [
	{
		number: "01",
		title: "Platicamos",
		description: "Nos cuentas qué haces, qué te gustaría mejorar y qué necesita saber tu cliente."
	},
	{
		number: "02",
		title: "Aterrizamos el plan",
		description: "Definimos juntos el contenido, las secciones y el presupuesto antes de empezar."
	},
	{
		number: "03",
		title: "Diseñamos y construimos",
		description: "Te mostramos avances y ajustamos los detalles contigo mientras trabajamos."
	},
	{
		number: "04",
		title: "La ponemos en línea",
		description: "Revisamos cómo se ve en celular y computadora antes de compartirla."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proceso",
		className: "bg-surface/30 border-border border-y py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "El proceso",
				title: "Paso a paso, sin sorpresas."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-brand/35 absolute top-0 bottom-0 left-[1.4rem] w-px lg:top-[1.4rem] lg:right-0 lg:left-0 lg:h-px lg:w-auto",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "relative grid gap-10 lg:grid-cols-4 lg:gap-6",
					children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: i * 110,
						className: "relative min-w-0 pl-16 lg:pl-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border-brand/50 bg-background text-brand font-display absolute left-0 grid h-11 w-11 place-items-center rounded-full border text-sm font-bold lg:static lg:mb-6",
								children: step.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm leading-relaxed",
								children: step.description
							})
						]
					}, step.number))
				})]
			})]
		})
	});
}
var PLANS = [
	{
		name: "LANDING",
		price: "Desde $2,500 MXN",
		ideal: "Para presentar tus servicios y hacer fácil que te contacten.",
		features: [
			"Diseño personalizado",
			"Una página",
			"Responsive",
			"Botón de WhatsApp",
			"Galería",
			"Información del negocio",
			"Formulario/contacto",
			"Publicación"
		],
		cta: "Cotizar landing",
		featured: false
	},
	{
		name: "EMPRESARIAL",
		price: "Desde $4,500 MXN",
		ideal: "Para explicar con más detalle lo que hace tu negocio.",
		features: [
			"Todo lo de Landing",
			"Más secciones",
			"Google Maps",
			"SEO básico",
			"Galería avanzada",
			"Formularios",
			"Integraciones"
		],
		cta: "Cotizar sitio",
		featured: true
	},
	{
		name: "E-COMMERCE",
		price: "Desde $7,000 MXN",
		ideal: "Para negocios que quieren vender online.",
		features: [
			"Catálogo",
			"Productos",
			"Carrito",
			"Pedidos",
			"Diseño personalizado",
			"Configuración inicial"
		],
		cta: "Platicar sobre una tienda",
		featured: false
	}
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "precios",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Inversión inicial",
					title: "Una idea clara de cuánto cuesta empezar."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid items-stretch gap-5 lg:grid-cols-3",
					children: PLANS.map((plan, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("card-premium flex h-full flex-col p-7", plan.featured && "border-brand/55"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm font-bold tracking-[0.22em]",
									children: plan.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-2xl font-bold sm:text-3xl",
									children: plan.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mt-3 text-sm leading-relaxed",
									children: plan.ideal
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2.5",
									children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "text-brand mt-0.5 h-4 w-4 shrink-0",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground/85",
											children: f
										})]
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#cotizar",
									className: cn("mt-auto inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors", plan.featured ? "button-primary" : "border-border-strong hover:bg-surface-2 border"),
									children: plan.cta
								})
							]
						})
					}, plan.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "p",
					className: "text-muted-foreground mx-auto mt-10 max-w-2xl text-center text-sm",
					children: "El precio final depende del contenido y las funciones. Te confirmamos el alcance y el costo antes de comenzar."
				})
			]
		})
	});
}
var GUIDES = [
	{
		category: "Tu página",
		title: "En cinco segundos, debe entenderse qué haces",
		summary: "Alguien que llega por primera vez debería encontrar qué ofreces, para quién y cómo contactarte sin ponerse a buscar.",
		tip: "Empieza con una frase directa sobre tu servicio. Después muestra tus servicios principales y un botón visible para escribirte."
	},
	{
		category: "Contacto",
		title: "Haz que escribirte sea el paso más fácil",
		summary: "Si la mayoría de tus clientes usa WhatsApp, pon el acceso junto a la información que les ayuda a decidir.",
		tip: "Un botón con un mensaje inicial sobre el servicio que vio le ahorra pasos al cliente y te da contexto para responder."
	},
	{
		category: "Fotografía",
		title: "Muestra tu trabajo como es",
		summary: "Fotos propias del local, productos o equipo ayudan a que la gente sepa qué esperar antes de ponerse en contacto.",
		tip: "Usa imágenes claras y recientes. Unas pocas fotos reales suelen contar más que una galería extensa de imágenes genéricas."
	}
];
function AdviceGuides() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "consejos",
		className: "py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Ideas para tu negocio",
				title: "Pequeños cambios que hacen más clara tu presencia en línea.",
				subtitle: "Consejos prácticos para que tus clientes entiendan qué ofreces y sepan cómo dar el siguiente paso."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3",
				children: GUIDES.map((guide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "article",
					delay: index * 90,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-brand mb-5 flex items-center gap-3 border-t pt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand text-xs font-bold uppercase",
								children: guide.category
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl leading-snug font-bold",
							children: guide.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-3 text-sm leading-relaxed",
							children: guide.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/85 mt-4 border-l border-brand/60 pl-3 text-sm leading-relaxed",
							children: guide.tip
						})
					]
				}, guide.title))
			})]
		})
	});
}
var CHECKLIST = [
	{
		id: "business",
		title: "Nombre y datos del negocio",
		detail: "Nombre, ubicación y horarios si recibes clientes en un local."
	},
	{
		id: "services",
		title: "Servicios o productos",
		detail: "Qué ofreces, a quién y, si puedes, precios o rangos aproximados."
	},
	{
		id: "copy",
		title: "Textos principales",
		detail: "Una descripción breve del negocio y lo que quieres destacar."
	},
	{
		id: "images",
		title: "Fotos de tu trabajo",
		detail: "Imágenes propias del local, productos, equipo o proyectos."
	},
	{
		id: "brand",
		title: "Logo y colores de marca",
		detail: "Si no tienes logo, podemos empezar con el nombre y tus colores preferidos."
	},
	{
		id: "domain",
		title: "Dominio, si ya tienes uno",
		detail: "Compártenos el nombre o acceso. Si aún no tienes, podemos orientarte."
	}
];
function LaunchChecklist() {
	const [checkedItems, setCheckedItems] = (0, import_react.useState)([]);
	const completedCount = checkedItems.length;
	const progress = Math.round(completedCount / CHECKLIST.length * 100);
	function toggleItem(id) {
		setCheckedItems((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "preparar",
		className: "bg-surface/30 border-border border-y py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Antes de empezar",
				title: "Prepara lo esencial para tu página.",
				subtitle: "No necesitas tenerlo todo listo. Marca lo que ya tienes y revisamos juntos lo que falte."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				className: "mt-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#cotizar",
					className: "button-primary inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold",
					children: "Hablar sobre mi proyecto"
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-premium p-5 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Tu checklist"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground mt-1 text-sm",
								"aria-live": "polite",
								children: [
									completedCount,
									" de ",
									CHECKLIST.length,
									" listos"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setCheckedItems([]),
								disabled: completedCount === 0,
								className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
									className: "h-4 w-4",
									"aria-hidden": true
								}), "Reiniciar"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-surface-2 mt-4 h-1.5 overflow-hidden rounded-full",
							role: "progressbar",
							"aria-label": "Progreso del checklist",
							"aria-valuemin": 0,
							"aria-valuemax": CHECKLIST.length,
							"aria-valuenow": completedCount,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-brand h-full transition-[width] duration-300 ease-out",
								style: { width: `${progress}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 divide-y divide-border",
							children: CHECKLIST.map((item) => {
								const checked = checkedItems.includes(item.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "-mx-2 flex cursor-pointer items-start gap-3 rounded-sm px-2 py-4 transition-colors duration-150 hover:bg-surface/45 focus-within:bg-surface/45",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked,
										onChange: () => toggleItem(item.id),
										className: "accent-brand mt-1 h-4 w-4 shrink-0"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `block text-sm font-semibold transition-colors duration-200 ${checked ? "text-muted-foreground line-through" : "text-foreground"}`,
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground mt-1 block text-sm leading-relaxed",
											children: item.detail
										})]
									})]
								}) }, item.id);
							})
						})
					]
				})
			})]
		})
	});
}
var PROJECT_TYPES = [
	"Landing Page",
	"Sitio empresarial",
	"E-commerce",
	"Sistema personalizado",
	"No estoy seguro"
];
var BUDGETS = [
	"Menos de $2,500",
	"$2,500 - $5,000",
	"$5,000 - $10,000",
	"Más de $10,000"
];
var fieldClass = "w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand focus:outline-none";
function QuoteForm() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const emailServiceId = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_EMAILJS_PUBLIC_KEY": "Pmg4nvn5WKoaykqox",
		"VITE_EMAILJS_SERVICE_ID": "service_8rn9rms",
		"VITE_EMAILJS_TEMPLATE_ID": "template_rtgzo2l"
	}["VITE_EMAILJS_SERVICE_ID"];
	const emailTemplateId = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_EMAILJS_PUBLIC_KEY": "Pmg4nvn5WKoaykqox",
		"VITE_EMAILJS_SERVICE_ID": "service_8rn9rms",
		"VITE_EMAILJS_TEMPLATE_ID": "template_rtgzo2l"
	}["VITE_EMAILJS_TEMPLATE_ID"];
	const emailPublicKey = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_EMAILJS_PUBLIC_KEY": "Pmg4nvn5WKoaykqox",
		"VITE_EMAILJS_SERVICE_ID": "service_8rn9rms",
		"VITE_EMAILJS_TEMPLATE_ID": "template_rtgzo2l"
	}["VITE_EMAILJS_PUBLIC_KEY"];
	async function handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const get = (k) => String(data.get(k) ?? "").trim();
		const next = {};
		if (get("nombre").length < 2) next["nombre"] = "Escribe tu nombre.";
		if (get("negocio").length < 2) next["negocio"] = "Escribe el nombre de tu negocio.";
		if (!/^[\d+\s()-]{8,}$/.test(get("whatsapp"))) next["whatsapp"] = "Escribe un WhatsApp válido.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("correo"))) next["correo"] = "Escribe un correo válido.";
		if (!get("tipo")) next["tipo"] = "Selecciona el tipo de proyecto.";
		if (!get("presupuesto")) next["presupuesto"] = "Selecciona un presupuesto aproximado.";
		if (get("mensaje").length < 10) next["mensaje"] = "Cuéntanos un poco más de tu proyecto.";
		setErrors(next);
		if (Object.keys(next).length > 0) return;
		setSubmitError("");
		setSending(true);
		try {
			if (!emailServiceId || !emailTemplateId || !emailPublicKey) throw new Error("EmailJS todavía no está configurado.");
			await es_default.send(emailServiceId, emailTemplateId, {
				nombre: get("nombre"),
				negocio: get("negocio"),
				whatsapp: get("whatsapp"),
				correo: get("correo"),
				tipo: get("tipo"),
				presupuesto: get("presupuesto"),
				mensaje: get("mensaje")
			}, { publicKey: emailPublicKey });
			setSent(true);
		} catch {
			setSubmitError("No se pudo enviar tu solicitud. Revisa la configuración del formulario o inténtalo más tarde.");
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cotizar",
		className: "bg-surface/30 border-border border-y py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Cotización",
				title: "Cuéntanos qué necesitas",
				subtitle: "Describe lo que haces y qué te gustaría resolver. Revisaremos tu mensaje y te contactaremos para conversar sobre el alcance."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				className: "mt-12",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-premium p-8 text-center sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "text-brand mx-auto h-12 w-12",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-2xl font-bold",
							children: "¡Solicitud enviada!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mx-auto mt-3 max-w-md text-sm leading-relaxed",
							children: "Gracias por contactar a Devly. Revisaremos tu proyecto y nos pondremos en contacto contigo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSent(false),
							className: "border-border-strong hover:bg-surface-2 mt-7 rounded-md border px-6 py-2.5 text-sm font-semibold transition-colors",
							children: "Enviar otra solicitud"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					noValidate: true,
					className: "card-premium grid gap-5 p-6 sm:p-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Nombre",
									name: "nombre",
									error: errors["nombre"],
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "nombre",
										name: "nombre",
										className: fieldClass,
										placeholder: "Tu nombre"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Nombre del negocio",
									name: "negocio",
									error: errors["negocio"],
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "negocio",
										name: "negocio",
										className: fieldClass,
										placeholder: "Nombre de tu negocio"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "WhatsApp",
									name: "whatsapp",
									error: errors["whatsapp"],
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "whatsapp",
										name: "whatsapp",
										type: "tel",
										className: fieldClass,
										placeholder: "10 dígitos"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Correo",
									name: "correo",
									error: errors["correo"],
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "correo",
										name: "correo",
										type: "email",
										className: fieldClass,
										placeholder: "tucorreo@ejemplo.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Tipo de proyecto",
									name: "tipo",
									error: errors["tipo"],
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "tipo",
										name: "tipo",
										defaultValue: "",
										className: fieldClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Selecciona una opción"
										}), PROJECT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: t,
											children: t
										}, t))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Presupuesto aproximado",
									name: "presupuesto",
									error: errors["presupuesto"],
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "presupuesto",
										name: "presupuesto",
										defaultValue: "",
										className: fieldClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Selecciona una opción"
										}), BUDGETS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: b,
											children: b
										}, b))]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "¿Qué necesitas?",
							name: "mensaje",
							error: errors["mensaje"],
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "mensaje",
								name: "mensaje",
								rows: 5,
								className: fieldClass,
								placeholder: "Cuéntanos sobre tu negocio y lo que necesitas en tu página."
							})
						}),
						submitError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-destructive text-sm",
							children: submitError
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: sending,
							className: "button-primary inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
								className: "h-4 w-4",
								"aria-hidden": true
							}), sending ? "Enviando..." : "Solicitar cotización"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-center text-xs",
							children: "Usaremos tus datos únicamente para responder a esta consulta."
						})
					]
				})
			})]
		})
	});
}
function Field({ label, name, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: name,
				className: "text-foreground/85 mb-2 block text-sm font-medium",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "text-destructive mt-2 text-xs",
				children: error
			}) : null
		]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var FAQS = [
	{
		q: "¿Cuánto tarda una página web?",
		a: "Depende del alcance y de cuándo estén listos los textos y las fotos. Antes de empezar te compartimos un calendario realista para tu proyecto."
	},
	{
		q: "¿El dominio y el hospedaje están incluidos?",
		a: "Son costos aparte cuando el proyecto los necesita. Antes de comenzar te explicamos cuáles aplican, cuánto cuestan y a nombre de quién queda cada cuenta."
	},
	{
		q: "¿Qué debo tener listo para empezar?",
		a: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Ayuda tener el nombre del negocio, tus servicios y algunas fotos. No hace falta tenerlo todo resuelto; puedes revisar nuestra",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#preparar",
				className: "text-brand underline underline-offset-4",
				children: "lista de preparación"
			}),
			"."
		] })
	},
	{
		q: "¿La página funciona en celular?",
		a: "Sí. Revisamos cada página en móvil y escritorio antes de publicarla."
	},
	{
		q: "¿Puedo modificar mi página después?",
		a: "Sí. Podemos cotizar cambios puntuales o acordar mantenimiento según lo que necesite tu sitio."
	},
	{
		q: "¿Puedo conectar WhatsApp?",
		a: "Sí. Podemos agregar un acceso directo para que tus clientes te escriban desde la página."
	},
	{
		q: "¿Qué pasa después de pedir una cotización?",
		a: "Revisamos la información y nos ponemos en contacto para aclarar el alcance. Antes de empezar, confirmamos contigo el trabajo y el costo."
	}
];
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-surface/30 border-border border-y py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Dudas comunes",
				title: "Preguntas frecuentes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "space-y-3",
					children: FAQS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						className: "border-border bg-card rounded-md border px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left text-base font-semibold hover:no-underline",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground text-sm leading-relaxed",
							children: item.a
						})]
					}, item.q))
				})
			})]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "bg-surface-2 text-foreground py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "p",
						className: "text-accent text-sm font-semibold",
						children: "¿Lo platicamos?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "h2",
						delay: 60,
						className: "mt-3 text-3xl leading-tight font-bold sm:text-4xl",
						children: "Hablemos de lo que necesita tu negocio."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "p",
						delay: 120,
						className: "text-foreground/75 mt-4 text-base leading-relaxed",
						children: "Cuéntanos qué haces y qué te gustaría mejorar. Te respondemos personalmente."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 180,
				className: "flex flex-col gap-3 sm:flex-row md:flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#cotizar",
					className: "button-primary group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold",
					children: ["Cuéntame mi idea", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: whatsappLink(),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "border-foreground/35 text-foreground hover:bg-foreground/10 inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3.5 text-base font-semibold transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "h-4 w-4",
						"aria-hidden": true
					}), "Hablar por WhatsApp"]
				})]
			})]
		})
	});
}
var NAV = [
	{
		label: "Inicio",
		href: "#inicio"
	},
	{
		label: "Servicios",
		href: "#servicios"
	},
	{
		label: "Proyectos",
		href: "#proyectos"
	},
	{
		label: "Precios",
		href: "#precios"
	},
	{
		label: "Consejos",
		href: "#consejos"
	},
	{
		label: "Preparar proyecto",
		href: "#preparar"
	},
	{
		label: "FAQ",
		href: "#faq"
	}
];
var SERVICES = [
	{
		label: "Landing Pages",
		href: "#servicios"
	},
	{
		label: "Sitios Web",
		href: "#servicios"
	},
	{
		label: "E-commerce",
		href: "#servicios"
	},
	{
		label: "Soluciones Digitales",
		href: "#servicios"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-border bg-surface/40 border-t",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: devly_logo_png_default,
							alt: "Devly Web Studio",
							width: 472,
							height: 406,
							loading: "lazy",
							className: "h-28 w-auto object-contain object-left"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed",
							children: "Diseño y desarrollo web para negocios que quieren explicar mejor lo que hacen."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
						title: "Navegación",
						items: NAV
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
						title: "Servicios",
						items: SERVICES
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold tracking-wide",
							children: "Contacto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappLink(),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-muted-foreground hover:text-brand inline-flex items-center gap-2 text-sm transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "h-4 w-4 shrink-0",
										"aria-hidden": true
									}), "WhatsApp"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: INSTAGRAM_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-muted-foreground hover:text-brand inline-flex items-center gap-2 text-sm transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
										className: "h-4 w-4 shrink-0",
										"aria-hidden": true
									}), "Instagram"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: FACEBOOK_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-muted-foreground hover:text-brand inline-flex items-center gap-2 text-sm transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
										className: "h-4 w-4 shrink-0",
										"aria-hidden": true
									}), "Facebook"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${EMAIL}`,
									className: "text-muted-foreground hover:text-brand inline-flex items-center gap-2 text-sm transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "h-4 w-4 shrink-0",
										"aria-hidden": true
									}), "Correo"]
								}) })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border mt-12 border-t pt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground/80 text-center text-xs",
					children: "© 2026 Devly. Todos los derechos reservados."
				})
			})]
		})
	});
}
function FooterColumn({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-sm font-semibold tracking-wide",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-2.5",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				className: "text-muted-foreground hover:text-brand text-sm transition-colors",
				children: item.label
			}) }, item.label))
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappLink(),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Escríbenos por WhatsApp: ¿Tienes un proyecto?",
		className: "glass-panel hover:border-brand/50 group fixed right-4 bottom-4 z-50 flex items-center gap-2.5 rounded-full py-3 pr-4 pl-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-0.5 sm:right-6 sm:bottom-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "bg-gradient-brand text-primary-foreground grid h-9 w-9 shrink-0 place-items-center rounded-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				className: "h-4.5 w-4.5",
				"aria-hidden": true
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-semibold whitespace-nowrap",
			children: "¿Tienes un proyecto?"
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-atmosphere bg-background min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deliverables, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyDevly, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdviceGuides, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaunchChecklist, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
//#endregion
export { Index as component };
