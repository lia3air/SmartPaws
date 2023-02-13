import {React, useState} from "react";
import './Marker.css'
import sound from '../kamera/service-bell-ring-14610.mp3'
import ProgressBar from "@ramonak/react-progress-bar";
import back from "./back-hell.svg";
import {useLocation, useNavigate} from "react-router-dom";
import {saveUserData, lessonType, getUserData, finishedLessons} from "../userData";

let nothingCounter = 0;
let end = false




function Marker(){
    const [showCountDown,setShowCountDown]=useState(false)
    const [showStep,setShowStep]=useState(true)
    const [showEnd,setShowEnd]=useState(false)
    const [counter, setCounter] = useState(10);
    const [steps, setSteps] = useState(getUserData(lessonType["Marker-Training"]).repeats);



    const navigate = useNavigate();
    const audio = new Audio(sound)
    function countdown(step){
        end = false;
        console.log(end)
        console.log("step",step)
        if (step<3 && end === false) {
            console.log(step)
            nothingCounter = 0;
            setSteps(step)
            setShowCountDown(true)
            setShowStep(false)
            setShowEnd(false)
            var timeleft = 10;
            var downloadTimer = setInterval(function () {
                if (timeleft <= 0) {
                    if (end === false) {
                        console.log(end)
                        audio.play()
                    }
                    setCounter(10)
                    clearInterval(downloadTimer);
                    setShowCountDown(false);

                    if (step < 3 && end === false) {
                        countdown(step + 1);
                    }
                }

                setCounter(timeleft);
                timeleft -= 1;


            }, 1000);
        }else{
            setSteps(3)
            console.log("ende",steps)
            setShowCountDown(true)
            setTimeout(show, 1000);
        }

    }
    function show(){

        setShowEnd(true)
        setShowCountDown(false)
    }
    function home() {
        end = true;
        console.log("home",steps)
        saveUserData(0, steps, lessonType["Marker-Training"]);
        navigate("/");
    }
    function end() {
        end = true;
        saveUserData(0, 0, lessonType["Marker-Training"]);
        finishedLessons("Marker-Training")
        navigate("/");
    }
    return(
        <div className="Marker">
            <img className="back" src={back} onClick={home}/>
            {showCountDown === true && <div className="marker-text-div"> <p className="marker-text">{counter}</p></div>}
            {showStep === true &&

                <div className="step-content">
                <h2 className="step-headline">Schritt 1</h2>
                <p>Belohne deinen Hund jetzt jedes Mal direkt, nachdem das Belohnungssignal ertönt. Dein Hund verknüpft das Geräusch so mit der Belohnung.</p>
                <div className="button-div"> <button className="button" onClick={() => countdown(steps)}>Start</button></div>

            </div>}
            {showEnd === true &&

                <div className="step-content">
                    <h2 className="step-headline">Geschafft!</h2>
                    <p>Überprüfe jetzt, ob dein Hund das Signal schon als positiven Verstärker wahrnimmt, das Signal wird jetzt nochmal ertönen, reagiert dein Hund erwartungsvoll, hat das Training funktioniert und ihr könnt mit dem eigentlichen Training loslegen. Wenn du aber das Gefühl hast, er interessiert sich nicht für das Signal, beginne das Marker-Training nochmal von vorn..</p>
                    <div className="button-div">
                        <button className="button" onClick={() => countdown(2)}>nochmal versuchen</button>
                        <button className="button" onClick={end} >Beenden</button>
                    </div>

                </div>}

            {showCountDown === true &&
                <div className="status">
                    <p className="second-headline-step">Wiederholungen</p>
                    <ProgressBar  baseBgColor="#F6D3BC" bgColor="#f96400" className="progressbar" completed={Math.floor((steps/3)*100)} />
                </div>
            }
        </div>
    )
}

export default Marker