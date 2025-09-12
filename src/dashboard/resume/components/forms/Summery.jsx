import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { Brain, LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'
import { AIChatSession } from './../../../../../service/AIModal'

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of summery for 3 experience level, Mid Level and Fresher level in 3 -4 lines in array format, With summary and experience_level Field in JSON Array Format"

function Summery({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [summery, setSummery] = useState('')
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState([])

  useEffect(() => {
    if (summery) {
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      })
    }
  }, [summery])

  const GenerateSummeryFromAI = async () => {
    try {
      setLoading(true)
      const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle || '')
      console.log('🧠 Prompt:', PROMPT)

      const result = await AIChatSession.sendMessage(PROMPT)

      // Await text correctly
      const raw = await result?.response?.text?.()
      console.log('🧠 Raw AI Response:', raw)

      // Clean fenced code blocks and language tags (```json ... ```)
      const unfenced = (raw || '')
        .trim()
        .replace(/^```[a-zA-Z]*\n?/i, '')
        .replace(/```\s*$/i, '')

      // Try direct JSON parse
      let parsed
      try {
        parsed = JSON.parse(unfenced)
      } catch (_) {
        // Fallback: extract first JSON array block
        try {
          const start = unfenced.indexOf('[')
          const end = unfenced.lastIndexOf(']')
          if (start !== -1 && end !== -1 && end > start) {
            parsed = JSON.parse(unfenced.slice(start, end + 1))
          }
        } catch (err) {
          console.error('❌ JSON Parse Error:', err)
        }
      }

      if (!parsed) {
        toast.error('AI response invalid ❌')
        setAiGenerateSummeryList([])
      } else {
        const safeArray = Array.isArray(parsed) ? parsed : [parsed]
        setAiGenerateSummeryList(safeArray)
      }

    } catch (err) {
      console.error('❌ AI Error:', err)
      toast.error('Failed to generate summary ❌')
    } finally {
      setLoading(false)
    }
  }

  const onSave = (e) => {
    e.preventDefault()
    setLoading(true)

    const data = {
      data: {
        summery: summery,
      },
    }

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log('✅ Saved:', resp)
        enabledNext(true)
        setLoading(false)
        toast('Details updated ✅')
      },
      (error) => {
        console.error('❌ Save Error:', error)
        setLoading(false)
      }
    )
  }

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add summary for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <Button
              variant="outline"
              onClick={() => GenerateSummeryFromAI()}
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
            >
              <Brain className="h-4 w-4" /> Generate from AI
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            value={summery || resumeInfo?.summery || ''}
            onChange={(e) => setSummery(e.target.value)}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummeryList?.length > 0 && (
        <div className="my-5">
          <h2 className="font-bold text-lg">Suggestions</h2>
          {aiGeneratedSummeryList.map((item, index) => (
            <div
              key={index}
              onClick={() => setSummery(item?.summary)}
              className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
            >
              <h2 className="font-bold my-1 text-primary">
                Level: {item?.experience_level}
              </h2>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Summery
