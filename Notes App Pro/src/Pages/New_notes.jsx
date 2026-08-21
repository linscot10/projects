
import { useState } from 'react'
import { Link } from 'react-router-dom'

const New_notes = () => {
    const [options, setOptions]=useState([
        {value:'courses', label:'Courses'},
        {value:'hobbies', label:'Hobbies'},
        {value:'martial', label:'Martial Arts'},
        {value:'learn', label:'Learn'},
        {value:'learn', label:'Learn'},
    ])

    const [newCategory, setNewCategory]=useState('')
    const [category, setCategory]=useState('')

    const handleAddCategory=(e)=>{
        e.preventDefault();
        

        if(!newCategory.trim()) return;
        const newValue=newCategory.toLowerCase().replace(/\s+/g, '-')

        if(options.some(opt=>opt.value===newValue)){
            alert('This option already exists');
            return
        }

        const newOption={ value:newValue, label:newCategory}

        setOptions([...options, newOption])
        setCategory(newValue)
        setNewCategory('')
    }

    const handleChange=(event)=>{
        setCategory(event.target.value)
        // console.log(event.target.value)
// console.log(categor);

    }
  return (
    <div className='w-full bg-slate-50 ml-48 h-screen'>
    <div className='flex p-5 items-center mx-4'>
        <div>
            <h1 className='text-2xl font-bold'>New Note</h1>
            <p className='text-smx'>Create a new note and organise your ideas.</p>
        </div>
        <Link to={'/'} className='ml-auto mr-40 text-lg bg-slate-100 h-8 flex items-center p-2 rounded-xl border-gray-200 border border-solid'><button> &larr; Back to Home</button></Link>
    </div>

    <div className="mx-4 p-2 flex items-center bg-white w-3/4 border-2 border-gray-300 rounded-2xl">
        <form className='  p-2 w-full  flex flex-col m-5'>
            <div className=' w-full p-2'>
                <label className='font-bold py-2'>Title *</label>
                <p className='text-sm py-2 text-gray-400'>Give your notes a clear and descriptive title.</p>
                <input type='text' className='border border-solid border-gray-500 rounded-lg p-5 h-8 w-full' placeholder='Enter note title...'/>
                <div className='flex items-end w-full'><p className='ml-auto flex  items-end text-sm'>0/100</p></div>
            </div>
            <div className=' w-full p-2'>
                <label className='font-bold py-2'>Content *</label>
                <p className='text-sm py-2 text-gray-400'>Write your notes. You can use the markdown or the rich text editor</p>
               <textarea className='border border-solid border-gray-500 rounded-lg p-5 h-32 w-full' placeholder='Enter note title...'>

               </textarea>
                <div className='flex items-end w-full'><p className='ml-auto flex  items-end text-sm  text-gray-400'>markdown supported</p></div>
            </div>
            <div className=' w-full p-2 flex items-center'>
            <div className='w-3/4'>
            
                <label className='font-bold py-2'>Category *</label>
                <p className='text-sm py-2 text-gray-400'>Choose a category to keep your notes organised.</p>
               <select value={category}  onChange={handleChange} className='border border-solid border-gray-500 rounded-lg px-4 h-8 w-full'>
                <option value=''>--select category--</option>
                {/* <option value='Courses'>Courses</option>
                <option value='Hobbies'>Hobbies</option>
                <option value='Learning'>Learning</option>
                <option value='Freetime_Activities'> Freetime Activities</option> */}
                {options.map((opt)=>(
                <option value={opt.value} key={opt.value}>{opt.label}</option>
                ))
                }
               </select>
            </div>
               
             <div className='flex items-end justify-end mt-13 p-3 g-2'>
             <input type='text'
             className='w-1/2 h-6 border border-solid border-gray-500 rounded-lg p-3 mx-2'
              placeholder='add new category...' 
              value={newCategory} onChange={(e)=> setNewCategory(e.target.value)}/>
              <button type='submit' onClick={handleAddCategory}>+ New Category</button>
              {/* <p>{newCategory}</p> */}
             </div>
            </div>
        </form>
    </div>
    
    </div>
  )
}

export default New_notes
