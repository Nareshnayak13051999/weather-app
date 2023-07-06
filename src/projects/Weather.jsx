import React, { useState } from "react";
import axios from "axios";
import Img from "./weather imge.jpg"

let Weather=()=>{

    const [city, setCity] = useState("")
    const [tem, setTem] = useState(null)
    const[newtem, setNewTem] = useState(null)
    const[speed,setNewSpeed] = useState(null)

let clicking=(e)=>{
    e.preventDefault()
    console.log(e.target[0].value)
    let city=e.target[0].value
    console.log(city)

    let apikey="e32abe55b072580bfb33dc8516482cc6";
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then((val)=>{
        console.log(Math.floor(val.data.main.temp-273))
        setTem(Math.floor(val.data.main.temp-273))
        setNewTem(Math.floor(val.data.main.humidity))
        setNewSpeed(Math.floor(val.data.wind.speed))
        
        console.log(val)
        
}
    )


}



    return(
        <div style={{boxSizing:'border-box',backgroundColor:"gray",boxShadow:"inherit",width:"550px",height:"400px",marginLeft:"400px",marginTop:"100px",}}>
            <form  action="" onSubmit={clicking} style={{fontSize:"30px"}}>
                <input type="text" id="text" style={{marginRight:"5px",border:"1px solid balck",marginTop:"10px",marginLeft:"10px"}}/>

               <input type="submit" id="sub" style={{width:"100px"}}/>
            </form>
           <img src={Img} alt="" style={{height:"200px",color:"ButtonShadow",marginLeft:"30px",marginTop:"20px"}}/> 
            <div style={{fontSize:"20px",marginLeft:"15px",padding:"20px"}}>

            <span id="demo">Tem:{tem}°C</span><br />
      <span class='demo1'>humidity: {newtem}</span>
      <span class='demo2' style={{marginLeft:"20px"}}>speed: {speed}</span> 
      </div>
        </div>
    )
}
export default Weather;

