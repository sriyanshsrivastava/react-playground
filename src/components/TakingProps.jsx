//const TakingProps =(props)=>{ // this syntax is combined props we have to unwrap this before using
const TakingProps = ({name,age}) => {// this syntax is unwrapped props
    return(
        <div className="w-full h-screen flex flex-col items-center
        justify-center  bg-white font-bold">
            <h1>User Component</h1>
            <h2> User Name : {name}</h2>
            <h2> Age: {age}</h2>
        </div>
    );
}
export default TakingProps