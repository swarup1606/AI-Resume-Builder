import { Loader2Icon, MoreVertical } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import GlobalApi from './../../../service/GlobalApi'
import { toast } from 'sonner'

function ResumeCardItem({ resume, refreshData }) {

  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.id).then(resp => {
      console.log(resp);
      toast('Resume Deleted!');
      refreshData()
      setLoading(false);
      setOpenAlert(false);
    }, (error) => {
      setLoading(false);
    })
  }

  return (
    <div className=''>
      <Link to={'/dashboard/resume/' + resume.id + "/edit"}>
        <div className='p-14 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 h-[280px] rounded-t-lg border-t-4'
          style={{
            borderColor: resume?.themeColor
          }}
        >
          <div className='flex items-center justify-center h-[180px]'>
            <img src="/cv.png" width={80} height={80} alt="Resume Icon" />
          </div>
        </div>
      </Link>

      {/* Footer */}
      <div className='border p-3 flex justify-between items-center rounded-b-lg shadow-lg'
        style={{
          background: resume?.themeColor || "red",  // Default red if themeColor not present
          color: "white"
        }}
      >
        {/* Resume Title */}
        <h2 className='text-sm font-semibold'>{resume.title || "Untitled Resume"}</h2>

        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className='h-4 w-4 cursor-pointer text-white' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-red-600 text-white rounded-md shadow-lg">
            <DropdownMenuItem onClick={() => navigation('/dashboard/resume/' + resume.id + "/edit")}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigation('/my-resume/' + resume.id + "/view")}>
              View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigation('/my-resume/' + resume.id + "/view")}>
              Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAlert(true)} className="text-red-200 hover:text-white">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Alert for Delete */}
        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your resume
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className='animate-spin' /> : 'Delete'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>
    </div>
  )
}

export default ResumeCardItem
