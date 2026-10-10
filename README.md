# Zoth Token Sale Landing Page

A responsive token-sale landing page for Zoth, built with Next.js and designed to closely follow the provided Figma reference. The interface includes project information, token-sale statistics, partner logos, sale timeline, token-sale details, and a footer with social links and contract-address copying.

## Features

- **Responsive UI** — Layouts designed for mobile and desktop screens.
- **Hero section** — Project introduction, token information, and sale statistics.
- **Token sale card** — Displays fundraising progress, token price, sale allocation, and related information.
- **Countdown timer** — Displays the remaining time until the configured sale closing time.
- **Partners and backers** — Displays partner logos in a horizontal strip.
- **Sale timeline** — Shows sale phases and their respective statuses.
- **Token sale details** — Displays closing time, launchpad, documents, vesting, and listing information with SVG icons.
- **Contract address** — Displays a shortened contract address and provides a copy-to-clipboard interaction.
- **Footer** — Includes navigation links, social media icons, and a risk disclaimer.
- **Reusable UI components** — Built with reusable React components and Tailwind CSS utilities.

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Static typing
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Lucide React](https://lucide.dev/) — Icon library
- [shadcn/ui](https://ui.shadcn.com/) — UI component foundation

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm before running the project.

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone <your-repository-url>
cd landing-page
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page updates automatically as you edit the source files.

### Production Build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Project Structure

The project follows the Next.js App Router structure. The exact files may vary depending on the implementation.

```text
landing-page/
├── public/
│   ├── icons/          # SVG icons
│   └── partners/       # Partner logos
├── src/
│   ├── app/            # Application routes and global styles
│   ├── components/     # UI and page components
│   └── lib/            # Data, types, and utilities
├── package.json
└── README.md
```

## Configuration and Demo Data

The landing page uses configurable sale data for project content, fundraising statistics, sale phases, partner logos, token-sale details, footer links, and contract information.

Review the configured data before publishing. Replace demo values, placeholder links, and example contract addresses with verified project information.

The countdown uses the configured sale closing timestamp. Ensure that the target date is correct for the intended sale schedule.

## Important Notes

- The displayed token-sale statistics and project information may be demo content.
- The configured contract address must be verified before use.
- Social links and document links should point to official project resources.
- The copy-to-clipboard interaction requires browser clipboard access, typically available on localhost or HTTPS.

This project provides a frontend interface. Do not assume that wallet connectivity, token purchases, payment processing, or smart-contract interactions are implemented unless they are explicitly integrated.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

Add the applicable project license here before distributing or publishing the repository.