
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative">
          <h1 className="text-9xl font-bold opacity-10">404</h1>
          <h2 className="text-3xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Page Not Found
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="pt-6">
          <Button asChild variant="gradient">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
