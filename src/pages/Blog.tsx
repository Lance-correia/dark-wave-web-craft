
import { useState } from "react"
import { Link } from "react-router-dom"
import { blogPosts } from "@/data/blog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  
  // Extract unique tags from blog posts
  const tags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort()
  
  // Filter blog posts based on search query and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });
  
  return (
    <div className="container py-16 mt-20">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-10">
        Thoughts, insights, and tutorials about web development, design patterns, and the latest technologies.
      </p>
      
      {/* Search and Filter */}
      <div className="mb-10 space-y-4">
        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-secondary/70 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        {/* Tag Filters */}
        <div>
          <h2 className="text-lg font-medium mb-3">Filter by topic:</h2>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedTag === null ? "gradient" : "outline"} 
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              All Topics
            </Button>
            
            {tags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "gradient" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <Card className="glass-card overflow-hidden hover-scale h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag} 
                        className="bg-secondary text-xs px-2 py-1 rounded-full"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedTag(tag);
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-primary font-medium flex items-center">
                    Read more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No articles found for your search.</p>
          <Button 
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery("");
              setSelectedTag(null);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
      
      {/* Newsletter */}
      <section className="mt-20 py-12 bg-secondary/50 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to my newsletter</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
          Get the latest articles and news delivered directly to your inbox.
        </p>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 bg-background/70 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <Button type="submit" variant="gradient">
            Subscribe
          </Button>
        </form>
      </section>
    </div>
  )
}
