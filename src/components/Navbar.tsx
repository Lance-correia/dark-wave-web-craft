
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"

const navItems = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Resume",
    href: "/resume"
  },
  {
    title: "Portfolio",
    href: "/portfolio"
  },
  {
    title: "Blog",
    href: "/blog"
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useIsMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-40 transition-all duration-200",
      isScrolled ? "backdrop-blur-lg bg-background/80 border-b border-border/50 shadow-sm py-3" : "py-5"
    )}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-gradient">
          Dev<span className="text-white">Portfolio</span>
        </Link>
        
        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12"/>
                ) : (
                  <path d="M4 12h16M4 6h16M4 18h16"/>
                )}
              </svg>
            </Button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-background border-b border-border/50 shadow-md py-4 px-6">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors py-2 px-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink 
                    asChild 
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to={item.href}>
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </header>
  )
}
