import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { LoaderCircle, Brain, Plus, Minus } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { AIChatSession } from './../../../../../service/AIModal'
import { toast } from 'sonner'

function Projects({ enabledNext }) {
  const [loading, setLoading] = useState(false)
  const [aiLoading, setAiLoading] = useState(false)
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const params = useParams()

  const [projectsList, setProjectsList] = useState([
    {
      title: '',
      techStack: '',
      description: '',
      githubLink: '',
      liveUrl: ''
    }
  ])

  // Load projects from context
  useEffect(() => {
    if (resumeInfo?.projects && Array.isArray(resumeInfo.projects)) {
      setProjectsList(resumeInfo.projects)
    }
  }, [resumeInfo])

  const handleChange = (event, index) => {
    enabledNext(false)
    const newEntries = [...projectsList]
    const { name, value } = event.target
    newEntries[index][name] = value
    setProjectsList(newEntries)
  }

  const AddNewProject = () => {
    setProjectsList([
      ...projectsList,
      {
        title: '',
        techStack: '',
        description: '',
        githubLink: '',
        liveUrl: ''
      }
    ])
  }

  const RemoveProject = () => {
    if (projectsList.length > 1) {
      setProjectsList((prev) => prev.slice(0, -1))
    }
  }

  const GenerateDescriptionFromAI = async (index) => {
    const project = projectsList[index]
    if (!project.title || !project.techStack) {
      toast.error('Please enter project title and tech stack first')
      return
    }

    setAiLoading(true)
    const PROMPT = `Generate a professional project description for a project titled "${project.title}" using the following tech stack: "${project.techStack}". 
    
    The description should be:
    - 2-3 sentences long
    - Professional and concise
    - Highlight the key features and technologies used
    - Focus on the impact and value of the project
    
    Return only the description text, no additional formatting or explanations.`

    try {
      const result = await AIChatSession.sendMessage(PROMPT)
      const raw = result.response.text()
      
      if (raw && raw.trim()) {
        const newEntries = [...projectsList]
        newEntries[index].description = raw.trim()
        setProjectsList(newEntries)
        toast.success('AI description generated successfully!')
      } else {
        toast.error('AI response invalid')
      }
    } catch (err) {
      console.error('AI Error:', err)
      toast.error('Failed to generate description')
    } finally {
      setAiLoading(false)
    }
  }

  const onSave = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      data: {
        projects: projectsList.map(({ id, ...rest }) => rest)
      }
    }

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp)
        setResumeInfo((prev) => ({
          ...prev,
          projects: projectsList
        }))
        enabledNext(true)
        setLoading(false)
        toast('Projects updated successfully!')
      },
      (error) => {
        setLoading(false)
        toast('Server Error, Please try again!')
      }
    )
  }

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10 form-container">
      <h2 className="font-bold text-lg">Projects</h2>
      <p>Add your professional projects and showcase your work</p>

      <form onSubmit={onSave}>
        <div>
          {projectsList?.map((item, index) => (
            <div key={index} className="border p-4 my-4 rounded-lg">
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <label className="text-sm font-medium">Project Title</label>
                  <Input
                    name="title"
                    placeholder="e.g., E-commerce Website"
                    value={item.title}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Tech Stack</label>
                  <Input
                    name="techStack"
                    placeholder="e.g., React, Node.js, MongoDB, AWS"
                    value={item.techStack}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <div className="flex gap-2">
                    <Textarea
                      name="description"
                      placeholder="Describe your project..."
                      value={item.description}
                      onChange={(e) => handleChange(e, index)}
                      rows={3}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => GenerateDescriptionFromAI(index)}
                      disabled={aiLoading || !item.title || !item.techStack}
                      className="self-start"
                    >
                      {aiLoading ? (
                        <LoaderCircle className="h-4 w-4 animate-spin" />
                      ) : (
                        <Brain className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Click the brain icon to generate AI description
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium">GitHub Link</label>
                    <Input
                      name="githubLink"
                      placeholder="https://github.com/username/project"
                      value={item.githubLink}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Live URL</label>
                    <Input
                      name="liveUrl"
                      placeholder="https://yourproject.com"
                      value={item.liveUrl}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={AddNewProject}
              className="text-primary"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add More Project
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={RemoveProject}
              className="text-primary"
              disabled={projectsList.length <= 1}
            >
              <Minus className="h-4 w-4 mr-1" />
              Remove
            </Button>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Projects
