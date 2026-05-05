import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mx-auto p-4 md:p-12 mb-2">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mt-12 leading-relaxed">
          We pioneered the discount broking model in India.
          <br className="hidden md:block" />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto border-t pt-12 border-gray-200">
        <div className="text-gray-600 text-base md:text-lg space-y-6">
          <p>
            We kick-started operations on the 15th of August, 2010 with
            the goal of breaking all barriers that traders and
            investors face in India in terms of cost, support, and
            technology. We named the company StockX, a combination of
            Zero and "Rodha", the Sanskrit word for barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house
            technology have made us the biggest stock broker in India.
          </p>

          <p>
            Over 1+ Crore clients place millions of orders every day
            through our powerful ecosystem of investment
            platforms, contributing over 15% of all Indian retail
            trading volumes.
          </p>
        </div>
        
        <div className="text-gray-600 text-base md:text-lg space-y-6">
          <p>
            In addition, we run a number of popular open online
            educational and community initiatives to empower retail
            traders and investors.
          </p>

          <p>
            <Link to="#" className="text-blue-500 hover:underline">Rainmatter</Link>, our
            fintech fund and incubator, has invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day.
            Catch up on the latest updates on our <Link to="#" className="text-blue-500 hover:underline">blog</Link>, or see what
            the media is <Link to="#" className="text-blue-500 hover:underline">saying about us</Link>. Or learn more about our business and product <Link to="#" className="text-blue-500 hover:underline">philosophies</Link>.
          </p> 
        </div>
      </div>
    </div>
  );
}

export default Hero;
