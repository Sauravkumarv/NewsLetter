import '../styles/About.css'

export default function About() {
  return (
    <div className="about-us">
      {/* Header Section */}
      <div className="about-header">
        <div className="container">
          <h1>About NewsletterHub</h1>
          <p className="header-subtitle">Connecting stories, ideas, and communities through curated content</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At NewsletterHub, we believe in the power of well-crafted stories and thoughtful content. 
              Our platform brings together diverse voices and perspectives, from technology and design 
              to sustainable living and creative arts. We're committed to delivering quality content 
              that informs, inspires, and connects our community.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <div className="container">
          <h2>What We Stand For</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">📝</div>
              <h3>Quality Content</h3>
              <p>We curate and create content that adds real value to our readers' lives, focusing on depth over quantity.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We're committed to promoting sustainable practices and mindful living through our content and operations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>Building connections and fostering meaningful conversations between writers and readers worldwide.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Creative Excellence</h3>
              <p>Supporting creative minds and innovative ideas that shape the future of design, technology, and lifestyle.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="container">
          <h2>Meet Our Contributors</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b9f494f4?w=150&h=150&fit=crop&crop=face" alt="Rebecca Walton" />
              </div>
              <h3>Rebecca Walton</h3>
              <p className="member-role">Creative Director</p>
              <p className="member-bio">Passionate about visual storytelling and innovative design solutions that make a difference.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="James Mitchell" />
              </div>
              <h3>James Mitchell</h3>
              <p className="member-role">Tech Editor</p>
              <p className="member-bio">Exploring the intersection of technology and human experience in the digital age.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Emma Rodriguez" />
              </div>
              <h3>Emma Rodriguez</h3>
              <p className="member-role">Sustainability Writer</p>
              <p className="member-bio">Advocating for conscious living and sustainable fashion choices that don't compromise style.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="David Chen" />
              </div>
              <h3>David Chen</h3>
              <p className="member-role">Design Editor</p>
              <p className="member-bio">Championing minimalist design principles and their impact on modern living spaces.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2024, NewsletterHub started as a simple idea: what if we could create a space 
              where quality content and meaningful conversations could flourish? Our founders, coming from 
              backgrounds in journalism, design, and technology, saw the need for a platform that prioritized 
              substance over clickbait.
            </p>
            <p>
              Today, we're proud to host a diverse community of writers and readers who share our passion 
              for thoughtful content. From exploring the latest web development trends to discovering 
              sustainable fashion choices, our newsletters cover topics that matter to modern, conscious consumers.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="contact-cta">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Ready to be part of something meaningful? Subscribe to our newsletters or get in touch with our team.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Subscribe Now</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
