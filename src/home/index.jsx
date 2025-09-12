import React, { useState, useEffect } from "react";
import { 
  Sun, 
  Moon, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  Zap, 
  TrendingUp, 
  BookOpen, 
  Eye, 
  Download, 
  Heart,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const navigate = useNavigate();

  // Apply/remove dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Ensure global smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  // Team data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "10+ years of experience in AI and machine learning. Previously at Google AI.",
      avatar: "AJ",
      twitter: "#",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sarah Williams", 
      role: "Product Designer",
      bio: "UX specialist with a passion for creating intuitive user experiences.",
      avatar: "SW",
      twitter: "#",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Michael Chen",
      role: "Growth Marketer", 
      bio: "Expert in growth strategies that helped scale multiple startups to success.",
      avatar: "MC",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  ];

  // Templates data
  const templates = [
    { name: "Modern Executive", category: "Professional", color: "violet" },
    { name: "Creative Designer", category: "Creative", color: "pink" },
    { name: "Tech Specialist", category: "Technical", color: "blue" },
    { name: "Marketing Pro", category: "Marketing", color: "emerald" },
    { name: "Finance Expert", category: "Corporate", color: "indigo" },
    { name: "Startup Founder", category: "Entrepreneur", color: "purple" }
  ];

  // Features data
  const features = [
    {
      emoji: "🤖",
      title: "AI Resume Builder",
      description: "Create professional resumes instantly with our intelligent AI that understands your industry and role requirements.",
      icon: Zap,
      gradient: darkMode ? "from-violet-500/20 to-purple-600/20" : "from-violet-100 to-purple-100"
    },
    {
      emoji: "✨",
      title: "AI Resume Enhancer", 
      description: "Transform your existing resume with AI-powered suggestions for better impact, keywords, and formatting.",
      icon: TrendingUp,
      gradient: darkMode ? "from-cyan-500/20 to-blue-600/20" : "from-cyan-100 to-blue-100"
    },
    {
      emoji: "🎯",
      title: "AI Career Guidance",
      description: "Get personalized career advice, job recommendations, and interview tips tailored to your professional goals.",
      icon: BookOpen,
      gradient: darkMode ? "from-emerald-500/20 to-teal-600/20" : "from-emerald-100 to-teal-100"
    }
  ];

  // Statistics data
  const stats = [
    { icon: Users, value: "2M+", label: "Happy Users" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
    { icon: Star, value: "4.9/5", label: "Rating" }
  ];

  return (
    <div className="w-full min-h-screen transition-all duration-500 scroll-smooth">
      {/* Dynamic Background with CSS Gradients */}
      <div 
        className={`fixed inset-0 transition-all duration-700 ${
          darkMode 
            ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
            : 'bg-gradient-to-br from-violet-100 via-sky-50 to-emerald-50'
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Light Mode Decorative Elements */}
          {!darkMode && (
            <>
              {/* Main floating orbs */}
              <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-violet-300/40 to-purple-400/40 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-gradient-to-r from-emerald-300/30 to-teal-400/30 rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-sky-300/35 to-indigo-400/35 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-300/30 to-rose-400/30 rounded-full blur-3xl"></div>
              
              {/* Secondary floating elements */}
              <div className="absolute top-1/2 left-10 w-40 h-40 bg-gradient-to-r from-amber-300/25 to-orange-400/25 rounded-full blur-2xl"></div>
              <div className="absolute top-20 right-1/3 w-32 h-32 bg-gradient-to-r from-cyan-300/30 to-blue-400/30 rounded-full blur-2xl"></div>
            </>
          )}
          
          {/* Dark Mode Decorative Elements - Enhanced */}
          {darkMode && (
            <>
              {/* Main cosmic orbs */}
              <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-violet-500/25 to-purple-600/25 rounded-full blur-3xl shadow-2xl shadow-violet-500/20"></div>
              <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl shadow-2xl shadow-cyan-500/15"></div>
              <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-full blur-3xl shadow-2xl shadow-emerald-500/15"></div>
              <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-rose-600/20 rounded-full blur-3xl shadow-2xl shadow-pink-500/15"></div>
              
              {/* Cosmic dust particles */}
              <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/60 rounded-full"></div>
              <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-violet-300/80 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-300/70 rounded-full"></div>
              
              {/* Nebula effects */}
              <div className="absolute top-1/2 left-10 w-60 h-60 bg-gradient-to-r from-indigo-600/15 to-purple-700/15 rounded-full blur-3xl"></div>
              <div className="absolute top-20 right-1/3 w-48 h-48 bg-gradient-to-r from-teal-600/15 to-emerald-700/15 rounded-full blur-3xl"></div>
            </>
          )}
          
          {/* Enhanced Grid Pattern Overlay */}
          <div 
            className={`absolute inset-0 transition-opacity duration-700 ${darkMode ? 'opacity-20' : 'opacity-10'}`}
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? 'rgba(139,92,246,0.4)' : 'rgba(139,92,246,0.2)'} 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}
          ></div>
          
          {/* Mesh gradient overlay for depth */}
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20' : 'bg-gradient-to-t from-white/30 via-transparent to-white/10'}`}></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* ===== Navbar ===== */}
        <header className={`w-full fixed top-0 z-50 transition-all duration-500 ${
          darkMode 
            ? 'bg-slate-900/70 border-violet-500/20 shadow-lg shadow-violet-500/10' 
            : 'bg-white/70 border-violet-200/50 shadow-lg shadow-violet-200/20'
        } backdrop-blur-2xl border-b`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
            {/* Left Logo */}
            <div className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-xl shadow-lg transition-all duration-500 ${
                darkMode 
                  ? 'bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600 shadow-violet-500/50' 
                  : 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 shadow-violet-400/40'
              }`}></div>
              <h1 className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
                darkMode 
                  ? 'from-white via-violet-200 to-purple-200' 
                  : 'from-gray-800 via-violet-800 to-purple-800'
              }`}>
                ResumeBuilder
              </h1>
            </div>

            {/* Right Nav + Dark Mode */}
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8">
                {['Home', 'Features', 'Templates', 'Pricing', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`font-medium transition-all duration-300 hover:scale-110 transform relative group ${
                      darkMode 
                        ? 'text-gray-200 hover:text-violet-300' 
                        : 'text-gray-700 hover:text-violet-600'
                    }`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r transition-all duration-300 group-hover:w-full ${
                      darkMode 
                        ? 'from-violet-400 to-purple-500' 
                        : 'from-violet-500 to-purple-600'
                    }`}></span>
                  </a>
                ))}
              </nav>

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-2xl transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg group ${
                  darkMode 
                    ? 'bg-slate-800/60 hover:bg-slate-700/60 text-amber-300 shadow-amber-300/20 hover:shadow-amber-300/40' 
                    : 'bg-violet-100/60 hover:bg-violet-200/60 text-violet-700 shadow-violet-300/30 hover:shadow-violet-400/50'
                }`}
              >
                {darkMode ? 
                  <Sun className="w-5 h-5 group-hover:animate-spin" /> : 
                  <Moon className="w-5 h-5 group-hover:animate-bounce" />
                }
              </button>
            </div>
          </div>
        </header>

        {/* ===== Hero Section ===== */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Main Heading */}
                <h1 className={`text-5xl lg:text-7xl font-bold leading-tight transition-all duration-700 ${
                  darkMode ? 'text-white drop-shadow-2xl' : 'text-gray-900'
                }`}>
                  Build Your
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent block transition-all duration-700 animate-pulse ${
                    darkMode 
                      ? 'from-violet-300 via-purple-400 to-indigo-400 drop-shadow-lg' 
                      : 'from-violet-600 via-purple-600 to-indigo-600'
                  }`}>
                    Dream Resume
                  </span>
                  in Minutes
                </h1>

                {/* Subtitle */}
                <p className={`text-xl leading-relaxed transition-all duration-700 ${
                  darkMode ? 'text-gray-200 drop-shadow-sm' : 'text-gray-700'
                }`}>
                  Create professional, ATS-friendly resumes with AI assistance. 
                  Choose from 50+ templates and land your dream job faster than ever.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#features" className={`group px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center ${
                    darkMode 
                      ? 'bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 text-white shadow-violet-500/50 hover:shadow-violet-500/70' 
                      : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white shadow-violet-400/50 hover:shadow-violet-500/60'
                  }`}>
                    Start Building Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a href="#templates" className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border-2 hover:scale-105 backdrop-blur-sm ${
                    darkMode 
                      ? 'border-violet-400/50 text-violet-200 hover:bg-violet-900/30 hover:border-violet-300 shadow-lg shadow-violet-500/20' 
                      : 'border-violet-400/60 text-violet-700 hover:bg-violet-50/50 hover:border-violet-500 shadow-lg shadow-violet-300/30'
                  }`}>
                    View Templates
                  </a>
                </div>
              </div>

              {/* Right Content - Resume Preview */}
              <div className="relative">
                <div className="relative max-w-md mx-auto">
                  {/* Floating Resume Cards */}
                  <div className="relative">
                    {/* Main Resume Card */}
                    <div className={`relative z-10 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-105 group ${
                      darkMode 
                        ? 'bg-slate-800/80 border border-violet-500/30 shadow-violet-500/30 hover:shadow-violet-500/50' 
                        : 'bg-white/90 border border-violet-200/60 shadow-violet-200/40 hover:shadow-violet-300/60'
                    } backdrop-blur-xl`}>
                      <div className="space-y-4">
                        {/* Header gradient bar */}
                        <div className={`h-4 rounded-full transition-all duration-500 group-hover:h-5 ${
                          darkMode 
                            ? 'bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 shadow-lg shadow-violet-500/50' 
                            : 'bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 shadow-lg shadow-violet-400/50'
                        }`}></div>
                        
                        {/* Name and contact info */}
                        <div className="space-y-3">
                          <div className={`h-3 w-3/4 rounded-full transition-all duration-300 group-hover:w-full ${
                            darkMode ? 'bg-violet-400/80' : 'bg-violet-500/80'
                          }`}></div>
                          <div className={`h-2 w-1/2 rounded-full ${
                            darkMode ? 'bg-slate-600' : 'bg-gray-300'
                          }`}></div>
                        </div>
                        
                        {/* Content sections */}
                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="space-y-2">
                              {/* Section header */}
                              <div className={`h-2 w-2/3 rounded-full ${
                                darkMode ? 'bg-violet-300/60' : 'bg-violet-400/60'
                              }`}></div>
                              {/* Content lines */}
                              <div className="space-y-1">
                                <div className={`h-1.5 w-full rounded-full ${
                                  darkMode ? 'bg-slate-600' : 'bg-gray-300'
                                }`}></div>
                                <div className={`h-1.5 w-4/5 rounded-full ${
                                  darkMode ? 'bg-slate-700' : 'bg-gray-200'
                                }`}></div>
                                <div className={`h-1.5 w-3/5 rounded-full ${
                                  darkMode ? 'bg-slate-700' : 'bg-gray-200'
                                }`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Background Cards with enhanced styling */}
                    <div className={`absolute top-4 left-4 w-full h-full rounded-3xl -z-10 transition-all duration-500 ${
                      darkMode ? 'bg-slate-700/40 shadow-xl shadow-purple-900/20' : 'bg-violet-100/60 shadow-xl shadow-violet-300/20'
                    } transform rotate-6 hover:rotate-8`}></div>
                    <div className={`absolute top-8 left-8 w-full h-full rounded-3xl -z-20 transition-all duration-700 ${
                      darkMode ? 'bg-slate-600/30 shadow-lg shadow-indigo-900/10' : 'bg-violet-50/40 shadow-lg shadow-violet-200/10'
                    } transform rotate-12 hover:rotate-15`}></div>
                  </div>

                  {/* Enhanced Floating Elements */}
                  <div className="absolute -top-6 -right-6 animate-bounce">
                    <div className={`w-10 h-10 rounded-full shadow-2xl transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-amber-300 to-yellow-400 shadow-amber-300/50' 
                        : 'bg-gradient-to-r from-amber-400 to-yellow-500 shadow-amber-400/50'
                    }`}></div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 animate-bounce delay-1000">
                    <div className={`w-8 h-8 rounded-full shadow-2xl transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-emerald-300 to-teal-400 shadow-emerald-300/50' 
                        : 'bg-gradient-to-r from-emerald-400 to-teal-500 shadow-emerald-400/50'
                    }`}></div>
                  </div>
                  <div className="absolute top-1/2 -right-8 animate-ping">
                    <div className={`w-4 h-4 rounded-full ${
                      darkMode ? 'bg-violet-300/80' : 'bg-violet-400/80'
                    }`}></div>
                  </div>
                  <div className="absolute bottom-1/4 -left-8 animate-ping delay-700">
                    <div className={`w-3 h-3 rounded-full ${
                      darkMode ? 'bg-purple-300/80' : 'bg-purple-400/80'
                    }`}></div>
                  </div>
                  
                  {/* Cosmic rings around the card */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border opacity-20 animate-spin ${
                    darkMode ? 'border-violet-400/30' : 'border-violet-500/30'
                  }`} style={{ animationDuration: '20s' }}></div>
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border opacity-10 animate-spin ${
                    darkMode ? 'border-purple-400/20' : 'border-purple-500/20'
                  }`} style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Statistics Section ===== */}
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {stats.map((stat, index) => (
                <div key={index} className={`p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-800/60 border border-violet-500/20 shadow-xl shadow-violet-500/10' 
                    : 'bg-white/80 border border-violet-200/40 shadow-xl shadow-violet-200/20'
                } backdrop-blur-xl`}>
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    darkMode 
                      ? 'bg-violet-500/20 text-violet-300' 
                      : 'bg-violet-100 text-violet-600'
                  }`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-lg">{stat.label}</p>
                </div>
              ))}
        </div> 
    </div>
</section>

        {/* ===== Features Section ===== */}
        <section id="features" className="pt-32 pb-20 px-6 lg:px-8 scroll-mt-2 lg:scroll-mt-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Powerful AI Features
              </h2>
              <p className={`text-xl max-w-3xl mx-auto transition-all duration-700 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Experience the future of resume building with our cutting-edge AI technology
              </p>
            </div>

            {/* Features Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  onClick={() => {
                    if (feature.title === 'AI Resume Builder') navigate('/dashboard');
                  }}
                  aria-label={feature.title === 'AI Resume Builder' ? 'Open Create Your Resume' : undefined}
                  className={`group p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  darkMode 
                    ? 'bg-slate-800/60 border border-violet-500/20 shadow-xl shadow-violet-500/10 hover:shadow-2xl hover:shadow-violet-500/20' 
                    : 'bg-white/80 border border-violet-200/40 shadow-xl shadow-violet-200/20 hover:shadow-2xl hover:shadow-violet-300/30'
                } backdrop-blur-xl`}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-3xl">{feature.emoji}</span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                    darkMode ? 'text-white group-hover:text-violet-200' : 'text-gray-900 group-hover:text-violet-800'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-lg leading-relaxed transition-all duration-300 ${
                    darkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
                  }`}>
                    {feature.description}
                  </p>
                  
                  <div className={`mt-6 p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                    darkMode 
                      ? 'bg-violet-500/10 group-hover:bg-violet-500/20' 
                      : 'bg-violet-100/50 group-hover:bg-violet-200/60'
                  }`}>
                    <feature.icon className={`w-6 h-6 transition-all duration-300 ${
                      darkMode ? 'text-violet-300 group-hover:text-violet-200' : 'text-violet-600 group-hover:text-violet-700'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Templates Section ===== */}
        <section id="templates" className="pt-32 pb-20 px-6 lg:px-8 scroll-mt-2 lg:scroll-mt-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Templates
              </h2>
              <p className={`text-xl max-w-3xl mx-auto transition-all duration-700 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Choose from our collection of ATS-friendly templates designed by industry experts
              </p>
            </div>

            {/* Templates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {templates.map((template, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedTemplate(index)}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    selectedTemplate === index ? 'ring-4 ring-violet-500/50 rounded-3xl' : ''
                  }`}
                >
                  <div className={`p-6 rounded-3xl shadow-xl transition-all duration-500 ${
                    darkMode 
                      ? 'bg-slate-800/80 border border-violet-500/20 shadow-violet-500/10 group-hover:shadow-2xl group-hover:shadow-violet-500/20' 
                      : 'bg-white/90 border border-violet-200/40 shadow-violet-200/20 group-hover:shadow-2xl group-hover:shadow-violet-300/30'
                  } backdrop-blur-xl`}>
                    {/* Template Preview */}
                    <div className={`aspect-[3/4] rounded-2xl mb-4 relative overflow-hidden ${
                      darkMode ? 'bg-slate-700/50' : 'bg-gray-50'
                    }`}>
                      {/* Template Header */}
                      <div className={`h-16 bg-gradient-to-r ${
                        template.color === 'violet' ? 'from-violet-500 to-purple-600' :
                        template.color === 'pink' ? 'from-pink-500 to-rose-600' :
                        template.color === 'blue' ? 'from-blue-500 to-cyan-600' :
                        template.color === 'emerald' ? 'from-emerald-500 to-teal-600' :
                        template.color === 'indigo' ? 'from-indigo-500 to-blue-600' :
                        'from-purple-500 to-violet-600'
                      } relative`}>
                        {/* Header content lines */}
                        <div className="absolute bottom-4 left-4 right-4 space-y-2">
                          <div className="h-2 bg-white/90 rounded w-3/4"></div>
                          <div className="h-1 bg-white/70 rounded w-1/2"></div>
                        </div>
                      </div>
                      
                      {/* Template Body */}
                      <div className="p-4 space-y-4">
                        {[1, 2, 3].map((section) => (
                          <div key={section} className="space-y-2">
                            <div className={`h-2 rounded w-2/3 ${
                              darkMode ? 'bg-violet-400/60' : 'bg-violet-500/60'
                            }`}></div>
                            <div className="space-y-1">
                              <div className={`h-1 rounded w-full ${
                                darkMode ? 'bg-slate-600' : 'bg-gray-300'
                              }`}></div>
                              <div className={`h-1 rounded w-4/5 ${
                                darkMode ? 'bg-slate-700' : 'bg-gray-200'
                              }`}></div>
                              <div className={`h-1 rounded w-3/5 ${
                                darkMode ? 'bg-slate-700' : 'bg-gray-200'
                              }`}></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center`}>
                        <div className="flex gap-4">
                          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200">
                            <Eye className="w-5 h-5 text-white" />
                          </button>
                          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200">
                            <Download className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Template Info */}
                    <div className="text-center">
                      <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                        darkMode ? 'text-white group-hover:text-violet-200' : 'text-gray-900 group-hover:text-violet-800'
                      }`}>
                        {template.name}
                      </h3>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {template.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        {/* ===== About Us Section ===== */}
        <section id="about" className="pt-32 pb-20 px-6 lg:px-8 scroll-mt-6 lg:scroll-mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Amazing Team
              </h2>
              <p className={`text-xl max-w-3xl mx-auto transition-all duration-700 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Meet the talented people behind the #1 AI-Powered Resume Builder
              </p>
    </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className={`group p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-800/60 border border-violet-500/20 shadow-xl shadow-violet-500/10' 
                    : 'bg-white/80 border border-violet-200/40 shadow-xl shadow-violet-200/20'
                } backdrop-blur-xl text-center`}>
                  <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold ${
                    darkMode 
                      ? 'bg-violet-500/20 text-violet-300' 
                      : 'bg-violet-100 text-violet-600'
                  }`}>
                    {member.avatar}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {member.name}
                  </h3>
                  <p className={`text-lg mb-4 ${
                    darkMode ? 'text-violet-300' : 'text-violet-600'
                  }`}>
                    {member.role}
                  </p>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center gap-4 mt-6">
                    <a href={member.twitter} className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-violet-500/10 hover:bg-violet-500/20 text-violet-300' 
                        : 'bg-violet-100/50 hover:bg-violet-200/60 text-violet-600'
                    }`}>
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.linkedin} className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-violet-500/10 hover:bg-violet-500/20 text-violet-300' 
                        : 'bg-violet-100/50 hover:bg-violet-200/60 text-violet-600'
                    }`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.github} className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-violet-500/10 hover:bg-violet-500/20 text-violet-300' 
                        : 'bg-violet-100/50 hover:bg-violet-200/60 text-violet-600'
                    }`}>
                      <GitHubLogoIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
    </div>
    </section>

        {/* ===== Final CTA Section ===== */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Build Your Dream Resume?
            </h2>
            <p className={`text-xl mb-10 transition-all duration-700 ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Join 2M+ users who landed their dream jobs with our AI-powered resume builder
            </p>
            
            <a href="#features" className={`group px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center ${
              darkMode 
                ? 'bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 text-white shadow-violet-500/50 hover:shadow-violet-500/70' 
                : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white shadow-violet-400/50 hover:shadow-violet-500/60'
            }`}>
              Start Building Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>    
            
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                { icon: Award, text: "Industry Leading" },
                { icon: Zap, text: "AI Powered" },
                { icon: Heart, text: "User Loved" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center gap-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
  </div>
        </section>

        {/* ===== Footer ===== */}
        <footer className={`py-12 px-6 lg:px-8 border-t ${
          darkMode 
            ? 'bg-slate-900/70 border-violet-500/20' 
            : 'bg-white/70 border-violet-200/50'
        } backdrop-blur-xl`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <p className={`${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © 2023 ResumeBuilder. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;