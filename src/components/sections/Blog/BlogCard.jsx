import { Link } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ post }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="blog-card">
      <Link to={`/blog/${post.id}`} className="blog-card-link">
        <div className="blog-card-image">
          <img src={post.featured_image || post.featuredImage} alt={post.title} loading="lazy" />
        </div>
        <div className="blog-card-content">
          <h3>{post.title}</h3>
          <span className="blog-date">{formatDate(post.created_at || post.publishedDate)}</span>
          <div className="blog-card-meta">
            <span className="blog-category">{post.category || 'Events'}</span>
          </div>
          <p>{post.excerpt}</p>

        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
