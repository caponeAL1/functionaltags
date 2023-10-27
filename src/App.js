import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const[firstName, setfirstName]=useState('Unknown');
const[lastName,setLastName]=useState('Unknown');
const[agree,setAgree]=useState(false);

const updatefirstName = (event) => {
  var b=document.getElementById("id");
  var t=document.getElementById("checkbox");
  setfirstName(event.target.value);

  if(event.target.value.length <= 5 && event.target.value != ""){

    b.innerHTML="Please Enter above 5 Characters"

    t.checked=false;

    setAgree(false);

   }else{

     b.innerHTML=""

   }

     }

const updatelastName = (event) =>{

  var b=document.getElementById("id1");

    var t=document.getElementById("checkbox");

    setLastName(event.target.value);

    if(event.target.value.length <= 5 && event.target.value != ""){

      b.innerHTML="Please Enter above 5 Characters"

      t.checked=false;

      setAgree(false);

     }else{

       b.innerHTML=""

     }

     }



const enableDisable=(event) =>{
  setAgree(event.target.checked);
}
const checkChar=(event)=>{

   

  if(event.target.checked == true && firstName.length > 5 && lastName.length > 5){

    setAgree(true);

  }

  else{

    event.target.checked = false

    setAgree(false);

  }

}

  return (
    <div>
      <form>
        Enter Your Name<input type="text" value={firstName} onChange={updatefirstName}/><b id="id"></b>
        Enter Your Name<input type="text" value={lastName} onChange={updatelastName}/><b id="id1"></b><br/>

        <b> Your name</b>{firstName} &nbsp;&nbsp;{lastName}<br/>
        <input  type="checkbox" id="checkbox" value={agree} onChange={checkChar}/>
        {
          agree? <input type="button" value="Save" onChange={enableDisable}/>:
          <input type="button" value="save" disabled={!agree}/>
        }
        
      </form>
    </div>
  );
      }
    
export default App;
