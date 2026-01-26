import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award, CheckCircle } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs", "PostgreSQL"] },
  { category: "Mobile", items: ["React Native", "Expo", "Mobile UI/UX"] },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Vercel", "AWS"] },
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing every aspect for the best user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to understand and exceed expectations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for perfection in every project I undertake.",
  },
];

const About = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="section-container">
          <SectionHeading
            badge="About Me"
            title="The Developer Behind the Code"
            subtitle="Passionate about creating digital solutions that make a difference"
          />

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Hi, I'm <span className="text-gradient">Bolu Oladipo</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a full-stack developer with over 5 years of experience building web and mobile applications. 
                Based in Lagos, Nigeria, I specialize in creating exceptional digital experiences using modern 
                technologies like React, Next.js, and React Native.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with a curiosity about how things work on the web. Today, I've had 
                the privilege of working with startups, agencies, and enterprise clients, including Olam Agri, 
                helping them build products that impact thousands of users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or mentoring aspiring developers in the community.
              </p>
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium"
                >
                  Let's Work Together
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Profile Image */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-border relative overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Bolu Oladipo" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </motion.div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-heading font-semibold text-center mb-12"
            >
              What I Value
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-heading font-semibold text-center mb-12"
            >
              Technical Skills
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h4 className="font-heading font-semibold text-primary">{skillGroup.category}</h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;