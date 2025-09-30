import React, { useState } from 'react';
import { 
  MessageCircle, 
  Heart, 
  Share2, 
  Plus, 
  TrendingUp, 
  BookOpen, 
  Target, 
  Trophy,
  User,
  Calendar,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';

interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  type: 'accomplishment' | 'question' | 'learning' | 'milestone';
  timestamp: string;
  likes: number;
  comments: number;
  liked: boolean;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

const SocialPosting: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'Sarah M.',
      authorAvatar: 'SM',
      content: 'Just completed my first $500 investment in an S&P 500 index fund! Feeling nervous but excited about starting this journey. Any tips for a beginner?',
      type: 'accomplishment',
      timestamp: '2 hours ago',
      likes: 12,
      comments: 8,
      liked: false
    },
    {
      id: '2',
      author: 'Mike R.',
      authorAvatar: 'MR',
      content: 'Learned something new today: P/E ratios aren\'t as scary as I thought! A company with a P/E of 15 means you\'re paying $15 for every $1 of profit. Simple when explained right! 📚',
      type: 'learning',
      timestamp: '4 hours ago',
      likes: 18,
      comments: 5,
      liked: true
    },
    {
      id: '3',
      author: 'Jessica P.',
      authorAvatar: 'JP',
      content: 'Question for the community: I have $200/month to invest. Should I put it all in one index fund or split between multiple funds? I\'m 25 and planning for long-term growth.',
      type: 'question',
      timestamp: '6 hours ago',
      likes: 7,
      comments: 15,
      liked: false
    },
    {
      id: '4',
      author: 'Alex T.',
      authorAvatar: 'AT',
      content: 'Hit a milestone today - my portfolio reached $10,000! Started with just $50/month three years ago. The compound growth is real! 🎉',
      type: 'milestone',
      timestamp: '1 day ago',
      likes: 25,
      comments: 12,
      liked: true
    },
    {
      id: '5',
      author: 'Emma L.',
      authorAvatar: 'EL',
      content: 'Sharing a win: I resisted the urge to panic-sell during last week\'s market dip. Instead, I bought more shares of my favorite ETF. Staying disciplined! 💪',
      type: 'accomplishment',
      timestamp: '2 days ago',
      likes: 20,
      comments: 9,
      liked: false
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [postType, setPostType] = useState<'accomplishment' | 'question' | 'learning' | 'milestone'>('accomplishment');
  const [showNewPost, setShowNewPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [comments, setComments] = useState<Record<string, Comment[]>>({
    '1': [
      { id: '1-1', author: 'Tom H.', content: 'Congrats Sarah! That\'s a great start. My advice: set up automatic monthly contributions and don\'t check your balance daily.', timestamp: '1 hour ago' },
      { id: '1-2', author: 'Lisa K.', content: 'Welcome to the investing club! Index funds are perfect for beginners. Stay consistent and you\'ll do great.', timestamp: '30 min ago' }
    ],
    '2': [
      { id: '2-1', author: 'David C.', content: 'Great explanation! I always think of P/E as "how many years of earnings am I paying for this stock right now"', timestamp: '3 hours ago' }
    ],
    '3': [
      { id: '3-1', author: 'Rachel M.', content: 'At your age, I\'d suggest 80% in a total stock market index fund and 20% in international. Keep it simple!', timestamp: '5 hours ago' },
      { id: '3-2', author: 'John D.', content: 'VTSAX (Vanguard Total Stock Market) is a great one-fund solution if you want simplicity.', timestamp: '4 hours ago' }
    ]
  });

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post: Post = {
      id: Date.now().toString(),
      author: 'You',
      authorAvatar: 'YO',
      content: newPost,
      type: postType,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      liked: false
    };

    setPosts([post, ...posts]);
    setNewPost('');
    setShowNewPost(false);
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'accomplishment': return <Trophy className="h-4 w-4" />;
      case 'question': return <MessageCircle className="h-4 w-4" />;
      case 'learning': return <BookOpen className="h-4 w-4" />;
      case 'milestone': return <TrendingUp className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'accomplishment': return 'bg-green-100 text-green-800';
      case 'question': return 'bg-blue-100 text-blue-800';
      case 'learning': return 'bg-purple-100 text-purple-800';
      case 'milestone': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case 'accomplishment': return 'Accomplishment';
      case 'question': return 'Question';
      case 'learning': return 'Learning';
      case 'milestone': return 'Milestone';
      default: return 'Post';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Investment Community
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Share your accomplishments, ask questions, and learn from fellow investors. We're all in this together!
        </p>
      </div>

      {/* New Post Button */}
      <div className="mb-8">
        <button
          onClick={() => setShowNewPost(!showNewPost)}
          className="w-full bg-gradient-to-r from-[#457B9D] to-[#87ae73] text-white p-4 rounded-lg hover:from-[#3a6a8a] hover:to-[#6b8a5a] transition-all flex items-center justify-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Share Your Journey</span>
        </button>
      </div>

      {/* New Post Form */}
      {showNewPost && (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create a Post</h3>
          
          <form onSubmit={handleNewPost}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What type of post is this?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'accomplishment', label: 'Accomplishment', icon: <Trophy className="h-4 w-4" /> },
                  { value: 'question', label: 'Question', icon: <MessageCircle className="h-4 w-4" /> },
                  { value: 'learning', label: 'Learning', icon: <BookOpen className="h-4 w-4" /> },
                  { value: 'milestone', label: 'Milestone', icon: <TrendingUp className="h-4 w-4" /> }
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setPostType(type.value as any)}
                    className={`p-3 rounded-lg border-2 text-center transition-all ${
                      postType === type.value
                        ? 'border-[#457B9D] bg-[#457B9D]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {type.icon}
                      <span className="text-sm font-medium">{type.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your investing journey, ask a question, or celebrate a milestone..."
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#457B9D] focus:border-transparent resize-none"
                rows={4}
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowNewPost(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#457B9D] text-white px-6 py-2 rounded-lg hover:bg-[#3a6a8a] transition-colors"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-lg p-6">
            {/* Post Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#457B9D] to-[#87ae73] rounded-full flex items-center justify-center text-white font-bold">
                {post.authorAvatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-900">{post.author}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPostTypeColor(post.type)} flex items-center space-x-1`}>
                    {getPostTypeIcon(post.type)}
                    <span>{getPostTypeLabel(post.type)}</span>
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.timestamp}</span>
                </p>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-4">
              <p className="text-gray-800 leading-relaxed">{post.content}</p>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-2 transition-colors ${
                    post.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${post.liked ? 'fill-current' : ''}`} />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                
                <button
                  onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                  className="flex items-center space-x-2 text-gray-500 hover:text-[#457B9D] transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
              </div>

              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Comments Section */}
            {selectedPost === post.id && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Comments</h4>
                
                {comments[post.id] && comments[post.id].length > 0 ? (
                  <div className="space-y-4 mb-4">
                    {comments[post.id].map((comment) => (
                      <div key={comment.id} className="flex space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium">
                          {comment.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-gray-900 text-sm">{comment.author}</span>
                              <span className="text-xs text-gray-500">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-700 text-sm">{comment.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm mb-4">No comments yet. Be the first to share your thoughts!</p>
                )}

                {/* Add Comment */}
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#457B9D] to-[#87ae73] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    YO
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#457B9D] focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Community Guidelines */}
      <div className="mt-12 bg-gradient-to-br from-[#457B9D]/10 to-[#87ae73]/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">✅ Do:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Share your investing wins and lessons learned</li>
              <li>• Ask thoughtful questions about investing</li>
              <li>• Support and encourage fellow investors</li>
              <li>• Share educational resources and insights</li>
              <li>• Be honest about your investing journey</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">❌ Don't:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Give specific investment advice or recommendations</li>
              <li>• Share personal financial details (exact amounts, etc.)</li>
              <li>• Promote specific stocks or investment products</li>
              <li>• Be disrespectful or dismissive of others</li>
              <li>• Share misleading or unverified information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPosting;

