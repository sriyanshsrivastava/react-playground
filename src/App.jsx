import ConditionalState from "./components/ConditionalState.jsx";
import TakingProps from "./components/TakingProps.jsx";
import College from "./components/College.jsx";

function App() {
    let collegeNames=["Iet","DU","IIT","AIIMS","IPU"]


  return (
    <>
        {/*<ConditionalState/>*/}
        {/*<TakingProps name="Satish" age={29}/>*/}
        {collegeNames.map((college,i)=>{
            return (
                <College key={i} name={college}/>
            )
        })}
    </>
  )
}

export default App
