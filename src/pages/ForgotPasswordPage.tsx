import React from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa]">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl border border-primary/10">
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
