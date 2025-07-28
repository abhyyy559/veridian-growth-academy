import React from "react";

const PaymentSuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
      <p className="mb-6 text-lg text-gray-700">Thank you for your purchase. We have received your payment.</p>
      <a
        href="https://wa.me/919652702916?text=I%20have%20completed%20the%20payment%20for%20the%20product."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
      >
        Contact us on WhatsApp
      </a>
    </div>
  );
};
export default PaymentSuccess;