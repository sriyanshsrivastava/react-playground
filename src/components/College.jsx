function College(props){
    return (
        <div className="w-full h-10 flex flex-col items-center
        justify-center  bg-white font-bold uppercase">

            <h2>{props.name}</h2>
        </div>
    )
}

export default College;