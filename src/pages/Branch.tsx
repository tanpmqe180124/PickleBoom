import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../css/branch.css';

export const Branch= ( ) => {

    const navigate = useNavigate();
    const handleSelectService = () => {
    navigate('/booking/date'); 
  };
    return (
    <div className="branch-wrapper">
      <div className="booking-card">
        <h2 className="title text-primary drop-shadow mb-2">Pickle Boom đặt sân</h2>
        <p className="subtitle mb-6 text-gray-500 text-base">Vui lòng chọn chi nhánh.</p>
        <div className="service-item group" onClick={handleSelectService} tabIndex={0} role="button">
          <span className="dot"></span>
          <span className="service-name font-semibold group-hover:text-primary transition-colors">Số 123, đường ABC, phường XYZ</span>
          <span className="arrow">&rsaquo;</span>
        </div>
      </div>
    </div>
    )
}