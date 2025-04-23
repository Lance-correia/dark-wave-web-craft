
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  coverImage: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "modern-react-hooks",
    title: "Modern React Hooks: Beyond the Basics",
    slug: "modern-react-hooks",
    date: "2023-11-15",
    excerpt: "Explore advanced patterns and custom hooks to simplify complex state management in React applications.",
    content: `
# Modern React Hooks: Beyond the Basics

React Hooks have revolutionized how we build React applications, but there's a lot more to them than just useState and useEffect.

## Understanding Custom Hooks

Custom hooks allow us to extract component logic into reusable functions. Let's create a simple custom hook for handling form state:

\`\`\`jsx
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const reset = () => {
    setValues(initialValues);
  };

  return { values, handleChange, reset };
}
\`\`\`

## Advanced useEffect Patterns

The useEffect hook is powerful but can be tricky. Here are some advanced patterns:

### Dependency Arrays Matter

Be careful with your dependency arrays. Missing dependencies can lead to stale closures:

\`\`\`jsx
// Bad - count will always be the initial value in the alert
useEffect(() => {
  const timer = setTimeout(() => {
    alert(count);
  }, 1000);
  return () => clearTimeout(timer);
}, []); // Missing dependency

// Good - count will be current when the timeout fires
useEffect(() => {
  const timer = setTimeout(() => {
    alert(count);
  }, 1000);
  return () => clearTimeout(timer);
}, [count]);
\`\`\`

## Performance Optimizations with useMemo and useCallback

These hooks help prevent unnecessary renders:

\`\`\`jsx
// Without memoization - expensiveCalculation runs on every render
const result = expensiveCalculation(count);

// With memoization - only runs when count changes
const result = useMemo(() => expensiveCalculation(count), [count]);
\`\`\`

## Conclusion

Mastering React Hooks can dramatically improve your code's readability, reusability, and performance. As you build more complex applications, consider creating custom hooks to encapsulate and share behavior across components.
    `,
    author: "Jane Smith",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Hooks", "JavaScript", "Frontend"]
  },
  {
    id: "css-grid-layout",
    title: "Mastering CSS Grid Layout",
    slug: "css-grid-layout",
    date: "2023-10-22",
    excerpt: "Learn how to create complex, responsive layouts using CSS Grid with practical examples.",
    content: `
# Mastering CSS Grid Layout

CSS Grid has transformed how we approach layout design on the web. Let's explore some practical applications.

## Basic Grid Structure

Creating a simple grid is straightforward:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
\`\`\`

This creates a three-column grid with equally sized columns and 20px gaps.

## Creating Complex Layouts

For more advanced layouts, you can define both rows and columns:

\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "sidebar header header"
    "sidebar content content"
    "sidebar footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
\`\`\`

## Responsive Grids

CSS Grid shines when creating responsive layouts:

\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
}
\`\`\`

This creates a responsive gallery where columns adjust based on available space.

## Grid Alignment

Controlling alignment within grid cells:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center; /* Vertical alignment */
  justify-items: center; /* Horizontal alignment */
}
\`\`\`

## Conclusion

CSS Grid provides a powerful system for creating layouts that would have been difficult or impossible with older techniques. By mastering Grid, you can create more complex designs with less CSS, making your code more maintainable and your layouts more flexible.
    `,
    author: "Alex Johnson",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
    tags: ["CSS", "Grid", "Layout", "Responsive Design"]
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices in 2023",
    slug: "typescript-best-practices",
    date: "2023-09-18",
    excerpt: "Essential TypeScript patterns and practices for writing maintainable, type-safe code.",
    content: `
# TypeScript Best Practices in 2023

TypeScript continues to grow in popularity, and with good reason. Here are some best practices to make your TypeScript code more robust and maintainable.

## Use Strict Mode

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

This enables a suite of type-checking options that will catch more potential errors.

## Prefer Interfaces for Public APIs

When defining shapes that will be used by consumers of your code:

\`\`\`typescript
// Good for public APIs
interface User {
  id: string;
  name: string;
  email: string;
}

// Better for internal/anonymous shapes
type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
\`\`\`

## Use Function Overloads for Complex Functions

For functions with multiple possible input/output combinations:

\`\`\`typescript
// Overload signatures
function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: boolean): boolean;

// Implementation
function processValue(value: string | number | boolean): string | number | boolean {
  // Implementation here
  return value;
}
\`\`\`

## Leverage Discriminated Unions

For type-safe handling of different object shapes:

\`\`\`typescript
type Success = {
  status: 'success';
  data: unknown;
}

type Error = {
  status: 'error';
  error: string;
}

type ApiResponse = Success | Error;

function handleResponse(response: ApiResponse) {
  if (response.status === 'success') {
    // TypeScript knows this is Success type
    console.log(response.data);
  } else {
    // TypeScript knows this is Error type
    console.error(response.error);
  }
}
\`\`\`

## Conclusion

TypeScript offers tremendous benefits for code quality and developer experience, but using it effectively requires understanding its nuances. By following these best practices, you'll write more maintainable and robust TypeScript code.
    `,
    author: "Michael Zhang",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"]
  },
  {
    id: "tech-interviews",
    title: "Ace Your Technical Interviews: A Developer's Guide",
    slug: "tech-interviews",
    date: "2023-08-05",
    excerpt: "Strategies and preparation tips for technical interviews at top tech companies.",
    content: `
# Ace Your Technical Interviews: A Developer's Guide

Technical interviews can be intimidating, but with proper preparation, you can approach them with confidence.

## Before the Interview

### 1. Know Your Fundamentals

Review these areas:
- Data structures (arrays, linked lists, trees, graphs, hash tables)
- Algorithms (sorting, searching, recursion, dynamic programming)
- Time and space complexity analysis
- System design principles

### 2. Practice, Practice, Practice

Solve problems on platforms like:
- LeetCode
- HackerRank
- CodeSignal
- AlgoExpert

Aim to complete 2-3 problems daily in the weeks leading up to your interview.

## During the Interview

### 1. Understand the Problem

- Restate the problem in your own words
- Ask clarifying questions
- Discuss edge cases
- Start with a simple example

### 2. Plan Before Coding

- Think aloud as you work through your approach
- Discuss the trade-offs between different solutions
- Analyze the time and space complexity

### 3. Write Clean Code

- Use meaningful variable names
- Structure your code logically
- Add comments for clarity

### 4. Test Your Solution

- Walk through your code with a simple example
- Check edge cases
- Discuss possible optimizations

## Common Pitfalls to Avoid

- Jumping into coding without a plan
- Being silent during your thought process
- Getting stuck without asking for hints
- Missing edge cases

## Conclusion

Technical interviews are as much about your problem-solving process as they are about getting the right answer. Prepare thoroughly, communicate clearly, and approach each interview as a learning opportunity.
    `,
    author: "David Lee",
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    tags: ["Career", "Interviews", "Programming", "Job Search"]
  },
  {
    id: "design-systems",
    title: "Building a Design System from Scratch",
    slug: "design-systems",
    date: "2023-07-12",
    excerpt: "Learn how to create a comprehensive design system that enhances consistency and speeds up development.",
    content: `
# Building a Design System from Scratch

A well-implemented design system can transform how teams build products, ensuring consistency and accelerating development.

## What Is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.

Key components include:
- UI components
- Design tokens
- Documentation
- Guidelines for usage

## Step 1: Define Design Tokens

Design tokens are the foundation of your system:

\`\`\`css
:root {
  /* Colors */
  --color-primary: #0066cc;
  --color-secondary: #4dabf7;
  --color-success: #40c057;
  --color-warning: #fcc419;
  --color-error: #f03e3e;
  --color-background: #ffffff;
  --color-text: #212529;
  
  /* Typography */
  --font-family-base: 'Inter', system-ui, -apple-system, sans-serif;
  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-md: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;  /* 18px */
  --font-size-xl: 1.25rem;   /* 20px */
  
  /* Spacing */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  
  /* Borders */
  --border-radius-sm: 2px;
  --border-radius-md: 4px;
  --border-radius-lg: 8px;
}
\`\`\`

## Step 2: Build Core Components

Start with foundational components:

\`\`\`jsx
// Button component
function Button({ variant = 'primary', size = 'md', children, ...props }) {
  return (
    <button 
      className={\`button button--\${variant} button--\${size}\`} 
      {...props}
    >
      {children}
    </button>
  );
}

// Card component
function Card({ title, children, ...props }) {
  return (
    <div className="card" {...props}>
      {title && <div className="card__title">{title}</div>}
      <div className="card__content">{children}</div>
    </div>
  );
}
\`\`\`

## Step 3: Document Everything

Documentation ensures proper usage:

- Component API descriptions
- Usage examples
- Do's and don'ts
- Accessibility guidelines

## Step 4: Set Up a Development Workflow

Implement processes for:

- Component development
- Testing
- Version control
- Release management

## Conclusion

Building a design system is an investment that pays dividends in consistency, development speed, and product quality. Start small, focus on the most common components, and evolve your system based on real usage patterns.
    `,
    author: "Emily Chen",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    tags: ["Design Systems", "UI", "Frontend", "UX"]
  }
];
