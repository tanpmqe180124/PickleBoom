import { bannerCardData } from '@/constant/bannerCard-data';

export const Banner = () => {
  const middleIndex = Math.ceil(bannerCardData.length / 2);
  const leftItems = bannerCardData.slice(0, middleIndex);
  const rightItems = bannerCardData.slice(middleIndex);

  return (
    <div className="grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-12">
      <div className="flex flex-col gap-6 pl-20 md:col-span-5">
        {leftItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-start rounded-2xl bg-primary-foreground p-4 shadow-lg max-w-lg mx-auto hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-[#2F3C54] shadow-md border-2 border-[#2F3C54]">
              {item.id}
            </div>
            <h3 className="mb-2 mt-6 text-xl font-bold">{item.title}</h3>
            <span className="leading-relaxed">{item.content}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center md:col-span-2">
        <img
          src="/img/loi-ich-pickleball.png"
          alt="Lợi ích pickleball"
          className="h-[520px] w-[360px] object-cover rounded-[2rem] shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300 bg-white/60"
        />
      </div>

      <div className="flex flex-col gap-6 pr-20 md:col-span-5">
        {rightItems.map((item, index) => (
          <div
            key={index + middleIndex}
            className="relative flex flex-col justify-start rounded-2xl bg-primary-foreground p-4 shadow-lg max-w-lg mx-auto hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="absolute -left-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-[#2F3C54] shadow-md border-2 border-[#2F3C54]">
              {item.id}
            </div>
            <h3 className="mb-2 mt-6 text-xl font-bold">{item.title}</h3>
            <span className="leading-relaxed">{item.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
