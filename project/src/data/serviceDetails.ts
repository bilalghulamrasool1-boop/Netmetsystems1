import { 
  BookOpen, Sparkles, Globe, Megaphone, Palette, Code, Smartphone, Cpu, Shield, 
  Search, Award, Layers, Users, Zap, CheckCircle2, FileText, Database, HeartHandshake,
  Workflow, BookMarked, PenTool, Edit3, Share2, Star, CheckSquare, Target, Mail, Send
} from 'lucide-react';

export interface SubService {
  title: string;
  desc: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  label: string;
  desc: string;
}

export interface MethodStep {
  title: string;
  desc: string;
  image: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface ServiceDetailData {
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introSubtitle: string;
  introDesc: string;
  stats: StatItem[];
  graphicImage: string;
  serviceGridTitle: string;
  serviceGridTagline: string;
  subServices: SubService[];
  methodologyTitle: string;
  methodologySubtitle: string;
  methodologySteps: MethodStep[];
  techStackTitle: string;
  techStackSubtitle: string;
  techStackCategories: TechCategory[];
  faqs: { q: string; a: string }[];
  industries: string[];
}

export const serviceDetailsMap: Record<string, ServiceDetailData> = {
  "book-publishing": {
    heroTitle: "Premium Book Publishing",
    heroSubtitle: "We turn your manuscript into a beautifully formatted, published masterpiece distributed worldwide.",
    introTitle: "Publishing Your Book",
    introSubtitle: "With Quality, Pride, & Global Reach.",
    introDesc: "We manage the entire publishing lifecycle from editing and proofreading to book cover design, conversion, formatting, and international print-on-demand distribution. Our goal is to position your book for maximum visibility and commercial success.",
    stats: [
      { value: "500+", label: "Books Published", desc: "Across memoirs, fiction, non-fiction, and children's books." },
      { value: "5-Star", label: "Author Satisfaction", desc: "A flawless track record of reviews from independent authors." },
      { value: "100%", label: "Royalty Ownership", desc: "Authors retain full rights and receive 100% of their net royalties." },
      { value: "Global", label: "Distribution Network", desc: "Available on Amazon, Barnes & Noble, Kindle, Apple Books, and more." }
    ],
    graphicImage: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=800",
    serviceGridTitle: "Complete Book Publishing Suite",
    serviceGridTagline: "From First Draft to Published Author",
    subServices: [
      { title: "Professional Editing", desc: "Developmental editing, copyediting, and proofreading to polish your manuscript.", iconName: "Edit3" },
      { title: "Custom Formatting", desc: "Stunning interior layout formatting for paperback, hardcover, and digital ePUB formats.", iconName: "FileText" },
      { title: "Bespoke Cover Design", desc: "High-impact, custom graphic cover designs engineered to catch readers' eyes.", iconName: "Palette" },
      { title: "ISBN & Copyright Setup", desc: "We handle the official ISBN assignments, barcode generation, and legal copyright registrations.", iconName: "Shield" },
      { title: "Amazon & KDP Launch", desc: "Full configuration of your Kindle Direct Publishing account and publication.", iconName: "BookOpen" },
      { title: "Print-On-Demand (POD)", desc: "Global distribution set up so your paperback is printed and shipped instantly upon order.", iconName: "Workflow" }
    ],
    methodologyTitle: "A Methodical Publishing Journey",
    methodologySubtitle: "We guide you transparently through every stage of bringing your literary work to life.",
    methodologySteps: [
      { title: "1. Editorial Review", desc: "Our chief editors review your manuscript, establishing a plan for proofreading, alignment, and formatting.", image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=800" },
      { title: "2. Cover & Interior Design", desc: "Our award-winning artists collaborate with you on several custom cover draft designs and typesetting.", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" },
      { title: "3. Conversion & Proofing", desc: "We convert files into digital eBook and paperback formats and send you real physical/digital proofs for approval.", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800" },
      { title: "4. Global Distribution", desc: "We distribute your book to Barnes & Noble, Amazon, Apple, and wholesalers worldwide, establishing pricing.", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" },
      { title: "5. Launch & Royalties", desc: "Your book goes live! We hand over full dashboard accounts so you collect 100% of your earnings directly.", image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=800" }
    ],
    techStackTitle: "Publishing & Distribution Formats",
    techStackSubtitle: "We work with top industry standards to prepare, package, and launch your book.",
    techStackCategories: [
      { name: "Digital eBook Formats", items: ["ePUB Standard", "MOBI", "Amazon KPF", "Fixed-Layout PDF", "iBooks Formats"] },
      { name: "Print Specifications", items: ["Cream/White Paper", "Glossy & Matte Finishes", "Hardcover Dust Jacket", "Casewrap Hardcover", "Perfect Bound Paperback"] },
      { name: "Distribution Channels", items: ["Amazon KDP", "IngramSpark", "Barnes & Noble Press", "Kobo Writing Life", "Apple Books"] }
    ],
    faqs: [
      { q: "Do I keep the rights to my book?", a: "Absolutely. You retain 100% of your book's copyrights, ownership, and net royalties. We act purely as your design and publishing agent." },
      { q: "How long does the book publishing process take?", a: "Generally between 4 to 8 weeks, depending on the length of your manuscript, the amount of editing required, and your review speed." },
      { q: "Can you publish in multiple formats?", a: "Yes, we publish in Paperback, Hardcover, eBook, and can even facilitate professional Audiobook production." }
    ],
    industries: ["Authors", "Poets", "Biographers", "Corporate Leaders", "Academic Educators", "Independent Publishers"]
  },
  "author-branding": {
    heroTitle: "Author Branding Services",
    heroSubtitle: "Build a memorable, influential online presence that establishes your authority and sells books.",
    introTitle: "Establishing Your Name",
    introSubtitle: "With Digital Presence & Influence.",
    introDesc: "We build modern, fully customized author websites, setup active Amazon Author Central profiles, design media press kits, and develop email marketing lists to convert readers into lifelong fans.",
    stats: [
      { value: "250+", label: "Authors Branded", desc: "Indie authors and bestsellers established in the marketplace." },
      { value: "10x", label: "Audience Growth", desc: "Average increase in active email subscribers and reader reach." },
      { value: "100%", label: "Custom Websites", desc: "Fully responsive, optimized author portfolios built from scratch." },
      { value: "Premium", label: "Media Press Kits", desc: "Professional assets ready for podcast interviews and news outlets." }
    ],
    graphicImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    serviceGridTitle: "Brand Engineering for Authors",
    serviceGridTagline: "More Than a Book. Build a Legacy.",
    subServices: [
      { title: "Author Websites", desc: "Sleek, responsive web portals with custom book showcases, blogging, and newsletter signups.", iconName: "Globe" },
      { title: "Amazon Profile Setup", desc: "Optimizing your Amazon Author Central profile, connecting blog feeds, and customizing listings.", iconName: "BookMarked" },
      { title: "Email Newsletter Strategy", desc: "Setting up Mailchimp or Substack with automated welcome series to nurture new subscribers.", iconName: "Mail" },
      { title: "Digital Press Kits", desc: "EPKs detailing your biography, high-resolution author photos, book synopses, and interview questions.", iconName: "FileText" },
      { title: "Social Media Kits", desc: "Custom banners, social media post templates, and visual grids designed for Instagram and Facebook.", iconName: "Palette" },
      { title: "Book Launch Campaigns", desc: "Detailed timeline planning, ARC distribution strategy, and pre-order optimization.", iconName: "Megaphone" }
    ],
    methodologyTitle: "A Professional Brand Framework",
    methodologySubtitle: "We map out a strategic author ecosystem designed to drive engagement and organic book sales.",
    methodologySteps: [
      { title: "1. Brand Consultation", desc: "We analyze your book genre, target audience, and identify key competitors to set branding goals.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" },
      { title: "2. Visual Design", desc: "We design custom color schemes, typography guides, and layout options for your author website.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" },
      { title: "3. Technical Development", desc: "Our engineers build your website, integrating newsletter captures, and configure domain settings securely.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
      { title: "4. Profile Optimization", desc: "We audit and establish your professional listings across Amazon, Goodreads, and BookBub.", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800" },
      { title: "5. Launch & Handoff", desc: "We go live with your brand, train you on how to update your blog and manage subscribers easily.", image: "https://images.unsplash.com/photo-1552581230-c01bc0d48453?auto=format&fit=crop&q=80&w=800" }
    ],
    techStackTitle: "Author Marketing & Brand Tools",
    techStackSubtitle: "We leverage industry-preferred marketing tools to connect you directly with readers.",
    techStackCategories: [
      { name: "Platform & Hosting", items: ["WordPress", "Vite React Engine", "Tailwind CSS", "Hostinger Pro", "AWS Hosting"] },
      { name: "Subscriber & Email Tools", items: ["Mailchimp", "MailerLite", "Substack", "ConvertKit", "ActiveCampaign"] },
      { name: "Book Promotions", items: ["Amazon Author Central", "Goodreads Author Program", "BookBub Partners", "StoryOrigin", "BookFunnel"] }
    ],
    faqs: [
      { q: "Why does an author need a personal website?", a: "Your website is your direct channel of ownership. While Amazon displays your book, your website allows you to collect readers' emails, post blogs, and sell direct." },
      { q: "Can I update the website myself later?", a: "Yes. We design with custom intuitive management tools, and we provide step-by-step video training on how to post blogs and change text easily." },
      { q: "Do you design book marketing graphics?", a: "Yes, our branding packages include custom 3D mockups of your books, social media promotional templates, and printable flyers." }
    ],
    industries: ["Fiction Authors", "Non-fiction Experts", "Academic Researchers", "Memoirists", "Public Speakers", "Content Creators"]
  },
  "web-development": {
    heroTitle: "Website Design & Development",
    heroSubtitle: "High-performance, secure, and custom-tailored websites and e-commerce platforms.",
    introTitle: "Building Modern Websites",
    introSubtitle: "That Load in Milliseconds, Convert on Sight.",
    introDesc: "We design and build customized websites from the ground up. Whether you need a lightning-fast React application, a robust WordPress CMS, or a high-converting WooCommerce storefront, we deliver.",
    stats: [
      { value: "150+", label: "Websites Crafted", desc: "Launched successfully across multiple industries." },
      { value: "Under 2s", label: "Load Velocity", desc: "Engineered with optimized code for stellar Google Core Web Vitals." },
      { value: "Mobile", label: "Responsive Perfect", desc: "Flawless mobile layouts tested on 20+ device viewports." },
      { value: "SEO-Ready", label: "Technical Setup", desc: "Built-in indexing, metadata, and structured schema markup." }
    ],
    graphicImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    serviceGridTitle: "Full-Stack Web Engineering",
    serviceGridTagline: "Tailored for Speed, Security & Scalability",
    subServices: [
      { title: "Custom React Apps", desc: "Dynamic web apps built using modern frameworks like Vite, React, and Next.js.", iconName: "Code" },
      { title: "WooCommerce Stores", desc: "Fully secure, robust e-commerce solutions integrated with Stripe, PayPal, and shipping APIs.", iconName: "Globe" },
      { title: "Corporate Portals", desc: "Sleek, brand-aligned websites for medium-to-large scale organizations.", iconName: "Workflow" },
      { title: "WordPress Development", desc: "Bespoke custom themes built cleanly without bloated plugins, ensuring easy content edits.", iconName: "FileText" },
      { title: "Landing Page Systems", desc: "Conversion-optimized pages engineered specifically for targeted advertising campaigns.", iconName: "Zap" },
      { title: "UI/UX Visual Prototyping", desc: "Interactive Figma designs mapping out optimal user flows before code is written.", iconName: "Palette" }
    ],
    methodologyTitle: "A Methodical Web Architecture",
    methodologySubtitle: "We merge agile development practices with aesthetic focus to ensure flawless launches.",
    methodologySteps: [
      { title: "1. Wireframing & UX", desc: "We design the structural layout and wireframe in Figma to plan call-to-actions and optimal user journey flow.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" },
      { title: "2. Visual Concept UI", desc: "We turn wireframes into interactive, gorgeous high-fidelity prototypes featuring custom branding.", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" },
      { title: "3. Clean Coding", desc: "Our engineering squad codes the responsive front-end and sets up headless CMS engines with strict optimization.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" },
      { title: "4. Rigorous QA & Testing", desc: "We test page loading speeds, check security headers, and test compatibility on all popular browsers and platforms.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
      { title: "5. Safe Deployment", desc: "We configure DNS records, hook up SSL certificates, and hand over complete step-by-step training manuals.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" }
    ],
    techStackTitle: "Our Modern Tech Stack",
    techStackSubtitle: "We use the latest technologies to construct lightweight, stable, and secure websites.",
    techStackCategories: [
      { name: "Frontend Engines", items: ["React.js", "Vite Engine", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { name: "CMS & Backends", items: ["WordPress", "Headless CMS", "Node.js Express", "PHP 8.2", "WooCommerce"] },
      { name: "Servers & Cloud", items: ["Vercel", "Netlify", "Hostinger Pro", "Cloudflare DNS", "AWS Cloud"] }
    ],
    faqs: [
      { q: "Will my website look great and work on mobile?", a: "Yes, 100% of our web builds are mobile-responsive and thoroughly tested on both iOS and Android viewports." },
      { q: "Do you offer post-launch maintenance?", a: "Yes, we provide ongoing monthly support plans which cover plugin updates, daily security backups, speed checks, and content updates." },
      { q: "What CMS platforms do you support?", a: "We primarily build custom React applications for maximum speed, and clean-coded WordPress/WooCommerce templates for user-friendly content edits." }
    ],
    industries: ["E-commerce Brands", "Corporate Enterprises", "Real Estate Agencies", "Medical Practices", "Educational Institutions", "Creative Agencies"]
  },
  "digital-marketing": {
    heroTitle: "Digital Marketing & Growth",
    heroSubtitle: "Data-driven SEO, social media marketing, and strategic digital campaigns that capture leads and drive revenue.",
    introTitle: "Attracting Ideal Customers",
    introSubtitle: "With Science, Consistency & Data.",
    introDesc: "No generic posts. We plan, execute, and scale highly targeted marketing programs. From Google SEO rank positioning and Social Media community scaling to PPC advertisement funnels, we focus on high ROI.",
    stats: [
      { value: "300%", label: "Average Traffic ROI", desc: "Typical organic traffic improvement measured inside 6 months." },
      { value: "10M+", label: "Impressions Managed", desc: "High-exposure campaigns run successfully for retail and digital clients." },
      { value: "95%", label: "Customer Retention", desc: "Our performance keeps businesses scaling alongside our team month after month." },
      { value: "100%", label: "Transparent Reports", desc: "Detailed custom analytics tracking conversions, cost-per-lead, and clicks." }
    ],
    graphicImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    serviceGridTitle: "Result-Driven Marketing Systems",
    serviceGridTagline: "Targeted Exposure. Measured Conversions.",
    subServices: [
      { title: "Search Engine Optimization", desc: "Top-tier search rankings using deep technical audits, content strategies, and authority backlinks.", iconName: "Search" },
      { title: "Social Media Scaling", desc: "Dynamic management of Instagram, LinkedIn, and Facebook to build organic community engagement.", iconName: "Megaphone" },
      { title: "PPC Advertising Funnels", desc: "Optimized paid Google Ads, Facebook Ads, and LinkedIn campaigns engineered to minimize customer acquisition cost.", iconName: "Zap" },
      { title: "Local SEO & Google Maps", desc: "Command local search results, driving immediate calls, foot traffic, and reviews.", iconName: "Globe" },
      { title: "Email Automations", desc: "Nurturing cycles and promotional broadcast systems designed to turn leads into recurring business.", iconName: "Mail" },
      { title: "Content Marketing", desc: "Writing research-driven articles, white papers, and copywriting that builds market trust.", iconName: "FileText" }
    ],
    methodologyTitle: "A Scientific Growth Protocol",
    methodologySubtitle: "We use a rigorous, iterative process to plan, test, and optimize marketing campaigns for maximum yield.",
    methodologySteps: [
      { title: "1. Marketing Audit", desc: "We track your current rankings, analyze competitor traffic secrets, and discover highly profitable keywords.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" },
      { title: "2. Creative Strategy", desc: "Our team writes optimized copy, designs graphics, and selects target demographics.", image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800" },
      { title: "3. Launch & Tracking", desc: "We configure conversions tracking, launch campaigns, and monitor click behaviors.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
      { title: "4. A/B Optimization", desc: "We fine-tune ad budgets daily, change taglines, and optimize landing pages to lower cost-per-lead.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
      { title: "5. ROI Reporting", desc: "We compile transparent monthly video reviews explaining exactly where every dollar went and what revenue resulted.", image: "https://images.unsplash.com/photo-1552581230-c01bc0d48453?auto=format&fit=crop&q=80&w=800" }
    ],
    techStackTitle: "Our Marketing Suite",
    techStackSubtitle: "We employ the highest quality industry tools to execute search, social, and analytical tasks.",
    techStackCategories: [
      { name: "Analytics & Data", items: ["Google Analytics 4", "Google Tag Manager", "Hotjar", "Looker Studio Dashboard"] },
      { name: "SEO & Content Tools", items: ["SEMrush Pro", "Ahrefs Suite", "Google Search Console", "Screaming Frog", "Clearscope"] },
      { name: "Advertising Platforms", items: ["Google Ads Manager", "Meta Business Suite", "LinkedIn Campaign Manager", "TikTok Ads"] }
    ],
    faqs: [
      { q: "How long before we see SEO results?", a: "Generally, high-impact keywords take between 3 to 6 months to secure stable top-tier rankings on Google, depending on market competition." },
      { q: "Do you create all our social media graphics?", a: "Yes, our social media management plans include custom graphic design, copywriting, video editing, and scheduled publishing." },
      { q: "How is marketing performance measured?", a: "We install strict conversion tracking (leads, calls, purchases) so you know exactly how many sales were driven by our efforts." }
    ],
    industries: ["E-commerce Brands", "SaaS Startups", "Professional Service Providers", "Law Firms", "Local Businesses", "Coaches & Authors"]
  },
  "branding-design": {
    heroTitle: "Branding & Graphic Design",
    heroSubtitle: "Craft a distinct, premium identity for your business. Custom logos, full brand guidelines, and print collateral.",
    introTitle: "Creating Iconic Brands",
    introSubtitle: "With Pure Vision, Style & Balance.",
    introDesc: "We design highly memorable, clean, and premium corporate identities. From logo marks and typographies to custom packaging, business systems, and social media styling, we establish your market presence.",
    stats: [
      { value: "200+", label: "Brand Identities", desc: "Designed for international startups and mid-market organizations." },
      { value: "100%", label: "Vector Custom", desc: "All artwork created from scratch—never generic templates or stock logos." },
      { value: "Complete", label: "Brand Manuals", desc: "Comprehensive PDF style guidelines detailing typography, usage, and assets." },
      { value: "Premium", label: "Aesthetic Design", desc: "Engineered to position your business as an industry-leading player." }
    ],
    graphicImage: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800",
    serviceGridTitle: "Full-Scale Visual Design Services",
    serviceGridTagline: "Visual Harmony. Unmistakable Presence.",
    subServices: [
      { title: "Custom Logo Design", desc: "Vector-perfect, iconic brandmarks designed to communicate core business values instantly.", iconName: "Palette" },
      { title: "Brand Identity Manuals", desc: "Custom guidelines outlining official color formulas (RGB/CMYK/Pantone) and typographies.", iconName: "FileText" },
      { title: "Corporate Collateral", desc: "High-end designs for business cards, letterheads, presentation folders, and slide decks.", iconName: "Award" },
      { title: "Sleek Social Media Assets", desc: "Dynamic banners, custom story layouts, and grid systems matching your brand look.", iconName: "Sparkles" },
      { title: "Packaging & Label Design", desc: "Three-dimensional print-ready packages designed to stand out on physical and digital shelves.", iconName: "Layers" },
      { title: "Custom Illustrations", desc: "Tailored vector assets and graphic elements created to support your web content.", iconName: "Edit3" }
    ],
    methodologyTitle: "A Methodical Creative Process",
    methodologySubtitle: "We build aesthetic solutions based on strategic research, ensuring your brand stands the test of time.",
    methodologySteps: [
      { title: "1. Discovery & Mind Map", desc: "We analyze your business values, audit competitor styles, and establish a creative mood board.", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" },
      { title: "2. Conceptual Sketching", desc: "Our award-winning artists sketch initial logo directions, emphasizing balance and geometry.", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" },
      { title: "3. High-Fidelity Vectoring", desc: "We import sketches into digital format, adjusting ratios and implementing optimal color pairings.", image: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&q=80&w=800" },
      { title: "4. Real-World Mockups", desc: "We place design elements on signage, merchandise, web layouts, and stationary to ensure visual perfection.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" },
      { title: "5. Asset Handoff", desc: "We package and deliver print-ready PDFs, fully layered source vectors (AI/EPS), and multiple web formats.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" }
    ],
    techStackTitle: "Our Creative Design Toolkit",
    techStackSubtitle: "We use the absolute gold standard of professional creative software.",
    techStackCategories: [
      { name: "Vector & Layout", items: ["Adobe Illustrator", "Figma", "Adobe InDesign", "Sketch"] },
      { name: "Imaging & Rendering", items: ["Adobe Photoshop", "Adobe Dimension (3D)", "Procreate", "Blender 3D Engine"] },
      { name: "Production Formats", items: ["Print-Ready PDF/X", "Vector EPS/SVG", "Pantone Swatches", "RGB Web Formats"] }
    ],
    faqs: [
      { q: "What files do I receive upon project completion?", a: "You receive 100% vector source files (AI, EPS, SVG) which can be scaled infinitely, alongside high-resolution print-ready PDFs and web formats (PNG, JPG)." },
      { q: "How many logo options will I see?", a: "Our standard packages present between 3 to 5 completely distinct design concepts, and we refine your choice to absolute perfection." },
      { q: "Do you design custom physical packaging?", a: "Yes, we design physical layouts, packages, and label wraps with precision alignment measurements matching your printing templates." }
    ],
    industries: ["Product Brands", "Startups", "Corporate Services", "Publishers & Writers", "Hospitality Group", "Retail Shops"]
  },
  "software-development": {
    heroTitle: "Custom Software Engineering",
    heroSubtitle: "Scale-ready enterprise software, CRM systems, automated dashboards, and robust SaaS solutions.",
    introTitle: "Engineering Complex Systems",
    introSubtitle: "With Speed, Security & Scalability.",
    introDesc: "We build custom business systems designed to automate workflows, streamline multi-channel operations, and eliminate technical overhead. Fully secured, highly responsive, and meticulously coded.",
    stats: [
      { value: "80+", label: "Software Systems", desc: "Built for enterprises, schools, healthcare providers, and startups." },
      { value: "100%", label: "Secure Database", desc: "Meticulous sanitization, role-based authentication, and encryption." },
      { value: "API-First", label: "Core Architecture", desc: "Seamless system communication built with modular endpoints." },
      { value: "SaaS-Ready", label: "Multi-tenant Engine", desc: "Constructed to support thousands of active concurrent sessions safely." }
    ],
    graphicImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    serviceGridTitle: "Enterprise Software Services",
    serviceGridTagline: "Engineered to Automate & Expand",
    subServices: [
      { title: "Custom ERP & CRM", desc: "Bespoke database systems built to streamline client relations, tracking, and company resources.", iconName: "Database" },
      { title: "SaaS Systems Development", desc: "Secure, multitenant web software designed with subscription gates and granular user access.", iconName: "Workflow" },
      { title: "Billing & POS Systems", desc: "High-performance billing systems with instant invoices, receipt printing, and card processing.", iconName: "Zap" },
      { title: "Education & Hospital Software", desc: "Comprehensive institutional software managing registrations, records, scheduling, and billing.", iconName: "Award" },
      { title: "API Development & Integration", desc: "Connecting distinct software systems, building custom webhook layers, and optimizing data feeds.", iconName: "Cpu" },
      { title: "Security Auditing & Hardening", desc: "Full penetration checks, SQL injection patching, and secure modern access setup.", iconName: "Shield" }
    ],
    methodologyTitle: "An Agile Engineering Mindset",
    methodologySubtitle: "We follow strict Scrum development loops, delivering working milestones at each sprint.",
    methodologySteps: [
      { title: "1. Scope & Logic Mapping", desc: "We map complete system logical structures, entity relation diagrams, and user role privileges.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
      { title: "2. Front-End Prototyping", desc: "We design complete visual dashboard layouts in Figma to approve functional user layouts.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" },
      { title: "3. Backend Engineering", desc: "Our squad writes clean REST/GraphQL APIs, builds relational databases, and implements strict security models.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" },
      { title: "4. Extensive System Test", desc: "We execute load testing, mock security exploits, and run automated testing loops to check reliability.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
      { title: "5. CI/CD Cloud Deploy", desc: "We orchestrate zero-downtime deployment utilizing Docker, Kubernetes, and popular cloud hosts, handing over source codes.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" }
    ],
    techStackTitle: "Our Software Engineering Stack",
    techStackSubtitle: "We employ robust, industry-standard modern frameworks for reliability.",
    techStackCategories: [
      { name: "Frontend & Dashboard", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux State Engine"] },
      { name: "Backend & Server", items: ["Node.js Express", "Python Django/FastAPI", "Go Lang", "PostgreSQL", "Prisma ORM"] },
      { name: "Cloud & Container", items: ["Docker", "Kubernetes", "AWS Web Services", "Google Cloud", "CI/CD Actions"] }
    ],
    faqs: [
      { q: "Who owns the software source code?", a: "Upon project completion and payment, you own 100% of the custom software source code, databases, and structural designs." },
      { q: "Can the software scale to support thousands of users?", a: "Yes, we architect our software using containerized, stateless models which scale automatically based on server load." },
      { q: "Do you build integrations with other APIs?", a: "Absolutely. We routinely integrate Stripe, Salesforce, Quickbooks, Twilio SMS, and custom legacy REST APIs." }
    ],
    industries: ["Healthcare Providers", "Enterprise Logistics", "Educational Institutes", "Finance Startups", "Retail & Wholesalers", "SaaS Founders"]
  },
  "mobile-development": {
    heroTitle: "Mobile Application Development",
    heroSubtitle: "Stunning iOS and Android applications. Native Swift, Kotlin, and high-performance React Native / Flutter apps.",
    introTitle: "Building iOS & Android Apps",
    introSubtitle: "That Look Sharp, Work Fast.",
    introDesc: "We craft custom mobile applications that blend responsive performance with beautiful UI/UX design. From conceptual strategy to App Store compliance and launch, our team handles everything.",
    stats: [
      { value: "100+ Apps", label: "Mobile Launches", desc: "Successfully deployed across Google Play & Apple App Store." },
      { value: "4.9/5", label: "Store Rating Avg", desc: "Our apps achieve top rankings and stellar user reviews." },
      { value: "20+", label: "Frameworks Mastered", desc: "SwiftUI, UIKit, Flutter, React Native, and Kotlin Coroutines." },
      { value: "1M+ Collective", label: "App Engagement", desc: "Active app sessions managed smoothly in cloud architectures." }
    ],
    graphicImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    serviceGridTitle: "Our Mobile Engineering Suite",
    serviceGridTagline: "Apps That Make It to Home Screens",
    subServices: [
      { title: "Native iOS Development", desc: "Highly secure, optimized Swift & SwiftUI apps taking advantage of complete Apple hardware capabilities.", iconName: "Smartphone" },
      { title: "Native Android Apps", desc: "Robust, feature-packed Kotlin apps designed with sleek modern Material layouts.", iconName: "Cpu" },
      { title: "React Native & Flutter", desc: "Cross-platform engineering saving time and cost by utilizing a single codebase for both iOS & Android.", iconName: "Layers" },
      { title: "UX/UI Design Prototyping", desc: "We design highly engaging mobile wireframes and interactive mockups before coding.", iconName: "Palette" },
      { title: "App Store Compliance", desc: "Expert management of Apple developer compliance and Google Play submission guidelines.", iconName: "Award" },
      { title: "Support & Optimization", desc: "Continuous monitoring, TestFlight beta cycles, and crash reporting setups.", iconName: "Workflow" }
    ],
    methodologyTitle: "A Methodical Mobile Approach",
    methodologySubtitle: "We follow a defined roadmap to ensure every mobile application is scalable, fast, and approved on store.",
    methodologySteps: [
      { title: "1. Scope & Logic Planning", desc: "We plan user authentication, offline database synchronization, and design structural APIs.", image: "https://images.unsplash.com/photo-1511252150-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" },
      { title: "2. Mobile UI/UX", desc: "Our visual artists design intuitive touch targets, light/dark interfaces, and fluid transitions.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" },
      { title: "3. Coding & Core APIs", desc: "We code using React Native or Flutter and integrate backend APIs with strict performance models.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" },
      { title: "4. Multi-device Testing", desc: "Testing using test loops on over 30 physical Android and iOS devices to verify speed.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
      { title: "5. App Store Launch", desc: "We manage App Store Connect and Play Console setup, passing security and publishing successfully.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" }
    ],
    techStackTitle: "Our Mobile Tech Stack",
    techStackSubtitle: "We combine modern cross-platform engines with powerful native libraries.",
    techStackCategories: [
      { name: "Programming Engines", items: ["React Native", "Flutter SDK", "SwiftUI / Swift", "Jetpack Compose / Kotlin", "Dart"] },
      { name: "Databases & Engines", items: ["SQLite", "Realm Mobile", "Firebase Firestore", "CoreData", "Redux Toolkit State"] },
      { name: "Integration Services", items: ["Apple Store Connect", "Google Play Developer", "Push Notifications", "Google Maps SDK", "Sentry Logs"] }
    ],
    faqs: [
      { q: "Should I build a native app or a cross-platform app?", a: "For most projects, cross-platform frameworks like React Native or Flutter offer huge savings by using one codebase for both iOS and Android. If your app requires complex hardware integration, native Swift/Kotlin is optimal." },
      { q: "How long does it take to get approved on the App Store?", a: "Apple App Store approval takes between 2 to 5 days, whereas Google Play Store typically takes 3 to 7 days for new publisher accounts." },
      { q: "Can my app function offline?", a: "Yes, we integrate local database synchronization (SQLite/Realm) so your app stores data locally and syncs automatically when reconnected." }
    ],
    industries: ["On-Demand Logistics", "E-Commerce Brands", "Social Communities", "Healthcare Services", "Education Startups", "Booking Platforms"]
  },
  "network-it": {
    heroTitle: "Network & IT Solutions",
    heroSubtitle: "Enterprise-grade IT infrastructure, LAN/WAN setup, virtual secure servers, and 24/7 managed support.",
    introTitle: "Robust IT Infrastructures",
    introSubtitle: "Safe, Redundant & Lightning Fast.",
    introDesc: "We design, install, and actively manage secure business networks. From physical cabling and advanced firewalls to hybrid servers and Microsoft 365 deployment, we keep your workforce securely connected.",
    stats: [
      { value: "300+", label: "Managed Networks", desc: "Active business infrastructures supported across multiple cities." },
      { value: "99.99%", label: "System Uptime", desc: "Guaranteed redundancy frameworks built with backup failovers." },
      { value: "24/7/365", label: "Active Monitoring", desc: "Managed IT support catching network anomalies before they cause lag." },
      { value: "Fortified", label: "Firewall Security", desc: "Enterprise protection defending against malware and brute exploits." }
    ],
    graphicImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    serviceGridTitle: "Managed IT Engineering",
    serviceGridTagline: "Keeping Your Workforce Seamlessly Connected",
    subServices: [
      { title: "Enterprise Networking", desc: "Complete configuration of high-capacity LAN/WAN, switches, routers, and secure commercial WiFi access.", iconName: "Cpu" },
      { title: "VPN & Firewalls", desc: "Robust physical and virtual firewalls (Fortinet, Sophos) configured to provide secure remote access.", iconName: "Shield" },
      { title: "Windows & Linux Servers", desc: "Configuration of directory services, secure file sharing, and virtual servers (VMware, Hyper-V).", iconName: "Database" },
      { title: "Office 365 / Workspace", desc: "Seamless migration of emails and configuration of Microsoft Azure AD and Google Workspace ecosystems.", iconName: "Mail" },
      { title: "CCTV & Cabling Setup", desc: "Structured Cat6/Fiber installation, server rack design, and premium security camera setups.", iconName: "Layers" },
      { title: "Disaster Recovery Systems", desc: "Automated incremental local and cloud backups (Veeam, Synology) protecting critical assets.", iconName: "Workflow" }
    ],
    methodologyTitle: "A Methodical IT Strategy",
    methodologySubtitle: "We map physical layouts, configure virtual firewalls, and execute safe migration loops.",
    methodologySteps: [
      { title: "1. Infrastructure Assessment", desc: "We perform a thorough site survey, test signal strength, and evaluate your active data usage requirements.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" },
      { title: "2. Blueprint Architecture", desc: "We design a comprehensive network layout, specifying server locations, firewall gates, and switch distributions.", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800" },
      { title: "3. Deployment & Cabling", desc: "Our certified technicians handle physical structured cabling, install switches, and build server enclosures.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" },
      { title: "4. Logical Configuration", desc: "We configure subnets, assign security parameters, set up active firewalls, and coordinate secure VPN tunnels.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
      { title: "5. 24/7 Managed Onboarding", desc: "We execute stress testing, connect monitoring tools, and onboard your active workforce with zero downtime.", image: "https://images.unsplash.com/photo-1552581230-c01bc0d48453?auto=format&fit=crop&q=80&w=800" }
    ],
    techStackTitle: "Our Strategic IT Partners",
    techStackSubtitle: "We install only top-tier, reliable enterprise networking hardware and platforms.",
    techStackCategories: [
      { name: "Hardware & Routing", items: ["Cisco Systems", "Ubiquiti UniFi Pro", "Fortinet Firewalls", "MikroTik Routers", "Synology NAS Storage"] },
      { name: "Operating Systems", items: ["Windows Server 2022", "Ubuntu Enterprise Server", "VMware ESXi", "Microsoft Hyper-V", "RedHat Linux"] },
      { name: "Software Solutions", items: ["Microsoft 365 Pro", "Azure Active Directory", "Google Workspace Enterprise", "Veeam Backup", "SaaS Systems Integration"] }
    ],
    faqs: [
      { q: "How long is your standard service SLA?", a: "We provide SLA guarantees as low as 4 hours for critical network failures, backed by our 24/7 automated alert system." },
      { q: "What security measures do you put on remote workforces?", a: "We install hardware-level VPN tunnels with Multi-Factor Authentication (MFA), secure endpoint controls, and firewalls with active IP filtering." },
      { q: "Do you configure physical hardware or just cloud?", a: "We do both. We handle physical structured cabling, install switches, and configure server racks, as well as managing Azure, AWS, and Hybrid clouds." }
    ],
    industries: ["Corporate Offices", "Healthcare Clinics", "Manufacturing Centers", "Warehouses & Logistics", "Educational Institutions", "Financial Firms"]
  },
  "cloud-cybersecurity": {
    heroTitle: "Cloud & Cybersecurity",
    heroSubtitle: "Secure AWS/Azure cloud migration, endpoint protection, cybersecurity auditing, and rapid threat response.",
    introTitle: "Defending Digital Frontiers",
    introSubtitle: "Fortified, Compliant & Active.",
    introDesc: "We protect critical company data assets. Through vulnerability testing, modern endpoint detection, secure hybrid cloud orchestration (AWS, Microsoft Azure, Google Cloud), we ensure compliance.",
    stats: [
      { value: "Zero", label: "Security Breaches", desc: "A flawless record of protecting managed business infrastructures." },
      { value: "ISO-Aligned", label: "Audit Compliance", desc: "Securing frameworks matching HIPAA, GDPR, PCI-DSS, and ISO 27001." },
      { value: "Active", label: "Threat Detection", desc: "Sophisticated SIEM software monitoring server behaviors 24/7." },
      { value: "Seamless", label: "Cloud Migration", desc: "Hundreds of databases and application frameworks migrated safely with zero downtime." }
    ],
    graphicImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    serviceGridTitle: "Complete Security & Cloud Services",
    serviceGridTagline: "Enterprise Protection. Optimized Cloud.",
    subServices: [
      { title: "Vulnerability Assessments", desc: "Comprehensive penetration checks and logical security audits to expose and patch network weaknesses.", iconName: "Search" },
      { title: "AWS & Azure Migration", desc: "Migrating legacy servers and applications securely to Amazon Web Services, Azure, or Google Cloud.", iconName: "Workflow" },
      { title: "Active Threat Protection", desc: "Installing endpoint security, anti-brute defenses, and anti-ransomware algorithms on all workforce PCs.", iconName: "Shield" },
      { title: "Compliance Mapping", desc: "Configuring systems to fully meet HIPAA, GDPR, SOC2, and PCI-DSS data standards.", iconName: "Award" },
      { title: "Identity Access Setup (IAM)", desc: "Role-based authentication, single sign-on (SSO), and secure password-less access.", iconName: "Cpu" },
      { title: "Backup & Disasters Setup", desc: "Multi-region secure cloud storage backups ensuring instant recovery in case of failures.", iconName: "Layers" }
    ],
    methodologyTitle: "A Methodical Security Shield",
    methodologySubtitle: "We actively evaluate, audit, patch, and build secure walls around your business.",
    methodologySteps: [
      { title: "1. Security Scan", desc: "We run automated vulnerability tests and inspect server ports, looking for any existing issues.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
      { title: "2. Threat Mapping", desc: "We outline an optimization checklist, designing secure architecture upgrades and cloud frameworks.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800" },
      { title: "3. Cloud Orchestration", desc: "We build isolated subnets, setup virtual networks, and securely migrate active databases.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
      { title: "4. Security Hardening", desc: "We implement firewalls, deploy end-user encryption tools, configure MFA, and isolate server databases.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
      { title: "5. Active Continuous Guard", desc: "We hook up continuous monitoring tools and schedule automatic incremental backups.", image: "https://images.unsplash.com/photo-1552581230-c01bc0d48453?auto=format&fit=crop&q=80&w=800" }
    ],
    techStackTitle: "Our Cybersecurity & Cloud Partners",
    techStackSubtitle: "We partner with top global brands to provide absolute digital defense.",
    techStackCategories: [
      { name: "Cloud Platforms", items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Docker Container Cloud"] },
      { name: "Cybersecurity Engines", items: ["Fortinet Security Suite", "Sophos Central Endpoint", "SentinelOne XDR", "Splunk SIEM Software"] },
      { name: "Data Encryptions", items: ["SSL/TLS 1.3", "AES-256 Bit Encryption", "BitLocker / FileVault", "MFA Duo / Authenticator"] }
    ],
    faqs: [
      { q: "Is my business too small for cybersecurity threats?", a: "No. Small-to-medium businesses are the primary targets for ransomware exploits, because they typically have weaker defenses." },
      { q: "How long does a standard cloud migration take?", a: "Depending on database scale and application architecture, cloud migrations usually take between 2 to 6 weeks, executing with zero downtime." },
      { q: "How do you secure our employees' home computers?", a: "We install remote secure endpoint protection, and require all office access to go through our encrypted corporate VPN tunnels." }
    ],
    industries: ["Medical & Clinics (HIPAA)", "E-commerce Brands", "Finance & Fintech Firms", "Legal practices", "Enterprise Logistics", "Government Contractors"]
  }
};
