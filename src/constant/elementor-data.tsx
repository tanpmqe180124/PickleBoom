import { BlogCard } from '@/types/elementorInline';
import { CalendarDays } from 'lucide-react';
import {
  CourtPricingItem,
  ElementorInline,
  LogoItems,
} from '@/types/elementorInline';
import { Check, Clock, Phone } from 'lucide-react';

export const blogCardData: BlogCard[] = [
  {
    img: '/img/blog1.png',
    content:
      'Bạn đã biết những bài tập khởi động trong cầu lông nếu tập đúng kỹ thuật có thể  hạn chế chấn thương? …',
    title: '10 bài tập khởi động trong cầu lông giúp tránh chấn thương',
    footer: {
      icon: CalendarDays,
      contentFooter: 'Bản tin cầu lông',
      date: '2025-06-20T08:30:00Z',
    },
  },
  {
    img: '/img/blog1.png',
    content:
      'Bạn đã biết những bài tập khởi động trong cầu lông nếu tập đúng kỹ thuật có thể  hạn chế chấn thương? …',
    title: '10 bài tập khởi động trong cầu lông giúp tránh chấn thương',
    footer: {
      icon: CalendarDays,
      contentFooter: 'Bản tin cầu lông',
      date: '2025-06-20T08:30:00Z',
    },
  },
  {
    img: '/img/blog1.png',
    content:
      'Bạn đã biết những bài tập khởi động trong cầu lông nếu tập đúng kỹ thuật có thể  hạn chế chấn thương? …',
    title: '10 bài tập khởi động trong cầu lông giúp tránh chấn thương',
    footer: {
      icon: CalendarDays,
      contentFooter: 'Bản tin cầu lông',
      date: '2025-06-20T08:30:00Z',
    },
  },
];

export const elementorList: ElementorInline[] = [
  {
    icon: Phone,
    title: 'Đặt sân online',
    path: '/booking-play',
  },
  {
    icon: Clock,
    title: 'Thời gian tiếp nhận cuộc gọi Hotline: 0389145575 (9h - 23h)',
    path: '/tel',
  },
  {
    icon: Check,
    title: 'Mở cửa Hoạt động 24/7',
    path: '/open-24-7',
  },
];

export const elementorNotIcon: ElementorInline[] = [
  {
    title: 'SÂN CẦU MÁY LẠNH',
    path: '/',
  },
  {
    title: 'TRANG CHỦ',
    path: '/',
  },
  {
    title: 'TIN TỨC & KHUYẾN MÃI',
    path: '/',
  },
];

export const imageHouse = {
  image: '/img/2.jpg',
};

export const logoHomeItems: LogoItems[] = [
  {
    img: '/img/Icon-Line_13.png',
    title: '19 sân, 4 chi nhánh, có phòng riêng',
  },
  {
    img: '/img/Icon-Line_16.png',
    title: 'Mở 24/7, máy lạnh',
  },
  {
    img: '/img/Icon-Line_17.png',
    title: 'Free giữ xe, khăn, tắm',
  },
  {
    img: '/img/Icon-Line_18.png',
    title: 'Free mượn vợt, trà đá',
  },
];

export const courtPricing: CourtPricingItem[] = [
  {
    content: 'Mở 24/7, máy lạnh, phòng riêng',
  },
  {
    content: 'Free mượn vợt, trà đá',
  },
  {
    content: 'Free giữ xe, khăn, tắm',
  },
  {
    content: 'Luôn vệ sinh sân trước khi nhận sân',
  },
  {
    content: 'Nhân viên trẻ, đẹp',
  },
];
