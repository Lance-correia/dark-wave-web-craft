import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Resume from '@/pages/Resume'
import Portfolio from '@/pages/Portfolio'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import NotFound from '@/pages/NotFound'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: '/resume',
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Resume />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: '/portfolio',
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Portfolio />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: '/blog',
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Blog />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: '/blog/:slug',
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <BlogPost />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: '*',
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <NotFound />
        </main>
        <Footer />
      </div>
    ),
  },
])

export default router 