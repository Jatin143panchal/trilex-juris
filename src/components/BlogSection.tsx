import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const defaultBlogPosts = [
  {
    id: "1",
    title: "Understanding Your Rights in Criminal Defense Cases",
    excerpt:
      "Learn about the fundamental rights every individual has when facing criminal charges and how to protect yourself legally.",
    content: "",
    author: "Adv. Rajesh Kumar",
    date: "January 25, 2026",
    category: "Criminal Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
  },
  {
    id: "2",
    title: "Divorce Proceedings: A Complete Legal Guide",
    excerpt:
      "Navigate the complexities of divorce with our comprehensive guide covering custody, alimony, and property division.",
    content: "",
    author: "Adv. Priya Sharma",
    date: "January 20, 2026",
    category: "Family Law",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
  },
  {
    id: "3",
    title: "Corporate Compliance: Essential Guidelines for Businesses",
    excerpt:
      "Stay compliant with the latest corporate regulations and avoid legal pitfalls with our expert insights.",
    content: "",
    author: "Adv. Amit Verma",
    date: "January 15, 2026",
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
  },
];

export const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState(defaultBlogPosts);

  useEffect(() => {
    // Load blog posts from localStorage
    const savedBlogs = localStorage.getItem('blogPosts');
    if (savedBlogs) {
      const parsedBlogs = JSON.parse(savedBlogs);
      // Map admin panel format to display format
      const formattedBlogs = parsedBlogs.map((blog: any) => ({
        id: blog.id,
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        author: blog.author,
        date: blog.date,
        category: "Legal",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
      }));
      setBlogPosts(formattedBlogs);
    }
  }, []);

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Legal Insights
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Latest <span className="text-gradient-gold">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay informed with our latest legal insights, case studies, and
            expert opinions on various legal matters.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="goldOutline" size="lg">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
