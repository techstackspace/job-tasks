# Billia – All-in-One Payment Platform

Billia is a smart, all-in-one payment platform built for Nigerians to simplify bill payments, airtime and data top-ups, and virtual dollar card usage — all powered by **Billia AI** for a faster, smarter experience.

[View Figma Design](https://www.figma.com/design/mgpEXdCBFDCzJ3D9zitzcB/Billia?node-id=822-9382&t=IyrVg2YgixKYFv9u-1)

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Bundler**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: [Geist](https://vercel.com/font), [Poppins](https://fonts.google.com/specimen/Poppins)
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

---

## Project Structure

```
.
├── public/               # Static assets (images, icons)
├── src/
│   ├── app/              # Next.js App Router pages (home, about)
│   └── components/       # Reusable UI and shared components
│       ├── shared/       # Layout components like Navbar and Footer
│       └── ui/           # Page-specific UI components (Home, About)
├── package.json          # Project dependencies
├── next.config.ts        # Next.js config
├── tsconfig.json         # TypeScript config
└── README.md             # This file

````

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/techstackspace/job-tasks.git
cd job-tasks
````

### 2. Install dependencies with Bun

```bash
bun install
```

### 3. Run the development server

```bash
bun dev
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser.

---

## Features

* **Bill Payments**: Electricity, TV, education, internet, and more
* **Airtime & Data Top-up**: Local and global mobile services
* **Virtual Dollar Card**: For subscriptions and international purchases
* **Billia AI**: Pay by typing commands, smart repeats, and chat
* **Mobile-first Design**: Optimized for all screen sizes
* **Figma Accurate**: Developed based on the official Figma file

---

## Environment Variables

> No sensitive `.env` variables are required for this static demo. However, future versions may include:

```env
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```

---

## Author

**Bello Osagie** – [LinkedIn](https://linkedin.com/in/techstackmedia) • [Twitter](https://twitter.com/techstackmedia)

---

## Credits

* UI Design: [Figma Billia File](https://www.figma.com/design/mgpEXdCBFDCzJ3D9zitzcB/Billia)
* Icons: Custom + Heroicons
* Fonts: Geist & Poppins via Google Fonts

## Deployment

Check out the live deployment at [https://job-tasks-drab.vercel.app](https://job-tasks-drab.vercel.app)

This project is hosted on [Vercel](https://vercel.com), optimized for seamless deployment of Next.js applications.
