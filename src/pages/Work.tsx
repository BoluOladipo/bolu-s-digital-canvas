import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";
import { Globe, Smartphone } from "lucide-react";

import olamToolsImg from "@/assets/projects/olam-tools.png";
import aiResumeImg from "@/assets/projects/ai-resume.png";
import portfolioImg from "@/assets/projects/portfolio.png";

import regalPlateImg from "@/assets/projects/new/regal-plate.png";
import swiftCartImg from "@/assets/projects/new/swift-cart.png";
import eventPulseImg from "@/assets/projects/new/eventpulse.png";
import mtuCareImg from "@/assets/projects/new/mtu-care.png";
import sensoryImg from "@/assets/projects/new/sensory.png";
import thankgodImg from "@/assets/projects/new/thankgod.png";
import greetingImg from "@/assets/projects/new/greeting.png";
import zinoMotorsImg from "@/assets/projects/new/zino-motors.png";
import aiDietImg from "@/assets/projects/new/ai-diet.png";
import weatherImg from "@/assets/projects/new/weather.png";
import chowHavenImg from "@/assets/projects/new/chow-haven.png";
import zinoFurnitureImg from "@/assets/projects/new/zino-furniture.png";

import fitTrackImg from "@/assets/projects/new/fittrack-mobile.jpg";
import eatsNowImg from "@/assets/projects/new/eatsnow-mobile.jpg";
import payFlowImg from "@/assets/projects/new/payflow-mobile.jpg";
import learnLoopImg from "@/assets/projects/new/learnloop-mobile.jpg";

const mobileApps = [
  {
    title: "FitTrack — Fitness & Wellness",
    description:
      "Cross-platform fitness companion with workout tracking, heart-rate sync, daily activity rings and personalized weekly goals.",
    techStack: ["React Native", "Expo", "TypeScript", "Firebase", "HealthKit"],
    image: fitTrackImg,
  },
  {
    title: "EatsNow — Food Delivery",
    description:
      "Mobile food ordering app with restaurant discovery, live order tracking on map, in-app payments and push notifications.",
    techStack: ["React Native", "Expo", "Node.js", "Stripe", "Google Maps"],
    image: eatsNowImg,
  },
  {
    title: "PayFlow — Mobile Wallet",
    description:
      "Secure fintech wallet for sending, receiving and tracking money with biometric auth, virtual cards and transaction insights.",
    techStack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Paystack"],
    image: payFlowImg,
  },
  {
    title: "LearnLoop — Micro-Learning",
    description:
      "Bite-sized learning app with video lessons, progress tracking, quizzes and offline mode for on-the-go study sessions.",
    techStack: ["React Native", "Expo", "Firebase Firestore", "Video SDK"],
    image: learnLoopImg,
  },
];

