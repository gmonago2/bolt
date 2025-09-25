import React, { useState } from 'react';
import { TrendingUp, DollarSign, Target, Heart, BarChart3, PieChart, CheckCircle } from 'lucide-react';

interface CompatibilityAnswers {
  monthlyInvestment: number;
  fiveYearGoal: number;
  tenYearGoal: number;
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  timeHorizon: 'short' | 'medium' | 'long';
  esgFocus: boolean;
  esgExclusions: string[];
  investmentStyle: 'hands-on' | 'hands-off' | 'mixed';
}

interface PortfolioSimulation {
  conservative: number;
  moderate: number;
  aggressive: number;
}

const CompatibilityScore: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<CompatibilityAnswers>({
    monthlyInvestment: 0,
    fiveYearGoal: 0,
    tenYearGoal: 0,
    riskTolerance: 'moderate',
    timeHorizon: 'medium',
    esgFocus: false,
    esgExclusions: [],
    investmentStyle: 'mixed'
  });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 6;

  const handleAnswerChange = (field: keyof CompatibilityAnswers, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateCompatibilityScore = (): { score: number; recommendation: string; reasoning: string[] } => {
    let score = 0;
    const reasoning: string[] = [];

    // Monthly investment analysis
    if (answers.monthlyInvestment >= 500) {
      score += 25;
      reasoning.push("Higher monthly investment allows for better diversification");
    } else if (answers.monthlyInvestment >= 100) {
      score += 15;
      reasoning.push("Good monthly investment amount for building wealth");
    } else if (answers.monthlyInvestment >= 25) {
      score += 10;
      reasoning.push("Starting small is perfectly fine - consistency matters most");
    }

    // Goal alignment
    const monthlyNeededForFiveYear = answers.fiveYearGoal / (5 * 12);
    const monthlyNeededForTenYear = answers.tenYearGoal / (10 * 12);
    
    if (answers.monthlyInvestment >= monthlyNeededForFiveYear * 0.8) {
      score += 20;
      reasoning.push("Your investment amount aligns well with your 5-year goals");
    } else {
      score += 10;
      reasoning.push("Consider increasing monthly investment to reach 5-year goals faster");
    }

    if (answers.monthlyInvestment >= monthlyNeededForTenYear * 0.6) {
      score += 20;
      reasoning.push("Strong alignment with long-term wealth building goals");
    }

    // Risk tolerance alignment
    if (answers.timeHorizon === 'long' && answers.riskTolerance === 'aggressive') {
      score += 15;
      reasoning.push("Long time horizon with aggressive approach maximizes growth potential");
    } else if (answers.timeHorizon === 'medium' && answers.riskTolerance === 'moderate') {
      score += 15;
      reasoning.push("Balanced approach matches your time horizon well");
    } else if (answers.timeHorizon === 'short' && answers.riskTolerance === 'conservative') {
      score += 15;
      reasoning.push("Conservative approach appropriate for short-term goals");
    } else {
      score += 5;
      reasoning.push("Consider adjusting risk tolerance to match your time horizon");
    }

    // Investment style
    if (answers.investmentStyle === 'mixed') {
      score += 10;
      reasoning.push("Mixed investment style provides flexibility and learning opportunities");
    } else if (answers.investmentStyle === 'hands-off') {
      score += 8;
      reasoning.push("Hands-off approach works well with index funds and ETFs");
    } else {
      score += 6;
      reasoning.push("Hands-on approach requires more time but can be rewarding");
    }

    // ESG considerations
    if (answers.esgFocus) {
      score += 5;
      reasoning.push("ESG focus shows thoughtful investment approach");
    }

    let recommendation = "";
    if (score >= 80) {
      recommendation = "Excellent! You're well-prepared for successful investing.";
    } else if (score >= 60) {
      recommendation = "Good foundation! A few adjustments could optimize your strategy.";
    } else if (score >= 40) {
      recommendation = "Getting started! Focus on building consistent investing habits.";
    } else {
      recommendation = "Begin with education and small, consistent investments.";
    }

    return { score: Math.min(score, 100), recommendation, reasoning };
  };

  const simulatePortfolioGrowth = (): PortfolioSimulation => {
    const months = 120; // 10 years
    const monthlyInvestment = answers.monthlyInvestment;
    
    // Annual returns: conservative (6%), moderate (8%), aggressive (10%)
    const monthlyReturns = {
      conservative: 0.06 / 12,
      moderate: 0.08 / 12,
      aggressive: 0.10 / 12
    };

    const simulate = (monthlyReturn: number) => {
      let total = 0;
      for (let month = 1; month <= months; month++) {
        total = (total + monthlyInvestment) * (1 + monthlyReturn);
      }
      return Math.round(total);
    };

    return {
      conservative: simulate(monthlyReturns.conservative),
      moderate: simulate(monthlyReturns.moderate),
      aggressive: simulate(monthlyReturns.aggressive)
    };
  };

  if (showResults) {
    const { score, recommendation, reasoning } = calculateCompatibilityScore();
    const portfolioSim = simulatePortfolioGrowth();

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Investment Compatibility Score
          </h1>
          <div className="text-6xl font-bold text-[#457B9D] mb-4">{score}/100</div>
          <p className="text-xl text-gray-600">{recommendation}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Portfolio Simulation */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="h-6 w-6 text-[#457B9D] mr-3" />
              10-Year Portfolio Simulation
            </h2>
            <p className="text-gray-600 mb-6">
              Based on investing ${answers.monthlyInvestment.toLocaleString()} monthly for 10 years:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-blue-900">Conservative Portfolio</h3>
                  <span className="text-sm text-blue-700">6% annual return</span>
                </div>
                <div className="text-2xl font-bold text-blue-900">
                  ${portfolioSim.conservative.toLocaleString()}
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-green-900">Moderate Portfolio</h3>
                  <span className="text-sm text-green-700">8% annual return</span>
                </div>
                <div className="text-2xl font-bold text-green-900">
                  ${portfolioSim.moderate.toLocaleString()}
                </div>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-orange-900">Aggressive Portfolio</h3>
                  <span className="text-sm text-orange-700">10% annual return</span>
                </div>
                <div className="text-2xl font-bold text-orange-900">
                  ${portfolioSim.aggressive.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-6 w-6 text-[#87ae73] mr-3" />
              Personalized Recommendations
            </h2>
            
            <div className="space-y-4">
              {reasoning.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#457B9D]/10 to-[#87ae73]/10 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Next Steps:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Start with your first investment this month</li>
                <li>• Set up automatic monthly contributions</li>
                <li>• Choose investments that match your risk tolerance</li>
                <li>• Review and adjust your strategy quarterly</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              setShowResults(false);
              setCurrentStep(1);
              setAnswers({
                monthlyInvestment: 0,
                fiveYearGoal: 0,
                tenYearGoal: 0,
                riskTolerance: 'moderate',
                timeHorizon: 'medium',
                esgFocus: false,
                esgExclusions: [],
                investmentStyle: 'mixed'
              });
            }}
            className="bg-[#457B9D] text-white px-8 py-3 rounded-lg hover:bg-[#3a6a8a] transition-colors"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Stock Compatibility Assessment
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Answer a few questions to get your personalized investment compatibility score and portfolio recommendations.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#457B9D] to-[#87ae73] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Content */}
        <div className="mb-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-6 w-6 text-[#457B9D] mr-3" />
                How much can you invest monthly?
              </h2>
              <p className="text-gray-600 mb-6">
                This helps us understand your investment capacity and recommend appropriate strategies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[25, 50, 100, 250, 500, 1000, 2000, 5000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAnswerChange('monthlyInvestment', amount)}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      answers.monthlyInvestment === amount
                        ? 'border-[#457B9D] bg-[#457B9D]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-900">${amount}</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <input
                  type="number"
                  placeholder="Or enter custom amount..."
                  value={answers.monthlyInvestment || ''}
                  onChange={(e) => handleAnswerChange('monthlyInvestment', parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#457B9D] focus:border-transparent"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-6 w-6 text-[#457B9D] mr-3" />
                What are your financial goals?
              </h2>
              <p className="text-gray-600 mb-6">
                Setting clear goals helps determine the right investment strategy for you.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How much do you want your investments to be worth in 5 years?
                  </label>
                  <input
                    type="number"
                    value={answers.fiveYearGoal || ''}
                    onChange={(e) => handleAnswerChange('fiveYearGoal', parseInt(e.target.value) || 0)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#457B9D] focus:border-transparent"
                    placeholder="Enter amount in dollars"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How much do you want your investments to be worth in 10 years?
                  </label>
                  <input
                    type="number"
                    value={answers.tenYearGoal || ''}
                    onChange={(e) => handleAnswerChange('tenYearGoal', parseInt(e.target.value) || 0)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#457B9D] focus:border-transparent"
                    placeholder="Enter amount in dollars"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 text-[#457B9D] mr-3" />
                What's your risk tolerance?
              </h2>
              <p className="text-gray-600 mb-6">
                Understanding your comfort level with investment risk helps us recommend appropriate strategies.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    value: 'conservative',
                    title: 'Conservative',
                    description: 'I prefer steady, predictable returns with minimal risk of loss.',
                    color: 'blue'
                  },
                  {
                    value: 'moderate',
                    title: 'Moderate',
                    description: 'I can handle some ups and downs for potentially higher returns.',
                    color: 'green'
                  },
                  {
                    value: 'aggressive',
                    title: 'Aggressive',
                    description: 'I\'m comfortable with significant volatility for maximum growth potential.',
                    color: 'orange'
                  }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswerChange('riskTolerance', option.value)}
                    className={`w-full p-6 rounded-lg border-2 text-left transition-all ${
                      answers.riskTolerance === option.value
                        ? 'border-[#457B9D] bg-[#457B9D]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-6 w-6 text-[#457B9D] mr-3" />
                What's your investment time horizon?
              </h2>
              <p className="text-gray-600 mb-6">
                When do you plan to use this money? This affects how much risk you can take.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    value: 'short',
                    title: 'Short-term (1-3 years)',
                    description: 'I need this money relatively soon for a specific goal.',
                    examples: 'Emergency fund, house down payment, vacation'
                  },
                  {
                    value: 'medium',
                    title: 'Medium-term (3-7 years)',
                    description: 'I have several years before I need to access this money.',
                    examples: 'Car purchase, home improvement, education fund'
                  },
                  {
                    value: 'long',
                    title: 'Long-term (7+ years)',
                    description: 'This is for long-term wealth building and retirement.',
                    examples: 'Retirement, financial independence, generational wealth'
                  }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswerChange('timeHorizon', option.value)}
                    className={`w-full p-6 rounded-lg border-2 text-left transition-all ${
                      answers.timeHorizon === option.value
                        ? 'border-[#457B9D] bg-[#457B9D]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-2">{option.description}</p>
                    <p className="text-sm text-gray-500">{option.examples}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="h-6 w-6 text-[#457B9D] mr-3" />
                ESG Considerations
              </h2>
              <p className="text-gray-600 mb-6">
                Environmental, Social, and Governance (ESG) factors can be important in investment decisions.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={answers.esgFocus}
                      onChange={(e) => handleAnswerChange('esgFocus', e.target.checked)}
                      className="h-4 w-4 text-[#457B9D] focus:ring-[#457B9D] border-gray-300 rounded"
                    />
                    <span className="font-medium text-gray-900">
                      I want to invest in companies that align with my values
                    </span>
                  </label>
                  <p className="text-sm text-gray-600 mt-2 ml-7">
                    This includes environmental responsibility, social impact, and good corporate governance.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Are there any industries or causes you want to avoid? (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Fossil Fuels', 'Tobacco', 'Gambling', 'Weapons', 'Fast Fashion', 'Social Media'].map((industry) => (
                      <label key={industry} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={answers.esgExclusions.includes(industry)}
                          onChange={(e) => {
                            const exclusions = e.target.checked
                              ? [...answers.esgExclusions, industry]
                              : answers.esgExclusions.filter(item => item !== industry);
                            handleAnswerChange('esgExclusions', exclusions);
                          }}
                          className="h-4 w-4 text-[#457B9D] focus:ring-[#457B9D] border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">{industry}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <PieChart className="h-6 w-6 text-[#457B9D] mr-3" />
                What's your preferred investment style?
              </h2>
              <p className="text-gray-600 mb-6">
                How hands-on do you want to be with your investments?
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    value: 'hands-off',
                    title: 'Hands-off',
                    description: 'I prefer automated, low-maintenance investing with minimal decision-making.',
                    examples: 'Index funds, robo-advisors, target-date funds'
                  },
                  {
                    value: 'mixed',
                    title: 'Mixed Approach',
                    description: 'I want some automation but also enjoy researching and picking individual investments.',
                    examples: 'Core portfolio in index funds, smaller portion in individual stocks'
                  },
                  {
                    value: 'hands-on',
                    title: 'Hands-on',
                    description: 'I enjoy researching companies and actively managing my portfolio.',
                    examples: 'Individual stock picking, regular portfolio rebalancing, market research'
                  }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswerChange('investmentStyle', option.value)}
                    className={`w-full p-6 rounded-lg border-2 text-left transition-all ${
                      answers.investmentStyle === option.value
                        ? 'border-[#457B9D] bg-[#457B9D]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-2">{option.description}</p>
                    <p className="text-sm text-gray-500">{option.examples}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg transition-colors ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={nextStep}
            className="bg-[#457B9D] text-white px-6 py-3 rounded-lg hover:bg-[#3a6a8a] transition-colors"
          >
            {currentStep === totalSteps ? 'Get My Score' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityScore;
