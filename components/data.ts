// Centralized data file for portfolio

export const skills = [
  { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
  { name: "Next.js", level: 88, color: "from-gray-800 to-gray-600" },
  { name: "Node.js", level: 82, color: "from-green-600 to-green-400" },
  { name: "Python", level: 78, color: "from-yellow-500 to-yellow-300" },
  { name: "AWS", level: 75, color: "from-orange-500 to-orange-300" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    githubLink: "https://github.com/username/ecommerce",
    liveLink: "https://ecommerce-demo.com",
    image: "/modern-ecommerce-website.png",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    githubLink: "https://github.com/username/taskmanager",
    liveLink: "https://taskmanager-demo.com",
    image: "/task-management-dashboard.png",
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by AI with natural language processing and context awareness.",
    techStack: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
    githubLink: "https://github.com/username/aichat",
    liveLink: "https://aichat-demo.com",
    image: "/ai-chat-interface.png",
  },
];

export const user = {
  name: "Emy Coligado",
  email: process.env.SMTP_USER,
  linkedinUrl: "https://linkedin.com/in/emycoligado",
  linkedinUsername: "emycoligado",
  bio:
    "Passionate about creating exceptional digital experiences through clean code, innovative solutions, and user-centered design. Let's build something amazing together.",
  role: "Full Stack Developer",
  avatar: "/professional-headshot.png",
};
