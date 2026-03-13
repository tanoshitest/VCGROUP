import { Language } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CeoGreeting from "@/components/CeoGreeting";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

interface IndexProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Index = ({ lang, setLang }: IndexProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <CeoGreeting lang={lang} />
      <Services lang={lang} />
      <Projects lang={lang} />
      <WhyUs lang={lang} />
      <Process lang={lang} />
      <section id="contact" className="section-padding section-alt">
        <div className="container mx-auto max-w-6xl">
          <ContactForm lang={lang} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
