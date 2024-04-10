import React, { useState } from 'react'

const StepProgressBar = () => {

    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

    function handlePreviousStep(){
        setActiveStep(activeStep === 0 ? activeStep : activeStep - 1);
    }

    function handleNextStep(){
        setActiveStep(activeStep === steps.length - 1 ? activeStep : activeStep + 1);
    }

  return (
    <div>
        <h1 className="text-2xl text-center bg-green-200">Step Progress Bar</h1>
        <div className='flex flex-col justify-center items-center gap-4 mt-2'>
            <div className='flex'>
                {steps.map((stepItem, index) => <div key={index} className={index <= activeStep ? 'bg-green-600 rounded-md p-2 w-24' : 'bg-gray-200 rounded-md p-2 w-24'}>{stepItem}</div>)}
            </div>
            <div className='flex gap-2'>
                <button onClick={handlePreviousStep}  className={activeStep === 0 ? "disabled text-md text-black bg-gray-200 rounded-md p-2 cursor-context-menu opacity-60" : "text-md text-white bg-blue-800 rounded-md p-2"}>Previous Step</button>
                <button onClick={handleNextStep} className={(activeStep === steps.length - 1) ? "disabled text-md text-black bg-gray-200 rounded-md p-2 cursor-context-menu opacity-60" : "text-md text-white bg-blue-800 rounded-md p-2"}>Next Step</button>
            </div>
        </div>
    </div>
  )
}

export default StepProgressBar