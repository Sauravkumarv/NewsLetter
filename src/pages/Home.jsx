// Home.js
import { useEffect, useState } from "react";
import '../styles/Home.css';
import articlesData from '../data/articles.json';

export default function Home({ searchTerm }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData);
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="articles-container">
      {filteredArticles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        filteredArticles.map((article, index) => (
          <div className="article-card" key={index}>
            <img className="article-image" src={article.image} alt={article.title} loading="lazy"/>
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <div className="article-meta">
                <img src={article.author_avatar} alt={article.author} className="author-avatar" loading="lazy" />
                <span className="author-name">{article.author}</span>
                <span className="article-date">{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="article-tags">
                {article.tags.map((tag, index) => (
                  <span key={index} className="article-tag">{tag}</span>
                ))}
              </div>
              <p className="article-excerpt">{article.excerpt}</p>
              <p className="article-full">{article.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
