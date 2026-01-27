import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";
import { Smartphone, Globe } from "lucide-react";

// Import project images
import foodOrderingImg from "@/assets/projects/food-ordering.png";
import clothingStoreImg from "@/assets/projects/clothing-store.png";
import logisticsImg from "@/assets/projects/logistics.png";
import olamToolsImg from "@/assets/projects/olam-tools.png";
import surveyOlamImg from "@/assets/projects/survey-olam.png";
import aiResumeImg from "@/assets/projects/ai-resume.png";
import portfolioImg from "@/assets/projects/portfolio.png";
import EventPulseImg from "@/assets/projects/EventPulse.png";

const webProjects = [
  {
    title: "Food Ordering System",
    description: "A comprehensive food ordering platform featuring real-time order tracking, payment integration, restaurant management dashboard, and delivery optimization.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: foodOrderingImg,
  },
  {
    title: "Clothing Ordering Website",
    description: "Modern e-commerce platform for a fashion brand with product catalog, cart functionality, size guides, and seamless checkout experience.",
    techStack: ["React", "Tailwind CSS", "Stripe"],
    image: clothingStoreImg,
  },
  {
    title: "Event Attendance Management System(EventPulse)",
    description: "Enterprise-grade attendance solution for tracking event attendance, managing events, route optimization, and real-time QR code scanner to enter event.",
    techStack: ["Next.js", "REST APIs", "PostgreSQL"],
    image: EventPulseImg,
  },
  {
    title: "Enterprise Internal Tools (Olam Agri)",
    description: "Suite of internal tools for Olam Agri including inventory management, employee portals, and reporting dashboards.",
    techStack: ["React", "API Integration", "TypeScript"],
    image: olamToolsImg,
  },
  {
    title: "Survey Website (Olam Agri)",
    description: "Dynamic survey platform for collecting and analyzing customer feedback, market research, and employee satisfaction data.",
    techStack: ["React", "API Integration", "MongoDB"],
    image: surveyOlamImg,
  },
  {
    title: "AI Resume Evaluator",
    description: "Innovative AI-powered application that analyzes resumes against job descriptions, providing actionable feedback and improvement suggestions.",
    techStack: ["React", "OpenAI API", "Node.js"],
    image: aiResumeImg,
  },
  {
    title: "Portfolio & Agency Sites",
    description: "Collection of stunning portfolio and agency websites with modern designs, smooth animations, and optimized performance.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    image: portfolioImg,
  },
];

const mobileProjects = [
  {
    title: "Cross-Platform Applications",
    description: "Mobile applications built with React Native and Expo, delivering native performance on both iOS and Android platforms.",
    techStack: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Mobile Commerce Solutions",
    description: "E-commerce mobile apps with seamless shopping experience, push notifications, and offline functionality.",
    techStack: ["React Native", "Redux", "Firebase"],
  },
];

const Work = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="section-container">
          <SectionHeading
            badge="My Work"
            title="Projects & Portfolio"
            subtitle="A showcase of projects I've built for clients and personal ventures"
          />

          {/* Web Projects */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">Web Development</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>

          {/* Mobile Projects */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">Mobile Development</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {mobileProjects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>

          {/* Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Technologies I Work With
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                { category: "Backend", skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
                { category: "Mobile", skills: ["React Native", "Expo", "iOS", "Android"] },
                { category: "Other", skills: ["Git", "REST APIs", "OpenAI", "Vercel"] },
              ].map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="font-heading font-semibold text-primary mb-3">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Work;
