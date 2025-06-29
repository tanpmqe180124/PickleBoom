import React from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa]">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl border border-primary/10">
        <h2 className="mb-2 text-3xl font-bold text-center text-primary drop-shadow">
          Đăng nhập
        </h2>
        <p className="mb-8 text-center text-gray-500 text-sm">
          Chào mừng bạn quay lại! Vui lòng đăng nhập để tiếp tục.
        </p>
        <form className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-primary">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              className="mt-2"
              placeholder="Nhập email của bạn"
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-primary">
              Mật khẩu
            </Label>
            <Input
              type="password"
              id="password"
              className="mt-2"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-600"
              >
                Ghi nhớ đăng nhập
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary text-white font-semibold px-4 py-2 shadow transition-colors duration-200 hover:bg-primary/80 hover:scale-[1.03] hover:shadow-lg"
          >
            Đăng nhập
          </button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-600">
          Chưa có tài khoản?{' '}
          <Link
            to="/register"
            className="text-primary hover:underline font-medium"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
