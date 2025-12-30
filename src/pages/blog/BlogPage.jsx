import { useState, useEffect } from 'react';
import BlogCard from '../../components/sections/Blog/BlogCard';
import { mockBlogPosts } from '../../data/mockBlogPosts';
import './BlogPage.css';

const API_URL = 'http://localhost:8008/api/blogs/published/';

function BlogPage() {
  const [blogs, setBlogs] = useState(mockBlogPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /*Backende integration part
    useEffect(() => {
      const fetchBlogs = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(API_URL);
          if (response.ok) {
            const realData = await response.json();
            if (realData.length > 0) {
              // Priority: Real blogs at start, fill remaining with mock blogs
              // This replaces mock posts one-by-one
              const combined = [...realData, ...mockBlogPosts.slice(realData.length)];
              setBlogs(combined);
            }
          } else {
            setError(`Server responded with status ${response.status}`);
          }
        } catch (err) {
          console.log('Backend unreachable, using mock data', err);
          setError(err?.message || 'Backend unreachable');
        } finally {
          setLoading(false);
        }
      };
  
      fetchBlogs();
    }, []);
  */

  return (
    <div className="blog-page">
      <div className="container">
        <section className="blog-header section">
          <h1 className="section-title">Our Blog</h1>
          <p className="blog-intro">
            Insights, tips, and inspiration for planning your next event.
            Stay updated with the latest trends and best practices in event management.
          </p>
        </section>

        <section className="blog-list section">
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Loading inspiration...</p>
            </div>
          ) : error ? (
            <div className="error-container">
              <p>Oops! {error}. Please try again later.</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="no-blogs">
              <p>No blog posts found. Check back soon!</p>
            </div>
          ) : (
            <div className="blog-grid grid grid-3">
              {blogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default BlogPage;