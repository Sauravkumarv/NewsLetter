import "../styles/Newsletter.css";

import React, { useState, useEffect } from 'react';

const Newsletter = ({ newslettersData = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subscribedNewsletters, setSubscribedNewsletters] = useState(new Set());

  // Initialize newsletters from props or default data
  useEffect(() => {
    if (newslettersData && newslettersData.length > 0) {
      setNewsletters(newslettersData);
      setLoading(false);
    } else {
      // Fallback sample data if no data provided
      const sampleData = [
        {
          id: 1,
          title: "Tech Insights Weekly",
          description: "Stay updated with the latest trends in web development, AI, and emerging technologies.",
          category: "technology",
          subscribers: "12.5k",
          frequency: "Weekly",
          author: "James Mitchell",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=center",
          tags: ["Tech", "AI", "Web Dev"],
          featured: true,
          price: "Free",
          rating: 4.8
        },
        {
          id: 2,
          title: "Sustainable Living Guide",
          description: "Practical tips for eco-friendly living, sustainable fashion, and mindful consumption.",
          category: "lifestyle",
          subscribers: "8.3k",
          frequency: "Bi-weekly",
          author: "Emma Rodriguez",
          image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
          tags: ["Sustainability", "Fashion", "Lifestyle"],
          featured: true,
          price: "$5/month",
          rating: 4.6
        },
        {
          id: 3,
          title: "Design Minimalism",
          description: "Exploring the beauty of minimalist design in architecture, interiors, and digital spaces.",
          category: "design",
          subscribers: "15.2k",
          frequency: "Weekly",
          author: "David Chen",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
          tags: ["Design", "Minimalism", "Architecture"],
          featured: false,
          price: "Free",
          rating: 4.9
        }
      ];
      setNewsletters(sampleData);
      setLoading(false);
    }
  }, [newslettersData]);

  // Handle newsletter subscription
  const handleSubscribe = async (newsletterId, newsletterTitle) => {
    try {
      setSubscribedNewsletters(prev => new Set([...prev, newsletterId]));
      
      // Here you would make API call to your backend
      // await subscribeToNewsletter(newsletterId);
      
      // Show success message
      alert(`Successfully subscribed to "${newsletterTitle}"!`);
      
    } catch (error) {
      // Remove from subscribed set if API call fails
      setSubscribedNewsletters(prev => {
        const newSet = new Set(prev);
        newSet.delete(newsletterId);
        return newSet;
      });
      alert('Failed to subscribe. Please try again.');
    }
  };

  // Handle newsletter unsubscribe
  const handleUnsubscribe = async (newsletterId, newsletterTitle) => {
    try {
      setSubscribedNewsletters(prev => {
        const newSet = new Set(prev);
        newSet.delete(newsletterId);
        return newSet;
      });
      
      // Here you would make API call to your backend
      // await unsubscribeFromNewsletter(newsletterId);
      
      alert(`Unsubscribed from "${newsletterTitle}"`);
      
    } catch (error) {
      // Add back to subscribed set if API call fails
      setSubscribedNewsletters(prev => new Set([...prev, newsletterId]));
      alert('Failed to unsubscribe. Please try again.');
    }
  };

  // Generate categories dynamically from newsletters data
  const categories = [
    { id: 'all', name: 'All Categories', count: newsletters.length },
    ...newsletters.reduce((acc, newsletter) => {
      const existing = acc.find(cat => cat.id === newsletter.category);
      if (existing) {
        existing.count++;
      } else {
        acc.push({
          id: newsletter.category,
          name: newsletter.category.charAt(0).toUpperCase() + newsletter.category.slice(1),
          count: 1
        });
      }
      return acc;
    }, [])
  ];

  // Filter newsletters based on category and search
  const filteredNewsletters = newsletters.filter(newsletter => {
    const matchesCategory = selectedCategory === 'all' || newsletter.category === selectedCategory;
    const matchesSearch = newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         newsletter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         newsletter.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (newsletter.tags && newsletter.tags.some(tag => 
                           tag.toLowerCase().includes(searchTerm.toLowerCase())
                         ));
    return matchesCategory && matchesSearch;
  });

  const featuredNewsletters = filteredNewsletters.filter(n => n.featured);

  if (loading) {
    return (
      <div className="newsletter-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading newsletters...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="newsletter-page">
      {/* Header Section */}
      <div className="newsletter-header">
        <div className="container">
          <h1>Our Newsletters</h1>
          <p>Discover curated content across various topics. Subscribe to stay informed and inspired.</p>
          
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search newsletters, authors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-icon">🔍</div>
          </div>
          
          {/* Stats */}
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{newsletters.length}</span>
              <span className="stat-label">Total Newsletters</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{featuredNewsletters.length}</span>
              <span className="stat-label">Featured</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{subscribedNewsletters.size}</span>
              <span className="stat-label">Your Subscriptions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Newsletters */}
      {featuredNewsletters.length > 0 && (
        <div className="featured-section">
          <div className="container">
            <h2 className="section-title">Featured Newsletters</h2>
            <div className="featured-grid">
              {featuredNewsletters.map(newsletter => (
                <div key={newsletter.id} className="featured-card">
                  <div className="card-image">
                    <img 
                      src={newsletter.image} 
                      alt={newsletter.title}
                      loading="lazy"
                      onError={(e) => {
                        console.log('Image failed to load:', newsletter.image);
                        e.target.src = `https://via.placeholder.com/400x250/667eea/ffffff?text=${encodeURIComponent(newsletter.title.slice(0, 20))}`;
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', newsletter.image);
                      }}
                    />
                    <div className="featured-badge">FEATURED</div>
                    {newsletter.rating && (
                      <div className="rating-badge">
                        ⭐ {newsletter.rating}
                      </div>
                    )}
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{newsletter.title}</h3>
                    <p className="card-description">{newsletter.description}</p>
                    
                    {newsletter.tags && (
                      <div className="card-tags">
                        {newsletter.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    
                    <div className="card-meta">
                      <div className="card-meta-left">
                        <div><strong>{newsletter.subscribers}</strong> subscribers</div>
                        <div>{newsletter.frequency}</div>
                        {newsletter.price && <div className="price">{newsletter.price}</div>}
                      </div>
                      <div className="card-meta-right">
                        by <strong>{newsletter.author}</strong>
                      </div>
                    </div>
                    
                    <button 
                      className={`subscribe-btn ${subscribedNewsletters.has(newsletter.id) ? 'subscribed' : 'primary'}`}
                      onClick={() => subscribedNewsletters.has(newsletter.id) 
                        ? handleUnsubscribe(newsletter.id, newsletter.title)
                        : handleSubscribe(newsletter.id, newsletter.title)
                      }
                    >
                      {subscribedNewsletters.has(newsletter.id) ? '✓ Subscribed' : 'Subscribe Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Browse Section */}
      <div className="browse-section">
        <div className="container">
          <h2 className="section-title">
            {selectedCategory === 'all' ? 'All Newsletters' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Newsletters`}
          </h2>
          
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Results Info */}
          <div className="results-info">
            Showing {filteredNewsletters.length} newsletter{filteredNewsletters.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </div>

          {/* Newsletter Grid */}
          {filteredNewsletters.length > 0 ? (
            <div className="newsletter-grid">
              {filteredNewsletters.map(newsletter => (
                <div key={newsletter.id} className="newsletter-card">
                  <img 
                    src={newsletter.image} 
                    alt={newsletter.title}
                    loading="lazy"
                    onError={(e) => {
                      console.log('Grid image failed to load:', newsletter.image);
                      e.target.src = `https://via.placeholder.com/300x180/764ba2/ffffff?text=${encodeURIComponent(newsletter.title.slice(0, 15))}`;
                    }}
                    onLoad={() => {
                      console.log('Grid image loaded successfully:', newsletter.image);
                    }}
                  />
                  <div className="newsletter-card-content">
                    <div className="card-header">
                      <h3>{newsletter.title}</h3>
                      {newsletter.rating && (
                        <span className="rating">⭐ {newsletter.rating}</span>
                      )}
                    </div>
                    
                    <p>{newsletter.description}</p>
                    
                    {newsletter.tags && (
                      <div className="card-tags">
                        {newsletter.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    
                    <div className="card-stats">
                      <span>{newsletter.subscribers} subscribers</span>
                      <span>{newsletter.frequency}</span>
                    </div>
                    
                    <div className="card-footer">
                      <div className="author-info">
                        <span>by {newsletter.author}</span>
                        {newsletter.price && <span className="price">{newsletter.price}</span>}
                      </div>
                      <button 
                        className={`subscribe-btn ${subscribedNewsletters.has(newsletter.id) ? 'subscribed' : 'secondary'}`}
                        onClick={() => subscribedNewsletters.has(newsletter.id) 
                          ? handleUnsubscribe(newsletter.id, newsletter.title)
                          : handleSubscribe(newsletter.id, newsletter.title)
                        }
                      >
                        {subscribedNewsletters.has(newsletter.id) ? '✓ Subscribed' : 'Subscribe'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📧</div>
              <h3>No newsletters found</h3>
              <p>Try adjusting your search or category filter.</p>
              <button 
                className="reset-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Create Your Own Newsletter?</h2>
          <p>Join thousands of creators sharing their expertise and building communities.</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Start Creating</button>
            <button className="cta-btn secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;