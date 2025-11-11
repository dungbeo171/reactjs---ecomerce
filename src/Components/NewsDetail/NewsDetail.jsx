import React from "react";
import { useParams } from "react-router-dom";
import { newsData } from "../Assets/newsData";
import "./NewsDetail.css";

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find((n) => n.id === parseInt(id));

  if (!news) return <p>Bài viết không tồn tại</p>;

  return (
    <div className="news-detail">
      <img src={news.image} alt={news.title} />
      <h2>{news.title}</h2>
      <p>{news.fullDescription}</p>
    </div>
  );
};

export default NewsDetail;
