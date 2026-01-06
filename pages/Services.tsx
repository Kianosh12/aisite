import React from 'react';
import { 
  MessageSquare, Image as ImageIcon, Code, 
  Mic, Database, PenTool, CheckCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const servicesList = [
    {
      icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
      title: 'تولید متن هوشمند',
      desc: 'از نوشتن مقالات وبلاگ و ایمیل‌های تجاری تا داستان‌نویسی و خلاصه‌سازی متون طولانی با استفاده از GPT-4.',
      features: ['تولید محتوای سئو شده', 'بازنویسی و ویراستاری', 'ترجمه دقیق به ۵۰ زبان', 'سناریو نویسی']
    },
    {
      icon: <ImageIcon className="w-10 h-10 text-pink-400" />,
      title: 'تولید تصویر خلاقانه',
      desc: 'تبدیل متن به تصاویر هنری، واقعی و گرافیکی با کیفیت بالا برای طراحان و بازاریابان.',
      features: ['کیفیت 4K', 'سبک‌های هنری متنوع', 'ویرایش تصویر با دستور متنی', 'طراحی لوگو و آیکون']
    },
    {
      icon: <Code className="w-10 h-10 text-green-400" />,
      title: 'دستیار کدنویسی',
      desc: 'افزایش سرعت توسعه نرم‌افزار با پیشنهاد کد، دیباگ کردن و تبدیل کد بین زبان‌های مختلف.',
      features: ['پشتیبانی از Python, JS, C++', 'توضیح عملکرد کد', 'ریفتکتور کردن خودکار', 'نوشتن تست واحد']
    },
    {
      icon: <Mic className="w-10 h-10 text-yellow-400" />,
      title: 'تبدیل متن به صدا',
      desc: 'تولید صدای طبیعی و انسانی از روی متن برای پادکست‌ها، ویدیوها و کتاب‌های صوتی.',
      features: ['صداهای فارسی طبیعی', 'تنظیم لحن و سرعت', 'کلون کردن صدا', 'خروجی استودیویی']
    },
    {
      icon: <Database className="w-10 h-10 text-purple-400" />,
      title: 'تحلیل داده',
      desc: 'استخراج بینش‌های ارزشمند از داده‌های خام شما با استفاده از قدرت استنتاج هوش مصنوعی.',
      features: ['مصورسازی داده‌ها', 'پیش‌بینی روندها', 'تحلیل احساسات مشتری', 'گزارش‌دهی خودکار']
    },
    {
      icon: <PenTool className="w-10 h-10 text-orange-400" />,
      title: 'ابزارهای تخصصی',
      desc: 'مجموعه‌ای از ابزارهای خاص برای وکلا، پزشکان، معلمان و سایر متخصصین.',
      features: ['خلاصه‌سازی پرونده‌ها', 'طرح درس خودکار', 'تحقیق علمی', 'نامه‌نگاری اداری']
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      
      {/* Header */}
      <section className="text-center px-4 max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          خدمات جامع <span className="gradient-text">هوش مصنوعی</span>
        </h1>
        <p className="text-gray-400 text-lg">
          هر ابزاری که برای رشد کسب‌وکار و شکوفایی خلاقیت خود نیاز دارید، در یک پلتفرم گردآوری شده است.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-dark-card border border-gray-800 rounded-3xl p-8 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 group">
              <div className="mb-6 p-4 bg-gray-800/50 rounded-2xl w-fit group-hover:bg-gray-800 transition">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-brand-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-900 to-dark-card border border-brand-500/30 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">نیاز به راهکار سازمانی دارید؟</h2>
              <p className="text-gray-300 mb-6 text-lg">
                ما برای سازمان‌های بزرگ، API اختصاصی، مدل‌های آموزش دیده روی داده‌های شما و پشتیبانی فنی ویژه ارائه می‌دهیم.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center gap-2 text-gray-300"><div className="w-2 h-2 bg-brand-400 rounded-full"></div> SLA تضمین شده</li>
                <li className="flex items-center gap-2 text-gray-300"><div className="w-2 h-2 bg-brand-400 rounded-full"></div> پیاده‌سازی On-Premise</li>
                <li className="flex items-center gap-2 text-gray-300"><div className="w-2 h-2 bg-brand-400 rounded-full"></div> امنیت سازمانی</li>
                <li className="flex items-center gap-2 text-gray-300"><div className="w-2 h-2 bg-brand-400 rounded-full"></div> مدیریت دسترسی پیشرفته</li>
              </ul>
              <Link to="/contact" className="inline-block bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
                تماس با واحد فروش
              </Link>
            </div>
            <div className="hidden md:block">
              <Database className="w-48 h-48 text-brand-500/20" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;