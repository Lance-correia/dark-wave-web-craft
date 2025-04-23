
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment processing with Stripe.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Built with React, Firebase, and Tailwind CSS. Includes features like drag-and-drop task organization, user assignments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that provides current conditions and forecasts for any location. Utilizes Weather API for data and Chart.js for visualizations.",
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?q=80&w=800&auto=format&fit=crop",
    tags: ["JavaScript", "Chart.js", "API Integration", "CSS Grid"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: false
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description: "A personal portfolio website with dark mode, animations, and responsive design. Built with React and Tailwind CSS, featuring project showcases and contact form functionality.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: false
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A fitness tracking application that allows users to log workouts, track progress, and view statistics. Features include custom workout creation, graphical progress reports, and social sharing.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop",
    tags: ["React Native", "TypeScript", "Redux", "Firebase"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: false
  },
  {
    id: "recipe-app",
    title: "Recipe Finder App",
    description: "A recipe discovery application that allows users to search for recipes based on ingredients they have on hand. Features include dietary filters, saving favorite recipes, and meal planning.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Context API", "CSS Modules", "API Integration"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: false
  }
];
