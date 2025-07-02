import React from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa]">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl border border-primary/10 animate-fade-in-up" style={{ opacity: 0, transform: 'translateY(32px)', animation: 'fadeInUpSummary 0.7s cubic-bezier(.4,2,.6,1) 0.15s forwards' }}>
        <h2 className="mb-2 text-3xl font-bold text-center text-primary drop-shadow">
          Đăng ký
        </h2>
        <p className="mb-8 text-center text-gray-500 text-sm">
          Tạo tài khoản mới để sử dụng dịch vụ của chúng tôi.
        </p>
        <form className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-primary">Họ và tên</Label>
            <Input
              type="text"
              id="name"
              className="mt-2"
              placeholder="Nhập họ và tên"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-primary">Số điện thoại</Label>
            <Input
              type="tel"
              id="phone"
              className="mt-2"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
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
          <div>
            <Label htmlFor="password" className="text-primary">Mật khẩu</Label>
            <Input
              type="password"
              id="password"
              className="mt-2"
              placeholder="Tạo mật khẩu"
              required
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="text-primary">Nhập lại mật khẩu</Label>
            <Input
              type="password"
              id="confirmPassword"
              className="mt-2"
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary text-white font-semibold px-4 py-2 shadow transition-all duration-200 hover:bg-[#e0e0e0] hover:text-primary hover:shadow-lg hover:scale-[1.01] focus:bg-[#e0e0e0] focus:text-primary"
          >
            Đăng ký
          </button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-600">
          Đã có tài khoản?{' '}
          <Link to="/login" className="text-primary hover:underline font-medium">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
