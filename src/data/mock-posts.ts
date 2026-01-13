import { BlogPost } from "@/types/blog";

export const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "java-and-its-benefits",
    title: "Java and its benefits...",
    excerpt:
      "Explore the powerful features and advantages of Java programming language, from its platform independence to its robust ecosystem.",
    coverImage: "/images/hero-java.png",
    publishedAt: "2026-01-10",
    readTime: "5 min read",
    author: {
      id: "charuka",
      name: "Charuka Wanigasinghe",
      avatarUrl: "/images/avatars/charuka.jpg",
      role: "Software Engineer",
    },
    tags: ["Java"],
  },
  {
    id: "2",
    slug: "guardians-of-the-pride",
    title: "Guardians of the Pride...",
    excerpt:
      "Discover how DevOps and CI/CD practices protect and strengthen your software delivery pipeline, ensuring reliability and efficiency.",
    coverImage: "/images/lion.png",
    publishedAt: "2026-01-08",
    readTime: "7 min read",
    author: {
      id: "alec",
      name: "Alec Whitten",
      avatarUrl: "/images/avatars/alec.jpg",
      role: "DevOps Engineer",
    },
    tags: ["DevOps", "CI/CD"],
  },
  {
    id: "3",
    slug: "modern-web-development-trends",
    title: "Modern Web Development Trends in 2026",
    excerpt:
      "Stay ahead of the curve with the latest trends in web development, from progressive web apps to serverless architecture.",
    coverImage: "/images/web-dev.jpg",
    publishedAt: "2026-01-05",
    readTime: "6 min read",
    author: {
      id: "sarah",
      name: "Sarah Johnson",
      avatarUrl: "/images/avatars/sarah.jpg",
      role: "Frontend Developer",
    },
    tags: ["Web Development", "JavaScript", "React"],
  },
];
