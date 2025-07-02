import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import '../css/branch.css';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { ChevronRight } from 'lucide-react';


export const PlayerType = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInViewAnimation<HTMLDivElement>({ threshold: 0.15 });
  const [showSubOptions, setShowSubOptions] = useState(false);
  const subOptionRef = useRef<HTMLDivElement>(null);
  const handleSelectType = (type: string) => {
    if (type === 'member') {
      navigate('/login');
    } else {
      navigate('/booking/date', { state: { playerType: type } });
    }
  };
  return (
    <div className="branch-wrapper">
      <div
        ref={ref}
        className={`booking-card transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ position: 'relative' }}
      >
        <div className="mb-6 flex flex-col items-center justify-center gap-1">
          <h2 className="title text-primary drop-shadow text-3xl font-extrabold text-center leading-tight">Pickle Boom đặt sân</h2>
          <p className="subtitle text-[#2F3C54] text-sm font-normal tracking-wide text-center leading-normal">Chi nhánh 123, đường ABC, phường XYZ, Quy Nhơn</p>
          <p className="subtitle text-[#2F3C54]/70 text-base text-center">Vui lòng chọn hình thức</p>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="service-item group border border-primary hover:bg-primary/10 transition relative"
            onClick={() => setShowSubOptions((v) => !v)} tabIndex={0} role="button"
            style={{ position: 'relative' }}
          >
            <span className="dot bg-[#2F3C54] animate-pulse"></span>
            <span className="service-name font-semibold group-hover:text-primary transition-colors">Đặt sân theo giờ</span>
            <span className="arrow text-primary">&rsaquo;</span>
            {showSubOptions && (
              <div
                ref={subOptionRef}
                className="absolute left-full top-1/2 -translate-y-1/2 ml-2 min-w-[140px] z-30"
                style={{ pointerEvents: 'auto' }}
              >
                {/* Smaller Arrow */}
                <div style={{ position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%)' }}>
                  <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12L0 24V0L12 12Z" fill="#fff" stroke="#2F3C54" strokeWidth="1"/>
                  </svg>
                </div>
                <div className="flex flex-col rounded-lg border border-primary/40 bg-white shadow-md animate-fade-in-right overflow-hidden">
                  <button
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#2F3C54] hover:bg-primary/10 transition border-b border-primary/10 focus:outline-none"
                    style={{ minWidth: 120 }}
                    onClick={() => handleSelectType('member')}
                  >
                    <span className="dot bg-[#2F3C54] animate-pulse" style={{ width: 10, height: 10 }}></span>
                    Hội viên
                    <ChevronRight size={14} className="ml-auto text-primary" />
                  </button>
                  <button
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#2F3C54] hover:bg-primary/10 transition focus:outline-none"
                    style={{ minWidth: 120 }}
                    onClick={() => handleSelectType('guest')}
                  >
                    <span className="dot bg-[#2F3C54] animate-pulse" style={{ width: 10, height: 10 }}></span>
                    Vãng lai
                    <ChevronRight size={14} className="ml-auto text-primary" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            className="service-item group border border-primary hover:bg-primary/10 transition"
            onClick={() => handleSelectType('ticket')} tabIndex={0} role="button"
          >
            <span className="dot bg-[#2F3C54] animate-pulse"></span>
            <span className="service-name font-semibold group-hover:text-primary transition-colors">Social/Xé vé</span>
            <span className="arrow text-primary">&rsaquo;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
