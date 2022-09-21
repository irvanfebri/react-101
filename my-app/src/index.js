
import ReactDOM from "react-dom"
import React, {Fragment} from "react";

const rootElement = document.getElementById("root");


const getName = () => "Rekha in React 101";

const text = (
  <>
    <h1>Hello World, {getName()}</h1><p>Happy!</p>
    <p>ounfdfff</p>
    <img 
        src="https://i.imgur.com/HpAK5y9.png" 
        alt="fine clothing" 
        style={{maxWidth: "10%"
    }}/>
  </>
);

ReactDOM.render(text, rootElement);