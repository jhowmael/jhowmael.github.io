const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4">
      <div className="container mx-auto max-w-5xl rounded-2xl glass-strong px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Jonatan Ismael
        </p>
        <p className="text-sm text-muted-foreground">
          Desenvolvedor Junior Backend · São Vicente/SP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
