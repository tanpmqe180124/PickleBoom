import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/booking-date.css';

const availableTimes = [
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '20:00',
];

const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export default function BookingDate() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const navigate = useNavigate();
  return (
    <div className="booking-container">
      {/* Left section */}
      <div className="booking-left">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ChevronLeft size={20} />
        </button>
        <p className="booking-title">Pickle Boom</p>
        <h2>Dịch vụ đặt sân</h2>
        <p className="booking-date-description">
          Mô tả, lưu ý, hdsd,.... ở đây
        </p>
      </div>

      {/* Calendar + Time */}
      <div className="booking-middle">
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
        <div className="booking-time-panel">
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
                    className="next-button-inline"
                    onClick={() => navigate('/booking/date/checkout')}
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
