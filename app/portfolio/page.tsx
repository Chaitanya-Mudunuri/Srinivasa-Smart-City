import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chaitanya Mudunuri | Full-Stack Engineer & AI Technologist Portfolio",
  description: "Official portfolio of Chaitanya Mudunuri. Expert Full-Stack Engineer, AI Technologist, and Cloud Architect specializing in Next.js, React, AI agents, and high-performance web applications.",
  keywords: [
    "Chaitanya Mudunuri",
    "Chaitanya Mudunuri portfolio",
    "Full-Stack Engineer Chaitanya",
    "AI Technologist Andhra Pradesh",
    "Next.js Developer India",
    "Mudunuri Chaitanya Software Engineer"
  ],
  authors: [{ name: "Chaitanya Mudunuri" }],
  metadataBase: new URL("https://portfolio.chaitanya.mudunuri.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chaitanya Mudunuri | Full-Stack Engineer & AI Technologist",
    description: "Explore the professional portfolio of Chaitanya Mudunuri showcasing advanced AI applications, full-stack web architectures, and cloud deployments.",
    url: "https://portfolio.chaitanya.mudunuri.co.in",
    siteName: "Chaitanya Mudunuri Portfolio",
    type: "website",
    locale: "en_IN",
  },
};

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Chaitanya Mudunuri",
              "jobTitle": "Full-Stack Engineer & AI Technologist",
              "url": "https://portfolio.chaitanya.mudunuri.co.in",
              "sameAs": [
                "https://github.com/Chaitanya-Mudunuri"
              ],
              "knowsAbout": ["Full-Stack Development", "Artificial Intelligence", "Next.js", "React", "Cloud Architecture"]
            }
          })
        }}
      />
      <div className="text-center py-12">
        <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Professional Portfolio</span>
        <h1 className="text-4xl sm:text-6xl font-outfit font-extrabold text-white mb-6">
          Chaitanya Mudunuri
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Full-Stack Engineer, AI Systems Architect, and Cloud Innovator building world-class digital experiences and autonomous agent workflows.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition">
            Explore Projects
          </a>
          <a href="mailto:satyaramaraju1234@gmail.com" className="border border-slate-700 hover:border-amber-500 text-slate-200 px-6 py-3 rounded-xl transition">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
