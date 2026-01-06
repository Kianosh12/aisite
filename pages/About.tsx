import React from 'react';
import { Users, Target, ShieldCheck, Rocket, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'کاربر فعال', value: '+۵۰ هزار' },
    { label: 'تولید محتوا', value: '+۱۰ میلیون' },
    { label: 'رضایت مشتریان', value: '۹۹٪' },
    { label: 'پشتیبانی', value: '۲۴/۷' },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: 'مأموریت ما',
      description: 'دموکراتیک کردن دسترسی به هوش مصنوعی پیشرفته برای همه فارسی‌زبانان.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      title: 'امنیت و حریم خصوصی',
      description: 'تعهد تزلزل‌ناپذیر به حفاظت از داده‌های کاربران با بالاترین استانداردهای امنیتی.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: 'نوآوری مداوم',
      description: 'تلاش بی‌پایان برای ارائه جدیدترین و بهترین مدل‌های هوش مصنوعی جهان.'
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 relative z-10">
          ما <span className="gradient-text">Nova AI</span> هستیم
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed relative z-10">
          تیمی از مهندسان، طراحان و رویاپردازان که معتقدند هوش مصنوعی باید در خدمت خلاقیت و بهره‌وری انسان باشد، نه جایگزین آن.
        </p>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-800 bg-dark-card/30 backdrop-blur-sm mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">داستان ما</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-justify">
              <p>
                Nova AI در سال ۱۴۰۲ با یک ایده ساده شروع شد: "چرا دسترسی به ابزارهای پیشرفته هوش مصنوعی باید پیچیده و گران باشد؟"
              </p>
              <p>
                ما متوجه شدیم که بسیاری از خلاقان، نویسندگان و توسعه‌دهندگان ایرانی به دلیل محدودیت‌های پرداخت بین‌المللی و تحریم‌ها، از قافله پیشرفت هوش مصنوعی عقب مانده‌اند. بنابراین تصمیم گرفتیم پلتفرمی بسازیم که این فاصله را پر کند.
              </p>
              <p>
                امروز، ما مفتخریم که به هزاران کسب‌وکار و فرد خلاق کمک می‌کنیم تا ایده‌های خود را سریع‌تر از همیشه به واقعیت تبدیل کنند.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-2xl rotate-3 opacity-20 blur-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team working together" 
              className="relative rounded-2xl shadow-2xl border border-gray-800 w-full object-cover h-80 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <div key={idx} className="bg-dark-card border border-gray-800 p-8 rounded-2xl hover:bg-gray-800/50 transition duration-300">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">تیم رهبری ما</h2>
          <p className="text-gray-400">متخصصانی که Nova AI را می‌سازند</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'آرش راد', role: 'مدیر عامل', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
            { name: 'سارا ملکی', role: 'مدیر فنی', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
            { name: 'علی کریمی', role: 'مدیر محصول', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
            { name: 'مریم نوری', role: 'طراح ارشد', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
          ].map((member, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative mb-4 inline-block">
                <div className="absolute inset-0 bg-brand-500 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-gray-800 group-hover:border-brand-500 transition duration-300 mx-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-brand-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;