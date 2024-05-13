import React, { useState } from 'react'

const ToolTip = () => {

    const [visible, setVisible] = useState(false);

    function handleMouseEnter(){
        timeout = setTimeout(()=>{
            setVisible(true);
        }, 1000);
    }

    function handleMouseLeave(){
        setVisible(false);
    }

  return (
    <div>
        <h1 className="text-2xl text-center bg-green-200">Tooltip</h1>
        <div className='flex flex-col justify-center items-center gap-2 mt-2'>
            <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='text-xl'>Hover Me</h3>
            {visible ? <p className='bg-gray-800 text-white rounded-md p-1 relative bottom-2 text-sm'>Tooltip</p> : null}
        </div>
    </div>
  )
}

export default ToolTip