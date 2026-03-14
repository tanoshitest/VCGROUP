import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Language, translations, t } from "@/lib/i18n";

interface NotFoundProps {
  lang?: Language;
}

const NotFound = ({ lang = "vi" }: NotFoundProps) => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "VC GROUP - " + (lang === "jp" ? "404 見つかりません" : "Page Not Found");
  }, [location.pathname, lang]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted font-body">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t(translations.common.notFound, lang)}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t(translations.nav.home, lang)}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
