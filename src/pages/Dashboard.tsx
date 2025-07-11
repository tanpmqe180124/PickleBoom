import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const dashboardItems = [
  {
    title: 'Quản lý tài khoản',
    description: 'Xem và chỉnh sửa thông tin tài khoản, đổi mật khẩu.',
    to: '/account',
    icon: '👤',
  },
  {
    title: 'Quản lý thời gian',
    description: 'Xem, đặt hoặc hủy các khung giờ chơi.',
    to: '/timeslot',
    icon: '⏰',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { accessToken, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await fetch('https://localhost:5005/api/Account/logout', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        credentials: 'include',
      });
    } catch (error) {
      // Có thể bỏ qua lỗi logout phía server
    } finally {
      logout();
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0e7ef] to-[#f8fafc] flex flex-col items-center py-12 relative">
      {/* Nút back về landing page */}
      <button
        className="absolute top-6 left-6 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        onClick={() => navigate('/')}
        title="Về trang chủ"
      >
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-4xl font-bold mb-10 text-primary drop-shadow">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {dashboardItems.map((item) => (
          <Link
            to={item.to}
            key={item.title}
            className="flex flex-col items-center gap-4 rounded-3xl bg-white p-10 shadow-lg hover:shadow-2xl transition-all border border-primary/10 hover:-translate-y-1 hover:bg-[#f1f1e6] group"
          >
            <span className="text-6xl mb-2 drop-shadow-[0_2px_8px_rgba(252,186,107,0.3)]">{item.icon}</span>
            <h2 className="text-xl font-bold text-[#2F3C54] mb-1 group-hover:text-primary">{item.title}</h2>
            <p className="text-gray-600 text-base text-center">{item.description}</p>
          </Link>
        ))}
        {/* Card Đặt lịch ngay */}
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-white p-10 shadow-lg hover:shadow-2xl transition-all border border-primary/10 hover:-translate-y-1 hover:bg-[#f1f1e6]">
          <span className="text-6xl mb-2 drop-shadow-[0_2px_8px_rgba(252,186,107,0.3)]">📅</span>
          <h2 className="text-xl font-bold text-[#2F3C54] mb-1">Đặt lịch ngay</h2>
          <p className="text-gray-600 text-base text-center mb-4">Đặt sân chơi pickleball nhanh chóng.</p>
          <Button
            variant="default"
            className="w-full rounded-full font-bold text-lg py-3 mt-2 shadow-md hover:scale-105 hover:bg-primary/80 transition-all"
            onClick={() => navigate('/PlayerType')}
          >
            Đặt lịch ngay
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-white p-10 shadow-lg hover:shadow-2xl transition-all border border-primary/10 hover:-translate-y-1 hover:bg-[#f1f1e6]">
          <span className="text-6xl mb-2 drop-shadow-[0_2px_8px_rgba(252,186,107,0.3)]">🚪</span>
          <h2 className="text-xl font-bold text-[#2F3C54] mb-1">Đăng xuất</h2>
          <p className="text-gray-600 text-base text-center mb-4">Thoát khỏi tài khoản của bạn.</p>
          <Button
            variant="default"
            className="w-full rounded-full font-bold text-lg py-3 mt-2 shadow-md hover:scale-105 hover:bg-primary/80 transition-all"
            onClick={handleLogout}
          >
            Đăng xuất
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 