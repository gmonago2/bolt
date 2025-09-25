import React, { useState } from 'react';
import { Heart, DollarSign, TrendingDown, HelpCircle, CheckCircle, Lightbulb } from 'lucide-react';

interface AnxietyTopic {
  id: string;
  title: string;
  problem: string;
  reassurance: string;
  actionable: string[];
  icon: React.ReactNode;
}

const AnxietyHelp: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<AnxietyTopic | null>(null);

  const anxietyTopics: AnxietyTopic[] = [
    {
      id: 'no-money',
      title: "I Don't Have Much Money to Invest",
      problem: "You feel like investing is only for rich people, and your small amount won't make a difference.",
      reassurance: "This is completely normal! Many successful investors started with very little. The key is starting, not the amount.",
      actionable: [
        "Start with just $5-$25 per week - even small amounts add up over time",
        "Use apps that let you buy fractional shares (parts of expensive stocks)",
        "Remember: $5 invested weekly for 30 years at 7% return becomes over $25,000",
        "Focus on building the habit, not the amount",
        "Many billionaires started with pocket change"
      ],
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      id: 'stock-tanked',
      title: "My Stock Price Dropped - Did I Lose Money?",
      problem: "You see your investment value decrease and panic that you've made a terrible mistake.",
      reassurance: "Stock price fluctuations are completely normal and expected. You haven't lost money until you sell.",
      actionable: [
        "Price drops are normal - even great companies see 20-50% drops regularly",
        "Focus on the company's long-term health, not daily price movements",
        "Historically, markets recover from drops - often stronger than before",
        "Use drops as learning opportunities to understand market psychology",
        "Remember: you only lose money when you sell at a loss"
      ],
      icon: <TrendingDown className="h-6 w-6" />
    },
    {
      id: 'overwhelmed',
      title: "There's Too Much Information - I'm Overwhelmed",
      problem: "Everywhere you look, there's conflicting advice, complex charts, and information overload.",
      reassurance: "Feeling overwhelmed is normal when learning something new. Start simple and build gradually.",
      actionable: [
        "Focus on learning one concept at a time - don't try to learn everything",
        "Start with index funds (they're simpler than picking individual stocks)",
        "Ignore daily news and focus on long-term fundamentals",
        "Set a learning schedule: 15 minutes per day is better than 3 hours once a week",
        "Remember: even Warren Buffett doesn't understand everything about the market"
      ],
      icon: <HelpCircle className="h-6 w-6" />
    },
    {
      id: 'fear-missing-out',
      title: "Everyone Else Seems to Know What They're Doing",
      problem: "You see others making confident investment decisions while you feel lost and uncertain.",
      reassurance: "Most people are winging it too. The confident ones often make the most mistakes.",
      actionable: [
        "Social media shows highlight reels, not the full picture of investing struggles",
        "Take your time - rushing into investments is how most people lose money",
        "Focus on your own goals, not what others are doing",
        "Remember: the tortoise often beats the hare in investing",
        "Many 'experts' on social media are just good at marketing, not investing"
      ],
      icon: <Heart className="h-6 w-6" />
    },
    {
      id: 'market-crash',
      title: "What If There's Another Market Crash?",
      problem: "You're afraid of putting money in the market because of stories about crashes and economic downturns.",
      reassurance: "Market crashes are temporary, but your fear of missing out on long-term growth is permanent.",
      actionable: [
        "Market crashes are actually buying opportunities for long-term investors",
        "Dollar-cost averaging helps you buy more when prices are low",
        "Diversification spreads risk across different types of investments",
        "Focus on time in the market, not timing the market",
        "Historically, markets have always recovered and reached new highs"
      ],
      icon: <TrendingDown className="h-6 w-6" />
    },
    {
      id: 'not-smart-enough',
      title: "I'm Not Smart Enough for This",
      problem: "You feel like investing requires advanced math skills, economics degrees, or some special intelligence.",
      reassurance: "Investing is more about discipline and patience than intelligence. Some of the smartest people are terrible investors.",
      actionable: [
        "Successful investing is about behavior, not brilliance",
        "Simple strategies often outperform complex ones",
        "Index funds let you own the whole market without picking winners",
        "Focus on what you can control: saving regularly and staying invested",
        "Many successful investors have average intelligence but great discipline"
      ],
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Anxiety Help Center
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          It's okay to feel anxious about investing. These are common fears, and you're not alone. Let's work through them together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Topic List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Concerns</h2>
          {anxietyTopics.map((topic) => (
            <div
              key={topic.id}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedTopic?.id === topic.id
                  ? 'border-[#457B9D] bg-[#457B9D]/5'
                  : 'border-gray-200 hover:border-[#457B9D]/50 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedTopic(topic)}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#457B9D] to-[#87ae73] rounded-lg flex items-center justify-center text-white">
                    {topic.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {topic.problem}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Topic Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {selectedTopic ? (
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#457B9D] to-[#87ae73] rounded-lg flex items-center justify-center text-white mr-4">
                  {selectedTopic.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedTopic.title}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Problem */}
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-red-800 mb-2">The Problem:</h4>
                  <p className="text-red-700">{selectedTopic.problem}</p>
                </div>

                {/* Reassurance */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">The Reality:</h4>
                  <p className="text-blue-700">{selectedTopic.reassurance}</p>
                </div>

                {/* Actionable Steps */}
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-green-800 mb-3">What You Can Do:</h4>
                  <ul className="space-y-2">
                    {selectedTopic.actionable.map((action, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-green-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Additional Support */}
              <div className="mt-8 p-6 bg-gradient-to-br from-[#457B9D]/10 to-[#87ae73]/10 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Remember:</h4>
                <p className="text-gray-700">
                  Every successful investor started exactly where you are now. The difference isn't intelligence or luck—it's persistence and learning from mistakes. You've got this!
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Select a concern to see supportive guidance and actionable steps</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Reassurance Section */}
      <div className="mt-16 bg-gradient-to-br from-[#87ae73]/10 to-[#f4e98c]/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          You're Not Alone in This Journey
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-[#457B9D] mb-2">85%</div>
            <p className="text-gray-600">of investors feel anxious when starting out</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-[#87ae73] mb-2">$5</div>
            <p className="text-gray-600">is enough to start investing and building wealth</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-[#f4e98c] mb-2">30+</div>
            <p className="text-gray-600">years of market data shows consistent long-term growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyHelp;
