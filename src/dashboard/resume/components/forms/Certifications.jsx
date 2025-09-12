import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { LoaderCircle, Plus, Minus, Award } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'

function Certifications({ enabledNext }) {
  const [loading, setLoading] = useState(false)
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const params = useParams()

  const [certificationsList, setCertificationsList] = useState([
    {
      title: '',
      issuer: '',
      year: ''
    }
  ])

  // Load certifications from context
  useEffect(() => {
    if (resumeInfo?.certifications && Array.isArray(resumeInfo.certifications)) {
      setCertificationsList(resumeInfo.certifications)
    }
  }, [resumeInfo])

  const handleChange = (event, index) => {
    enabledNext(false)
    const newEntries = [...certificationsList]
    const { name, value } = event.target
    newEntries[index][name] = value
    setCertificationsList(newEntries)
  }

  const AddNewCertification = () => {
    setCertificationsList([
      ...certificationsList,
      {
        title: '',
        issuer: '',
        year: ''
      }
    ])
  }

  const RemoveCertification = () => {
    if (certificationsList.length > 1) {
      setCertificationsList((prev) => prev.slice(0, -1))
    }
  }

  const onSave = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      data: {
        certifications: certificationsList.map(({ id, ...rest }) => rest)
      }
    }

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp)
        setResumeInfo((prev) => ({
          ...prev,
          certifications: certificationsList
        }))
        enabledNext(true)
        setLoading(false)
        toast('Certifications updated successfully!')
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
        <Award className="h-5 w-5 text-primary" />
        <h2 className="font-bold text-lg">Certifications</h2>
      </div>
      <p>Add your professional certifications and achievements</p>

      <form onSubmit={onSave}>
        <div>
          {certificationsList?.map((item, index) => (
            <div key={index} className="border p-4 my-4 rounded-lg bg-gray-50">
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <label className="text-sm font-medium">Certificate Title</label>
                  <Input
                    name="title"
                    placeholder="e.g., AWS Certified Solutions Architect"
                    value={item.title}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium">Issuer</label>
                    <Input
                      name="issuer"
                      placeholder="e.g., Amazon Web Services"
                      value={item.issuer}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Year</label>
                    <Input
                      name="year"
                      placeholder="e.g., 2024"
                      value={item.year}
                      onChange={(e) => handleChange(e, index)}
                      required
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
              onClick={AddNewCertification}
              className="text-primary"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add More Certification
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={RemoveCertification}
              className="text-primary"
              disabled={certificationsList.length <= 1}
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

export default Certifications
