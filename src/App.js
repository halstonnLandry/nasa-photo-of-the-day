import React,{useState,useEffect} from "react";
import "./App.css";
import axios from 'axios';
import styled from 'styled-components';


function App() {
  const [data, setData]= useState ([]);
 useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(response=>{
    setData(response.data);
    console.log(response.data);
  })
  .catch(error=>{
    console.log(error);
  });
 },[]) 
const BodyDiv= styled.div`
 width:80%
 margin:auto;
 background-color:#000000;
 color:#00ffff;
 text-shadow: 0px 0px 15px #00ffff;
`;
const LimitImg= styled.img`
width:80%;
height:auto;
`;
const ShadowBox=styled.div`
box-shadow: 0 0 10px #ff00ff;
`

  return (
    <BodyDiv className="App">

      <p>
        {data.date}
      </p>
      <p>
        {data.explanation}
      </p>
      <ShadowBox>
        <LimitImg src={data.hdurl}/>
      </ShadowBox>
      <p>
        {`copyright: ${data.copyright}`}
      </p>
    </BodyDiv>
  );
}

export default App;
