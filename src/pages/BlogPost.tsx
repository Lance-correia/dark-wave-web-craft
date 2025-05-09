import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage: string
  author: string
  date: string
  tags: string[]
}

export default function BlogPost() {
  const { slug } = useParams()
  
  const { data: post, isLoading, error } = useQuery<Post>({
    queryKey: ['post', slug],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3001/api/posts/${slug}`)
      if (!response.ok) {
        throw new Error('Failed to fetch post')
      }
      return response.json()
    }
  })
  
  if (isLoading) {
    return (
      <div className="container py-16 mt-20">
        <div className="text-center">Loading post...</div>
      </div>
    )
  }
  
  if (error || !post) {
    return (
      <div className="container py-16 mt-20">
        <div className="text-center">
          <div className="text-red-500 mb-4">Error loading post</div>
          <Link to="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container py-16 mt-20">
      {/* Back button */}
      <Link to="/blog" className="inline-flex items-center text-primary mb-8 hover:underline">
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
          className="mr-2"
        >
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        Back to Blog
      </Link>
      
      {/* Cover Image */}
      <div className="w-full aspect-[21/9] relative overflow-hidden rounded-lg mb-8">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Post Header */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <span>{new Date(post.date).toLocaleDateString("en-US", { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <Link 
              key={tag}
              to={`/blog?tag=${tag}`}
              className="bg-secondary hover:bg-secondary/80 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </Link>
          ))}
        </div>
        
        {/* Post Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
