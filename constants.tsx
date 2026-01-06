import React from 'react';
import { Plan, FeatureItem, FaqItem } from './types';
import { Cpu, Zap, Shield, Globe, Layers, BarChart } from 'lucide-react';

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'شروع کننده',
    priceMonthly: 299000,
    priceYearly: 2990000,
    description: 'برای کسانی که می‌خواهند قدرت هوش مصنوعی را تجربه کنند.',
    color: 'from-blue-400 to-blue-600',
    features: [
      { text: 'دسترسی به مدل‌های پایه GPT-3.5', included: true },
      { text: '۵۰ تولید تصویر در ماه', included: true },
      { text: 'سرعت پردازش استاندارد', included: true },
      { text: 'پشتیبانی ایمیلی', included: true },
      { text: 'دسترسی به API', included: false },
      { text: 'تحلیل داده‌های پیشرفته', included: false },
    ]
  },
  {
    id: 'pro',
    name: 'حرفه‌ای',
    priceMonthly: 799000,
    priceYearly: 7990000,
    description: 'بهترین انتخاب برای فریلنسرها و تولیدکنندگان محتوا.',
    isPopular: true,
    color: 'from-purple-400 to-pink-600',
    features: [
      { text: 'دسترسی نامحدود به GPT-4', included: true },
      { text: '۵۰۰ تولید تصویر با کیفیت بالا', included: true },
      { text: 'سرعت پردازش اولویت‌دار', included: true },
      { text: 'پشتیبانی ۲۴/۷ آنلاین', included: true },
      { text: 'دسترسی مقدماتی به API', included: true },
      { text: 'تحلیل داده‌های پیشرفته', included: false },
    ]
  },
  {
    id: 'enterprise',
    name: 'سازمانی',
    priceMonthly: 1990000,
    priceYearly: 19900000,
    description: 'قدرت نهایی برای تیم‌ها و کسب‌وکارهای بزرگ.',
    color: 'from-amber-400 to-orange-600',
    features: [
      { text: 'دسترسی به تمامی مدل‌های زبانی', included: true },
      { text: 'تولید تصویر و ویدیو نامحدود', included: true },
      { text: 'سرعت پردازش آنی (Real-time)', included: true },
      { text: 'مدیر حساب اختصاصی', included: true },
      { text: 'دسترسی کامل به API نامحدود', included: true },
      { text: 'آموزش مدل اختصاصی', included: true },
    ]
  }
];

export const FEATURES: FeatureItem[] = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    title: "قدرت پردازش ابری",
    description: "استفاده از سرورهای قدرتمند برای اجرای سنگین‌ترین مدل‌های هوش مصنوعی بدون فشار به سیستم شما."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "سرعت بی‌نظیر",
    description: "پاسخ‌دهی در کسری از ثانیه با زیرساخت‌های بهینه‌سازی شده برای کمترین تأخیر."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "امنیت داده‌ها",
    description: "رمزنگاری سرتاسری و رعایت استانداردهای جهانی حفاظت از داده‌های شخصی و تجاری."
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    title: "پشتیبانی چندزبانه",
    description: "مدل‌های ما برای درک و تولید محتوا به بیش از ۵۰ زبان زنده دنیا، از جمله فارسی بهینه شده‌اند."
  },
  {
    icon: <Layers className="w-8 h-8 text-red-400" />,
    title: "ابزارهای متنوع",
    description: "از تولید متن و کدنویسی تا ساخت تصویر و ویدیو، همه در یک پلتفرم یکپارچه."
  },
  {
    icon: <BarChart className="w-8 h-8 text-teal-400" />,
    title: "تحلیل هوشمند",
    description: "دریافت بینش‌های عمیق از داده‌های خام شما با استفاده از الگوریتم‌های پیشرفته."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "آیا می‌توانم اشتراک خود را هر زمان لغو کنم؟",
    answer: "بله، شما می‌توانید در هر زمان اشتراک خود را لغو کنید. دسترسی شما تا پایان دوره پرداخت فعلی باقی خواهد ماند."
  },
  {
    question: "تفاوت بین طرح حرفه‌ای و سازمانی چیست؟",
    answer: "طرح سازمانی شامل دسترسی به API نامحدود، پشتیبانی اختصاصی و قابلیت آموزش مدل روی داده‌های شخصی شماست که برای شرکت‌ها مناسب‌تر است."
  },
  {
    question: "آیا تخفیفی برای پرداخت سالانه وجود دارد؟",
    answer: "بله، با انتخاب پرداخت سالانه شما معادل ۲ ماه اشتراک رایگان دریافت می‌کنید که حدود ۱۷٪ تخفیف روی کل مبلغ است."
  },
  {
    question: "آیا نیاز به دانش برنامه نویسی دارم؟",
    answer: "خیر، رابط کاربری Nova AI به گونه‌ای طراحی شده که هر کسی با هر سطح دانشی بتواند از قدرت هوش مصنوعی استفاده کند."
  }
];