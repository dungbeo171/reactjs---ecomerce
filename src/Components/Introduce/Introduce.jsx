import React from "react";
import "./Introduce.css";
import companyImage from "../Assets/company.jpg"; // ảnh công ty của bạn

const Introduce = () => {
  return (
    <div className="introduce-container">
      <div className="introduce-content">
        <div className="introduce-text">
          <h2>Giới Thiệu Về Công Ty</h2>
          <p>
            Chúng tôi là một trong những nhà cung cấp vật liệu xây dựng hàng đầu tại Việt Nam.
            Với hơn 20 năm kinh nghiệm, chúng tôi cam kết mang đến các sản phẩm chất lượng cao,
            giá cả hợp lý và dịch vụ tận tâm cho khách hàng.
          </p>
          <p>
            Sứ mệnh của chúng tôi là cung cấp giải pháp xây dựng toàn diện, giúp các dự án
            xây dựng của khách hàng trở nên bền vững và hiệu quả.
          </p>
        </div>
        <div className="introduce-image">
          <img src={companyImage} alt="Công ty" />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
