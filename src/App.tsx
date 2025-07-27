import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  Stars,
  Sky,
} from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import FloatingParticles from "./components/FloatingParticles";
import AnimatedBackground from "./components/AnimatedBackground";

// 3D Background Scene
const Scene3D = () => {
  return (
    <group>
      {/* 3D Background Elements */}
      <AnimatedBackground />
      <FloatingParticles />

      {/* 3D Text Elements */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color='#ef4444' />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[0, -5, 0]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color='#dc2626' />
        </mesh>
      </Float>
    </group>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative'
    >
      <div className='text-center text-white z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='space-y-8'
        >
          <h1 className='text-8xl md:text-9xl font-bold'>
            <span className='bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-800 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]'>
              Dastageer
            </span>
            <br />
            <span className='text-gray-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'>
              HC
            </span>
          </h1>
          <p className='text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto drop-shadow-[0_0_15px_rgba(156,163,175,0.4)]'>
            Software Development Engineer specializing in React, Next.js, and
            modern web technologies
          </p>
          <div className='flex justify-center space-x-6'>
            <motion.a
              href='#contact'
              className='px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-600/25 transition-all drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href='#projects'
              className='px-8 py-4 border-2 border-purple-600 rounded-full text-purple-300 font-semibold hover:bg-purple-600 hover:text-white transition-all drop-shadow-[0_0_8px_rgba(147,51,234,0.2)]'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "React Native",
    "Redux",
    "React Query",
    "Git",
    "Storybook",
  ];

  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='grid lg:grid-cols-2 gap-12 items-center'
        >
          <div className='space-y-6'>
            <h2 className='text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.4)]'>
              About Me
            </h2>
            <p className='text-xl text-gray-400 leading-relaxed drop-shadow-[0_0_10px_rgba(156,163,175,0.3)]'>
              I'm a passionate Frontend Developer with over 2 years of
              experience building scalable web applications. I specialize in
              React ecosystem and modern JavaScript technologies, creating
              seamless user experiences and high-performance applications.
            </p>
            <p className='text-xl text-gray-400 leading-relaxed drop-shadow-[0_0_10px_rgba(156,163,175,0.3)]'>
              Currently working as Software Development Engineer 1 at GeoIQ Pvt.
              Ltd, where I contribute to building fast, scalable, and
              high-quality product code using Next.js, React, TypeScript, and
              modern frontend technologies.
            </p>
          </div>
          <div className='space-y-6'>
            <h3 className='text-3xl font-semibold text-gray-200 mb-6 drop-shadow-[0_0_10px_rgba(229,231,235,0.3)]'>
              Technical Skills
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className='p-4 bg-gradient-to-r from-purple-600/10 to-indigo-700/10 rounded-lg border border-purple-600/20 hover:border-purple-500 transition-all drop-shadow-[0_0_8px_rgba(147,51,234,0.1)]'
                >
                  <span className='text-gray-300 font-medium drop-shadow-[0_0_5px_rgba(209,213,219,0.2)]'>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Development Engineer 1",
      company: "GeoIQ Pvt. Ltd",
      duration: "Dec 2023 - Present",
      location: "Bengaluru, India",
      achievements: [
        "Developed fast, scalable product code using Next.js, React.js, TypeScript",
        "Built reusable UI components reducing development time by 15%",
        "Enhanced React, Next.js, Remix, and React Native applications",
        "Collaborated with cross-functional teams to implement effective solutions",
      ],
    },
    {
      title: "Software Developer (Frontend)",
      company: "ZenDynamix Pvt. Ltd",
      duration: "March 2022 - Nov 2023",
      location: "Bengaluru, Karnataka, India",
      achievements: [
        "Developed UI components using React and TypeScript",
        "Implemented state management with Redux and React Query",
        "Refactored legacy code for improved maintainability",
        "Migrated design framework from MaterialUI to PrimeReact",
      ],
    },
  ];

  return (
    <section
      id='experience'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.4)]'
        >
          Work Experience
        </motion.h2>
        <div className='space-y-8'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='relative'
            >
              <div className='bg-gradient-to-r from-purple-600/5 to-indigo-700/5 p-8 rounded-2xl border border-purple-600/15 hover:border-purple-500/30 transition-all drop-shadow-[0_0_10px_rgba(147,51,234,0.1)]'>
                <div className='flex items-start justify-between mb-6'>
                  <div>
                    <h3 className='text-2xl font-semibold text-gray-200 drop-shadow-[0_0_8px_rgba(229,231,235,0.3)]'>
                      {exp.title}
                    </h3>
                    <p className='text-xl text-purple-300 font-medium drop-shadow-[0_0_8px_rgba(196,181,253,0.3)]'>
                      {exp.company}
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-gray-500 drop-shadow-[0_0_5px_rgba(107,114,128,0.2)]'>
                      {exp.duration}
                    </p>
                    <p className='text-purple-300 drop-shadow-[0_0_5px_rgba(196,181,253,0.2)]'>
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul className='space-y-3'>
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className='text-gray-400 flex items-start drop-shadow-[0_0_5px_rgba(156,163,175,0.2)]'
                    >
                      <span className='text-purple-400 mr-3 mt-1 drop-shadow-[0_0_5px_rgba(168,85,247,0.3)]'>
                        •
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "Retail IQ",
      description:
        "Developed Site Report feature for clear retail insights. Migrated state logic to React Query for better performance.",
      tech: ["React", "React Query", "TypeScript"],
      link: "#",
    },
    {
      title: "GeoIQ Web Kit",
      description:
        "Built reusable UI components library ensuring consistency and flexibility across projects.",
      tech: ["React", "TypeScript", "Storybook"],
      link: "#",
    },
    {
      title: "MarketConnect (Android)",
      description:
        "Bootstrapped React Native app with key tech decisions and implemented core features.",
      tech: ["React Native", "TypeScript"],
      link: "#",
    },
  ];

  return (
    <section
      id='projects'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.4)]'
        >
          Projects
        </motion.h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='bg-gradient-to-r from-purple-600/5 to-indigo-700/5 p-6 rounded-2xl border border-purple-600/15 hover:border-purple-500/30 transition-all group drop-shadow-[0_0_8px_rgba(147,51,234,0.1)]'
            >
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-xl font-semibold text-gray-200 drop-shadow-[0_0_8px_rgba(229,231,235,0.3)]'>
                  {project.title}
                </h3>
                <ExternalLink className='w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors drop-shadow-[0_0_5px_rgba(196,181,253,0.3)]' />
              </div>
              <p className='text-gray-400 mb-4 drop-shadow-[0_0_5px_rgba(156,163,175,0.2)]'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1 bg-purple-600/10 rounded-full text-xs text-gray-300 border border-purple-600/20 drop-shadow-[0_0_3px_rgba(147,51,234,0.2)]'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const contactInfo = [
    { icon: Phone, text: "+91 9980973613", href: "tel:+919980973613" },
    {
      icon: Mail,
      text: "dastageerhc@gmail.com",
      href: "mailto:dastageerhc@gmail.com",
    },
    { icon: MapPin, text: "Bengaluru, India", href: "#" },
    {
      icon: Linkedin,
      text: "linkedin.com/in/dastageer-hc",
      href: "https://linkedin.com/in/dastageer-hc",
    },
    {
      icon: Github,
      text: "github.com/dastageer-hc",
      href: "https://github.com/dastageer-hc",
    },
  ];

  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <div className='max-w-4xl mx-auto px-6 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-5xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.4)]'
        >
          Get In Touch
        </motion.h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={
                info.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='bg-gradient-to-r from-purple-600/5 to-indigo-700/5 p-6 rounded-2xl border border-purple-600/15 hover:border-purple-500/30 transition-all group drop-shadow-[0_0_8px_rgba(147,51,234,0.1)]'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='flex items-center justify-center mb-3'>
                <info.icon className='w-8 h-8 text-purple-300 group-hover:text-purple-200 transition-colors drop-shadow-[0_0_8px_rgba(196,181,253,0.3)]' />
              </div>
              <p className='text-gray-400 group-hover:text-gray-300 transition-colors drop-shadow-[0_0_5px_rgba(156,163,175,0.2)]'>
                {info.text}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Navigation UI
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50'>
      <div className='flex space-x-4 bg-black/60 backdrop-blur-md rounded-full p-2 border border-purple-600/20 drop-shadow-[0_0_10px_rgba(147,51,234,0.2)]'>
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeSection === section.id
                ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white drop-shadow-[0_0_8px_rgba(147,51,234,0.4)]"
                : "text-gray-400 hover:text-purple-300 drop-shadow-[0_0_5px_rgba(156,163,175,0.2)]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.name}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

// Scroll Indicator
const ScrollIndicator = () => {
  return (
    <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50'>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className='text-purple-300 drop-shadow-[0_0_8px_rgba(196,181,253,0.4)]'
      >
        <ChevronDown className='w-6 h-6' />
      </motion.div>
    </div>
  );
};

function App() {
  return (
    <div className='relative'>
      {/* 3D Background Canvas */}
      <div className='fixed inset-0 z-0 bg-black'>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 75 }}
          style={{ background: "#000000" }}
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <pointLight
              position={[10, 10, 10]}
              intensity={0.5}
              color='#ef4444'
            />
            <pointLight
              position={[-10, -10, -10]}
              intensity={0.3}
              color='#dc2626'
            />

            {/* Environment */}
            {/* <Environment preset='sunset' /> */}
            <Stars
              radius={100}
              depth={50}
              count={1000}
              factor={2}
              saturation={0}
              fade
            />

            {/* Sky - removed to keep it dark */}
            {/* <Sky sunPosition={[0, 1, 0]} /> */}

            {/* Main Scene */}
            <Scene3D />

            {/* Controls */}
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              maxDistance={50}
              minDistance={5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Sections */}
      <div className='relative z-10'>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* UI Elements */}
      <Navigation />
      <ScrollIndicator />
    </div>
  );
}

export default App;