const projects = [
  {
    title: "Abi's Kitchen — Regal Plate (UK)",
    description:
      "Nigerian takeaway pre-order platform. Customers browse the menu, pick a pickup slot, and pay at collection. Smooth animations and a clean editorial feel.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    image: regalPlateImg,
    liveUrl: "https://regal-plate-orders.vercel.app/",
  },
  {
    title: "Afribuy — Swift Cart",
    description:
      "Pan-African e-commerce marketplace connecting buyers with verified sellers. Secure Flutterwave checkout, live order tracking, and category-based discovery.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Flutterwave", "Vercel"],
    image: swiftCartImg,
    liveUrl: "https://swift-cart-feel.vercel.app/",
  },
  {
    title: "EventPulse — Attendance & QR Check-in",
    description:
      "Event management platform with QR code check-in, real-time attendance tracking, live analytics dashboard and CSV exports for organizers.",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: eventPulseImg,
    liveUrl: "https://eventpulse-eosin.vercel.app/",
  },
  {
    title: "MTU Care Connect — Clinic System",
    description:
      "Health centre management system for Mountain Top University with patient records, appointments, role-based auth and staff dashboards.",
    techStack: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT"],
    image: mtuCareImg,
    liveUrl: "https://mtu-care-connect.vercel.app/",
  },
  {
    title: "Sensory Evaluation Platform (Olam Agri)",
    description:
      "Product quality assessment tool guiding evaluators through structured samples (Paste, Stew, Jollof Rice), capturing rankings and exporting results for R&D.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    image: sensoryImg,
    liveUrl: "https://sensory-evaluation.vercel.app/",
  },
  {
    title: "Thankgod Properties — Luxury Real Estate",
    description:
      "Premium real estate site showcasing curated properties, investment opportunities and lead capture, with cinematic hero animations and elegant typography.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: thankgodImg,
    liveUrl: "https://thankgod-properties.vercel.app/",
  },
  {
    title: "Automated Greeting Scheduler",
    description:
      "Full-stack scheduler that automatically sends birthday and anniversary emails using custom templates with name placeholders. Set it once, never miss a date.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "EmailJS", "Render"],
    image: greetingImg,
    liveUrl: "https://greeting-scheduler-frontend.vercel.app/",
  },
  {
    title: "Zino Motors — Car Showcase",
    description:
      "Showroom website featuring luxury, sports and classic cars with detailed model pages, image galleries and a clean contact flow.",
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: zinoMotorsImg,
    liveUrl: "https://zino-motors.vercel.app/",
  },
  {
    title: "AI Diet & Meal Plan Recommender",
    description:
      "AI-powered tool generating personalized 1-day and 7-day meal plans from symptoms, conditions and allergies. Includes a chatbot and PDF export.",
    techStack: ["HTML", "CSS", "JavaScript", "OpenAI API", "jsPDF"],
    image: aiDietImg,
    liveUrl: "https://ai-diet-recommender.vercel.app/",
  },
  {
    title: "Zino Weather Forecast",
    description:
      "Multilingual weather app (English, French, Igbo, Yoruba, Hausa, Ikwerre) covering 40+ Nigerian cities with offline detection and daily highlights.",
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API", "PWA"],
    image: weatherImg,
    liveUrl: "https://weather-forecast-six-teal.vercel.app/",
  },
  {
    title: "Chow Haven — Food Discovery",
    description:
      "Animated food discovery and ordering interface with rich loading states, hero typography and a focus on appetite-first visuals.",
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: chowHavenImg,
    liveUrl: "https://chow-haven.vercel.app/",
  },
  {
    title: "Zino Furniture — Interior Studio",
    description:
      "Modern interior design and furniture e-commerce site with product grid, cart flow and a soft editorial design system.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel"],
    image: zinoFurnitureImg,
    liveUrl: "https://zino-furniture.vercel.app/",
  },
  {
    title: "Enterprise Internal Tools (Olam Agri)",
    description:
      "Suite of internal tools for Olam Agri including inventory management, employee portals and reporting dashboards integrated with corporate APIs.",
    techStack: ["React", "TypeScript", "REST APIs", "Node.js"],
    image: olamToolsImg,
  },
  {
    title: "AI Resume Evaluator",
    description:
      "AI-powered application that analyzes resumes against job descriptions and returns actionable feedback and improvement suggestions.",
    techStack: ["React", "OpenAI API", "Node.js", "Express"],
    image: aiResumeImg,
  },
  {
    title: "BoluOladipoCodes Portfolio",
    description:
      "This very portfolio — animated, dark-themed and built to showcase agency-grade work with smooth page transitions.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    image: portfolioImg,
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
            subtitle="A showcase of recent client and personal projects — click any card to view it live"
          />

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
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Recent Projects
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>

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
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Mobile Apps
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileApps.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Technologies, Tools & Services I Work With
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  category: "Frontend",
                  skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Framer Motion"],
                },
                {
                  category: "Backend",
                  skills: ["Node.js", "Express", "REST APIs", "Python", "JWT", "Socket.io"],
                },
                {
                  category: "Mobile",
                  skills: ["React Native", "Expo", "iOS", "Android"],
                },
                {
                  category: "Databases",
                  skills: ["MongoDB Atlas", "PostgreSQL", "Firebase Firestore", "MySQL"],
                },
                {
                  category: "Cloud & Hosting",
                  skills: ["Vercel", "Render", "Firebase", "Netlify", "AWS"],
                },
                {
                  category: "Messaging & APIs",
                  skills: ["EmailJS", "Termii", "Twilio", "Flutterwave", "Paystack", "Stripe", "OpenAI API", "OpenWeather API"],
                },
                {
                  category: "DevOps & Tools",
                  skills: ["Git", "GitHub", "GitHub Actions", "VS Code", "Postman", "Figma"],
                },
                {
                  category: "Other",
                  skills: ["PWA", "jsPDF", "i18n", "QR Codes", "WebSockets"],
                },
              ].map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
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
