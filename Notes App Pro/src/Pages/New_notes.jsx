
import { Link } from 'react-router-dom'

const New_notes = () => {
  return (
    <div className='w-full bg-slate-50 ml-48 h-screen'>
    <div className='flex p-5 items-center mx-4'>
        <div>
            <h1 className='text-2xl font-bold'>New Note</h1>
            <p className='text-smx'>Create a new note and organise your ideas.</p>
        </div>
        <Link to={'/'} className='ml-auto mr-40 text-lg bg-slate-100 h-8 flex items-center p-2 rounded-xl border-gray-200 border border-solid'><button> &larr; Back to Home</button></Link>
    </div>

    <div className="mx-4 p-2 flex items-center">
        <form className='  p-2 w-3/4 flex flex-col '>
            <div className=' w-3/4 p-2'>
                <label className='font-bold py-2'>Title *</label>
                <p className='text-sm py-2 text-gray-400'>Give your notes a clear and descriptive title.</p>
                <input type='text' className='border border-solid border-gray-500 rounded-lg p-5 h-8 w-3/4' placeholder='Enter note title...'/>
                <div className='flex items-end w-3/4'><p className='ml-auto flex  items-end text-sm'>0/100</p></div>
            </div>
            <div className=' w-3/4 p-2'>
                <label className='font-bold py-2'>Content *</label>
                <p className='text-sm py-2 text-gray-400'>Write your notes. You can use the markdown or the rich text editor</p>
               <textarea className='border border-solid border-gray-500 rounded-lg p-5 h-32 w-3/4' placeholder='Enter note title...'>

               </textarea>
                <div className='flex items-end w-3/4'><p className='ml-auto flex  items-end text-sm  text-gray-400'>markdown supported</p></div>
            </div>
        </form>
    </div>
    
    </div>
  )
}

export default New_notes
