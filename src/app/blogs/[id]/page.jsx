const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    author: "Nayon Kumar",
    date: "2026-04-01",
    category: "Web Development",
    tags: ["Next.js", "React", "Frontend"],
    excerpt:
      "Learn how to set up and build your first Next.js application step by step.",
    content:
      "Next.js is a powerful React framework that enables server-side rendering and static site generation. In this guide, we will walk through installation, project structure, and building your first app.",
    image: "https://via.placeholder.com/600x400",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS Basics",
    slug: "understanding-tailwind-css-basics",
    author: "Nayon Kumar",
    date: "2026-04-02",
    category: "CSS",
    tags: ["Tailwind", "CSS", "Design"],
    excerpt:
      "A beginner-friendly guide to styling modern websites using Tailwind CSS.",
    content:
      "Tailwind CSS is a utility-first CSS framework that helps you build custom designs without writing traditional CSS. Learn about utility classes, responsiveness, and customization.",
    image: "https://via.placeholder.com/600x400",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features You Should Know",
    slug: "javascript-es6-features",
    author: "Nayon Kumar",
    date: "2026-04-03",
    category: "JavaScript",
    tags: ["JavaScript", "ES6", "Programming"],
    excerpt:
      "Explore the most important ES6 features that every developer should understand.",
    content:
      "ES6 introduced many powerful features like arrow functions, destructuring, template literals, and promises. This article explains them with practical examples.",
    image: "https://via.placeholder.com/600x400",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Building Responsive Layouts",
    slug: "building-responsive-layouts",
    author: "Nayon Kumar",
    date: "2026-04-04",
    category: "UI/UX",
    tags: ["Responsive Design", "CSS", "Flexbox"],
    excerpt:
      "Learn how to create responsive layouts that work on all screen sizes.",
    content:
      "Responsive design ensures your website looks great on desktops, tablets, and mobile devices. This guide covers Flexbox, Grid, and media queries.",
    image: "https://via.placeholder.com/600x400",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Introduction to REST APIs",
    slug: "introduction-to-rest-apis",
    author: "Nayon Kumar",
    date: "2026-04-05",
    category: "Backend",
    tags: ["API", "REST", "Backend"],
    excerpt:
      "Understand how REST APIs work and how to integrate them into your frontend apps.",
    content:
      "REST APIs allow communication between frontend and backend systems. Learn about HTTP methods, endpoints, and how to fetch data using JavaScript.",
    image: "https://via.placeholder.com/600x400",
    readTime: "6 min read",
  },
];
const BlogDetails = async ({ params }) => {
  const { id } = await params;
  const expectedBlog = blogPosts.find((blog) => blog.id === Number(id));
  return (
    <div className="text-center mt-5">
      <h3 className="font-bold text-2xl">{expectedBlog.title}</h3>
      <p className="mt-4">{expectedBlog.content}</p>
    </div>
  );
};

export default BlogDetails;
