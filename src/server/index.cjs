const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('../../generated/prisma');

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3001;

// Configure CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Test endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Add test posts
app.post('/api/posts/test', async (req, res) => {
  try {
    const testPosts = [
      {
        title: 'Getting Started with React',
        slug: 'getting-started-with-react',
        content: `# Getting Started with React

React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of individual developers and companies.

## Why React?

- **Component-Based**: Build encapsulated components that manage their own state
- **Declarative**: Create interactive UIs with less code
- **Learn Once, Write Anywhere**: React can render on the server using Node and power mobile apps using React Native

## Basic Example

\`\`\`jsx
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);
\`\`\`

## Next Steps

- [Official React Documentation](https://reactjs.org/docs/getting-started.html)
- [Create React App](https://create-react-app.dev/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)`,
        excerpt: 'Learn the basics of React, a popular JavaScript library for building user interfaces.',
        coverImage: 'https://picsum.photos/800/400?random=1',
        author: 'John Doe',
        tags: ['react', 'javascript', 'web development']
      },
      {
        title: 'Building a RESTful API with Express',
        slug: 'building-restful-api-express',
        content: `# Building a RESTful API with Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Key Features

- Robust routing
- Focus on high performance
- Super-high test coverage
- HTTP helpers (redirection, caching, etc)
- View system supporting 14+ template engines

## Basic Example

\`\`\`javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(\`Example app listening on port \${port}\`)
})
\`\`\`

## Best Practices

1. Use middleware for common tasks
2. Implement proper error handling
3. Use environment variables for configuration
4. Follow RESTful principles
5. Implement proper security measures`,
        excerpt: 'Learn how to build a RESTful API using Express.js, a popular Node.js framework.',
        coverImage: 'https://picsum.photos/800/400?random=2',
        author: 'Jane Smith',
        tags: ['node.js', 'express', 'api', 'backend']
      },
      {
        title: 'Introduction to TypeScript',
        slug: 'introduction-to-typescript',
        content: `# Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## Why TypeScript?

- **Type Safety**: Catch errors before they happen
- **Better IDE Support**: Get better autocompletion and refactoring
- **Modern JavaScript Features**: Use the latest JavaScript features
- **Scalability**: Better for large applications

## Basic Example

\`\`\`typescript
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
\`\`\`

## Getting Started

1. Install TypeScript
2. Create a tsconfig.json file
3. Write your first TypeScript program
4. Compile and run`,
        excerpt: 'Learn the basics of TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
        coverImage: 'https://picsum.photos/800/400?random=3',
        author: 'Alex Johnson',
        tags: ['typescript', 'javascript', 'programming']
      }
    ];

    // Delete existing test posts
    await prisma.post.deleteMany({
      where: {
        slug: {
          in: testPosts.map(post => post.slug)
        }
      }
    });

    // Create new test posts
    const createdPosts = await Promise.all(
      testPosts.map(post => prisma.post.create({ data: post }))
    );

    res.json(createdPosts);
  } catch (error) {
    console.error('Error creating test posts:', error);
    res.status(500).json({ error: 'Failed to create test posts', details: error.message });
  }
});

// Get a single post by slug
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: req.params.slug
      }
    });
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post', details: error.message });
  }
});

// Get all blog posts
app.get('/api/posts', async (req, res) => {
  try {
    console.log('Fetching posts from database...');
    const posts = await prisma.post.findMany({
      orderBy: {
        date: 'desc'
      }
    });
    console.log('Posts fetched:', posts); // Debug log
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts', details: error.message });
  }
});

process.on('SIGTERM', async () => {
  console.log('Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 