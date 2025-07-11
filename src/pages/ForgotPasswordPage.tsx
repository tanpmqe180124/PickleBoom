import React from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa] relative">
      {/* Nút back về trang trước */}
      <button
        className="absolute top-6 left-6 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        onClick={() => navigate(-1)}
        title="Quay lại"
      >
        <ChevronLeft size={24} />
      </button>
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl border border-primary/10 animate-fade-in-up" style={{ opacity: 0, transform: 'translateY(32px)', animation: 'fadeInUpSummary 0.7s cubic-bezier(.4,2,.6,1) 0.15s forwards' }}>
        <h2 className="mb-2 text-3xl font-bold text-center text-primary drop-shadow">
          Quên mật khẩu
        </h2>
        <p className="mb-8 text-center text-gray-500 text-sm">
          Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu.
        </p>
        <form className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-primary">Email</Label>
            <Input
              type="email"
              id="email"
              className="mt-2"
              placeholder="Nhập email của bạn"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary text-white font-semibold px-4 py-2 shadow transition-colors duration-200 hover:bg-primary/80 hover:scale-[1.03] hover:shadow-lg"
          >
            Gửi mã đến email
          </button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-600">
          Đã nhớ mật khẩu?{' '}
          <Link to="/login" className="text-primary hover:underline font-medium">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
