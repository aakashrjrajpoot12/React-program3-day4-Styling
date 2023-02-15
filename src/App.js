import React from "react";
import "./style.css";

export default class App extends React.Component {
  mystyle={
    color:'green'
  };
render(){
  return (
    <div>
      <h1 style={this.mystyle}>Hello StackBlitz!</h1>{/*Inline Styling*/} 
       <p className='header'>Start editing to see some magic happen :)</p>
      {/*External Styling*/} 
    </div>
  );
}
}
