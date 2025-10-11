# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring smooth animations and interactive elements.

## Features

- **Responsive Design**: Adapts seamlessly to different screen sizes (desktops, tablets, and mobile phones)
- **Animated Sections**: Uses Framer Motion for smooth and engaging animations on scroll
- **Interactive Elements**: Includes interactive elements such as accordions and tooltips for enhanced user experience
- **Content Sections**: Dedicated sections for About Me, Experience, Projects, Skills, Publications, and Contact information
- **Custom Icons**: Uses custom-designed icons to enhance visual appeal
- **Contact Form**: Enables visitors to send emails directly using a contact form with server-side validation and email sending via Resend
- **Social Media Links**: Provides links to social media profiles (LinkedIn, GitHub, ResearchGate)
- **Resume Download**: Offers a downloadable resume in PDF format

## Technologies Used

- **Next.js**: A React framework for building web applications, used for the overall structure and routing of the portfolio
- **React**: A JavaScript library for building user interfaces, used for creating interactive components
- **Tailwind CSS**: A utility-first CSS framework, used for styling the website
- **Framer Motion**: A production-ready motion library for React, used for animations
- **React Hook Form**: A library for creating forms, used in the contact form
- **Zod**: A schema validation library, used to validate form inputs
- **Resend**: A transactional email service, used for sending contact form emails
- **Lucide React**: An icon library for React, used for various icons within the site
- **@iconify/react**: Another icon library, used for a larger selection of icons
- **Google Fonts**: Used for the Inter font
- **Vercel Analytics**: For tracking website analytics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
   
   Get your Resend API key from [https://resend.com](https://resend.com)

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to run locally.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/About.tsx` - Update about section content
- `src/components/Experience.tsx` - Update work experience
- `src/components/Projects.tsx` - Update projects
- `src/components/Skills.tsx` - Update skills
- `src/components/Publications.tsx` - Update publications and research
- `src/components/Contact.tsx` - Update contact information
- `src/components/Footer.tsx` - Update footer information

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual component files

### Content

- Replace `public/resume.pdf` with your actual resume
- Add your company logos to `public/logos/`
- Update project images in `public/projects/`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for Resend email service | Yes (for contact form) |
| `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` | Vercel Analytics ID | No |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for the smooth animations
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Resend](https://resend.com/) for the email service