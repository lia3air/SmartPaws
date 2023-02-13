import {React,Route, Routes, Browserroute} from "react";
import './Lesson.css';
import {useLocation} from "react-router-dom";
import back from "../zurueck.svg"
import {useNavigate} from 'react-router-dom';



function Lesson() {
    const navigate = useNavigate();
    const location = useLocation()
    const steps = location.state.steps
    function home() {
        navigate("/");
    }
    function marker() {
        navigate("/marker");
    }
    function kamera() {
        console.log(steps)
        navigate("/kamera",{
            state: location.state,
        });
    }


    return (
      <div className="lesson">
          <div>
              <img className="back" src={back} onClick={home}/>
              <img className="backgroundImg" src={location.state.img}/>
          </div>

          <div className="content">
               <div className="content-text">
                   <h1 className="lesson-name">{location.state.name}</h1>
                   <p className="steps">{location.state.steps.length} Schritt{location.state.steps.length === 1 ?"":"e"}</p>
                   <p>{location.state.Description} </p>
                   <p className="second-headline">Was du brauchst </p>
                   <p>{location.state.needs} </p>
                   <p className="second-headline">Das solltest du beachten</p>
                   <p>{location.state.noted} </p>
                   <div className="button-div">
                       {location.state.name ==="Marker-Training"&&
                           <button className="button" onClick={marker}>Los gehts</button>
                       }
                       {location.state.name !=="Marker-Training"&&
                           <button className="button" onClick={kamera}>Los gehts</button>
                       }

                   </div>
               </div>
          </div>
      </div>
    );
}

export default Lesson;


