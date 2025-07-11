import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userId = searchParams.get('userId');
    const token = searchParams.get('token');
    if (!userId || !token) {
      setStatus('error');
      setMessage('Thiếu thông tin xác minh!');
      return;
    }
    fetch(`https://localhost:5005/api/Email/confirm-email?userId=${encodeURIComponent(userId)}&token=${encodeURIComponent(token)}`)
      .then(res => res.json())
      .then(data => {
        if (data.statusCode === 200) {
          setStatus('success');
          setMessage(data.message || 'Xác minh email thành công!');
          setTimeout(() => {
            navigate('/login', { state: { verified: true } });
          }, 1500);
        } else {
          setStatus('error');
          setMessage(data.message || 'Xác minh thất bại!');
        }
      })
      .catch(() => {
        setStatus('error');
        setMessage('Có lỗi xảy ra khi xác minh!');
      });
  }, [searchParams, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa]">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {status === 'pending' && <p>Đang xác minh email...</p>}
        {status === 'success' && (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Thành công!</h2>
            <p>{message}</p>
            <p className="mt-4 text-gray-500 text-sm">Đang chuyển về trang đăng nhập...</p>
          </>
        )}
        {status === 'error' && (
          <>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Lỗi!</h2>
            <p>{message}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage; 