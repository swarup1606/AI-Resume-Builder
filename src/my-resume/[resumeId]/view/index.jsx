import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/dashboard/resume/components/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'
import { RWebShare } from 'react-web-share'
import { Toaster } from '@/components/ui/sonner'

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedTemplate, setSelectedTemplate] = useState('classic')
  const { resumeId } = useParams()

  const templates = [
    { value: 'classic', label: 'Classic' },
    { value: 'modern', label: 'Modern' },
    { value: 'creative', label: 'Creative' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'executive', label: 'Executive' },
    { value: 'professional', label: 'Professional' }
  ]

  useEffect(() => {
    GetResumeInfo()
  }, [])

  const GetResumeInfo = async () => {
    try {
      setLoading(true)
      const resp = await GlobalApi.GetResumeById(resumeId)
      const apiData = resp?.data?.data
      console.log('Resume data:', apiData)
      // Strapi v4 returns { data: { id, attributes: { ... } } }
      const normalized = apiData?.attributes ? { id: apiData.id, ...apiData.attributes } : apiData
      setResumeInfo(normalized)
    } catch (err) {
      console.error('Error fetching resume:', err)
      setResumeInfo(null)
    } finally {
      setLoading(false)
    }
  }

  const HandleDownload = () => {
    window.print()
  }

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg text-gray-500">
        Loading your resume...
      </div>
    )
  }

  if (!resumeInfo) {
    return (
      <div className="text-center mt-20 text-lg text-red-500">
        Failed to load resume.
      </div>
    )
  }

  // Create resumeInfo with selected template
  const resumeInfoWithTemplate = resumeInfo ? { ...resumeInfo, template: selectedTemplate } : null

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo: resumeInfoWithTemplate, setResumeInfo }}>
      {/* Header & Actions */}
      <div id="no-print">
        <Header />

        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your AI-generated Resume is ready!
          </h2>
          <p className="text-center text-gray-400">
            Choose a template and download your resume or share the unique URL with your friends and family.
          </p>

          {/* Template Selector */}
          <div className="flex justify-center my-8">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Choose Template:</label>
              <select 
                value={selectedTemplate} 
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-48 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-violet-400 dark:focus:border-violet-300"
              >
                {templates.map((template) => (
                  <option key={template.value} value={template.value}>
                    {template.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between px-44 my-10">
            <Button onClick={HandleDownload}>Download</Button>

            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume please open URL to see it",
                url: import.meta.env.VITE_BASE_URL + "/my-resume/" + resumeId + "/view",
                title: resumeInfo.firstName + " " + resumeInfo.lastName + " resume",
              }}
              onClick={() => console.log("Shared successfully!")}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="my-10 px-4 md:px-6" id="print-area">
        <div className="mx-auto w-full max-w-[800px]">
          <ResumePreview />
        </div>
      </div>
      
      <Toaster />
    </ResumeInfoContext.Provider>
  )
}

export default ViewResume
