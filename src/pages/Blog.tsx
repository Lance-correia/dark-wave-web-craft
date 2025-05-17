import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { posts as staticPosts } from "@/data/blog"

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

export default function Blog() {
  // Use static posts data
  const posts = staticPosts;

  return (
    <section className="container py-16 mt-20">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog</h1>
        <SearchBar />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Card className="bg-secondary/50">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="w-full aspect-[21/9] relative overflow-hidden rounded-md">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-4">
          <span>{new Date(post.date).toLocaleDateString("en-US", { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Link 
              key={tag}
              to={`/blog?tag=${tag}`}
              className="bg-accent hover:bg-accent-foreground/10 text-accent-foreground px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </Link>
          ))}
        </div>
        
        <Button asChild variant="outline" size="sm">
          <Link to={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        setSearchParams({ search: searchTerm });
      } else {
        // Clear the search parameter when the search term is empty
        searchParams.delete('search');
        setSearchParams(searchParams);
      }
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, setSearchParams]);

  return (
    <div className="max-w-sm">
      <Input
        type="search"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
