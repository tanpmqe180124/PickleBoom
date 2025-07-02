
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/booking-date.css';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

// Tạo mảng giờ từ 4:00 đến 20:00, cách nhau 1 tiếng
const availableTimes = Array.from({ length: 17 }, (_, i) => {
  const hour = i + 4;
  return `${hour.toString().padStart(2, '0')}:00`;
});

const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];


export default function BookingDate() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const navigate = useNavigate();
  const [ref, inView] = useInViewAnimation<HTMLDivElement>({ threshold: 0.12 });
  return (
    <div className="booking-container">
      {/* Left section */}
      <div
        ref={ref}
        className={`booking-left transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
      >
        <button className="back-button" onClick={() => navigate(-1)}>
          <ChevronLeft size={20} />
        </button>
        <p className="booking-title">Pickle Boom</p>
        <h2>Dịch vụ đặt sân</h2>
        <div className="booking-date-description" style={{ margin: '16px 0' }}>
          <span style={{ fontWeight: 500, fontSize: '1rem', display: 'block', marginBottom: 6 }}>
            Quý khách có muốn thêm nước uống giải khát vào đơn đặt sân không?
          </span>
          <div style={{ marginTop: 8, display: 'flex', gap: 16 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <input type="radio" name="drink" value="yes" style={{ accentColor: '#2F3C54' }} />
              Có, tôi muốn sử dụng
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <input type="radio" name="drink" value="no" style={{ accentColor: '#2F3C54' }} />
              Không, tôi không có nhu cầu
            </label>
          </div>
        </div>
      </div>

      {/* Calendar + Time */}
      <div className={`booking-middle transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3>Chọn ngày & giờ</h3>
        <div className="calendar-header">
          <button>{'<'}</button>
          <span>June 2025</span>
          <button>{'>'}</button>
        </div>

        <div className="calendar-weekdays">
          {weekdays.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        <div className="calendar-grid">
          {daysInMonth.map((date) => (
            <button
              key={date}
              className={`calendar-cell ${selectedDate === date ? 'selected' : ''}`}
              onClick={() => {
                setSelectedDate(date);
                setSelectedTime(null);
              }}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="booking-time-panel show">
          <p className="selected-day">Thursday, June {selectedDate}</p>
          <div className="time-list-vertical">
            {availableTimes.map((time) => (
              <div className="time-row" key={time}>
                <button
                  className={`time-btn-vertical ${selectedTime === time ? 'active' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
                {selectedTime === time && (
                  <button
                    className="next-button-inline animate"
                    onClick={() => navigate('/booking/date/checkout')}
                    style={{ animationDelay: '0.05s' }}
                  >
                    Next
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
