# Supabase Authentication Setup

This project now includes Supabase authentication. Follow these steps to set up authentication:

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization and enter project details
5. Wait for the project to be created

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy your Project URL and anon/public key

## 3. Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 4. Configure Authentication Settings

1. In your Supabase dashboard, go to Authentication > Settings
2. Configure the following settings:
   - **Site URL**: `http://localhost:5173` (for development)
   - **Redirect URLs**: Add `http://localhost:5173` for development
   - **Email confirmation**: Enable if you want users to confirm their email
   - **Password requirements**: Configure as needed

## 5. Authentication Features

The following authentication features are now available:

### Components
- **AuthModal**: Login/signup modal with form validation
- **ProtectedRoute**: Wrapper component for protected pages
- **AuthContext**: React context for authentication state

### Protected Routes
The following routes now require authentication:
- `/missions` - Missions page
- `/compatibility` - Compatibility Score page  
- `/social` - Community/Social page

### Public Routes
These routes are accessible without authentication:
- `/` - Home page
- `/jargon` - Jargon Translator
- `/anxiety-help` - Anxiety Help

### Navigation
- Sign In/Sign Out buttons in the navigation
- User email display when logged in
- Mobile-responsive authentication controls

## 6. Testing Authentication

1. Start your development server: `npm run dev`
2. Try accessing a protected route (e.g., `/missions`) - you should be redirected to home
3. Click "Sign In" in the navigation
4. Create a new account or sign in with existing credentials
5. After authentication, you should be able to access protected routes

## 7. Database Setup (Optional)

If you want to store additional user data, you can create tables in your Supabase database:

```sql
-- Example: Create a profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
```

## 8. Production Deployment

When deploying to production:

1. Update your Supabase project settings:
   - **Site URL**: Your production domain
   - **Redirect URLs**: Add your production domain
2. Update your environment variables with production values
3. Ensure your production build includes the environment variables

## Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables" error**
   - Make sure your `.env` file exists and contains the correct variables
   - Restart your development server after adding environment variables

2. **Authentication not working**
   - Check that your Supabase project is active
   - Verify your environment variables are correct
   - Check the browser console for any error messages

3. **Redirect issues**
   - Make sure your redirect URLs are configured in Supabase
   - Check that your site URL matches your development/production URL

### Getting Help

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)


