export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the fundamentals of React and build your first application with this comprehensive guide.",
    content: `
      <h2>Introduction to React</h2>
      <p>React is a powerful JavaScript library for building user interfaces. It was created by Facebook and has gained immense popularity due to its component-based architecture and virtual DOM.</p>
      
      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Components:</strong> Reusable pieces of UI</li>
        <li><strong>JSX:</strong> JavaScript syntax extension</li>
        <li><strong>Props:</strong> Data passed to components</li>
        <li><strong>State:</strong> Component's internal data</li>
      </ul>
      
      <p>Getting started with React is straightforward. You can use Create React App or Vite to set up your development environment quickly.</p>
      
      <h3>Example Component</h3>
      <pre><code>function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}</code></pre>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Mastering CSS Grid",
    excerpt: "Take your layout skills to the next level with CSS Grid. Create complex, responsive designs with ease.",
    content: `
      <h2>CSS Grid Layout</h2>
      <p>CSS Grid is a two-dimensional layout system that revolutionized web design. Unlike Flexbox, which is one-dimensional, Grid allows you to create complex layouts with rows and columns.</p>
      
      <h3>Basic Grid Example</h3>
      <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}</code></pre>
      
      <p>With CSS Grid, you can create responsive layouts that adapt to different screen sizes without media queries by using features like auto-fit and minmax().</p>
      
      <h3>Advanced Techniques</h3>
      <ul>
        <li>Grid template areas</li>
        <li>Auto-placement algorithms</li>
        <li>Nested grids</li>
        <li>Masonry layouts</li>
      </ul>
    `,
    author: "Mike Chen",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "JavaScript ES6+ Features",
    excerpt: "Explore the modern JavaScript features that make development more efficient and code more readable.",
    content: `
      <h2>Modern JavaScript Features</h2>
      <p>ES6 and subsequent versions introduced many powerful features that transformed JavaScript development. These features make code more concise, readable, and maintainable.</p>
      
      <h3>Key ES6+ Features</h3>
      <ul>
        <li><strong>Arrow Functions:</strong> Concise function syntax</li>
        <li><strong>Destructuring:</strong> Extract values from objects and arrays</li>
        <li><strong>Template Literals:</strong> String interpolation</li>
        <li><strong>Async/Await:</strong> Clean asynchronous code</li>
      </ul>
      
      <h3>Examples</h3>
      <pre><code>// Arrow function
const multiply = (a, b) => a * b;

// Destructuring
const { name, age } = user;

// Template literal
const greeting = \`Hello, \${name}!\`;</code></pre>
    `,
    author: "Emma Davis",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "JavaScript",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js",
    excerpt: "Learn how to create robust and scalable REST APIs using Node.js and Express framework.",
    content: `
      <h2>RESTful API Development</h2>
      <p>RESTful APIs are the backbone of modern web applications. They enable communication between client and server using standard HTTP methods.</p>
      
      <h3>REST Principles</h3>
      <ul>
        <li><strong>Stateless:</strong> Each request contains all necessary information</li>
        <li><strong>Client-Server:</strong> Separation of concerns</li>
        <li><strong>Cacheable:</strong> Responses can be cached</li>
        <li><strong>Uniform Interface:</strong> Consistent API design</li>
      </ul>
      
      <h3>Basic Express Server</h3>
      <pre><code>const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});</code></pre>
    `,
    author: "Alex Rodriguez",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop"
  }
];