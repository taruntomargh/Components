import React from 'react'
import UseFetch from './hooks/UseFetch'

const CustomHooks = () => {
  return (
    <div>
        <h1 className="text-2xl text-center bg-green-200">Custom Hooks</h1>
        <div>
            <UseFetch />
        </div>
    </div>
  )
}

export default CustomHooks