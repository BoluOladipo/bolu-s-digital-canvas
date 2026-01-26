import PageTransition from "@/components/layout/PageTransition";
import HeroSection from "@/components/sections/HeroSection";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Plug, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import ProjectCard from "@/components/ui/ProjectCard";

// Import project images
import foodOrderingImg from "@/assets/projects/food-ordering.png";
import logisticsImg from "@/assets/projects/logistics.png";
import aiResumeImg from "@/assets/projects/ai-resume.png";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, high-performance web applications using React, Next.js, and modern technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile apps with React Native and Expo for iOS and Android.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive, beautiful interfaces that enhance user experience and drive engagement.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamlessly connecting your applications with third-party services and APIs.",
  },
];

const featuredProjects = [
  {
    title: "Food Ordering System",
    description: "A complete food ordering platform with real-time order tracking and payment integration.",
    techStack: ["React", "Node.js", "MongoDB"],
    image: foodOrderingImg,
  },
  {
    title: "Logistics Management",
    description: "Enterprise logistics solution for tracking shipments and managing deliveries.",
    techStack: ["Next.js", "REST APIs"],
    image: logisticsImg,
  },
  {
    title: "AI Resume Evaluator",
    description: "AI-powered tool that analyzes resumes and provides actionable feedback.",
    techStack: ["React", "OpenAI API"],
    image: aiResumeImg,
  },
];

const Index = () => {
  return (
    <PageTransition>
      <HeroSection />

      {/* Services Preview */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <SectionHeading
            badge="What I Do"
            title="Services I Offer"
            subtitle="From concept to deployment, I deliver end-to-end solutions tailored to your needs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="section-container">
          <SectionHeading
            badge="Portfolio"
            title="Featured Projects"
            subtitle="A selection of my recent work that showcases my expertise"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border border-primary text-primary rounded-full font-semibold inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-30" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
            >
              Ready to Build Something{" "}
              <span className="text-gradient">Amazing?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-10"
            >
              Let's collaborate and turn your ideas into reality. I'm always excited to work on new projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow-effect"
                >
                  Start a Conversation
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;