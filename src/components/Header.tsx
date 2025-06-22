import {
  courtPricing,
  elementorList,
  elementorNotIcon,
  imageHouse,
  logoHomeItems,
} from '@/constant/elementor-data';

import { UserRound } from 'lucide-react';
import { BlogCard } from './Blog';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="h-[100px] text-primary-foreground">
      <div className="bg-custom-gradient w-full py-2">
        <div className="my-3 mr-2 flex items-center justify-center divide-x divide-muted-foreground">
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
          <div className="mb-4 grid w-full grid-cols-12">
            <div className="col-span-3 flex items-center justify-center">
              <img
                src="/img/Huawei-Symbol.png"
                className="h-[63px] w-[112px] object-contain"
              />
            </div>

            <div className="col-span-6 flex items-center justify-center space-x-3">
              {elementorNotIcon.map((item, index) => (
                <div key={index} className="flex">
                  <span className="cursor-pointer text-sm hover:text-primary-hl">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="col-span-3 flex items-center justify-center space-x-4">
              <Button variant="vivid">Đặt lịch ngay</Button>

              <Button
                asChild
                variant="ghost"
                className="p-0 text-foreground hover:bg-primary/10"
              >
                <div className="group flex cursor-pointer flex-col items-center gap-2">
                  <UserRound
                    className="text-muted-foreground"
                    strokeWidth={1}
                    color="#000000"
                  />

                  <span className="underline-offset-4 transition-all group-hover:underline">
                    Login
                  </span>
                </div>
              </Button>
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
            <div className="clip-middle absolute inset-0 z-0 bg-primary/90"></div>

            <div className="absolute right-1/4 z-10 flex h-full max-w-[25%] items-center justify-center">
              <img
                src="/img/Layer-2.png"
                className="h-full max-h-[100%] w-auto object-contain"
              />
            </div>

            <div className="absolute left-40 top-1/2 z-20 -translate-y-1/2">
              <div className="max-w-xl space-y-4 text-left">
                <h3 className="text-3xl font-semibold leading-snug">
                  Hệ thống sân cầu lông máy lạnh Ways Station mở cửa 24/7 đầu
                  tiên tại Việt Nam
                </h3>
                <p className="text-lg font-medium leading-relaxed">
                  Sân cầu lông đẳng cấp mới, dịch vụ khách hàng tuyệt hảo, phục
                  vụ các Lông thủ Sài Thành, hiện đã có mặt tại Quận Gò Vấp và
                  sẵn sàng phủ sóng khắp Sài Thành.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="grid grid-cols-2 gap-14 bg-primary px-20 py-4 text-gray-700 md:grid-cols-4">
          {logoHomeItems.map((item, index) => (
            <div
              key={index}
              className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl bg-white py-4 text-center shadow-lg transition duration-300 hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-10 w-12 object-contain"
              />
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="bg-custom-gradient text w-full p-6 text-accent-foreground">
          <div className="mt-20 flex w-full items-center justify-center">
            <div className="flex w-full max-w-sm flex-col items-center space-y-5 rounded-2xl bg-white p-6 text-center shadow-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
                Bảng giá sân
              </h3>

              <div className="flex items-end justify-center gap-1">
                <div className="text-4xl font-bold leading-none text-gray-900">
                  60.000
                </div>
                <span className="pb-1 text-sm italic tracking-wider text-gray-500">
                  ₫/h
                </span>
              </div>

              <Button variant="default">Check sân ngay</Button>

              <ul className="w-full space-y-2 text-left text-sm text-gray-700">
                {courtPricing.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-primary">✓</span>
                    <span className="text-[14px]">{item.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
            <h2 className="font-medium">BLOG & TIN TỨC</h2>
            <BlogCard />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
