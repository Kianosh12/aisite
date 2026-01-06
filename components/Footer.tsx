import React from 'react';
import { Github, Twitter, Instagram, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-brand-400" />
              <span className="font-bold text-xl text-white">Nova<span className="text-brand-400">AI</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              پیشرو در ارائه خدمات هوش مصنوعی مولد برای کسب‌وکارها و خلاقان. آینده را امروز تجربه کنید.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">محصولات</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition">تولید متن</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">تولید تصویر</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">دستیار کدنویسی</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">API تجاری</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">شرکت</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition">درباره ما</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">فرصت‌های شغلی</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">وبلاگ</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">تماس با ما</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">قانونی</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition">حریم خصوصی</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">قوانین و مقررات</a></li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© ۱۴۰۳ Nova AI. تمامی حقوق محفوظ است.</p>
          <p className="mt-2 md:mt-0 flex gap-2 items-center">
            طراحی شده با ❤️ برای آینده
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;