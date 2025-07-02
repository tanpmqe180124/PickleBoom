import {
  courtPricing,
  elementorList,
  elementorNotIcon,
  imageHouse,
  logoHomeItems,
} from '@/constant/elementor-data';

import { UserRound } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom'
import { BlogCard } from './Blog';

const Header = () => {
  return (
    <header className="h-[100px] border-b bg-primary text-primary-foreground">
      <div className="w-full py-3">
        <div className="mr-2 flex items-center justify-center divide-x divide-muted-foreground">
          {elementorList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex space-x-1 px-4">
                {Icon && <Icon size={24} color="#FCBA6B" strokeWidth={1} />}
                <span className="cursor-pointer text-sm hover:text-primary-hl">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex w-full flex-wrap">
          <div className="grid w-full grid-cols-12">
            <div className="col-span-3 flex items-center justify-center">
              <img
                src="/img/brandlogo-Photoroom%20(1).png"
                className="h-[63px] w-[112px] object-contain"
                alt="Brand Logo"
              />
            </div>

            <div className="col-span-6 flex items-center justify-center space-x-3">
              {elementorNotIcon.map((item, index) => {
                // Scroll to section if menu item is clicked
                const handleClick = () => {
                  if (item.title === 'TIN TỨC & KHUYẾN MÃI') {
                    const blogSection = document.getElementById('blog-section');
                    if (blogSection) {
                      blogSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else if (item.title === 'SÂN PICKLEBALL') {
                    const priceSection = document.getElementById('court-price-section');
                    if (priceSection) {
                      priceSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                };
                return (
                  <div key={index} className="flex">
                    <span
                      className="cursor-pointer text-sm hover:text-primary-hl"
                      onClick={handleClick}
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="col-span-3 flex items-center justify-center space-x-4">
              <Link to="/playertype">
                <Button
                  variant="ghost"
                  className="border-2 border-primary bg-gradient-to-r from-white via-blue-50 to-white text-primary font-bold px-7 py-2 rounded-full shadow-md transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary-dark hover:scale-105 hover:shadow-xl focus:bg-primary focus:text-white focus:shadow-lg min-w-[140px] flex items-center justify-center"
                >
                  Đặt lịch ngay
                </Button>
              </Link>

              <Link to="/login">
                <Button
                  asChild
                  variant="ghost"
                  className="border-2 border-primary bg-gradient-to-r from-white via-blue-50 to-white text-primary font-bold px-7 py-2 rounded-full shadow-md transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary-dark hover:scale-105 hover:shadow-xl focus:bg-primary focus:text-white focus:shadow-lg min-w-[140px] flex items-center justify-center gap-2"
                >
                  <div className="flex flex-row items-center gap-2">
                    <UserRound
                      className="text-muted-foreground group-hover:text-white transition-colors"
                      strokeWidth={1}
                      color="#000000"
                    />
                    <span className="underline-offset-4 transition-all group-hover:underline group-hover:text-white">
                      Đăng nhập
                    </span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div
            className="relative h-[400px] w-full bg-center"
            style={{
              backgroundImage: `url(${imageHouse.image})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="clip-diagonal-left absolute inset-0 bottom-10 z-0 bg-black/60"></div>
            <div className="clip-diagonal-right absolute inset-0 top-10 z-0 bg-cyan-700/80"></div>
            <div className="clip-middle absolute inset-0 z-0 bg-primary/60"></div>

            <div className="absolute right-1/4 z-10 flex h-full max-w-[25%] items-center justify-center animate-fade-in-right" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <img
                src="/img/mainimg-removebg-preview.png"
                className="h-full max-h-[100%] w-auto object-contain"
              />
            </div>

            <div className="absolute left-40 top-1/2 z-20 -translate-y-1/2">
              <div className="max-w-xl space-y-4 text-left">
                <h3 className="text-3xl font-semibold leading-snug animate-fade-in-down">
                  Chào mừng đến với Pickle Boom - Tổ hợp Pickleball & Café đầu tiên tại Quy Nhơn
                </h3>
                <p className="text-lg font-medium leading-relaxed animate-fade-in-down" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  Pickle Boom là mô hình tiên phong tại Quy Nhơn kết hợp giữa thể thao Pickleball, không gian café hiện đại, và cộng đồng người chơi năng động. Tại đây, bạn không chỉ vận động nhẹ nhàng, thư giãn sau giờ làm, mà còn dễ dàng kết nối bạn bè, gia nhập hội nhóm, và tận hưởng một phong cách sống hiện đại – lành mạnh – cá nhân hóa.
                </p>
                <Button asChild variant="vivid" className="px-8 py-3 text-lg font-bold rounded-xl shadow-lg transition-all duration-200 hover:bg-primary/80 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                  <Link to="/playertype">Đặt lịch ngay</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-[#2F3C54] p-4 md:grid-cols-4">
          {logoHomeItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl bg-[#f1f1e6] p-4 text-center shadow-lg border border-[#e0e0d1] hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className={`mb-3 object-contain drop-shadow-[0_2px_8px_rgba(252,186,107,0.3)] ${(index <= 3) ? 'h-32 w-32' : 'h-16 w-16'}`}
              />
              <span className="text-sm font-medium text-[#2F3C54]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-custom-gradient w-full p-6">
          <div id="court-price-section" className="mt-16 flex w-full items-center justify-center">
            <div className="flex w-full max-w-sm flex-col items-center space-y-5 rounded-2xl bg-[#f1f1e6] p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#2F3C54] hover:bg-white/90 cursor-pointer border border-transparent animate-fade-in-up">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2F3C54]">
                Bảng giá sân
              </h3>

              <div className="flex items-end justify-center gap-1">
                <div className="text-2xl font-bold leading-none text-[#2F3C54]">
                  29.000 - 140.000
                </div>
                <span className="pb-1 text-sm italic tracking-wider text-[#2F3C54]/80">
                  ₫/h
                </span>
              </div>

              <Button
                asChild
                variant="default"
                className="bg-[#2F3C54] text-[#f1f1e6] border-[#2F3C54] transition group hover:bg-[#f1f1e6] hover:text-[#2F3C54] hover:border-[#2F3C54]"
              >
                <Link
                  to="/playertype"
                  className="transition-colors duration-200 group-hover:text-[#2F3C54] group-hover:underline group-hover:underline-offset-4"
                  style={{ fontWeight: 600 }}
                >
                  Check sân ngay
                </Link>
              </Button>

              <ul className="w-full space-y-2 text-left text-[#2F3C54]/90">
                {courtPricing.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary text-lg leading-none font-extrabold">✓</span>
                    <span className="text-[15px] font-medium leading-tight">{item.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="blog-section" className="mt-8 flex flex-col items-center gap-4">
            <h2 className="font-medium">BLOG & TIN TỨC</h2>
            <BlogCard />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;