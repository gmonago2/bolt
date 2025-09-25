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

const HomePage: React.FC = () => {
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#457B9D]/10 via-[#87ae73]/5 to-[#f4e98c]/20 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#457B9D]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#87ae73]/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f4e98c]/30 rounded-full blur-lg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Cut Through the Jargon:<br />
              <span className="bg-gradient-to-r from-[#457B9D] to-[#87ae73] bg-clip-text text-transparent">
                Stocks, Explained in Plain English
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              We make the stock market beginner-friendly by stripping away confusing jargon and providing emotional support for new investors. Instead of telling you what to buy, we teach you how to think—so you can approach investing with clarity, calm, and confidence.
            </p>
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
      <section className="py-20 bg-gradient-to-br from-[#87ae73]/10 via-[#f4e98c]/5 to-[#457B9D]/10 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-20 h-20 bg-[#87ae73]/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 left-20 w-16 h-16 bg-[#457B9D]/20 rounded-full blur-lg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Turn Investing from <span className="text-[#457B9D]">Overwhelming</span> into <span className="text-[#87ae73]">Empowering</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Traditional investing education throws around terms like "P/E ratios," "EPS," and "market caps" without explaining what they actually mean for you. We break down these essential concepts into plain, relatable language, and provide the emotional support you need to overcome investing anxiety. Our mission is simple: make investing accessible for beginners of every age and background.
            </p>
            <div className="bg-gradient-to-br from-white to-[#f4e98c]/10 p-8 rounded-2xl shadow-lg border border-[#87ae73]/20 relative">
              <div className="absolute top-4 left-4 w-8 h-8 bg-[#457B9D]/10 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#87ae73]/20 rounded-full"></div>
              <blockquote className="text-xl text-gray-800 italic relative z-10">
                "Instead of telling you what stocks to buy, we empower you with the knowledge to make sense of any stock—so you can invest with clarity, calm, and confidence."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-white via-[#f4e98c]/5 to-[#87ae73]/5 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#457B9D]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#f4e98c]/20 rounded-full blur-xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Invest with <span className="bg-gradient-to-r from-[#457B9D] to-[#87ae73] bg-clip-text text-transparent">Confidence</span>
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
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#457B9D]/10 via-[#87ae73]/5 to-[#f4e98c]/15 relative overflow-hidden">
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-[#87ae73]/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-[#457B9D]/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-[#f4e98c]/30 rounded-full blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Path from <span className="text-[#457B9D]">Overwhelmed</span> to <span className="text-[#87ae73]">Empowered</span>
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
      <section id="testimonials" className="py-20 bg-gradient-to-br from-[#f4e98c]/10 via-white to-[#87ae73]/10 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-28 h-28 bg-[#457B9D]/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#f4e98c]/20 rounded-full blur-xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stories from Our <span className="bg-gradient-to-r from-[#457B9D] to-[#87ae73] bg-clip-text text-transparent">Community</span>
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
      <section className="py-20 bg-gradient-to-br from-[#457B9D]/10 via-[#eae6e3]/20 to-[#87ae73]/10 relative overflow-hidden">
        <div className="absolute top-10 left-1/3 w-20 h-20 bg-[#f4e98c]/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 right-1/3 w-16 h-16 bg-[#457B9D]/15 rounded-full blur-lg"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Questions We Hear <span className="bg-gradient-to-r from-[#457B9D] to-[#87ae73] bg-clip-text text-transparent">All the Time</span>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-[#457B9D]/20 to-gray-800 text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#457B9D] via-[#87ae73] to-[#f4e98c]"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#457B9D]/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#87ae73]/10 rounded-full blur-lg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/public/Screenshot 2025-09-23 at 11.21.50 AM.png" alt="FirstShares Logo" className="h-8" />
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
};

export default HomePage;
