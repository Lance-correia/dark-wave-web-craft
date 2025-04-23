
export interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const education: Education[] = [
  {
    school: "University of Technology",
    degree: "Master of Science",
    field: "Computer Science",
    startDate: "2018",
    endDate: "2020",
    description: "Specialized in artificial intelligence and machine learning with a thesis on neural network optimization techniques."
  },
  {
    school: "State University",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    startDate: "2014",
    endDate: "2018",
    description: "Focused on software development principles and practices with minors in mathematics and data structures."
  }
];

export const experience: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    startDate: "Jan 2022",
    endDate: "Present",
    description: "Lead the development of responsive web applications using React and modern JavaScript frameworks.",
    achievements: [
      "Reduced page load times by 40% through code optimization and lazy loading techniques",
      "Implemented a component library used across 5 different product teams",
      "Mentored junior developers and conducted code reviews to maintain quality standards",
      "Led the migration from Angular to React which improved development velocity by 30%"
    ]
  },
  {
    company: "Digital Solutions Ltd.",
    position: "Frontend Developer",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    description: "Developed and maintained web applications for clients in various industries.",
    achievements: [
      "Built responsive interfaces for 10+ client projects using JavaScript, HTML5, and CSS3",
      "Implemented state management solutions using Redux and Context API",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Integrated RESTful APIs and GraphQL endpoints with frontend applications"
    ]
  },
  {
    company: "WebCraft Studio",
    position: "Junior Web Developer",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    description: "Assisted in the development of websites and web applications for small businesses.",
    achievements: [
      "Developed and maintained websites for local businesses using WordPress and custom HTML/CSS",
      "Created responsive layouts that worked across desktop, tablet, and mobile devices",
      "Implemented SEO best practices resulting in improved search rankings for clients",
      "Collaborated with the design team to ensure consistent brand experiences"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3/SCSS", "Python"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Tailwind CSS", "Material UI", "Redux", "Express.js"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Webpack", "Vite", "AWS", "Docker", "Vercel", "Netlify"]
  },
  {
    category: "Methodologies",
    items: ["Agile/Scrum", "TDD", "CI/CD", "Responsive Design", "Accessibility (a11y)"]
  }
];
