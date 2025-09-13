import {useState} from "react";

const ConditionalState = ()=>{
    const [count, setCount] = useState(0)
    const buttonClass="bg-black text-white rounded-md cursor-pointer px-2 py-1 hover:bg-blue-500 font-bold uppercase"
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
            <h1>{count}</h1>
            <button className={buttonClass} onClick={()=>setCount(count+1)}>Counter</button>
            {
                count ===0? <h1>condition 0</h1>
                    : count === 1 ? <h1>condition 1</h1>
                        : count === 2 ? <h1>condition 2</h1>
                            : count === 3 ? <h1>condition 3</h1>
                                : count === 4 ? <h1>condition 4</h1>:null
            }
        </div>
    )
}

export default ConditionalState;