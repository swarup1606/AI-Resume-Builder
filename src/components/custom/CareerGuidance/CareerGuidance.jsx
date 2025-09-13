import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './CareerGuidance.css';
import { 
  Upload, 
  Target, 
  Sparkles, 
  RefreshCw,
  Search,
  FileText,
  Award,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  Download,
  Brain,
  BookOpen,
  Zap,
  Heart
} from 'lucide-react';

export default function CareerGuidance() {
  // State management
  const [formData, setFormData] = useState({
    resumeFile: null
  });
  
  const [uiState, setUiState] = useState({
    loading: false,
    error: '',
    fileUploaded: false,
    results: null
  });

  // File validation function
  const validateFile = (file) => {
    if (!file) return { valid: true };
    
    const allowedTypes = ['application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Please upload only PDF files.' };
    }
    
    if (file.size > maxSize) {
      return { valid: false, error: 'File size must be less than 5MB.' };
    }
    
    return { valid: true };
  };

  // Handle file upload with validation
  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0] || null;
    const validation = validateFile(file);
    
    if (!validation.valid) {
      setUiState(prev => ({ ...prev, error: validation.error }));
      return;
    }
    
    setFormData(prev => ({ ...prev, resumeFile: file }));
    setUiState(prev => ({ 
      ...prev, 
      fileUploaded: !!file,
      error: '',
      results: null
    }));
  }, []);

  // Handle drag and drop
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add('drag-over');
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-over');
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-over');
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      const validation = validateFile(file);
      
      if (!validation.valid) {
        setUiState(prev => ({ ...prev, error: validation.error }));
        return;
      }
      
      setFormData(prev => ({ ...prev, resumeFile: file }));
      setUiState(prev => ({ 
        ...prev, 
        fileUploaded: true,
        error: '' 
      }));
    }
  }, []);

  // Submit form for career guidance analysis
  const submitCareerAnalysis = useCallback(async (ev) => {
    ev.preventDefault();
    
    if (!formData.resumeFile) {
      setUiState(prev => ({ ...prev, error: 'Please upload a resume file first.' }));
      return;
    }

    setUiState(prev => ({ 
      ...prev, 
      error: '', 
      loading: true,
      results: null
    }));

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('resume_file', formData.resumeFile);

      const response = await axios.post('http://localhost:5001/career_guidance', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 60000 // 60 second timeout for analysis
      });

      setUiState(prev => ({ 
        ...prev, 
        results: response.data,
        loading: false
      }));
      
    } catch (err) {
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (err.response) {
        errorMessage = err.response.data?.error || `Server error: ${err.response.status}`;
      } else if (err.request) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (err.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please try again.';
      }
      
      setUiState(prev => ({ ...prev, error: errorMessage, loading: false }));
    }
  }, [formData.resumeFile]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({ resumeFile: null });
    setUiState({
      loading: false,
      error: '',
      fileUploaded: false,
      results: null
    });
  }, []);

  const headings = [
    {
      icon: <Zap size={24} />,
      title: "Future Projects",
      key: "future_projects",
      question: "What impactful projects should I build next to stand out to recruiters?",
      description: "Discover game-changing project ideas that will make your portfolio irresistible to hiring managers",
      color: "primary"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Skill Upgrade",
      key: "skill_upgrade",
      question: "Which technologies/frameworks will push me into the top 10% of candidates?",
      description: "Identify the cutting-edge skills that will skyrocket your market value and career prospects",
      color: "success"
    },
    {
      icon: <Target size={24} />,
      title: "Career Roadmap",
      key: "career_roadmap",
      question: "What's my current standing, what am I missing, and how do I level up?",
      description: "Get a personalized career strategy with clear milestones and actionable next steps",
      color: "warning"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Strengths",
      key: "strengths",
      question: "What are my key strengths and how can I leverage them?",
      description: "Identify your core competencies and competitive advantages",
      color: "info"
    },
    {
      icon: <Brain size={24} />,
      title: "Weaknesses",
      key: "weaknesses",
      question: "What areas need improvement and how can I address them?",
      description: "Discover growth opportunities and development areas",
      color: "secondary",
      defaultContent: `
        <div class="weakness-analysis">
          <h4>Key Areas for Improvement:</h4>
          <ul>
            <li><strong>Need to add more skills:</strong> Your resume appears to have a limited skill set. Consider adding in-demand technologies like React, Node.js, Python, or cloud platforms.</li>
            <li><strong>Fine-tune keywords:</strong> Optimize your resume with relevant keywords from job descriptions to improve ATS compatibility.</li>
            <li><strong>Quantify achievements:</strong> Add metrics and numbers to demonstrate the impact of your work.</li>
            <li><strong>DeepSeek integration:</strong> Consider showcasing experience with AI/ML tools like DeepSeek to stand out in technical roles.</li>
          </ul>
          <p><strong>Actionable steps:</strong> Take online courses, build projects with new technologies, and tailor your resume for each application.</p>
        </div>
      `
    }
  ];

  return (
    <div className="career-guidance">
      {/* Header Section */}
      <div className="career-header">
        <div className="header-content">
          <div className="header-badge">
            <Sparkles size={20} />
            AI-Powered Career Guidance
          </div>
          <h1 className="header-title">
            Transform Your Career Path with AI Insights
          </h1>
          <p className="header-subtitle">
            Upload your resume to receive personalized career guidance, skill recommendations, 
            and actionable insights tailored to your professional goals
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="career-content">
        {/* Upload Section */}
        <div className="upload-container">
          <div className="upload-card">
            <div className="upload-header">
              <div className="upload-icon-container">
                <Upload size={32} />
              </div>
              <div className="upload-text">
                <h2>Upload Your Resume</h2>
                <p>Get personalized career insights in minutes</p>
              </div>
            </div>

            <div className="upload-area">
              <div 
                className={`file-drop-zone ${uiState.fileUploaded ? 'has-file' : ''}`}
                onClick={() => document.getElementById('resume-upload').click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <FileText size={48} className="dropzone-icon" />
                <div className="dropzone-content">
                  {uiState.fileUploaded ? (
                    <>
                      <div className="file-success">
                        <div className="success-check">✓</div>
                        <h4>Resume Uploaded Successfully</h4>
                        <p className="file-name">{formData.resumeFile?.name}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3>Drag & Drop Your Resume</h3>
                      <p>PDF format, max 5MB</p>
                      <span className="browse-text">or click to browse files</span>
                    </>
                  )}
                </div>
                <input 
                  type="file" 
                  id="resume-upload"
                  className="file-input"
                  accept=".pdf"
                  onChange={handleFileChange}
                  disabled={uiState.loading}
                />
              </div>

              <div className="upload-actions">
                <button 
                  className={`analyze-btn ${uiState.loading ? 'loading' : ''}`}
                  onClick={submitCareerAnalysis}
                  disabled={uiState.loading || !uiState.fileUploaded}
                >
                  {uiState.loading ? (
                    <>
                      <div className="spinner"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search size={20} />
                      Analyze My Career Path
                    </>
                  )}
                </button>

                {uiState.fileUploaded && (
                  <button 
                    className="reset-btn"
                    onClick={resetForm}
                    disabled={uiState.loading}
                  >
                    <RefreshCw size={20} />
                    Reset
                  </button>
                )}
              </div>

              {uiState.error && (
                <div className="error-message">
                  <div className="error-icon">⚠️</div>
                  <span>{uiState.error}</span>
                </div>
              )}
            </div>
          </div>

          {/* Preview Panel */}
          {uiState.fileUploaded && formData.resumeFile && (
            <div className="preview-panel">
              <div className="preview-header">
                <h3>
                  <FileText size={20} />
                  Resume Preview
                </h3>
                <button 
                  className="download-btn"
                  onClick={() => {
                    const url = URL.createObjectURL(formData.resumeFile);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = formData.resumeFile.name;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                  }}
                  title="Download Resume"
                >
                  <Download size={18} />
                </button>
              </div>
              <div className="preview-content">
                <iframe
                  src={URL.createObjectURL(formData.resumeFile)}
                  className="preview-iframe"
                  title="Resume Preview"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results Sections */}
        {uiState.results && (
          <div className="results-container">
            {/* Scores Section */}
            {(uiState.results.ats_score !== undefined || uiState.results.resume_score !== undefined) && (
              <div className="scores-section">
                <h2 className="section-title">
                  <Award size={28} />
                  Resume Analysis Scores
                </h2>
                <div className="scores-grid">
                  {uiState.results.ats_score !== undefined && (
                    <div className="score-card">
                      <div className="score-header">
                        <div className="score-icon">
                          <Target size={24} />
                        </div>
                        <div className="score-info">
                          <h3>ATS Compatibility</h3>
                          <p>How well your resume passes through Applicant Tracking Systems</p>
                        </div>
                      </div>
                      <div className="score-display">
                        <div className="circular-progress">
                          <svg width="120" height="120" viewBox="0 0 120 120">
                            <circle
                              className="progress-background"
                              cx="60"
                              cy="60"
                              r="54"
                              strokeWidth="8"
                            />
                            <circle
                              className="progress-fill ats-progress"
                              cx="60"
                              cy="60"
                              r="54"
                              strokeWidth="8"
                              strokeDasharray={339.292}
                              strokeDashoffset={339.292 * (1 - (uiState.results.ats_score || 0) / 100)}
                            />
                          </svg>
                          <div className="score-value">
                            <span>{uiState.results.ats_score || 0}</span>
                            <small>/100</small>
                          </div>
                        </div>
                        <div 
                          className="score-feedback"
                          dangerouslySetInnerHTML={{ 
                            __html: uiState.results.ats_feedback || "No feedback available" 
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {uiState.results.resume_score !== undefined && (
                    <div className="score-card">
                      <div className="score-header">
                        <div className="score-icon">
                          <Star size={24} />
                        </div>
                        <div className="score-info">
                          <h3>Resume Quality</h3>
                          <p>Overall quality and effectiveness of your resume content</p>
                        </div>
                      </div>
                      <div className="score-display">
                        <div className="circular-progress">
                          <svg width="120" height="120" viewBox="0 0 120 120">
                            <circle
                              className="progress-background"
                              cx="60"
                              cy="60"
                              r="54"
                              strokeWidth="8"
                            />
                            <circle
                              className="progress-fill resume-progress"
                              cx="60"
                              cy="60"
                              r="54"
                              strokeWidth="8"
                              strokeDasharray={339.292}
                              strokeDashoffset={339.292 * (1 - (uiState.results.resume_score || 0) / 100)}
                            />
                          </svg>
                          <div className="score-value">
                            <span>{uiState.results.resume_score || 0}</span>
                            <small>/100</small>
                          </div>
                        </div>
                        <div 
                          className="score-feedback"
                          dangerouslySetInnerHTML={{ 
                            __html: uiState.results.resume_feedback || "No feedback available" 
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {uiState.results.skills && (
              <div className="skills-section">
                <h2 className="section-title">
                  <Brain size={28} />
                  Skills from Your Resume
                </h2>
                <div className="skills-grid">
                  {uiState.results.skills.map((skill, index) => (
                    <div key={index} className="skill-chip">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analysis Cards */}
            <div className="analysis-grid">
              {headings.map((item, index) => (
                <div key={index} className={`analysis-card ${item.color}`}>
                  <div className="card-header">
                    <div className="card-icon">
                      {item.icon}
                    </div>
                    <div className="card-title">
                      <h3>{item.title}</h3>
                      <span className="ai-badge">AI-Powered</span>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <h4 className="question">{item.question}</h4>
                    
                    {uiState.results[item.key] ? (
                      <div 
                        className="analysis-result"
                        dangerouslySetInnerHTML={{ 
                          __html: uiState.results[item.key] 
                        }}
                      />
                    ) : (
                      // Use default content for weaknesses, placeholder for others
                      item.key === 'weaknesses' && item.defaultContent ? (
                        <div 
                          className="analysis-result"
                          dangerouslySetInnerHTML={{ 
                            __html: item.defaultContent 
                          }}
                        />
                      ) : (
                        <div className="analysis-placeholder">
                          <p className="description">{item.description}</p>
                          <div className="features-list">
                            <div className="feature">
                              <Sparkles size={16} />
                              <span>Appropriate Fulfiling Of Job Description</span>
                            </div>
                            <div className="feature">
                              <TrendingUp size={16} />
                              <span>Proper Formatting Of Resume</span>
                            </div>
                            <div className="feature">
                              <Target size={16} />
                              <span>Project Relevant To The Job Description</span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Career?</h2>
            <p>Join thousands of professionals who have accelerated their career growth with our AI-powered guidance</p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">10K+</div>
                <div className="stat-label">Candidates Helped</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">4.9★</div>
                <div className="stat-label">User Rating</div>
              </div>
            </div>

            <button className="cta-button">
              Start Your Journey
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}