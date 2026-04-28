import React from "react";

const Apps = () => {
  const stockxApps = [
    {
      name: "Kite",
      description: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, and an elegant UI.",
      icon: "🪁"
    },
    {
      name: "Console",
      description: "The central dashboard for your StockX account. Gain insights into your trades and investments.",
      icon: "📊"
    },
    {
      name: "Coin",
      description: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account.",
      icon: "🪙"
    },
    {
      name: "Varsity",
      description: "An easy to grasp collection of stock market lessons with in-depth coverage and illustrations.",
      icon: "🎓"
    },
    {
      name: "Kite Connect API",
      description: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.",
      icon: "⚙️"
    }
  ];

  const partnerApps = [
    {
      name: "Smallcase",
      description: "Thematic investing platform. Build a diversified, long-term portfolio of stocks and ETFs.",
      icon: "💼"
    },
    {
      name: "Streak",
      description: "Create, backtest and deploy trading algorithms without writing any code.",
      icon: "📈"
    },
    {
      name: "Sensibull",
      description: "India's first and largest options trading platform. Create and execute options strategies.",
      icon: "🐂"
    },
    {
      name: "Ditto",
      description: "Insurance simplified. Buy the best health and life insurance policies without spam.",
      icon: "🛡️"
    }
  ];

  const AppCard = ({ app }) => (
    <div className="flex flex-col p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white cursor-pointer">
      <div className="text-4xl mb-4">{app.icon}</div>
      <h3 className="text-xl font-medium mb-2 text-gray-800">{app.name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{app.description}</p>
    </div>
  );

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto mb-10">
      <h3 className="title mb-2">StockX Ecosystem</h3>
      <p className="text-gray-500 mb-8">Explore our suite of products and partner platforms.</p>

      <h4 className="text-xl font-medium mb-4 mt-8 text-gray-700">StockX Apps</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stockxApps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>

      <h4 className="text-xl font-medium mb-4 mt-12 text-gray-700">Partner Apps</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {partnerApps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
