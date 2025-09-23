import React, { useState } from 'react';
import { 
  TrendingUp, 
  BookOpen, 
  Shield, 
  Users, 
  CheckCircle, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Mail,
  BarChart3,
  Target,
  Heart
} from 'lucide-react';

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you! We\'ll send you our free investing starter guide.');
  };

  const faqs = [
    {
      question: "Do I need a lot of money to start investing?",
      answer: "Not at all! You can start investing with as little as $1 through many modern platforms. Our course teaches you how to begin with whatever amount you're comfortable with."
    },
    {
      question: "How long does it take to understand the basics?",
      answer: "Most students grasp the fundamental concepts within 2-3 weeks of consistent learning. Our bite-sized lessons are designed to fit into your busy schedule."
    },
    {
      question: "Will you tell me which stocks to buy?",
      answer: "No, we don't give specific stock recommendations. Instead, we teach you how to evaluate any stock yourself, so you can make informed decisions based on your own research and goals."
    },
    {
      question: "What if I'm afraid of losing money?",
      answer: "Fear is completely normal! Our program includes modules specifically designed to help manage investment anxiety and teaches risk management strategies to help you invest with confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-[#457B9D]" />
              <span className="text-xl font-bold text-gray-900">FirstShares</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-[#457B9D] transition-colors">How It Works</a>
              <a href="#features" className="text-gray-700 hover:text-[#457B9D] transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#457B9D] transition-colors">Reviews</a>
              <button className="bg-[#457B9D] text-white px-6 py-2 rounded-lg hover:bg-[#3a6a8a] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#eae6e3] via-white to-[#f4e98c]/20 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Cut Through the Jargon:<br />
              <span className="bg-gradient-to-r from-[#457B9D] to-[#87ae73] bg-clip-text text-transparent">
                Stocks, Explained in Plain English
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Most beginners quit before they start—not because investing is impossible, but because the terminology feels like a foreign language. Our approach breaks down essential concepts like P/E ratios, EPS, and market caps into plain, relatable language. Alongside clear explanations, we provide tools and emotional support to help you manage the anxieties that often come with learning about investing. Instead of telling you what stocks to buy, we empower you with the knowledge to make sense of any stock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-[#457B9D] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#3a6a8a] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Your Journey to Investing Clarity Today
              </button>
              <button className="border-2 border-[#87ae73] text-[#87ae73] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#87ae73] hover:text-white transition-colors">
                Learn the Basics in Plain English
              </button>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-[#87ae73]" />
                <span>No confusing jargon</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-[#87ae73]" />
                <span>Emotional support included</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-[#87ae73]" />
                <span>Learn at your own pace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#eae6e3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Turn Investing from Overwhelming into Empowering
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Most investing platforms overwhelm beginners with complex terminology and leave them to figure things out alone. We take a different approach—transforming intimidating financial concepts into clear, understandable language while providing the emotional support you need to build lasting confidence.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <blockquote className="text-xl text-gray-800 italic">
                "Unlike platforms that tell you what to buy, we empower you with the knowledge and confidence to make your own informed decisions."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Invest with Confidence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our supportive approach combines clear education, practical tools, and emotional guidance to transform you from overwhelmed beginner to confident investor.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-[#457B9D]/10 to-[#457B9D]/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#457B9D] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plain English Explanations</h3>
              <p className="text-gray-600 leading-relaxed">
                We translate complex financial terms into everyday language. Learn what P/E ratios, EPS, and market caps actually mean for your investment decisions—no jargon, just clarity.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-[#87ae73]/10 to-[#87ae73]/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#87ae73] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Access easy-to-use calculators, checklists, and worksheets that help you evaluate stocks and make informed investment decisions with confidence.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-[#f4e98c]/20 to-[#f4e98c]/30 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#f4e98c] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emotional Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Address the anxiety and fear that comes with investing through guided exercises and mental frameworks that build lasting confidence and calm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#eae6e3]/20 to-[#f4e98c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Path from Overwhelmed to Empowered
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven 3-step process takes you from confused beginner to confident investor, all at your own comfortable pace.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learn the Language</h3>
              <p className="text-gray-600">
                Start with our jargon-free explanations of essential investing concepts. No overwhelming terminology—just clear, friendly explanations that make sense.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#87ae73] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practice with Confidence</h3>
              <p className="text-gray-600">
                Use our supportive worksheets and calculators to analyze real stocks. Build your skills with hands-on exercises designed to boost your confidence.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#f4e98c] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-700 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Invest with Clarity</h3>
              <p className="text-gray-600">
                Apply your knowledge to make informed investment decisions. You'll have the skills and calm confidence to evaluate any stock on your own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stories from Our Community
            </h2>
            <p className="text-lg text-gray-600">
              Real people sharing how they overcame their investing fears and gained clarity with FirstShares.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#f4e98c] fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "I was terrified of investing for years. FirstShares helped me understand what all those confusing terms actually meant. Now I feel calm and confident making my own investment decisions."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#457B9D] to-[#87ae73] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-500">Marketing Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#f4e98c] fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "The emotional support was a game-changer for me. I never realized how much fear was holding me back. Now I actually enjoy researching stocks and feel empowered making investment plans."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#87ae73] to-[#f4e98c] rounded-full flex items-center justify-center text-gray-700 font-bold mr-4">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                  <p className="text-sm text-gray-500">Teacher</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#f4e98c] fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "Finally, someone explains investing without making me feel stupid! The plain English approach made all the difference. I wish I'd found FirstShares years ago."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f4e98c] to-[#457B9D] rounded-full flex items-center justify-center text-gray-700 font-bold mr-4">
                  J
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jessica Park</p>
                  <p className="text-sm text-gray-500">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#eae6e3]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Questions We Hear All the Time
            </h2>
            <p className="text-lg text-gray-600">
              Get reassuring answers to the most common questions from beginners just like you.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-[#457B9D] to-[#87ae73]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-white mx-auto mb-8" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get Your Free Investing Starter Guide
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 10,000+ beginners who've already started their investing journey with clarity and confidence.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button
                type="submit"
                className="bg-[#f4e98c] text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-[#f4e98c]/90 transition-colors whitespace-nowrap"
              >
                Get Guide
              </button>
            </div>
          </form>
          <p className="text-sm text-white/80 mt-4">
            No spam, ever. Unsubscribe anytime with one click.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Ready to Transform Investing from Overwhelming into Empowering?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join thousands of beginners who've already discovered that investing doesn't have to be scary. Start your journey to financial confidence and clarity today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#457B9D] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#3a6a8a] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Your Journey to Investing Clarity Today
            </button>
            <button className="border-2 border-[#87ae73] text-[#87ae73] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#87ae73] hover:text-white transition-colors">
              Learn the Basics in Plain English
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-8 w-8 text-[#457B9D]" />
                <span className="text-xl font-bold">FirstShares</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making investing accessible and empowering for everyone.
              </p>
              <p className="text-sm text-gray-500 italic">
                "Stocks, Explained in Plain English"
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FirstShares. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;