import React from "react";

interface Plan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: Plan[];
  title: string;
  description: string;
}

export const Pricing: React.FC<PricingProps> = ({ plans, title, description }) => (
  <section className="py-16 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
    <p className="text-center text-gray-500 mb-10 whitespace-pre-line">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-xl border p-8 shadow-lg flex flex-col items-center bg-white relative transition-transform hover:scale-105 ${
            plan.isPopular ? "border-green-500 shadow-2xl" : ""
          }`}
        >
          {plan.isPopular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">Most Popular</span>
          )}
          <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
          <div className="flex items-end mb-2">
            <span className="text-4xl font-bold text-green-600">${plan.price}</span>
            <span className="ml-2 text-gray-500">{plan.period}</span>
          </div>
          <p className="text-gray-500 mb-4 text-center">{plan.description}</p>
          <ul className="mb-6 space-y-2 text-sm text-gray-700">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 w-full mt-2">
            <a
              href={plan.href}
              className={`w-full py-2 px-4 rounded-md text-center font-medium border border-green-600 text-green-700 bg-white hover:bg-green-50 transition-colors`}
            >
              {plan.buttonText}
            </a>
            {/* Minimal secondary button for popular plan, no blinking */}
            {plan.isPopular && (
              <a
                href="#plan-details"
                className="w-full py-2 px-4 rounded-md text-center font-medium border border-gray-300 text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                See Plan Details
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);
