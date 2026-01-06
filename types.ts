import { ReactNode } from "react";

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  color: string;
}

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type BillingCycle = 'monthly' | 'yearly';