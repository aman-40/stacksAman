# StacksAman — Digital Products & Software Development

**Live Site:** [stacksaman.in](https://stacksaman.in)

Welcome to the **StacksAman** platform. This is a comprehensive, premium digital studio and portfolio platform designed to serve as a centralized hub for showcasing high-end software development services, real-world project case studies, and professional experience.

## 🎯 Purpose and Uses

This platform is engineered to be a complete business front-end for an independent digital studio. Its primary uses include:

- **Attracting High-Value Clients:** Establishing a premium, trustworthy digital presence through high-end aesthetics and flawless interactions.
- **In-Depth Case Studies:** Moving beyond simple screenshots to provide deep technical breakdowns of past projects (Problem, Approach, Build Details, Outcome) to prove capability.
- **Service Clarification:** Offering dedicated, detailed pages for specific offerings (like Full-Stack Development or Backend & APIs) to clearly communicate value propositions, development approaches, and project fit to potential clients.
- **Digital Resume & Proof of Work:** Acting as a living timeline of professional experience, skills, and technological proficiencies.

## ✨ Core Features

### 1. Premium, Highly Interactive UX
The platform abandons standard web conventions in favor of a highly tactile, engaging user experience. 
- **Custom Scroll Architecture:** The default browser scrollbar has been completely replaced with a custom, sleek pill scroller that provides immediate, zero-delay 1-to-1 tracking.
- **Fluid GSAP Animations:** Features buttery-smooth text reveals, page transitions, and interactive hover states (such as the signature "water fill" effect) that make the platform feel alive and responsive.
- **Live Project Indicators:** Dynamically pulsing green dots that instantly inform users which projects are currently live in production.
- **Bespoke Design System:** Utilizes a carefully curated color palette featuring an organic Vintage Sand background contrasted with a high-impact, modern Electric Vermillion (`#FF3E00`) accent to create a striking "brutalist-chic" aesthetic.

### 2. High-End Typography Architecture
The platform is powered by Vercel's highly-optimized **Geist** typeface family to strictly support a "Developer + Independent Software Studio" identity:
- **Geist Sans:** Drives all primary UI, headings, paragraphs, navigation, and buttons for supreme legibility and structural elegance.
- **Geist Mono:** Intentionally injected into all technical labels, code references, metadata, technology tags, and developer-oriented UI to provide a sharp, technical contrast.

### 3. Comprehensive Content Architecture
- **Dynamic Service Pages:** Dedicated, dynamically generated pages for each service offering. Each page details "What You Get", the underlying development process, and FAQs.
- **Project Detail Pages:** Dynamically routed project pages that structurally break down the lifecycle of a software build, from initial problem to final outcome and learnings.

### 4. Centralized "Data-Driven" Management
Managing content on this platform does not require writing complex UI code. The entire platform's copy, projects, and services are decoupled into a centralized "database" of configuration files (`src/data/`). 
- Simply update a TypeScript data file to add a new project, tweak a service description, or add a new FAQ, and the platform will automatically generate the UI and routing.

### 5. Technical Excellence
- **SEO & Performance Optimized:** Built on the modern Next.js App Router for lightning-fast Server-Side Rendering (SSR). This ensures instantaneous load times and maximum visibility for search engines.
- **Flawlessly Responsive:** Painstakingly optimized to provide a perfect experience across mobile, tablet, and desktop viewports, featuring a custom mobile-first navigation system.
- **Secure, Serverless Contact Form:** Fully integrated with `Web3Forms` for seamless, backend-free contact messaging straight to email.

---

## 💻 Developer Quick Start

If you are a developer looking to run this platform locally:

### 1. Configure Environment Variables
Create a `.env.local` file in the root of the project and add the following variables. These dynamically inject your personal details and API keys across the entire platform:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/your-profile/
```

### 2. Install dependencies
```bash
npm install
```
*Note: This project relies on the `geist` NPM package for local font injection.*

### 3. Run the development server
```bash
npm run dev
```

### 4. Open Application
Open [http://localhost:3000](http://localhost:3000) in your browser.

To update the platform's content, simply navigate to the `src/data/` directory and edit the respective files (`projects.ts`, `services.ts`, `experience.ts`, `faq.ts`).
