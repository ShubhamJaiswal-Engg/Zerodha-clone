import React from "react";

function Brokerage() {
  return (
    <div className="container mx-auto p-4 md:p-12 mb-12">
      <div className="max-w-5xl mx-auto border-t border-gray-200 pt-12 mt-8">
        <div className="text-center mb-8">
          <a href="#" className="text-blue-500 hover:text-blue-700 hover:underline">
            <h3 className="text-xl font-medium inline-block">Brokerage calculator</h3>
          </a>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className="text-gray-500 text-xs sm:text-sm leading-loose list-disc pl-6 md:pl-0 space-y-2">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;