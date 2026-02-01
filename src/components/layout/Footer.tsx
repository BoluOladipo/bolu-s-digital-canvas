import { motion } from "framer-motion";
import { Github, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:boluemmanuel071@gmail.com", label: "Email" },
];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-heading font-bold">
                <span className="text-gradient">Bolu</span>
                <span className="text-foreground">OladipoCodes</span>
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building exceptional digital experiences through innovative web and mobile solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>boluemmanuel071@gmail.com</p>
              <p>+234 707 580 0632</p>
              <p>Lagos, Nigeria</p>
            </div>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium"
              >
                Start a Project
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} BoluOladipoCodes. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with 💙 by BoluOladipoCodes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
