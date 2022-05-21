import React from "react";
import './App.css';

function App() {
  const styles = {
    border: "1px solid #eee",
    padding: "20px",
    display: "flex",
    width: "100vw",
    margin: "30px auto" ,
    maxWidth:"400px",
    flexDirection:"column"
  }
  
  return (
        <div id="id" className="App">
      <div style={styles}>
        <h1 style={{color:"green"}}>안녕하세요!</h1>
        <hr style={{width:"100%"}}/>
        <p style={{textAlign:"left"}}>이름을 입력해주세요. </p>      
        <input type="text"/>
      </div>
      
    </div>
  );
}

export default App;

