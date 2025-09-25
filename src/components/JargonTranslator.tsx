import React, { useState } from 'react';
import { Search, BookOpen, MessageCircle, TrendingUp, DollarSign, PieChart } from 'lucide-react';

interface Term {
  term: string;
  definition: string;
  example: string;
  category: 'basic' | 'analysis' | 'trading' | 'portfolio';
}

const JargonTranslator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const wordBank: Term[] = [
    {
      term: "P/E Ratio",
      definition: "Price-to-Earnings ratio - shows how much you're paying for each dollar of company profits",
      example: "If a stock costs $100 and the company makes $10 per share, the P/E ratio is 10. You're paying $10 for every $1 of profit.",
      category: "analysis"
    },
    {
      term: "Market Cap",
      definition: "Total value of all shares of a company - think of it as the company's 'size' in the stock market",
      example: "If Apple has 15 billion shares worth $150 each, its market cap is $2.25 trillion - making it a 'large-cap' company.",
      category: "basic"
    },
    {
      term: "Diversification",
      definition: "Spreading your money across different types of investments to reduce risk",
      example: "Instead of putting all your money in tech stocks, you might also buy healthcare, energy, and consumer goods stocks.",
      category: "portfolio"
    },
    {
      term: "Dividend",
      definition: "A portion of company profits paid directly to shareholders - like a 'thank you' bonus for owning the stock",
      example: "If you own 100 shares of a company that pays $2 per share annually, you'll receive $200 in dividends each year.",
      category: "basic"
    },
    {
      term: "Volatility",
      definition: "How much a stock's price jumps around - higher volatility means bigger price swings",
      example: "A stable utility stock might move 2-3% daily, while a tech startup might swing 10-20% in a single day.",
      category: "trading"
    },
    {
      term: "Bull Market",
      definition: "A period when stock prices are generally rising and people are optimistic",
      example: "From 2009-2020, the stock market was mostly in a bull market, with prices generally trending upward.",
      category: "trading"
    },
    {
      term: "Bear Market",
      definition: "A period when stock prices are generally falling and people are pessimistic",
      example: "During the 2008 financial crisis, we experienced a bear market where stock prices dropped significantly.",
      category: "trading"
    },
    {
      term: "EPS",
      definition: "Earnings Per Share - how much profit a company makes for each share you own",
      example: "If a company makes $1 billion profit and has 100 million shares, the EPS is $10 per share.",
      category: "analysis"
    }
  ];

  const filteredTerms = wordBank.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Simple chatbot logic - in a real app, this would connect to an AI service
    const message = chatMessage.toLowerCase();
    let response = "I'd be happy to help explain that! ";

    if (message.includes('pe ratio') || message.includes('price to earnings')) {
      response += "A P/E ratio compares a stock's price to its earnings. It's like asking 'how much am I paying for each dollar of profit?' A lower ratio might mean the stock is undervalued, but it could also mean the company has problems.";
    } else if (message.includes('volatility') || message.includes('risky')) {
      response += "Volatility measures how much a stock's price jumps around. Higher volatility means bigger swings - both up and down. It's like the difference between a calm lake and choppy seas. More volatile stocks can offer higher returns but also bigger losses.";
    } else if (message.includes('dividend')) {
      response += "Dividends are like regular 'thank you' payments from companies to their shareholders. They're a portion of the company's profits paid out in cash. Think of it as earning rent from your investments, even when stock prices don't go up.";
    } else if (message.includes('market cap') || message.includes('company size')) {
      response += "Market cap is the total value of all shares of a company. It's calculated by multiplying the stock price by the number of shares. It tells you how 'big' the company is in the market - like the difference between a local coffee shop and Starbucks.";
    } else {
      response += "That's a great question! Let me break this down in simple terms. Could you be more specific about which investing concept you'd like me to explain? I can help with terms like P/E ratios, dividends, market caps, volatility, and more.";
    }

    setChatResponse(response);
    setChatMessage('');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'basic': return <BookOpen className="h-4 w-4" />;
      case 'analysis': return <TrendingUp className="h-4 w-4" />;
      case 'trading': return <DollarSign className="h-4 w-4" />;
      case 'portfolio': return <PieChart className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'basic': return 'bg-blue-100 text-blue-800';
      case 'analysis': return 'bg-green-100 text-green-800';
      case 'trading': return 'bg-purple-100 text-purple-800';
      case 'portfolio': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Jargon Translator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Confused by investing terms? We translate complex financial jargon into plain English that actually makes sense.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Word Bank */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-[#457B9D] mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Word Bank</h2>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a term..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#457B9D] focus:border-transparent"
            />
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredTerms.map((term, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedTerm(term)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{term.term}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(term.category)} flex items-center gap-1`}>
                    {getCategoryIcon(term.category)}
                    {term.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{term.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Term Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-[#87ae73] mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Term Details</h2>
          </div>

          {selectedTerm ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedTerm.term}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedTerm.category)} flex items-center gap-1`}>
                  {getCategoryIcon(selectedTerm.category)}
                  {selectedTerm.category}
                </span>
              </div>
              <div className="bg-gradient-to-br from-[#457B9D]/10 to-[#87ae73]/10 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Simple Definition:</h4>
                <p className="text-gray-700 mb-4">{selectedTerm.definition}</p>
                <h4 className="font-semibold text-gray-900 mb-2">Real Example:</h4>
                <p className="text-gray-700">{selectedTerm.example}</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Select a term from the word bank to see its explanation</p>
            </div>
          )}
        </div>
      </div>

      {/* Chatbot */}
      <div className="bg-gradient-to-br from-[#457B9D]/10 to-[#87ae73]/10 rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <MessageCircle className="h-6 w-6 text-[#457B9D] mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Ask Our AI Assistant</h2>
        </div>
        
        <p className="text-gray-600 mb-6">
          Explain something you're confused about, and I'll try to match it to the right investing term and give you a deeper explanation.
        </p>

        <form onSubmit={handleChatSubmit} className="mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Ask about any investing concept..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#457B9D] focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-[#457B9D] text-white px-6 py-3 rounded-lg hover:bg-[#3a6a8a] transition-colors"
            >
              Ask
            </button>
          </div>
        </form>

        {chatResponse && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Assistant Response:</h4>
            <p className="text-gray-700">{chatResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JargonTranslator;
