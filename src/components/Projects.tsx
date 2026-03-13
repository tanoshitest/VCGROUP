import { motion } from "framer-motion";
import { Language, translations, t } from "@/lib/i18n";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const images = [project1, project2, project3, project4, project5, project6];

interface ProjectsProps {
  lang: Language;
}

const Projects = ({ lang }: ProjectsProps) => {
  const { title, viewMore, items } = translations.projects;

  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground"
        >
          {t(title, lang)}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-3d rounded-xl overflow-hidden bg-card flex flex-col group"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={images[i]}
                  alt={t(item.title, lang)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center bg-card">
                <h3 className="font-heading font-bold text-lg text-foreground">{t(item.title, lang)}</h3>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;
