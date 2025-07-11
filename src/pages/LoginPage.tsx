import React, { useRef } from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const verified = location.state?.verified;
  const { setAccessToken, accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) {
      navigate('/dashboard');
    }
    if (verified) {
      alert('Đăng ký thành công! Hãy đăng nhập.');
    }
  }, [accessToken, navigate, verified]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    try {
      const res = await fetch('https://localhost:5005/api/Account/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // <-- BẮT BUỘC để nhận cookie refresh_token
      });
      const data = await res.json();
      if (res.ok && data.accessToken) {
        alert('Đăng nhập thành công!');
        navigate('/dashboard');
        setAccessToken(data.accessToken);
      } else {
        alert(data.message || 'Đăng nhập thất bại!');
      }
    } catch (err) {
      alert('Lỗi kết nối máy chủ!');
    }
  };

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
          Đăng nhập
        </h2>
        <p className="mb-8 text-center text-gray-500 text-sm">
          Chào mừng bạn quay lại! Vui lòng đăng nhập để tiếp tục.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
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
              ref={emailRef}
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
              ref={passwordRef}
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
