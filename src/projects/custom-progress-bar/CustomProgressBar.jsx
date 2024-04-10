import React, { useEffect, useState } from 'react'

const CustomProgressBar = () => {

    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            // setProgress((value)=>value + 1);
        }, 100);
    },[progress]);

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className="text-2xl text-center bg-green-200 w-full">Custom Progress Bar</h1>
        <div className='flex flex-col justify-center items-center gap-4 mt-4 bg-slate-200 w-9/12 rounded-md p-2'>
            <div className='w-96 h-5 rounded-md bg-gray-500'>
                <div style={{width: `${progress}%`}} className='h-5 bg-green-400 rounded-md transition ease-in delay-75'></div>
            </div>

            {/* <div className='flex justify-center items-center gap-2'>
                <label htmlFor="" className='text-xl font-semibold'>Bar Percent</label>
                <input onChange={(event)=>setProgress(event.target.value)}  type="text" className='outline-none p-2 rounded-md w-56' />
            </div> */}
            <span>Progress: {progress}</span>
        </div>
    </div>
  )
}

export default CustomProgressBar