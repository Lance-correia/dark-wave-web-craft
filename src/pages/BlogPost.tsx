
import { useParams, Link } from "react-router-dom"
import { blogPosts } from "@/data/blog"
import { Button } from "@/components/ui/button"

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  
  const post = blogPosts.find(post => post.slug === slug)
  
  // Find related posts based on tags (up to 3)
  const relatedPosts = post
    ? blogPosts
        .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
        .slice(0, 3)
    : []
  
  if (!post) {
    return (
      <div className="container py-16 mt-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild variant="gradient">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }
  
  return (
    <div className="container py-16 mt-20">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="mb-8 inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
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
            className="mr-1"
          >
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          Back to Blog
        </Link>
        
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <span>{new Date(post.date).toLocaleDateString("en-US", { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <Link 
                key={tag}
                to={`/blog?tag=${tag}`}
                className="bg-secondary hover:bg-accent/50 transition-colors px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </Link>
            ))}
          </div>
          
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-auto rounded-lg object-cover aspect-[21/9] mb-10"
          />
        </header>
        
        {/* Post Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => {
            // Handle headings
            if (paragraph.startsWith("# ")) {
              return <h1 key={index} className="text-3xl font-bold my-6">{paragraph.substring(2)}</h1>
            } else if (paragraph.startsWith("## ")) {
              return <h2 key={index} className="text-2xl font-bold my-5">{paragraph.substring(3)}</h2>
            } else if (paragraph.startsWith("### ")) {
              return <h3 key={index} className="text-xl font-bold my-4">{paragraph.substring(4)}</h3>
            }
            
            // Handle code blocks
            else if (paragraph.startsWith("```") && paragraph.endsWith("```")) {
              const language = paragraph.substring(3, paragraph.indexOf("\n"));
              const code = paragraph.substring(
                paragraph.indexOf("\n") + 1, 
                paragraph.length - 3
              );
              return (
                <pre key={index} className="bg-secondary/70 p-4 rounded-md overflow-auto my-6">
                  <code className="text-sm font-mono">{code}</code>
                </pre>
              );
            }
            
            // Regular paragraph
            else {
              return <p key={index} className="my-4">{paragraph}</p>
            }
          })}
        </article>
        
        {/* Author Box */}
        <div className="my-16 glass-card p-6 rounded-lg flex flex-col sm:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt={post.author}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">About {post.author}</h3>
            <p className="text-muted-foreground mb-3">
              Frontend developer with a passion for creating clean, user-friendly interfaces with modern web technologies.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="my-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.slug}`}
                  className="glass-card rounded-lg overflow-hidden hover-scale group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={relatedPost.coverImage} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Date(relatedPost.date).toLocaleDateString("en-US", { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
