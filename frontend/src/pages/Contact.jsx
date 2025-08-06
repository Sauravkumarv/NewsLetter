import React, { useState } from 'react';
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would make your actual API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      info: 'hello@newsletterhub.com',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'mailto:hello@newsletterhub.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
      action: 'tel:+15551234567'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      info: 'Available 24/7',
      description: 'Get instant help from our support team',
      action: '#'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      info: '123 Newsletter St, Content City, CC 12345',
      description: 'Our office is open Mon-Fri 9AM-5PM',
      action: 'https://maps.google.com'
    }
  ];

  const faqData = [
    {
      question: 'How do I subscribe to newsletters?',
      answer: 'Simply browse our newsletter directory, find the ones you like, and click the "Subscribe" button. You\'ll receive confirmation emails for each subscription.'
    },
    {
      question: 'Can I create my own newsletter?',
      answer: 'Yes! Click on "Start Creating" in our CTA section. We provide tools and analytics to help you build and grow your newsletter audience.'
    },
    {
      question: 'Is NewsletterHub free to use?',
      answer: 'Yes, browsing and subscribing to newsletters is completely free. Some premium newsletters may have subscription fees set by their creators.'
    },
    {
      question: 'How do I unsubscribe from newsletters?',
      answer: 'You can manage all your subscriptions from your account dashboard, or use the unsubscribe link in any newsletter email.'
    },
    {
      question: 'Do you offer analytics for newsletter creators?',
      answer: 'Yes, we provide comprehensive analytics including open rates, click-through rates, subscriber growth, and engagement metrics.'
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p className="contact-info">{item.info}</p>
                <p className="contact-description">{item.description}</p>
                <a 
                  href={item.action}
                  className="contact-link"
                  target={item.action.startsWith('http') ? '_blank' : '_self'}
                  rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {item.title === 'Live Chat' ? 'Start Chat' : 
                   item.title === 'Visit Us' ? 'Get Directions' : 
                   item.title === 'Call Us' ? 'Call Now' : 'Send Email'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <div className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType">Inquiry Type</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="business">Business Partnership</option>
                  <option value="creator">Newsletter Creator</option>
                  <option value="feedback">Feedback</option>
                  <option value="press">Press & Media</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                ></textarea>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <div className="error-icon">❌</div>
                  <div>
                    <h4>Failed to Send Message</h4>
                    <p>Something went wrong. Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="btn-icon">📤</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions. Can't find what you're looking for? Contact us!</p>
          </div>
          
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle">{expandedFaq === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="social-section">
        <div className="container">
          <h2>Follow Us</h2>
          <p>Stay connected with NewsletterHub on social media</p>
          <div className="social-links">
            <a href="#" className="social-link twitter">
              <div className="social-icon">🐦</div>
              <div>
                <h4>Twitter</h4>
                <p>@NewsletterHub</p>
              </div>
            </a>
            <a href="#" className="social-link linkedin">
              <div className="social-icon">💼</div>
              <div>
                <h4>LinkedIn</h4>
                <p>NewsletterHub Company</p>
              </div>
            </a>
            <a href="#" className="social-link instagram">
              <div className="social-icon">📷</div>
              <div>
                <h4>Instagram</h4>
                <p>@newsletterhub</p>
              </div>
            </a>
            <a href="#" className="social-link github">
              <div className="social-icon">💻</div>
              <div>
                <h4>GitHub</h4>
                <p>NewsletterHub</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <div className="map-section">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <h3>Interactive Map</h3>
              <p>123 Newsletter St, Content City, CC 12345</p>
              <button className="map-btn">Open in Google Maps</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;