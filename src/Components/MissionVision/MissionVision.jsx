// components/MissionVision.jsx
import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision">
      {/* Sứ mệnh */}
      <div className="section mission-section">
        <div className="content">
          <h2>Sứ mệnh</h2>
          <p>
            Chúng tôi cung cấp vật liệu xây dựng chất lượng cao, bền vững và an toàn, giúp khách hàng xây dựng công trình vững chắc,
            tiết kiệm chi phí, đồng thời bảo vệ môi trường.
          </p>
          <p>
            Dịch vụ tư vấn chuyên nghiệp, hỗ trợ khách hàng lựa chọn vật liệu phù hợp từ dự án nhà ở, công trình công nghiệp đến các công trình công cộng.
          </p>
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1581091012184-55c681af3a8a?auto=format&fit=crop&w=800&q=80"
            alt="Sứ mệnh"
          />
        </div>
      </div>

      {/* Tầm nhìn */}
      <div className="section vision-section">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1560448071-541c38c3ee3c?auto=format&fit=crop&w=800&q=80"
            alt="Tầm nhìn"
          />
        </div>
        <div className="content">
          <h2>Tầm nhìn</h2>
          <p>
            Trở thành nhà cung cấp vật liệu xây dựng uy tín hàng đầu trong khu vực,
            tiên phong về đổi mới công nghệ và chất lượng sản phẩm.
          </p>
          <p>
            Xây dựng mối quan hệ bền vững với đối tác và khách hàng, trở thành thương hiệu đáng tin cậy nhờ sản phẩm chất lượng và dịch vụ minh bạch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
