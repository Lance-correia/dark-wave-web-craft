
import { useState } from "react"
import { projects } from "@/data/portfolio"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [filter, setFilter] = useState<string | null>(null)
  
  // Extract unique tags from projects
  const tags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort()
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects
  
  return (
    <div className="container py-16 mt-20">
      <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-12">
        A collection of projects I've worked on, showcasing my skills in frontend development, 
        UI/UX design, and application architecture.
      </p>
      
      {/* Filter Buttons */}
      <div className="mb-10">
        <h2 className="text-lg font-medium mb-3">Filter by technology:</h2>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={filter === null ? "gradient" : "outline"} 
            size="sm"
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          
          {tags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "gradient" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <Card key={project.id} className="glass-card overflow-hidden hover-scale">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {project.featured && (
                <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </div>
            
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-secondary text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
              
              <Button asChild variant="secondary" size="sm">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No projects found with the selected filter.</p>
          <Button 
            variant="outline"
            className="mt-4"
            onClick={() => setFilter(null)}
          >
            Clear Filter
          </Button>
        </div>
      )}
      
      {/* Contact Section */}
      <section className="mt-20 py-12 bg-secondary/50 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects and opportunities.
        </p>
        
        <Button asChild variant="gradient" size="lg">
          <a href="mailto:contact@example.com" className="flex items-center gap-2">
            Get In Touch
          </a>
        </Button>
      </section>
    </div>
  )
}
