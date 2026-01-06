import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for form submission would go here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            تماس با <span className="gradient-text">ما</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            سوالات، پیشنهادات یا نیاز به مشاوره دارید؟ تیم پشتیبانی ما آماده پاسخگویی به شماست.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="bg-dark-card border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">راه‌های ارتباطی</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-500/10 p-3 rounded-xl text-brand-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">ایمیل پشتیبانی</h4>
                    <p className="text-gray-400 text-sm">برای پاسخگویی سریع به سوالات فنی</p>
                    <a href="mailto:support@novaai.ir" className="text-brand-400 hover:text-brand-300 mt-1 block font-mono">support@novaai.ir</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-xl text-purple-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">تلفن تماس</h4>
                    <p className="text-gray-400 text-sm">شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر</p>
                    <a href="tel:+982112345678" className="text-brand-400 hover:text-brand-300 mt-1 block font-mono">۰۲۱-۱۲۳۴۵۶۷۸</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-500/10 p-3 rounded-xl text-pink-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">دفتر مرکزی</h4>
                    <p className="text-gray-400 text-sm">ایران، تهران، منطقه نوآوری شریف،<br/>خیابان آزادی، ساختمان نوا</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 text-center">
              <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">پشتیبانی آنلاین</h3>
              <p className="text-gray-400 mb-6 text-sm">
                آیا می‌دانستید می‌توانید از طریق چت آنلاین در پایین صفحه با ما صحبت کنید؟ میانگین زمان پاسخگویی: زیر ۵ دقیقه.
              </p>
              <button className="text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full text-sm font-medium transition">
                شروع چت
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-card border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="absolute inset-0 bg-dark-card flex flex-col items-center justify-center p-8 text-center z-10 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">پیام شما دریافت شد!</h3>
                <p className="text-gray-400 mb-8">کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.</p>
                <button 
                  onClick={() => {setSubmitted(false); setFormData({name:'', email:'', subject:'', message:''})}}
                  className="text-brand-400 hover:text-white font-medium"
                >
                  ارسال پیام جدید
                </button>
              </div>
            ) : null}

            <h3 className="text-2xl font-bold text-white mb-6">ارسال پیام</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    placeholder="مثال: علی رضایی"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">ایمیل</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">موضوع</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  placeholder="موضوع پیام خود را بنویسید"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">پیام</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                  placeholder="چطور می‌توانیم به شما کمک کنیم؟"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-500/30 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2"
              >
                ارسال پیام
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;