import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  index: number;
}

const ProjectCard = ({ title, description, techStack, image, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
    >
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-heading font-bold text-primary/20">
            {title.charAt(0)}
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-primary rounded-full text-primary-foreground"
          >
            <ExternalLink size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ArrowUpRight
            size={20}
            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;