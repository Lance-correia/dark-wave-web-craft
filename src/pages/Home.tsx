
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 pt-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient">Lance Correia</span>
              <br />
              <span>Full Stack Engineer</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              I build accessible, user-friendly web applications with modern technologies.
              Specializing in React, TypeScript, and responsive design.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild variant="gradient" size="lg">
                <Link to="/portfolio">View My Work</Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="#" download>Download Resume</a>
              </Button>
            </div>
            
            <div className="mt-10 flex gap-5 justify-center md:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-light via-purple to-accent blur-lg opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=80" 
                alt="John Doe" 
                className="rounded-full w-full h-full object-cover relative z-10 border-4 border-background"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <ArrowRight className="h-5 w-5 animate-bounce rotate-90" />
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="glass-card p-8 rounded-xl">
            <p className="text-lg mb-6">
              I'm a passionate frontend developer with 5+ years of experience creating responsive and accessible web applications. 
              My journey in web development started with HTML and CSS, and has evolved to embrace modern JavaScript frameworks and design systems.
            </p>
            
            <p className="text-lg mb-6">
              I specialize in building user interfaces that are not only visually appealing but also provide an exceptional user experience. 
              My approach combines technical expertise with creative problem-solving to deliver high-quality digital products.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through blog posts and community events.
            </p>
            
            <div className="mt-8 flex justify-center">
              <Button asChild variant="outline">
                <Link to="/resume" className="flex items-center gap-2">
                  View Full Resume
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/portfolio" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projects will be mapped here from data */}
            <div className="glass-card rounded-lg overflow-hidden hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop" 
                alt="E-commerce Platform" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4">A modern e-commerce platform built with React, Node.js, and MongoDB.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">Node.js</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-primary link-underline">Demo</a>
                  <a href="#" className="text-primary link-underline">Code</a>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-lg overflow-hidden hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop" 
                alt="Task Management App" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="text-muted-foreground mb-4">A collaborative task management application with real-time updates.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">Firebase</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">Tailwind CSS</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-primary link-underline">Demo</a>
                  <a href="#" className="text-primary link-underline">Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/blog" className="flex items-center gap-2">
                View All Posts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-lg overflow-hidden hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" 
                alt="Modern React Hooks" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-muted-foreground">November 15, 2023</span>
                <h3 className="text-xl font-semibold my-2">Modern React Hooks: Beyond the Basics</h3>
                <p className="text-muted-foreground mb-4">Explore advanced patterns and custom hooks to simplify complex state management in React applications.</p>
                <Link to="/blog/modern-react-hooks" className="text-primary link-underline">Read More</Link>
              </div>
            </div>
            
            <div className="glass-card rounded-lg overflow-hidden hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop" 
                alt="CSS Grid Layout" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-muted-foreground">October 22, 2023</span>
                <h3 className="text-xl font-semibold my-2">Mastering CSS Grid Layout</h3>
                <p className="text-muted-foreground mb-4">Learn how to create complex, responsive layouts using CSS Grid with practical examples.</p>
                <Link to="/blog/css-grid-layout" className="text-primary link-underline">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Have a project in mind or want to chat about web development? I'm always open to new opportunities and collaborations.
          </p>
          
          <Button asChild variant="gradient" size="lg">
            <a href="mailto:contact@example.com" className="flex items-center gap-2">
              Contact Me
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
