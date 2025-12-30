import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBlogPosts } from '../../data/mockBlogPosts';
import './BlogDetailPage.css';

const API_BASE_URL = 'http://localhost:8008/api/blogs/';

function BlogDetailPage() {
  const { id } = useParams();

  // Try to find in mock data first for instant load
  const initialPost = mockBlogPosts.find(p => p.id === parseInt(id));

  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(!initialPost);
  const [error, setError] = useState(null);

  /* Backend integration part
  
    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}${id}/`);
          if (response.ok) {
            const data = await response.json();
            setPost(data);
            setLoading(false);
          } else if (!initialPost) {
            // If not found in API and no mock data, show error
            throw new Error('Post not found');
          }
        } catch (err) {
          if (!initialPost) {
            console.error('Error fetching blog post:', err);
            setError(err.message);
            setLoading(false);
          }
        }
      };
  
      fetchPost();
    }, [id, initialPost]);
  */

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <div className="loading-container">
            <div className="loader"></div>
            <p>Loading post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <div className="error-container">
            <h1>{error || 'Post Not Found'}</h1>
            <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="container">
        <Link to="/blog" className="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Blog
        </Link>

        <article className="blog-post">
          <header className="blog-post-header">
            <h1 className="section-title">{post.title}</h1>
            <span className="blog-date">{formatDate(post.created_at || post.publishedDate)}</span>
            <div className="blog-post-meta">
              <span className="blog-category">{post.category || 'Events'}</span>
            </div>
            <div className="blog-post-author-wrapper">
              <p className="blog-author">By {post.author || 'E and L Decor Team'}</p>
            </div>
          </header>

          <div className="blog-post-image">
            <img src={post.featured_image || post.featuredImage} alt={post.title} />
          </div>

          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }}>
          </div>

          <div className="blog-post-footer">
            <div className="share-post">




              <div className="social-links">
                {/* Social links placeholders */}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogDetailPage;