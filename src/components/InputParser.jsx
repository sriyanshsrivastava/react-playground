import {useState} from "react";

export function InputParser(){
    const [value,setValue]=useState("");
    const textAvailableClass="bg-green-200 items-start rounded-full py-1 px-2 text-sm";
    return(
        <>
            <div className="fixed w-full h-screen flex flex-col items-center justify-center  bg-green-100 font-medium">
                <div className={"border border-amber-700  rounded-lg shadow-sm p-8 "}>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Inter text here."
                        className="border-2 rounded-full px-2 py-1" value={value}
                        onChange={(e)=>setValue(e.target.value)}/>
                        <button className={"font-light bg-black text-white px-2 rounded-full cursor-pointer text-sm"}
                        onClick={()=> setValue("")}>Clear text</button>
                    </div>
                    <div className="flex justify-start px-2 py-1 gap-1 w-full items-center ">
                        <h2>You typed :</h2>
                        <h2 className={value===""?"":textAvailableClass}>{value}</h2>
                    </div>
                </div>
            </div>

        </>
    )
}