import {React, useEffect, useState, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import * as ml5 from "ml5";
import './Kamera.css'
import sound from './service-bell-ring-14610.mp3'
import ProgressBar from "@ramonak/react-progress-bar";
import back from "../zurueck.svg";
import info from "../info.svg"

import rewardsImg from "../rewards-2.svg";
import  {saveUserData, getUserData, lessonType, finishedLessons,rewards} from "../userData"


let classifier;
let nothingCounter = 0;
let repeats = 0;
let getReward = true;


const statusA={
    "start":0,
    "ausfuehrung":1,
    "pause":2,
    "ende":3,
    "reward":4,
    "reward-ende":5,
}
const statusB={
    "richtig":0,
    "falsch":1,
    "nichts":2,
    "keineAnalyse":3,
    "keinHund":4,
}
let statusLession = statusA.start;
let statusExecution = statusB.keineAnalyse;
let currentStep = localStorage.getItem('current-Step-training');
console.log(currentStep)

if (currentStep === false){
    currentStep = 0
    console.log('umwandeln',currentStep)
}else{
    currentStep = parseInt(currentStep)
}

console.log('session',currentStep)
function Kamera() {

    const navigate = useNavigate();
    const location = useLocation()
    const steps = location.state.steps;
    let imageModelURL = location.state.model;

    const [counter, setCounter] = useState(3); //Countdown
    const [successfulRepeats, setSuccessfulRepeats] = useState(getUserData(lessonType[location.state.name]).repeats); //Erfolgreiche Wiederholungen
    const [nothingRepeats, setNothingRepeats] = useState(repeats); //Wiederholungen nichts wurde gemacht
    const [showCountDown,setShowCountDown]=useState(false)// Countdown anzeigen
    const [loaded, setLoaded] = useState(false); //Videoanalyse
    const [result,setResult] = useState('loading');
    const [step,setStep] = useState(getUserData(lessonType[location.state.name]).steps); //Aktueller Schritt
    const [stateLesson,setstateLesson]=useState(statusLession);         //status der Lektion
    const [stateExecution,setStateExecution]=useState(statusExecution); //Status der Erkennung


    const videoRef = useRef(null);
    const content = steps
    const audio = new Audio(sound)

    let currentStep = steps[step]

    useEffect(() => {

        if(stateLesson === statusA.ausfuehrung){
            classifyInput(videoRef);
        }/*else if(stateLesson === statusA.pause && stateExecution === statusB.richtig){

            if(successfulRepeats < currentStep.Wiederholungen && (nothingRepeats < 3 || currentStep.Zurueckstufen === false)){
                setTimeout(countdown, 3000);

            }

        }*/
    },[stateLesson])

    useEffect(() => {
        if(successfulRepeats === currentStep.Wiederholungen){
            setTimeout(nextStep, 3000);
        }
    },[successfulRepeats])

   /* useEffect(() => {
        if(nothingRepeats === 3 && currentStep.Zurueckstufen === true){
           // setNothingRepeats(0);
            setTimeout(lastStep, 3000);

        }
    },[nothingRepeats])*/

    function home() {
        console.log(step)
        saveUserData(step, successfulRepeats, lessonType[location.state.name]);
        navigate("/");
    }
    function end() {

        saveUserData(0, 0, lessonType[location.state.name]);
        finishedLessons(location.state.name)
        navigate("/");
    }
    const handleClick = event => {
        setNothingRepeats(0);
        countdown()

    };

    function countdown(){
        nothingCounter = 0;
        setStateExecution(statusB.keineAnalyse)
        setShowCountDown(true)
        var timeleft = 3;
        var downloadTimer = setInterval(function(){
            if(timeleft <= 0){
                setCounter(3)
                clearInterval(downloadTimer);
                setShowCountDown(false);
                setstateLesson(statusA.ausfuehrung);
            }

            setCounter(timeleft);
            timeleft -= 1;
        }, 1000);
    }

    function nextStep(){
        setSuccessfulRepeats(0)
        if(getReward === true){

            let position
            if (location.state.name ==="Sitz Training"){
                 position = "1."+step.toString();

            }else if(location.state.name ==="Platz Training"){
                position = "2."+step.toString();
            }

            rewards(position)
            console.log("Du bekommst eine Belohnung für die Übung ",location.state.name," Schritt: ", step)
            if (step === (content.length -1)){
                setstateLesson(statusA["reward-ende"])
            }else{
                setStep(step + 1)
                setstateLesson(statusA.reward);
                setStateExecution(statusB.keineAnalyse)
            }
        }else {
            getReward = true;
            if (step === (content.length -1)){
                setstateLesson(statusA.ende)
            }else{
                setStep(step + 1)
                setstateLesson(statusA.start);
                setStateExecution(statusB.keineAnalyse)
            }
        }





    }
    function lastStep(){
        setstateLesson(statusA.start);
        setStep(step - 1)
        setStateExecution(statusB.keineAnalyse);
    }
    function reload(){
        saveUserData(step, successfulRepeats, lessonType[location.state.name]);
        window.location.reload()
    }
    function classifyInput(ref){

        if(stateLesson === statusA.ausfuehrung){

            classifier.classify(ref.current, (error, results) => {
                if (error) {
                    console.error(error);
                    return;
                }else{
                    //HIER IST DAS ENDERGEBNIS DRIN: results

                    for(let i=0; i<=results.length; i++ ){
                        if(results[i].confidence > 0.9){
                            setResult(results[i].label);

                            if (results[i].label ===   currentStep.richtig  ){
                                setSuccessfulRepeats(successfulRepeats + 1)
                                setStateExecution(statusB.richtig)
                                setstateLesson(statusA.pause);
                                audio.play()
                                return;
                            }else if(results[i].label ===  currentStep.nichts){

                                if(nothingCounter>50){
                                    nothingCounter = 0;
                                    setstateLesson(statusA.pause);
                                    setStateExecution(statusB.nichts);
                                    setSuccessfulRepeats(0);
                                    getReward=false
                                    setNothingRepeats(nothingRepeats + 1)
                                    console.log(nothingRepeats)
                                    console.log(currentStep.Zurueckstufen)
                                    return;

                                }else{
                                    nothingCounter ++;
                                }

                            }else if(results[i].label === currentStep.falsch){
                                setStateExecution(statusB.falsch);
                                setstateLesson(statusA.pause);
                                setSuccessfulRepeats(0)
                                getReward=false
                                return;
                            }else if(results[i].label === 'Kein Hund'){
                                setStateExecution(statusB.keinHund);
                                setstateLesson(statusA.pause);
                                return;}
                        }else{
                            break;
                        }
                    }


                    classifyInput(ref);
                }
            });
        }else {

        }

    }


const containerRef = useRef(null);

    useEffect(() => {
        classifier = ml5.imageClassifier(imageModelURL + 'model.json', () => {
            navigator.mediaDevices
                .getUserMedia({ video: {facingMode: {exact: 'environment'}}, audio: false })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                    var playPromise = videoRef.current.play();

                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                            setLoaded(true);
                            classifyInput(videoRef);
                        })
                            .catch(error => {
                                // Auto-play was prevented
                                // Show paused UI.
                            });
                    }

                });
        });

    }, []);


    return (
        <div className="App">
            <img className="back" src={back} onClick={home}/>
            <div className="camera-content">


                { stateLesson === 0 && showCountDown === false &&
                    <div className="step-content">
                        <h2 className="step-headline">{currentStep.Schritt}</h2>
                        <p>{currentStep.Beschreibung}</p>
                        <div className="button-div"> <button className="button" onClick={handleClick}>Start</button></div>

                    </div>
                }

                { stateLesson === 3 &&
                    <div className="step-content">
                        <h2 className="step-headline">Geschafft!</h2>
                        <p>Super! Ihr seid ein tolles Team, zusammen habt ihr das Kommando erfolgreich gelernt. Damit Dein Hund das neue Kommando jetzt nicht verlernt solltest du es regelmäßig weiter üben, zu beginn gibst du weiterhin Leckerlies, irgendwann gibst du ihm nur noch ab und zu eine Belohnung bis du sie dann am Ende komplett weglassen kannst</p>
                        <div className="button-div"> <button className="button" onClick={end}>zur Übersicht</button></div>
                    </div>
                }

               { stateExecution === 0 && stateLesson !== 0 && stateLesson !== 3 &&
                   <div className="overlay-div">
                       <p className="count-down">{currentStep.richtigText}</p>
                   </div>

               }
                { stateExecution === 0 && stateLesson !== 0 && stateLesson !== 3 && stateLesson !== 5 && successfulRepeats < currentStep.Wiederholungen &&
                    <div className="step-content">

                        <p>Belohne deinen Hund! Anschließend kannst du ihn aus der Position erlösen und den Schritt wiederholen indem du weiter klickst.</p>
                        <div className="button-div"> <button className="button" onClick={countdown}>Weiter</button></div>

                    </div>

                }
                { stateExecution === 1 &&
                    <div className="step-content">
                        <h2 className="step-headline">Tipp</h2>
                        <p>{currentStep.falschText}</p>
                        <div className="button-div"> <button className="button" onClick={countdown}>Verstanden</button></div>

                    </div>

                }
                { stateLesson === 4 &&
                    <div className="step-content">
                        <div className="reward-div">
                            <img src={rewardsImg}/>
                            <h2 className="step-headline">Sehr Gut!</h2>
                        </div>

                        <p>Ihr habt die Übung besonders gut ausgeführt. Ihr erhaltet einen Belohnungspunkt für die sehr gute Ausführung!</p>
                        <div className="button-div"> <button className="button" onClick={()=> setstateLesson(statusA.start)}>Weiter</button></div>

                    </div>

                }
                { stateLesson === 5 &&
                    <div className="step-content">
                        <div className="reward-div">
                            <img src={rewardsImg}/>
                            <h2 className="step-headline">Sehr Gut!</h2>
                        </div>
                        <p>Ihr habt die Übung besonders gut ausgeführt. Dafür bekommt ihr eine Belohnung!</p>
                        <div className="button-div"> <button className="button" onClick={()=> setstateLesson(statusA.ende)}>Weiter</button></div>

                    </div>

                }


                { stateExecution === 2 && (nothingRepeats < 3 || currentStep.Zurueckstufen === false) &&

                    <div className="step-content">
                    <h2 className="step-headline">Tipp</h2>
                    <p>{currentStep.nichtsText}</p>
                    <div className="button-div"> <button className="button" onClick={countdown}>Verstanden</button></div>

                    </div>
                }
                { stateExecution === 2 && (nothingRepeats === 3 && currentStep.Zurueckstufen === true) &&

                    <div className="step-content">
                        <h2 className="step-headline">Tipp</h2>
                        <p>{currentStep.ZurueckstufenText}</p>
                        <div className="button-div"> <button className="button" onClick={lastStep}>Verstanden</button></div>
                    </div>

                }
                { stateExecution === 4 &&

                    <div className="step-content">
                    <h2 className="step-headline">Wo ist dein Hund?</h2>
                    <p>Halte dein Smartphone so, dass dein Hund zu sehen ist. </p>
                    <div className="button-div"> <button className="button" onClick={countdown}>Verstanden</button></div>
                    </div>

                }

               {stateLesson !== 0 && stateLesson !== 3 && stateLesson !== 4 && stateLesson !== 5 && stateExecution !== 2 && stateExecution !== 1 && stateExecution !== 4 && stateExecution !== 0 &&
                   <div className="status">
                        <div className="step-info">
                            <p className="second-headline-step">{currentStep.Schritt}</p>
                            <img src={info} onClick={reload}/>
                        </div>

                       <ProgressBar  baseBgColor="#F6D3BC" bgColor="#f96400" className="progressbar" completed={Math.floor((successfulRepeats/currentStep.Wiederholungen)*100)}  />
                   </div>

                }


                {showCountDown === true &&
                    <div className="overlay-div">
                        <p className="count-down">{counter}</p>
                    </div>
                }

                <div ref={containerRef}>
                    <video ref={videoRef} id="video" playsInline autoPlay></video>
                </div>

            </div>
        </div>
    );
}

export default Kamera;


