import React, { useEffect, useState } from "react";
import "./Utilities.css";

const Utilities = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [visits, setVisits] = useState(0);

  // Giả lập người đang online (random 5–25)
  useEffect(() => {
    const randomOnline = Math.floor(Math.random() * 20) + 5;
    setOnlineUsers(randomOnline);
  }, []);

  // Đếm lượt truy cập bằng localStorage
  useEffect(() => {
    const storedVisits = localStorage.getItem("siteVisits");
    const newVisits = storedVisits ? parseInt(storedVisits) + 1 : 1;
    localStorage.setItem("siteVisits", newVisits);
    setVisits(newVisits);
  }, []);

  return (
    <div className="utilities-container">
      <h2 className="utilities-title">Tiện ích – Kết nối với chúng tôi</h2>

      <div className="utilities-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            alt="Facebook"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
            alt="Instagram"
          />
        </a>
      </div>

      <div className="utilities-stats">
        <p>👥 Đang online: <strong>{onlineUsers}</strong></p>
        <p>🌐 Tổng lượt truy cập: <strong>{visits}</strong></p>
      </div>
    </div>
  );
};

export default Utilities;
