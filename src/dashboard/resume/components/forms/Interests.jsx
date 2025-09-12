import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { LoaderCircle, Plus, Minus, Heart } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'

function Interests({ enabledNext }) {
  const [loading, setLoading] = useState(false)
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const params = useParams()

  const [interestsList, setInterestsList] = useState([''])

  // Load interests from context
  useEffect(() => {
    if (resumeInfo?.interests && Array.isArray(resumeInfo.interests)) {
      setInterestsList(resumeInfo.interests)
    }
  }, [resumeInfo])

  const handleChange = (event, index) => {
    enabledNext(false)
    const newEntries = [...interestsList]
    newEntries[index] = event.target.value
    setInterestsList(newEntries)
  }

  const AddNewInterest = () => {
    setInterestsList([...interestsList, ''])
  }

  const RemoveInterest = (index) => {
    if (interestsList.length > 1) {
      setInterestsList((prev) => prev.filter((_, i) => i !== index))
    }
  }

  const onSave = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      data: {
        interests: interestsList.filter(interest => interest.trim() !== '')
      }
    }

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp)
        setResumeInfo((prev) => ({
          ...prev,
          interests: interestsList.filter(interest => interest.trim() !== '')
        }))
        enabledNext(true)
        setLoading(false)
        toast('Interests updated successfully!')
      },
      (error) => {
        setLoading(false)
        toast('Server Error, Please try again!')
      }
    )
  }

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="h-5 w-5 text-primary" />
        <h2 className="font-bold text-lg">Interests</h2>
      </div>
      <p>Add your personal interests and hobbies</p>

      <form onSubmit={onSave}>
        <div>
          {interestsList?.map((interest, index) => (
            <div key={index} className="flex gap-2 items-center my-3">
              <Input
                placeholder="e.g., Photography, Reading, Traveling"
                value={interest}
                onChange={(e) => handleChange(e, index)}
                className="flex-1"
              />
              {interestsList.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => RemoveInterest(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={AddNewInterest}
            className="text-primary"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add More Interest
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Interests
