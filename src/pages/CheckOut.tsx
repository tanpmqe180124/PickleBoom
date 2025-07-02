
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/checkout.css';
import { ChevronLeft } from "lucide-react";



export default function CheckOut() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { selectedDate, selectedTime } = state || {};
  const dateString = `June ${selectedDate}, 2025`;
  const startTime = selectedTime;

  const getEndTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const end = new Date(2025, 5, selectedDate, hours, minutes + 30);
    return end.toTimeString().substring(0, 5);
  };

  const endTime = selectedTime ? getEndTime(selectedTime) : '';

  return (
<div className="booking-container">
  {/* Left side */}
  <div className="booking-left">
    <button className="back-button" onClick={() => navigate(-1)}>
      <ChevronLeft size={20} />
    </button>
    <p className="booking-title">Pickle Boom</p>
    <h2>Dịch vụ đặt sân</h2>

    {/* Thông tin đặt lịch chuyển vào đây */}
    <div 
      className="booking-summary-card animate-fade-in-up"
      style={{ marginTop: "32px", opacity: 0, transform: 'translateY(24px)', animation: 'fadeInUpSummary 0.7s cubic-bezier(.4,2,.6,1) 0.2s forwards' }}
    >
      <h3>Thông tin đặt lịch</h3>
      <p><strong>Chi nhánh:</strong> CN Nguyễn Quý Anh</p>
      <p><strong>Địa chỉ:</strong> 86 Nguyễn Quý Anh, Tân Phú</p>
      <p><strong>Sân - giờ:</strong> Sân 3 – {startTime} đến {endTime} (28/06/2025 - CN NQA)</p>
      <p><strong>Giá 1 giờ:</strong> 139.000 ₫</p>
      <p><strong>Số giờ:</strong> 2</p>
      <p><strong>Tổng:</strong> 278.000 ₫</p>
    </div>
  </div>

  {/* Right side - Form */}
  <div 
    className="booking-middle animate-fade-in-up"
    style={{ opacity: 0, transform: 'translateY(24px)', animation: 'fadeInUpSummary 0.7s cubic-bezier(.4,2,.6,1) 0.4s forwards' }}
  >
    <h3>Vui lòng điền thông tin</h3>
    <form className="checkout-form">
      <label>Tên người đặt *</label>
      <input type="text" placeholder="Nhập tên của bạn" required />

      <label>Số điện thoại *</label>
      <input type="tel" placeholder="Nhập số của bạn" required />

      <label>Email *</label>
      <input type="email" placeholder="Nhận email để xác nhận sân" required />

      <label>Nhập mã Khuyến mại (Nếu có)</label>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input type="text" placeholder="Nhập mã" />
        <button type="button" className="next-button-inline animate" style={{ animationDelay: '0.05s' }}>Kiểm tra</button>
      </div>

      <button type="submit" className="next-button-inline animate" style={{ animationDelay: '0.05s' }}>Xác nhận và thanh toán</button>
    </form>
  </div>
</div>
  );
}
