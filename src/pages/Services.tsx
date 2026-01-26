import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Plug, Database, Cloud, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with React, Next.js, and TypeScript. From simple landing pages to complex enterprise solutions.",
    features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern Tech Stack"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native and Expo. One codebase, multiple platforms, native performance.",
    features: ["iOS & Android", "Offline Support", "Push Notifications", "App Store Ready"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that balances aesthetics with functionality. Creating intuitive interfaces that users love.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamlessly connect your applications with third-party services, payment gateways, and external data sources.",
    features: ["REST APIs", "GraphQL", "OAuth", "Webhooks"],
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architectures that scale with your business. From MongoDB to PostgreSQL.",
    features: ["Schema Design", "Query Optimization", "Data Migration", "Backups"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Deployment and hosting solutions using modern cloud platforms like Vercel, AWS, and DigitalOcean.",
    features: ["CI/CD Pipelines", "Auto-scaling", "Monitoring", "Security"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your goals, requirements, and vision through detailed discussions.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating a roadmap with milestones, timelines, and technical specifications.",
  },
  {
    step: "03",
    title: "Design",
    description: "Crafting wireframes and prototypes to visualize the solution before development.",
  },
  {
    step: "04",
    title: "Development",
    description: "Building your solution with clean, maintainable code and regular updates.",
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous testing to ensure quality, performance, and security.",
  },
  {
    step: "06",
    title: "Launch & Support",
    description: "Deploying your project and providing ongoing maintenance and support.",
  },
];

const Services = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="section-container">
          <SectionHeading
            badge="Services"
            title="What I Can Do For You"
            subtitle="Comprehensive digital solutions tailored to your business needs"
          />

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-24">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-heading font-semibold text-center mb-4"
            >
              My Process
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
            >
              A structured approach to ensure project success from start to finish
            </motion.p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card/50 border border-border relative"
                >
                  <span className="text-6xl font-heading font-bold text-primary/10 absolute top-4 right-4">
                    {item.step}
                  </span>
                  <h4 className="font-heading font-semibold text-foreground mb-2 relative z-10">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm relative z-10">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your requirements and create something amazing together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold inline-flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;