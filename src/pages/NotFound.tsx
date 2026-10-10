import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="font-mono text-sm text-primary mb-3">404</p>
        <h1 className="text-3xl font-semibold tracking-tight mb-3">Página não encontrada</h1>
        <a href="/" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
