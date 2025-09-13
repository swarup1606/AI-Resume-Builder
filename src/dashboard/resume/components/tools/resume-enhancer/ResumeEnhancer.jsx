// frontend/src/components/ResumeEnhancer.jsx
import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import './ResumeEnhancer.css';
import { 
  Upload, 
  FileText, 
  Target, 
  Sparkles, 
  Download, 
  Edit3,
  RefreshCw,
  Link2,
  FileDown,
  Image,
  FileCode
} from 'lucide-react';

export default function ResumeEnhancer() {
  // Form state management
  const [formData, setFormData] = useState({
    jobDescription: '',
    resumeText: '',
    resumeFile: null,
    jobTitle: ''
  });
  
  // Result state management
  const [result, setResult] = useState({
    html: '',
    notes: '',
    text: '',
    jobAnalysis: '',
    resumeStructure: ''
  });
  
  // UI state management
  const [uiState, setUiState] = useState({
    loading: false,
    error: '',
    editing: false,
    fileUploaded: false
  });
  
  const editRef = useRef(null);
  const fileInputRef = useRef(null);

  // File validation function
  const validateFile = (file) => {
    if (!file) return { valid: true };
    
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Please upload only PDF or DOCX files.' };
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
      error: '' 
    }));
  }, []);

  // Handle drag and drop
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add('drag-over');
  }, []);

  const handleDragEnter = useCallback((e) => {
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

  // Handle form input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setUiState(prev => ({ ...prev, error: '' }));
  }, []);

  // Form validation
  const validateForm = () => {
    if (!formData.jobDescription.trim()) {
      return { valid: false, error: 'Job description is required.' };
    }
    
    if (!formData.jobTitle.trim()) {
      return { valid: false, error: 'Job title is required.' };
    }
    
    // Check if either resume text OR file is provided
    const hasResumeText = formData.resumeText && formData.resumeText.trim().length > 0;
    const hasResumeFile = formData.resumeFile && formData.resumeFile.name;
    
    if (!hasResumeText && !hasResumeFile) {
      return { valid: false, error: 'Please provide resume text or upload a file.' };
    }
    
    return { valid: true };
  };

  // Submit form with enhanced error handling
  const submitForm = useCallback(async (ev) => {
    ev.preventDefault();
    
    // Clear previous results and errors
    setResult({ html: '', notes: '', text: '', jobAnalysis: '', resumeStructure: '' });
    setUiState(prev => ({ 
      ...prev, 
      error: '', 
      loading: true, 
      editing: false 
    }));

    // Validate form
    const validation = validateForm();
    if (!validation.valid) {
      setUiState(prev => ({ ...prev, error: validation.error, loading: false }));
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('jd', formData.jobDescription);
      formDataToSend.append('job_title', formData.jobTitle);
      
      // Only append resume text if it exists and has content
      if (formData.resumeText && formData.resumeText.trim()) {
        formDataToSend.append('resume', formData.resumeText);
      } else {
        formDataToSend.append('resume', ''); // Send empty string if no text
      }
      
      if (formData.resumeFile) {
        formDataToSend.append('resume_file', formData.resumeFile);
      }

      const response = await axios.post('http://localhost:5000/tool', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 30000 // 30 second timeout
      });

      // Update result state
      setResult({
        html: response.data.result_html || '',
        notes: response.data.notes_html || '',
        text: response.data.enhanced_text || '',
        jobAnalysis: response.data.job_analysis || '',
        resumeStructure: response.data.resume_structure || ''
      });
      
    } catch (err) {
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (err.response) {
        // Server responded with error status
        errorMessage = err.response.data?.error || `Server error: ${err.response.status}`;
      } else if (err.request) {
        // Network error
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (err.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please try again.';
      }
      
      setUiState(prev => ({ ...prev, error: errorMessage }));
    } finally {
      setUiState(prev => ({ ...prev, loading: false }));
    }
  }, [formData]);

  // Utility function to strip HTML tags
  const stripHtml = useCallback((html) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }, []);

  // Get current text content (either from editing mode or result)
  const getCurrentText = useCallback(() => {
    if (uiState.editing && editRef.current) {
      return editRef.current.value;
    }
    return stripHtml(result.html) || result.text;
  }, [uiState.editing, result.html, result.text, stripHtml]);

  // Download as TXT
  const downloadTXT = useCallback(() => {
    const text = getCurrentText();
    if (!text.trim()) {
      setUiState(prev => ({ ...prev, error: 'No content to download.' }));
      return;
    }
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'enhanced_resume.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [getCurrentText]);

  // Download as DOCX
  const downloadDOCX = useCallback(async () => {
    const text = getCurrentText();
    if (!text.trim()) {
      setUiState(prev => ({ ...prev, error: 'No content to download.' }));
      return;
    }
    
    try {
      const response = await axios.post('/download_docx', { text }, { 
        responseType: 'blob',
        timeout: 10000
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'enhanced_resume.docx');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setUiState(prev => ({ 
        ...prev, 
        error: 'Error downloading DOCX. Please try again.' 
      }));
    }
  }, [getCurrentText]);

  // Download as PDF
  const downloadPDF = useCallback(async () => {
    const text = getCurrentText();
    if (!text.trim()) {
      setUiState(prev => ({ ...prev, error: 'No content to download.' }));
      return;
    }
    
    try {
      const response = await axios.post('/download_pdf', { text }, { 
        responseType: 'blob',
        timeout: 15000
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'enhanced_resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setUiState(prev => ({ 
        ...prev, 
        error: 'Error downloading PDF. Please try again.' 
      }));
    }
  }, [getCurrentText]);

  // Download as JPG
  const downloadJPG = useCallback(async () => {
    const text = getCurrentText();
    if (!text.trim()) {
      setUiState(prev => ({ ...prev, error: 'No content to download.' }));
      return;
    }
    
    try {
      const response = await axios.post('/download_jpg', { text }, { 
        responseType: 'blob',
        timeout: 15000
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'enhanced_resume.jpg');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setUiState(prev => ({ 
        ...prev, 
        error: 'Error downloading JPG. Please try again.' 
      }));
    }
  }, [getCurrentText]);

  // Toggle edit mode
  const toggleEdit = useCallback(() => {
    setUiState(prev => ({ ...prev, editing: !prev.editing }));
    
    // If toggling to edit mode, populate the textarea
    if (!uiState.editing) {
      setTimeout(() => {
        if (editRef.current) {
          editRef.current.value = stripHtml(result.html) || result.text;
        }
      }, 0);
    }
  }, [uiState.editing, result.html, result.text, stripHtml]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({
      jobDescription: '',
      resumeText: '',
      resumeFile: null,
      jobTitle: ''
    });
    setResult({ html: '', notes: '', text: '', jobAnalysis: '', resumeStructure: '' });
    setUiState({
      loading: false,
      error: '',
      editing: false,
      fileUploaded: false
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <div className="resume-enhancer">
      {/* Header */}
      <div className="enhancer-header">
        <div className="header-content">
          <h1 className="header-title">
            <Sparkles className="header-icon" />
            AI Resume Enhancer
          </h1>
          <p className="header-subtitle">
            Transform your resume with AI-powered enhancements tailored to your target job
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="enhancer-content">
        <form onSubmit={submitForm} className="enhancer-form">
          {/* Form Grid */}
          <div className="form-grid">
            {/* Upload Resume Section */}
            <div className="form-section upload-section">
              <div className="section-header">
                <Upload className="section-icon" />
                <h3>Upload Your Resume</h3>
              </div>
              <p className="section-description">
                Upload your current resume (PDF or DOCX) for AI analysis
              </p>
              
              <div 
                className="upload-area"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="upload-content">
                  <FileText className="upload-icon" />
                  <div className="upload-text">
                    <p className="upload-main-text">Drag & drop your resume here</p>
                    <p className="upload-sub-text">or click to browse files</p>
                    <p className="upload-format">Supports PDF, DOCX • Max 5MB</p>
                  </div>
                  <button 
                    type="button" 
                    className="browse-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                  >
                    Browse Files
                  </button>
                </div>
                <input 
                  ref={fileInputRef}
                  type="file" 
                  className="file-input" 
                  accept=".pdf,.docx" 
                  onChange={handleFileChange}
                  disabled={uiState.loading}
                />
              </div>
              
              {uiState.fileUploaded && (
                <div className="file-preview">
                  <div className="file-preview-content">
                    <FileText className="file-icon" />
                    <div className="file-info">
                      <span className="file-name">{formData.resumeFile?.name}</span>
                      <span className="file-size">
                        {(formData.resumeFile?.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                    <button 
                      type="button" 
                      className="remove-file"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, resumeFile: null }));
                        setUiState(prev => ({ ...prev, fileUploaded: false }));
                        if (fileInputRef.current) fileInputRef.current.value = '';
                      }}
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Job Details Section */}
            <div className="form-section job-details-section">
              <div className="section-header">
                <Target className="section-icon" />
                <h3>Target Job Details</h3>
              </div>
              
              {/* Job Title Input */}
              <div className="input-group">
                <label htmlFor="job-title">Job Title You're Applying For</label>
                <input
                  id="job-title"
                  type="text"
                  className="text-input"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  placeholder="e.g., Senior Frontend Developer"
                  disabled={uiState.loading}
                />
              </div>
              
              {/* Job Description Input */}
              <div className="input-group">
                <div className="input-header">
                  <label htmlFor="job-description">Job Description</label>
                  <div className="input-actions">
                    <button type="button" className="action-btn">
                      <Link2 size={14} />
                      Fetch from URL
                    </button>
                    <button type="button" className="action-btn">
                      <FileDown size={14} />
                      Use Sample
                    </button>
                  </div>
                </div>
                <textarea
                  id="job-description"
                  className="textarea-input"
                  rows={8}
                  value={formData.jobDescription}
                  onChange={(e) => handleInputChange('jobDescription', e.target.value)}
                  placeholder="Paste the complete job description here..."
                  disabled={uiState.loading}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button 
              className="enhance-btn primary-btn" 
              type="submit" 
              disabled={uiState.loading}
            >
              {uiState.loading ? (
                <>
                  <div className="spinner"></div>
                  Enhancing Resume...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Enhance My Resume
                </>
              )}
            </button>
            
            <button 
              type="button" 
              className="reset-btn secondary-btn" 
              onClick={resetForm}
              disabled={uiState.loading}
            >
              <RefreshCw size={18} />
              Reset Form
            </button>
          </div>

          {/* Error Display */}
          {uiState.error && (
            <div className="error-message">
              <div className="error-icon">⚠️</div>
              <div className="error-content">
                <strong>Error:</strong> {uiState.error}
              </div>
            </div>
          )}
        </form>

        {/* Results Section */}
        {(result.html || result.text) && (
          <div className="results-section">
            {/* Enhanced Resume Card */}
            <div className="result-card">
              <div className="result-card-header">
                <h3>
                  <Sparkles className="result-icon" />
                  Enhanced Resume
                </h3>
                <div className="result-actions">
                  <button 
                    className="action-btn icon-btn"
                    onClick={toggleEdit}
                    title={uiState.editing ? 'Save Changes' : 'Edit Resume'}
                  >
                    <Edit3 size={16} />
                  </button>
                  <button 
                    className="action-btn icon-btn"
                    onClick={downloadTXT}
                    title="Download as TXT"
                  >
                    <FileCode size={16} />
                  </button>
                  <button 
                    className="action-btn icon-btn"
                    onClick={downloadDOCX}
                    title="Download as DOCX"
                  >
                    <FileText size={16} />
                  </button>
                  <button 
                    className="action-btn icon-btn"
                    onClick={downloadPDF}
                    title="Download as PDF"
                  >
                    <FileDown size={16} />
                  </button>
                  <button 
                    className="action-btn icon-btn"
                    onClick={downloadJPG}
                    title="Download as JPG"
                  >
                    <Image size={16} />
                  </button>
                </div>
              </div>
              
              <div className="result-card-content">
                {!uiState.editing ? (
                  <div 
                    className="enhanced-content"
                    dangerouslySetInnerHTML={{ __html: result.html }} 
                  />
                ) : (
                  <textarea
                    ref={editRef}
                    className="edit-textarea"
                    rows={20}
                    placeholder="Edit your enhanced resume here..."
                  />
                )}
              </div>
            </div>

            {/* Additional Analysis Sections */}
            <div className="analysis-grid">
              {/* Resume Structure Analysis */}
              {result.resumeStructure && (
                <div className="analysis-card">
                  <h4>
                    <FileText size={18} />
                    Resume Structure Analysis
                  </h4>
                  <div 
                    className="analysis-content"
                    dangerouslySetInnerHTML={{ __html: result.resumeStructure }} 
                  />
                </div>
              )}

              {/* Job Analysis */}
              {result.jobAnalysis && (
                <div className="analysis-card">
                  <h4>
                    <Target size={18} />
                    Job Analysis
                  </h4>
                  <div 
                    className="analysis-content"
                    dangerouslySetInnerHTML={{ __html: result.jobAnalysis }} 
                  />
                </div>
              )}

              {/* Enhancement Notes */}
              {result.notes && (
                <div className="analysis-card">
                  <h4>
                    <Sparkles size={18} />
                    Enhancement Summary
                  </h4>
                  <div 
                    className="analysis-content"
                    dangerouslySetInnerHTML={{ __html: result.notes }} 
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}