import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Box,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  Gauge,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  ServerCog,
  ShoppingBag,
  Workflow,
  Zap,
} from "lucide-react";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import { SITE_URL, site } from "./site";

const projects: Array<{ name: string; type: string; stack: string; tone: string; url?: string }> = [
  { name: "TrySkyMD", type: "Health & hydration commerce", stack: "Shopify · Liquid · eCommerce", tone: "cyan", url: "https://tryskymd.com/" },
  { name: "Oxford Pennant", type: "Custom goods commerce", stack: "Shopify · Liquid · Custom storefront", tone: "coral", url: "https://oxfordpennant.com/" },
  { name: "Big Green Egg Canada", type: "Premium outdoor commerce", stack: "Shopify · Liquid · Product discovery", tone: "lime", url: "https://biggreenegg.ca/" },
  { name: "Fody Foods", type: "Food & wellness commerce", stack: "Shopify · Liquid · Subscriptions", tone: "rose", url: "https://www.fodyfoods.com/" },
  { name: "Earth Rated", type: "Global pet-care storefront", stack: "Shopify · Liquid · Localization", tone: "amber", url: "https://www.earthrated.com/" },
  { name: "Peeko Oysters", type: "Technology . Food . Events", stack: "HubSpot · CDN · eCommerce", tone: "mint", url: "https://peekooysters.com/" },
  { name: "Unicon", type: "Technology . Education . Engineering", stack: "HubSpot · CDN · Automation", tone: "violet", url: "https://www.unicon.net/" },
];

const CARD_SIZES = "(max-width: 620px) calc(100vw - 88px), (max-width: 900px) calc(50vw - 62px), 368px";

const services = [
  ["TypeScript product engineering", "Type-safe, maintainable applications designed for complex workflows and long-term growth.", Braces],
  ["Next.js applications", "Fast, scalable products built with the App Router, React and modern server architecture.", Layers3],
  ["Node.js systems & APIs", "Secure backend services, REST APIs, webhooks, integrations and recurring workflows.", ServerCog],
  ["Shopify app engineering", "Embedded apps, Shopify Plus extensions, billing, analytics and custom commerce products.", ShoppingBag],
  ["HubSpot automation", "HubSpot CRM Automation, Lead Assignment & Routing, Sales Pipeline Automation, API Integrations, Advanced HubL Development, Custom Workflow Development", ShoppingBag],
];

const experience = [
  ["Mind&Metrics", "Shopify / HubSpot Developer · Part-time", "Sep 2024 — Present"],
  ["Apricotlaw", "Full Stack Developer", "Jul 2021 — Aug 2024"],
  ["Trellis", "Front-end / Shopify Developer", "Jul 2021 — Dec 2021"],
  ["iPlex", "WordPress / Shopify Development Team Lead", "Jun 2019 — Dec 2021"],
  ["iPlex", "WordPress / Shopify Developer", "Jun 2016 — May 2019"],
];

