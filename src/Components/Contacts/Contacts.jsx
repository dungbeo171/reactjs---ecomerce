import React, { useState } from "react";
import "./Contacts.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã gửi thông tin!");
    setFormData({ name: "", address: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Liên hệ với chúng tôi</h2>
      <div className="contact-wrapper">
        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Họ và tên</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập họ tên"
            required
          />

          <label>Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Nhập địa chỉ"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email"
            required
          />

          <label>Nội dung</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nhập nội dung"
            required
          />

          <button type="submit">Gửi</button>
        </form>

        {/* Bản đồ */}
        <div className="contact-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.195782456811!2d105.84786421535812!3d21.00166198595706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0edb38f219%3A0x464742b33a10b8dc!2sNational%20Economics%20University!5e0!3m2!1sen!2s!4v1700175635012!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Đại học Kinh tế Quốc dân"
            ></iframe>
            </div>

      </div>
    </div>
  );
};

export default Contact;
