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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ResumeEnhancer from "../dashboard/resume/components/tools/resume-enhancer/ResumeEnhancer";
import CareerGuidance from "../components/custom/CareerGuidance/CareerGuidance";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [openResumeEnhancer, setOpenResumeEnhancer] = useState(false);
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
      name: "Nitish Jha",
      role: "Frontend Developer",
      bio: "2+ years of experience in React and GenAI. Previously at Amazon",
      avatar: "NJ",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/nitish-jha-9b0168233/",
      github: "https://github.com/nitish12382"
    },
    {
      name: "Swarup Kakade", 
      role: "Backend Developer and AI Expert",
      bio: "3+ years of experience in Python and GenAI. Previously at Google",
      avatar: "SK",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/swarup1109/",
      github: "https://github.com/swarup1606"
    },
    {
      name: "Viraj Oza",
      role: "Project Architect", 
      bio: "1+ years of experience in AWS and Kakfa. Previously at Flipkart",
      avatar: "VO",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/viraj-oza-9b7226330/",
      github: "https://github.com/Voza47"
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
    <div className="w-full min-h-screen transition-all duration-300">
      {/* Background */}
      <div 
        className={`fixed inset-0 transition-all duration-300 ${
          darkMode 
            ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
            : 'bg-gradient-to-br from-violet-100 via-sky-50 to-emerald-50'
        }`}
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* ===== Navbar ===== */}
        <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          darkMode 
            ? 'bg-slate-900/80 border-violet-500/20 shadow-lg' 
            : 'bg-white/80 border-violet-200/50 shadow-lg'
        } backdrop-blur-xl border-b`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
            {/* Left Logo */}
            <div className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-xl shadow-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600' 
                  : 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700'
              }`}></div>
              <h1 className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                darkMode 
                  ? 'from-white via-violet-200 to-purple-200' 
                  : 'from-gray-800 via-violet-800 to-purple-800'
              }`}>
                AiApply
              </h1>
            </div>

            {/* Right Nav + Dark Mode */}
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8">
                {['Home', 'Features', 'Templates', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'text-gray-200 hover:text-violet-300' 
                        : 'text-gray-700 hover:text-violet-600'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-800/60 hover:bg-slate-700/60 text-amber-300' 
                    : 'bg-violet-100/60 hover:bg-violet-200/60 text-violet-700'
                }`}
              >
                {darkMode ? 
                  <Sun className="w-5 h-5" /> : 
                  <Moon className="w-5 h-5" />
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
                <h1 className={`text-5xl lg:text-7xl font-bold leading-tight transition-all duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Build Your
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent block transition-all duration-300 ${
                    darkMode 
                      ? 'from-violet-300 via-purple-400 to-indigo-400' 
                      : 'from-violet-600 via-purple-600 to-indigo-600'
                  }`}>
                    Dream Resume
                  </span>
                  in Minutes
                </h1>

                {/* Subtitle */}
                <p className={`text-xl leading-relaxed transition-all duration-300 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Create professional, ATS-friendly resumes with AI assistance. 
                  Choose from 50+ templates and land your dream job faster than ever.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#features" className={`group px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center ${
                    darkMode 
                      ? 'bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 text-white' 
                      : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white'
                  }`}>
                    Start Building Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a href="#templates" className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border-2 hover:scale-105 ${
                    darkMode 
                      ? 'border-violet-400/50 text-violet-200 hover:bg-violet-900/30 hover:border-violet-300' 
                      : 'border-violet-400/60 text-violet-700 hover:bg-violet-50/50 hover:border-violet-500'
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
                    <div className={`relative z-10 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 ${
                      darkMode 
                        ? 'bg-slate-800/80 border border-violet-500/30' 
                        : 'bg-white/90 border border-violet-200/60'
                    } backdrop-blur-xl`}>
                      <div className="space-y-4">
                        {/* Header gradient bar */}
                        <div className={`h-4 rounded-full transition-all duration-300 ${
                          darkMode 
                            ? 'bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500' 
                            : 'bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600'
                        }`}></div>
                        
                        {/* Name and contact info */}
                        <div className="space-y-3">
                          <div className={`h-3 w-3/4 rounded-full transition-all duration-300 ${
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

                    {/* Background Cards */}
                    <div className={`absolute top-4 left-4 w-full h-full rounded-3xl -z-10 transition-all duration-500 ${
                      darkMode ? 'bg-slate-700/40' : 'bg-violet-100/60'
                    } transform rotate-6`}></div>
                    <div className={`absolute top-8 left-8 w-full h-full rounded-3xl -z-20 transition-all duration-700 ${
                      darkMode ? 'bg-slate-600/30' : 'bg-violet-50/40'
                    } transform rotate-12`}></div>
                  </div>

                  {/* Bouncing Balls */}
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
                <div key={index} className={`p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-800/60 border border-violet-500/20' 
                    : 'bg-white/80 border border-violet-200/40'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    darkMode 
                      ? 'bg-slate-700 text-violet-300' 
                      : 'bg-gray-200 text-violet-600'
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
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Powerful AI Features
              </h2>
              <p className={`text-xl max-w-3xl mx-auto transition-all duration-300 ${
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
                    if (feature.title === 'AI Resume Enhancer') setOpenResumeEnhancer(true);
                    else if (feature.title === 'AI Career Guidance') navigate('/career-guidance'); // <== new line
                  }}
                  aria-label={
                    feature.title === 'AI Resume Builder' ? 'Open Create Your Resume' :
                    feature.title === 'AI Resume Enhancer' ? 'Open AI Resume Enhancer' :
                    feature.title === 'AI Career Guidance' ? 'Open Career Guidance' : undefined
                  }
                  className={`group p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  darkMode 
                    ? 'bg-slate-800/60 border border-violet-500/20' 
                    : 'bg-white/80 border border-violet-200/40'
                }`}>
                  <div className={`w-20 h-20 rounded-2xl ${
                    darkMode 
                      ? 'bg-slate-700' 
                      : 'bg-gray-200'
                  } flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
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
                      ? 'bg-slate-700 group-hover:bg-slate-600' 
                      : 'bg-gray-200 group-hover:bg-gray-300'
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
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Templates
              </h2>
              <p className={`text-xl max-w-3xl mx-auto transition-all duration-300 ${
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
                  className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                    selectedTemplate === index ? 'ring-4 ring-violet-500/50 rounded-3xl' : ''
                  }`}
                >
                  <div className={`p-6 rounded-3xl shadow-lg transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-800/80 border border-violet-500/20' 
                      : 'bg-white/90 border border-violet-200/40'
                  }`}>
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
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Amazing Team
              </h2>
              <p className={`text-xl max-w-3xl mx-auto transition-all duration-300 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Meet the talented people behind the #1 AI-Powered Resume Builder
              </p>
    </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className={`group p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-800/60 border border-violet-500/20' 
                    : 'bg-white/80 border border-violet-200/40'
                } text-center`}>
                  <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold ${
                    darkMode 
                      ? 'bg-slate-700 text-violet-300' 
                      : 'bg-gray-200 text-violet-600'
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
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Build Your Dream Resume?
            </h2>
            <p className={`text-xl mb-10 transition-all duration-300 ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Join 2M+ users who landed their dream jobs with our AI-powered resume builder
            </p>
            
            <a href="#features" className={`group px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center ${
              darkMode 
                ? 'bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 text-white' 
                : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white'
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

      {/* AI Resume Enhancer Dialog */}
      <Dialog open={openResumeEnhancer} onOpenChange={setOpenResumeEnhancer}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>AI Resume Enhancer</DialogTitle>
            <DialogDescription>
              Upload your resume and job description to get an AI-enhanced version
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ResumeEnhancer />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;