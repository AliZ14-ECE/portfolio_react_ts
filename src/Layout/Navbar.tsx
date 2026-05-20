import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contacts", label: "Contacts" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight hover:text-primary"
        >
          {/* Animated Heading name*/}
          <div className="inline-flex items-center font-medium text-4xl uppercase">
            {/* The First Name / Initial */}
            <span>A</span>
            <span
              className={`inline-block transition-all duration-300 ease-in-out overflow-hidden ${
                isScrolled ? "max-w-0 opacity-0" : "max-w-[100px] opacity-100"
              }`}
            >
              li
            </span>

            {/* The Last Name / Initial */}
            <span className="text-primary inline-flex">
              <span>&nbsp;Z</span>
              <span
                className={`inline-block transition-all duration-300 ease-in-out overflow-hidden ${
                  isScrolled ? "max-w-[10px] opacity-100" : "max-w-0 opacity-0"
                }`}
              >
                .
              </span>
              <span
                className={`inline-block transition-all duration-300 ease-in-out overflow-hidden ${
                  isScrolled ? "max-w-0 opacity-0" : "max-w-[100px] opacity-100"
                }`}
              >
                aher
              </span>
            </span>
          </div>
        </a>

        {/*Desktop Nav*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button*/}
        <div className="hidden md:block">
          <Button size="sm">
            <a href="#contacts">Let's Talk</a>
          </Button>
        </div>

        {/* Mobile Menu Button*/}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer "
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu*/}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <a href="#contacts">Let's Talk</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
