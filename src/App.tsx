import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import JargonTranslator from './components/JargonTranslator';
import AnxietyHelp from './components/AnxietyHelp';
import Missions from './components/Missions';
import CompatibilityScore from './components/CompatibilityScore';
import SocialPosting from './components/SocialPosting';

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-white">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jargon" element={<JargonTranslator />} />
          <Route path="/anxiety-help" element={<AnxietyHelp />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/compatibility" element={<CompatibilityScore />} />
          <Route path="/social" element={<SocialPosting />} />
        </Routes>
              </div>
    </Router>
  );
}

export default App;