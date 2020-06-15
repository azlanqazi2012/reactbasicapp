import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
function App({name,age}) { //destructuring

//  let user={name:"sdfxc",age:34}; 
 // let name=user.name; //way of destructuring
//  let age=user.age; //way of destructuring
  //or
 // let {name,age}=user; //alternative way of destructuring
return <div className="maindiv"> <strong><h2>Hello Muhammad Azlan</h2></strong>
<h1 className="st">List Of Upcomming Topics</h1>
<ul className="st1">
  <li>MongoDB</li>
  <li>Jenkins</li>
  <li>Angular</li>

</ul>
<h1 className="st">Top Programming Languages</h1>
<ol className="st1">
<li>Python</li>
<li>JavaScript</li>
<li>Java</li>
</ol>
</div>
}
// function App(props) {
//   return <div>hello from app {props.name} age={props.age}</div>
//   }



// // Plain function:
// function Hi({ name }) {
//   return <div>Hello {name}!</div>;
// }

// // A constant holding an anonymous function:
// const Hi = function({ name }) {
//   return <div>Hello {name}!</div>;
// }

// // Turning the "function" into an arrow:
// const Hi = ({ name }) => {
//   return <div>Hello {name}!</div>;
// }

// // Optional step 3: Removing the braces, which makes the
// // "return" implicit so we can remove that too. Leaving the parens
// // in for readability:
// const Hi = ({ name }) => (
//   <div>Hello {name}!</div>
// )

// // Optional step 4: If the component is really short, you can put
// // it all on one line, and skip the parentheses:
// const Hi = ({ name }) => <div>Hello {name}!</div>;

export default App;
