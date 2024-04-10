import React, { useState } from 'react'

const ThemeSwitcher = () => {

    const [theme, setTheme] = useState(true);
    const [bgColor, setBgColor] = useState("white");

    function handleTheme(){

        setTheme(!theme);

        if(theme === false){
            setBgColor("bg-black");
        } else{
            setBgColor("bg-white");
        }
    }

  return (
    <div>
        <h1 className="text-2xl text-center bg-green-200">Theme Swticher</h1>
        <div className={`flex flex-col justify-center items-center w-96 h-96 border-2 ${bgColor} mt-4 gap-2`}>
            <h2 className='text-green-400'>Hello World !!!</h2>
            <button onClick={handleTheme} className='bg-gray-300 rounded-md p-2'>Change Theme</button>
        </div>
    </div>
  )
}

export default ThemeSwitcher