import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Sparkles, ArrowRight, Github } from 'lucide-react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-600/20 rounded-full blur-[80px]"></div>
         <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="w-full max-w-md p-8 relative z-10">
        <div className="bg-dark-card/60 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl shadow-2xl">
          
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition">
              <Sparkles className="h-8 w-8 text-brand-400" />
              <span className="font-bold text-2xl text-white">Nova<span className="text-brand-400">AI</span></span>
            </Link>
            <h2 className="text-2xl font-bold text-white mb-2">
              {isLogin ? 'خوش آمدید' : 'ساخت حساب کاربری'}
            </h2>
            <p className="text-gray-400 text-sm">
              {isLogin ? 'برای دسترسی به پنل وارد شوید' : 'به هزاران کاربر خلاق ما بپیوندید'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">ایمیل</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full pr-10 pl-3 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">رمز عبور</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pr-10 pl-3 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  placeholder="••••••••"
                />
              </div>
              {isLogin && (
                <div className="flex justify-end mt-2">
                  <a href="#" className="text-xs text-brand-400 hover:text-brand-300">رمز عبور را فراموش کرده‌اید؟</a>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  {isLogin ? 'ورود' : 'ثبت نام'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#162032] text-gray-400">یا ادامه دهید با</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex justify-center items-center py-2.5 px-4 border border-gray-700 rounded-xl bg-gray-800/50 text-sm font-medium text-gray-300 hover:bg-gray-800 transition">
                <Github className="w-5 h-5 ml-2" />
                گیت‌هاب
              </button>
              <button className="flex justify-center items-center py-2.5 px-4 border border-gray-700 rounded-xl bg-gray-800/50 text-sm font-medium text-gray-300 hover:bg-gray-800 transition">
                <span className="font-bold text-lg ml-2">G</span>
                گوگل
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            {isLogin ? 'حساب کاربری ندارید؟' : 'قبلاً ثبت نام کرده‌اید؟'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="mr-2 font-medium text-brand-400 hover:text-brand-300 transition"
            >
              {isLogin ? 'ثبت نام کنید' : 'وارد شوید'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;