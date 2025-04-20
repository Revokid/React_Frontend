import { useEffect, useState } from 'react';
import { getBlogPosts } from '../services/api';

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogData = await getBlogPosts();
      setBlogPosts(blogData);
    };
    fetchBlogPosts();
  }, []);

  return (
    <section className="blog-posts">
      <h2>My Blog Posts</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <article key={post._id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="author">By: {post.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;