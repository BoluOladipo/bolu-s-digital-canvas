import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index: number;
}

const TestimonialCard = ({ quote, author, role, company, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
    >
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-primary/30 mb-6" />

      {/* Quote Text */}
      <p className="text-foreground text-lg leading-relaxed mb-8">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground">{author}</h4>
          <p className="text-muted-foreground text-sm">
            {role} at {company}
          </p>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default TestimonialCard;