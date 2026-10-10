import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const menuItems = [
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = ["home", ...menuItems.map((item) => item.href.substring(1))];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || isMenuOpen
          ? "border-b bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("#home")}
            className="font-mono text-sm font-medium tracking-tight hover:text-primary transition-colors"
          >
            jonatan<span className="text-primary">.</span>ismael
          </button>

          <div className="flex items-center gap-1">
            <nav className="hidden md:flex items-center">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="ml-2 grid h-9 w-9 place-items-center rounded-md border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
              title={isDark ? "Modo claro" : "Modo escuro"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              className="md:hidden grid h-9 w-9 place-items-center rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t py-2">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full py-2.5 text-left text-sm transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
