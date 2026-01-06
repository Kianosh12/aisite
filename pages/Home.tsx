import React, { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PLANS, FEATURES, FAQS } from '../constants';
import { BillingCycle } from '../types';
import PlanCard from '../components/PlanCard';

const Home: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-brand-500/20 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">نسخه جدید GPT-4o هم اکنون در دسترس است</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            آینده را با <span className="gradient-text">هوش مصنوعی</span> <br/>
            همین امروز تجربه کنید
          </h1>
          
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            دسترسی نامحدود به پیشرفته‌ترین مدل‌های هوش مصنوعی جهان. 
            تولید محتوا، کدنویسی، و خلق تصاویر با سرعتی باورنکردنی.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl shadow-white/10 flex items-center justify-center gap-2">
              شروع کنید
              <ArrowLeft className="w-5 h-5" />
            </a>
            <Link to="/about" className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-full font-bold text-lg hover:bg-gray-800/50 transition">
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-dark-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">چرا Nova AI را انتخاب کنید؟</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ما مجموعه‌ای از بهترین ابزارها را در یک پلتفرم یکپارچه گردآوری کرده‌ایم تا شما بدون دغدغه خلق کنید.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-dark-card border border-gray-800 hover:border-gray-700 transition group hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 rounded-xl bg-gray-800/50 flex items-center justify-center mb-6 group-hover:bg-gray-800 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">تعرفه‌های انعطاف‌پذیر</h2>
            <p className="text-gray-400 mb-8">طرحی را انتخاب کنید که با نیازهای شما سازگار است</p>
            
            {/* Toggle */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white font-bold' : 'text-gray-500'}`}>ماهانه</span>
              <button 
                onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-7 bg-gray-700 rounded-full relative transition-colors focus:outline-none"
              >
                <div className={`absolute top-1 w-5 h-5 bg-brand-400 rounded-full transition-transform duration-300 ${
                  billingCycle === 'yearly' ? '-translate-x-8' : '-translate-x-1'
                }`}></div>
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white font-bold' : 'text-gray-500'}`}>
                سالانه <span className="text-green-400 text-xs mr-1">(۱۷٪ تخفیف)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} cycle={billingCycle} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-card/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">سوالات متداول</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl bg-dark-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-right focus:outline-none"
                >
                  <span className="font-medium text-white text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-gray-800/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;