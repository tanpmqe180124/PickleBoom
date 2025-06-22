import { useNavigate } from 'react-router-dom';
export const Branch = () => {
  const navigate = useNavigate();
  const handleSelectService = () => {
    navigate('/booking/date');
  };
  return (
    <div className="branch-wrapper">
      <div className="booking-card">
        <h2 className="title">Pickle Boom đặt sân</h2>
        <p className="subtitle">Vui lòng chọn chi nhánh.</p>
        <div className="service-item" onClick={handleSelectService}>
          <span className="dot"></span>
          <span className="service-name">Số 123, đường ABC, phường XYZ</span>
          <span className="arrow">&rsaquo;</span>
        </div>
      </div>
    </div>
  );
};
