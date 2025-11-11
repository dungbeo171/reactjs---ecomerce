import React from "react";
import { Link } from "react-router-dom";
import { newsData } from "../Assets/newsData";
import "./NewsList.css";

const NewsList = () => {
  return (
    <div className="news-container">
      <h2 className="news-title">Tin tức & Bài viết</h2>
      <div className="news-grid">
        {newsData.map((news) => (
          <Link to={`/news/${news.id}`} key={news.id} className="news-card">
            <img src={news.image} alt={news.title} />
            <h3>{news.title}</h3>
            <p>{news.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
