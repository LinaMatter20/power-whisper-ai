import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/LinaMatter20", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lina-matter", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lina.e.mater1@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2025 Lina Matter · Built with React + Tailwind
      </p>
      <div className="flex gap-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
