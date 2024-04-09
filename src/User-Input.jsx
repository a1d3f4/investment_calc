import { useState } from "react"
// export default function User_input(onchange,userinput){
//     return <section id="user-input">
//         <div id="input-group">
//             <p>
//                 <label>initial investment</label>
//                 <input type="number" required 
//                 value={userinput.initial_investment}
//                 onChange={(event)=>onchange(initial_investment,event.target.value)}/>
//             </p>
//             <p>
//                 <label>annual investment</label>
//                 <input type="number" required 
//                 value={userinput.annual_investment}
//                 onChange={(event)=>onchange(annual_investment,event.target.value)}/>
//             </p>
//             <p>
//                 <label>expected return</label>
//                 <input type="number" required
//                 value={userinput.expected_return}
//                 onChange={(event)=>onchange(expected_return,event.target.value)}/>
//             </p>
//             <p>
//                 <label>duration</label>
//                 <input type="number" required
//                 value={userinput.duration}
//                 onChange={(event)=>onchange(duration,event.target.value)}/>
//             </p>
//         </div>
//     </section>
// }
// User-Input.js

// UserInput.js

import React from "react";

function UserInput({ userinput, onchange }) {
  return (
    <section id="user-input">
      <div id="input-group">
        <label>
          Initial Investment:
          <input
            type="number"
            value={userinput.initial_investment}
            onChange={(e) => onchange("initial_investment", e.target.value)}
          />
        </label>
        <br />
        <label>
          Annual Investment:
          <input
            type="number"
            value={userinput.annual_investment}
            onChange={(e) => onchange("annual_investment", e.target.value)}
          />
        </label>
        <br />
        <label>
          Expected Return:
          <input
            type="number"
            value={userinput.expected_return}
            onChange={(e) => onchange("expected_return", e.target.value)}
          />
        </label>
        <br />
        <label>
          Duration:
          <input
            type="number"
            value={userinput.duration}
            onChange={(e) => onchange("duration", e.target.value)}
          />
        </label>
      </div>
    </section>
  );
}

export default UserInput;
