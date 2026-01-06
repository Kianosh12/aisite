import React from 'react';
import { Check, X } from 'lucide-react';
import { Plan, BillingCycle } from '../types';

interface PlanCardProps {
  plan: Plan;
  cycle: BillingCycle;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, cycle }) => {
  const price = cycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
  
  return (
    <div className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full ${
      plan.isPopular 
        ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-brand-500 shadow-2xl shadow-brand-500/10 scale-105 z-10' 
        : 'bg-dark-card border-gray-800 hover:border-gray-700'
    }`}>
      {plan.isPopular && (
        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
          پیشنهاد ویژه
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-400 text-sm min-h-[40px]">{plan.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold text-white">
            {new Intl.NumberFormat('fa-IR').format(price)}
          </span>
          <span className="text-gray-400 mb-1 text-sm">تومان</span>
        </div>
        <div className="text-gray-500 text-sm mt-1">
          {cycle === 'monthly' ? 'ماهانه' : 'سالانه (۲ ماه رایگان)'}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            {feature.included ? (
              <div className={`mt-0.5 p-0.5 rounded-full bg-gradient-to-r ${plan.color}`}>
                <Check className="w-3 h-3 text-white" />
              </div>
            ) : (
              <X className="w-5 h-5 text-gray-600 shrink-0" />
            )}
            <span className={feature.included ? 'text-gray-200' : 'text-gray-500 line-through decoration-gray-700'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
        plan.isPopular 
          ? `bg-gradient-to-r ${plan.color} text-white hover:opacity-90 shadow-lg` 
          : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
      }`}>
        انتخاب طرح
      </button>
    </div>
  );
};

export default PlanCard;