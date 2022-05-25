import { useEffect, useState } from "react"
import React  from 'react'

const Stopwatch = ({start,endtime}) => {
    
    const [timer, setTimer] = useState(Number(start));
  
    useEffect(()=>{
        
        const id=setInterval(()=>{

            if(timer<endtime){
                setTimer((timer)=>timer+1)
                
                
            }else{
                clearInterval(id)
            }
            
            
            
        },1000)
        return ()=>{
            clearInterval(id)
        }
       
        
    },[timer])
    // const [timerId, settimerId] = useState(null)
    // let start=()=>{
    //     if(!timerId){
    //         let id=setInterval(()=>{
    //             setTimer((timer)=>timer+1)
    //         },1000)
    //         settimerId(id)
    //     }
        
    
    // }
    // let pause=()=>{
    //     clearInterval(timerId)
    //     settimerId(null)
    // }
    // let reset=()=>{
    //     clearInterval(timerId)
    //     setTimer(0)
    // }
  return (
    <div>
        <h2>Stop-Watch</h2>
        <h1>{timer}</h1>
        {/* <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button> */}
    </div>
  )
}

export default Stopwatch