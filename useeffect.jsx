import React, {useState,useEffect} from 'react'


export const UseEffectBasic = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("call useEffect");
        if(count>0){
            document.title = `New Message(${count})`;
        }
    });
    console.log("render components");
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>
                click me
            </button>
        </>
    )
}

export default UseEffectBasic;