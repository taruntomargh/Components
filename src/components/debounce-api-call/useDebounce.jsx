import React, { useEffect, useState } from 'react'

function useDebounce(searchParam, delay = 1000){

    const [debounceValue, setDebounceValue] = useState(searchParam);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebounceValue(searchParam);
        }, delay);

        return ()=> clearTimeout(timeout);
    },[searchParam, delay]);

    return debounceValue;
}

export default useDebounce