const stacks = [
  ["Frontend", "Next.js, React, TypeScript, Tailwind CSS", Code2],
  ["Backend", "Node.js, Express, REST APIs, Webhooks", ServerCog],
  ["Data", "PostgreSQL, Neon, MySQL", Database],
  ["Commerce", "Shopify Plus, Liquid, WooCommerce", ShoppingBag],
  ["Delivery", "Vercel, Fly.io, Railway, CI/CD", Workflow],
  ["Growth & analytics", "GA4, Google Ads, GTM, conversion tracking, Google Business Profile", Gauge],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: site.name,
      jobTitle: site.jobTitle,
      description: site.description,
      url: SITE_URL,
      email: `mailto:${site.email}`,
      image: `${SITE_URL}/opengraph-image`,
      sameAs: site.sameAs,
      knowsAbout: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Shopify", "Shopify Plus", "HubSpot", "WordPress", "SaaS"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: site.title,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

function SectionTitle({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow"><CircleDot size={13} /> {label}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav />

      <section className="hero" id="top">
        <div className="hero-noise" />
        <div className="hero-copy">
          <p className="availability fade-in">
            <span /> Available for select projects
          </p>
          <h1 className="rise-in">
            I engineer the<br />systems behind<br /><em>digital growth.</em>
          </h1>
          <p className="hero-intro fade-in d1">
            Noman Akhtar is a senior full stack engineer building fast, resilient products with TypeScript, Next.js, React and Node.js—backed by deep Shopify, HubSpot, WordPress and SaaS expertise.
          </p>
          <div className="hero-actions fade-in d2">
            <a href="#work" className="button primary">Explore selected work <ArrowDownRight size={17} /></a>
            <a href="#contact" className="text-link">Let&apos;s talk <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="system-card scale-in">
          <div className="console-bar"><span /><span /><span /><p>architecture.map</p><Braces size={15} /></div>
          <div className="system-map">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="node node-core"><Zap size={20} /><b>10+</b><small>years shipping</small></div>
            <div className="node node-shopify"><Braces size={15} /> TypeScript</div>
            <div className="node node-saas"><Layers3 size={15} /> Next.js</div>
            <div className="node node-api"><ServerCog size={15} /> Node.js</div>
            <svg className="paths" viewBox="0 0 500 420" aria-hidden="true">
              <path d="M250 210 C170 130 130 125 85 112" />
              <path d="M250 210 C335 120 385 118 420 88" />
              <path d="M250 210 C330 290 386 290 430 322" />
            </svg>
          </div>
          <div className="console-status"><span><Check size={13} /> Production ready</span><span>CET · Remote worldwide</span></div>
        </div>

        <div className="hero-foot">
          <p>Senior Full Stack Engineer</p>
          <p>TypeScript · Next.js · React · Node.js</p>
          <p>Based in USA · Working globally</p>
        </div>
      </section>

      <section className="journey-band" aria-label="Career journey">
        <div className="journey-intro">
          <p className="eyebrow"><CircleDot size={13} /> Career journey</p>
          <h2>From building websites to leading product systems.</h2>
        </div>
        <div className="journey-track">
          <div className="journey-step">
            <span className="journey-dot" />
            <small>2016 — 2018</small>
            <h3>Web engineering</h3>
            <p>Started with hands-on WordPress, frontend and backend development at iPlex.</p>
          </div>
          <div className="journey-step">
            <span className="journey-dot" />
            <small>2019 — 2024</small>
            <h3>International commerce</h3>
            <p>Expanded into Shopify and full stack product delivery with iPlex, Trellis and Apricotlaw.</p>
          </div>
          <div className="journey-step current">
            <span className="journey-dot" />
            <small>Sep 2026 — Present</small>
            <h3>Full stack engineering</h3>
            <p>Part-time Full Stack Engineer at Mind & Metrics (20 hours/month), building TypeScript, Next.js, Node.js, HubSpot and Shopify products from architecture through operations.</p>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <SectionTitle label="Selected work" title="Products built to perform in the real world." copy="Digital products I lead as the principal developer—from TypeScript, Next.js and Node.js architecture through Shopify, WordPress, release operations and ongoing product management." />
        <div className="featured-grid">
          <Reveal className="featured-card academy-card">
            <div className="project-meta"><span>Full-stack platform</span><span>01</span></div>
            <a className="academy-card-image" href="https://nxaacademy.com/" target="_blank" rel="noreferrer" aria-label="Visit the Next Athlete Academy website">
              <Image
                src="/projects/next-athlete-academy/recruitment-platform.webp"
                alt="Next Athlete Academy student-athlete recruitment website"
                width={1400}
                height={792}
                sizes={CARD_SIZES}
              />
            </a>
            <h3>Next Athlete Academy</h3>
            <p>A student-athlete recruitment platform that tracks applications, orientations and documents, then surfaces stage progress, completion status and parents falling behind.</p>
            <div className="tag-row"><span>Next.js</span><span>TypeScript</span><span>PostgreSQL</span></div>
            <a className="project-live" href="https://nxaacademy.com/" target="_blank" rel="noreferrer">Visit live platform <ArrowUpRight size={15} /></a>
          </Reveal>
          <Reveal className="featured-card monitor-card">
            <div className="project-meta"><span>Shopify application</span><span>02</span></div>
            <div className="product-banner">
              <Image src="/projects/product-conversion/00-banner.svg" alt="Product Conversion Monitor features including live dashboard, conversion drop alerts, revenue at risk, and product health scores" width={1600} height={600} unoptimized />
            </div>
            <h3>Product Conversion Monitor</h3>
            <p>A product-level analytics platform that tracks views, add-to-carts, purchases and revenue, then surfaces meaningful conversion drops, health scores and revenue at risk.</p>
            <div className="tag-row"><span>Analytics</span><span>Billing</span><span>Alerts</span></div>
            <a className="project-live" href="https://apps.shopify.com/product-conversion" target="_blank" rel="noreferrer">View on Shopify <ArrowUpRight size={15} /></a>
          </Reveal>
          <Reveal className="featured-card hockey-card">
            <div className="project-meta"><span>Membership platform</span><span>03</span></div>
            <div className="membership-feature-image">
              <Image src="/projects/hockey-hero/equipment-membership.webp" alt="Hockey Hero membership platform showing equipment plans, skater registration, and subscription options" width={1400} height={906} sizes={CARD_SIZES} />
            </div>
            <h3>Hockey Hero Equipment</h3>
            <p>A custom membership platform that connects athlete onboarding, recurring billing, account management and a self-service customer experience.</p>
            <div className="tag-row"><span>Shopify</span><span>Shopify Payments</span><span>Customer portal</span></div>
            <a className="project-live" href="https://hockeyhero.com/apps/membership" target="_blank" rel="noreferrer">View membership platform <ArrowUpRight size={15} /></a>
          </Reveal>
          <Reveal className="featured-card smartpop-card">
            <div className="project-meta"><span>Shopify application</span><span>04</span></div>
            <div className="smartpop-feature-image">
              <Image src="/projects/flytocartpro/flytocartbanner.png" alt="Fly to Cart, Custom Animtions, Custom Sound Effects" width={1400} height={776} sizes={CARD_SIZES} />
            </div>
            <h3>Fly to Cart Pro</h3>
            <p>Fly to Cart Pro enhances the shopping experience with customizable add-to-cart animations and sound effects for engaging, interactive storefronts. Choose from 8 animation styles and 8 sound effects, save multiple combinations, and activate your preferred setup anytime.</p>
            <div className="tag-row"><span>Cart</span><span>Animations</span><span>Sounds</span></div>
            <a className="project-live" href="https://apps.shopify.com/fly-to-cart-pro" target="_blank" rel="noreferrer">View on Shopify <ArrowUpRight size={15} /></a>
          </Reveal>
          <Reveal className="featured-card checkout-card">
            <div className="project-meta"><span>Shopify Plus application</span><span>05</span></div>
            <div className="checkout-feature-image">
              <Image src="/projects/smartbundle/smartbundles.webp" alt="Shine Checkout featuring 22 drag-and-drop Shopify Plus checkout blocks for upsells, urgency, trust, and gift options" width={1400} height={788} sizes={CARD_SIZES} />
            </div>
            <h3>Smart Bundle Upsell</h3>
            <p>A no-code checkout customizer for Shopify Plus that lets merchants arrange upsells, trust content, reviews, custom fields and conversion-focused blocks from one dashboard.</p>
            <div className="tag-row"><span>Shopify Plus</span><span>Checkout UI</span><span>Upsells</span></div>
            <a className="project-live" href="https://apps.shopify.com/checkout-enhancer-for-plus" target="_blank" rel="noreferrer">View on Shopify <ArrowUpRight size={15} /></a>
          </Reveal>
          <Reveal className="featured-card decent-card">
            <div className="project-meta"><span>Web application & CRM</span><span>06</span></div>
            <div className="decent-visual">
              <div className="decent-brand"><small>DECENT</small><b>Music<br />moves people.</b><span>PR · Playlisting · Radio · Ads</span></div>
              <div className="sound-wave">{[32,58,41,82,66,94,48,74,37,61,88,54].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
            </div>
            <h3>Decent Music PR</h3>
            <p>A React-based digital platform for a music promotion agency, combining a WordPress-managed content and data layer with a Railway-hosted CRM that supports artist submissions, campaign workflows and ongoing client operations.</p>
            <div className="tag-row"><span>React</span><span>WordPress</span><span>Railway CRM</span></div>
            <a className="project-live" href="https://www.decentmusicpr.com/" target="_blank" rel="noreferrer">Visit live platform <ArrowUpRight size={15} /></a>
          </Reveal>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.name} className="project-row">
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <div className={`project-swatch ${project.tone}`}><Globe2 size={21} /></div>
              <div className="project-name"><h3>{project.name}</h3><p>{project.type}</p></div>
              <p className="project-stack">{project.stack}</p>
              {project.url ? (
                <a className="project-row-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight /></a>
              ) : (
                <span className="project-row-link muted" aria-hidden="true"><ArrowUpRight /></span>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <SectionTitle label="Engineering toolkit" title="Broad enough for the whole product. Deep where it matters." />
        <div className="stack-grid">
          {stacks.map(([title, text, Icon]) => (
            <Reveal className="stack-card" key={title as string}>
              <Icon size={22} /><div><h3>{title as string}</h3><p>{text as string}</p></div>
            </Reveal>
          ))}
        </div>
        <div className="services-wrap">
          <p className="side-label">What I solve</p>
          <div className="services-list">
            {services.map(([title, text, Icon], i) => (
              <Reveal className="service" key={title as string}>
                <span>0{i + 1}</span><Icon size={24} /><div><h3>{title as string}</h3><p>{text as string}</p></div><ChevronRight />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-copy">
          <p className="eyebrow"><CircleDot size={13} /> About</p>
          <Reveal><h2>Calm engineering for ambitious products.</h2></Reveal>
          <Reveal><p className="lead">For more than a decade, I&apos;ve helped international teams turn difficult requirements into dependable digital products.</p></Reveal>
          <Reveal><p>I work across the stack, but my real specialty is clarity: finding the simplest architecture that supports today&apos;s goals without limiting tomorrow&apos;s growth. Beyond development, I connect products to measurable growth through GA4, Google Tag Manager, Google Ads campaign setup and conversion tracking, and Google Business Profile management.</p></Reveal>
          <div className="principles">
            {["Production-ready by default", "Performance is a feature", "Built for long-term ownership", "Communication without friction"].map(item => <span key={item}><Check size={15} />{item}</span>)}
          </div>
        </div>
        <div className="experience-panel">
          <p className="panel-label">Experience across</p>
          {experience.map(([company, role, dates], i) => (
            <Reveal className="experience-row" key={company}><span>{String(i + 1).padStart(2, "0")}</span><div><b>{company}</b><span className="experience-details"><small>{role}</small><em>{dates}</em></span></div></Reveal>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <Reveal>
          <p className="quote-mark">“</p>
          <blockquote>Noman is an exceptional Full Stack Developer with strong expertise in TypeScript, Next.js, and modern web technologies. He consistently delivers scalable, high-performance solutions with clean and maintainable code. His problem-solving skills, attention to detail, and clear communication make him a reliable developer for complex projects.</blockquote>
          <p className="quote-author">Jon Levesque <span>— Director, Next Athlete Academy</span></p>
        </Reveal>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="eyebrow light"><CircleDot size={13} /> Start a conversation</p>
          <h2>Have a difficult product problem?</h2>
          <p>Tell me what you&apos;re building and where it&apos;s stuck. I&apos;ll get back to you with a clear next step.</p>
          <a href="mailto:dev.noman43@gmail.com" className="contact-link">dev.noman43@gmail.com <ArrowUpRight /></a>
          <small>Available for remote product engineering and consulting</small>
        </div>
        <div className="contact-orbit"><div><Mail /><span>Let&apos;s build<br />something useful.</span></div></div>
      </section>

      <footer>
        <a href="#top" className="logo">NA<span>.</span></a>
        <p>© 2026 Noman Akhtar</p>
        <div><a href="https://www.linkedin.com/in/noman-akhtar-04a798440/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="https://github.com/devnoman43/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="mailto:dev.noman43@gmail.com" aria-label="Email"><Mail /></a></div>
      </footer>
    </main>
  );
}
