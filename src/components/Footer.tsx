const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-10 pt-6">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 border-t pt-6 font-mono text-xs text-muted-foreground">
        <p>© {currentYear} Jonatan Ismael</p>
        <p>Desenvolvedor Full Stack · São Vicente/SP</p>
      </div>
    </footer>
  );
};

export default Footer;
