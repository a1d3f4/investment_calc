import Header from "./header"
import UserInput from "./User-Input"
import { useState } from "react"
import Result from "./result"
function App() {
  const [Userinput,setuserinput]=useState({
    initial_investment: 15000,
    annual_investment:1200,
    expected_return:6,
    duration:10
})
const isvalid=Userinput.duration>0
function handlechange(input_identifier,new_val){
  setuserinput(prevuser_input=>{
      return{ 

          ...prevuser_input,
          [input_identifier]: +new_val
      }
  })
}
  return <>

    <Header/>
    <UserInput userinput={Userinput} onchange={handlechange}/>
    { !isvalid && <p className="center">
      please enter duration greater than zero
      </p>}
    { isvalid && <  Result input={Userinput}/>}
  </>
  
}

export default App
