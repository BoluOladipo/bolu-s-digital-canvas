import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Bolu delivered an exceptional logistics management system that transformed our operations. His attention to detail and technical expertise exceeded our expectations.",
    author: "Adebayo Johnson",
    role: "Operations Manager",
    company: "Swift Logistics",
  },
  {
    quote: "Working with BoluOladipoCodes was a game-changer for our e-commerce platform. The food ordering system he built has significantly improved our customer experience.",
    author: "Chidinma Okonkwo",
    role: "CEO",
    company: "FoodHub Nigeria",
  },
  {
    quote: "The enterprise tools Bolu developed for Olam Agri streamlined our internal processes and saved us countless hours. Highly professional and reliable.",
    author: "Michael Adeyemi",
    role: "IT Director",
    company: "Olam Agri",
  },
  {
    quote: "Bolu's mobile development skills are outstanding. The React Native app he built for us runs flawlessly on both iOS and Android.",
    author: "Funke Adesanya",
    role: "Product Manager",
    company: "TechStart Lagos",
  },
  {
    quote: "The AI Resume Evaluator project showcased Bolu's ability to integrate cutting-edge technology. His understanding of OpenAI's API is impressive.",
    author: "David Ogundimu",
    role: "HR Director",
    company: "Talent Bridge",
  },
  {
    quote: "From concept to deployment, Bolu demonstrated exceptional project management and communication skills. The final product exceeded all expectations.",
    author: "Ngozi Eze",
    role: "Founder",
    company: "Fashion Forward",
  },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const Testimonials = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="section-container">
          <SectionHeading
            badge="Testimonials"
            title="What Clients Say"
            subtitle="Don't just take my word for it - hear from the people I've worked with"
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
            ))}
          </div>

          {/* Rating Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 text-center"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              5.0 Average Rating
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Consistently delivering exceptional results that exceed client expectations
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold inline-flex items-center gap-2"
              >
                Join Happy Clients
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Testimonials;