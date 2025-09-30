import React, { useState } from 'react';
import { Target, BookOpen, MessageCircle, Share2, Trophy, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface Mission {
  id: string;
  title: string;
  description: string;
  type: 'weekly' | 'evergreen';
  category: 'invest' | 'learn' | 'social' | 'quiz';
  points: number;
  completed: boolean;
  icon: React.ReactNode;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const Missions: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const missions: Mission[] = [
    {
      id: 'invest-100',
      title: 'Invest $100',
      description: 'Make your first investment of $100 or more in any stock or ETF',
      type: 'weekly',
      category: 'invest',
      points: 50,
      completed: false,
      icon: <Target className="h-5 w-5" />
    },
    {
      id: 'read-article',
      title: 'Read an Investing Article',
      description: 'Read and understand one educational article about investing fundamentals',
      type: 'evergreen',
      category: 'learn',
      points: 25,
      completed: false,
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: 'comment-post',
      title: 'Comment on a Post',
      description: 'Engage with the community by commenting on someone\'s social post',
      type: 'weekly',
      category: 'social',
      points: 15,
      completed: false,
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      id: 'share-accomplishment',
      title: 'Share an Accomplishment',
      description: 'Post about something you learned or achieved in your investing journey',
      type: 'evergreen',
      category: 'social',
      points: 30,
      completed: false,
      icon: <Share2 className="h-5 w-5" />
    },
    {
      id: 'quiz-basics',
      title: 'Take the Basics Quiz',
      description: 'Test your knowledge with our 5-question investing fundamentals quiz',
      type: 'weekly',
      category: 'quiz',
      points: 40,
      completed: false,
      icon: <Star className="h-5 w-5" />
    }
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      question: "What stock has an average annual return of about 10% over the long term?",
      options: [
        "Individual tech stocks like Apple or Google",
        "The S&P 500 index",
        "Cryptocurrency like Bitcoin",
        "Individual penny stocks"
      ],
      correct: 1,
      explanation: "The S&P 500, which represents the 500 largest U.S. companies, has averaged about 10% annual returns over the past 90+ years. Individual stocks are much more volatile and unpredictable."
    },
    {
      question: "What is the main benefit of diversification?",
      options: [
        "Guarantees higher returns",
        "Reduces risk by spreading investments across different assets",
        "Makes you rich faster",
        "Eliminates all investment risk"
      ],
      correct: 1,
      explanation: "Diversification reduces risk by spreading your investments across different companies, industries, and asset types. It doesn't guarantee higher returns or eliminate all risk, but it helps smooth out volatility."
    },
    {
      question: "What does 'time in the market beats timing the market' mean?",
      options: [
        "You should buy stocks at exactly the right time",
        "Staying invested long-term is more important than trying to predict short-term movements",
        "You need to watch the market constantly",
        "Market timing is the key to success"
      ],
      correct: 1,
      explanation: "This phrase means that staying invested over long periods typically produces better results than trying to buy low and sell high based on market predictions. Time and compound returns are more powerful than timing."
    },
    {
      question: "What is dollar-cost averaging?",
      options: [
        "Investing all your money at once",
        "Investing a fixed amount regularly regardless of market conditions",
        "Only investing when the market is down",
        "Investing based on market predictions"
      ],
      correct: 1,
      explanation: "Dollar-cost averaging means investing the same amount of money at regular intervals (like monthly) regardless of whether the market is up or down. This helps reduce the impact of market volatility."
    },
    {
      question: "What is a P/E ratio?",
      options: [
        "The price of a stock divided by its earnings per share",
        "How much profit a company makes",
        "The total value of all company shares",
        "The dividend a company pays"
      ],
      correct: 0,
      explanation: "P/E ratio (Price-to-Earnings) compares a stock's price to its earnings per share. It tells you how much you're paying for each dollar of company profits. Lower ratios might indicate better value, but context matters."
    }
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizCompleted(false);
    setShowQuiz(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'invest': return 'bg-green-100 text-green-800';
      case 'learn': return 'bg-blue-100 text-blue-800';
      case 'social': return 'bg-purple-100 text-purple-800';
      case 'quiz': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'weekly' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800';
  };

  if (showQuiz) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {!quizCompleted ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Investing Basics Quiz</h2>
                <div className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {quizQuestions[currentQuestion].question}
                </h3>
                
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(index)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        selectedAnswer === index
                          ? 'border-[#457B9D] bg-[#457B9D]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                    </button>
                  ))}
                </div>
              </div>

              {selectedAnswer !== null && (
                <div className="mb-6 p-4 rounded-lg bg-gray-50">
                  <p className="text-gray-700 mb-4">{quizQuestions[currentQuestion].explanation}</p>
                  <button
                    onClick={nextQuestion}
                    className="bg-[#457B9D] text-white px-6 py-2 rounded-lg hover:bg-[#3a6a8a] transition-colors flex items-center"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <Trophy className="h-16 w-16 text-[#f4e98c] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>
              <div className="text-4xl font-bold text-[#457B9D] mb-4">
                {quizScore}/{quizQuestions.length}
              </div>
              <p className="text-lg text-gray-600 mb-6">
                {quizScore === quizQuestions.length 
                  ? "Perfect! You're well on your way to investing mastery!"
                  : quizScore >= quizQuestions.length * 0.8
                  ? "Great job! You have a solid understanding of investing basics."
                  : "Good effort! Keep learning and you'll improve with each quiz."}
              </p>
              <button
                onClick={resetQuiz}
                className="bg-[#457B9D] text-white px-6 py-3 rounded-lg hover:bg-[#3a6a8a] transition-colors"
              >
                Take Quiz Again
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Mission Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete weekly and evergreen missions to build your investing knowledge and confidence step by step.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Weekly Missions */}
        <div className="lg:col-span-2">
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-red-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Weekly Missions</h2>
          </div>
          
          <div className="space-y-4">
            {missions.filter(mission => mission.type === 'weekly').map((mission) => (
              <div
                key={mission.id}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  mission.completed
                    ? 'border-green-200 bg-green-50'
                    : selectedMission?.id === mission.id
                    ? 'border-[#457B9D] bg-[#457B9D]/5'
                    : 'border-gray-200 hover:border-[#457B9D]/50 hover:bg-gray-50'
                }`}
                onClick={() => mission.id === 'quiz-basics' ? setShowQuiz(true) : setSelectedMission(mission)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      mission.completed ? 'bg-green-500 text-white' : 'bg-[#457B9D] text-white'
                    }`}>
                      {mission.completed ? <CheckCircle className="h-5 w-5" /> : mission.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{mission.title}</h3>
                      <p className="text-sm text-gray-600">{mission.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(mission.category)}`}>
                        {mission.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(mission.type)}`}>
                        {mission.type}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-[#457B9D]">+{mission.points} pts</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evergreen Missions */}
        <div>
          <div className="flex items-center mb-6">
            <Target className="h-6 w-6 text-gray-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Evergreen Missions</h2>
          </div>
          
          <div className="space-y-4">
            {missions.filter(mission => mission.type === 'evergreen').map((mission) => (
              <div
                key={mission.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  mission.completed
                    ? 'border-green-200 bg-green-50'
                    : selectedMission?.id === mission.id
                    ? 'border-[#457B9D] bg-[#457B9D]/5'
                    : 'border-gray-200 hover:border-[#457B9D]/50 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedMission(mission)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    mission.completed ? 'bg-green-500 text-white' : 'bg-[#457B9D] text-white'
                  }`}>
                    {mission.completed ? <CheckCircle className="h-4 w-4" /> : mission.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm">{mission.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(mission.category)}`}>
                        {mission.category}
                      </span>
                      <span className="text-xs font-bold text-[#457B9D]">+{mission.points}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Details */}
      {selectedMission && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#457B9D] to-[#87ae73] rounded-lg flex items-center justify-center text-white">
                {selectedMission.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedMission.title}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(selectedMission.category)}`}>
                    {selectedMission.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(selectedMission.type)}`}>
                    {selectedMission.type}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#457B9D]">+{selectedMission.points} points</div>
              <div className="text-sm text-gray-500">Reward</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#457B9D]/10 to-[#87ae73]/10 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Mission Description:</h3>
            <p className="text-gray-700 mb-4">{selectedMission.description}</p>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">How to Complete:</h4>
              <ul className="space-y-2 text-gray-700">
                {selectedMission.category === 'invest' && (
                  <>
                    <li>• Choose a stock or ETF you're interested in</li>
                    <li>• Research the company using our tools</li>
                    <li>• Make your investment through your preferred platform</li>
                    <li>• Share your experience with the community</li>
                  </>
                )}
                {selectedMission.category === 'learn' && (
                  <>
                    <li>• Browse our educational articles</li>
                    <li>• Take notes on key concepts</li>
                    <li>• Apply what you learned to your investment research</li>
                    <li>• Share insights with others</li>
                  </>
                )}
                {selectedMission.category === 'social' && (
                  <>
                    <li>• Visit the social feed</li>
                    <li>• Engage thoughtfully with community posts</li>
                    <li>• Share your own experiences and learnings</li>
                    <li>• Support and encourage other investors</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              className="bg-[#457B9D] text-white px-6 py-3 rounded-lg hover:bg-[#3a6a8a] transition-colors flex items-center"
              onClick={() => {
                // In a real app, this would mark the mission as completed
                alert('Mission completed! +' + selectedMission.points + ' points earned!');
              }}
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark Complete
            </button>
            <button
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setSelectedMission(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Missions;

