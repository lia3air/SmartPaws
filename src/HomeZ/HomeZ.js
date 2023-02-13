import {React,Route, Routes, Browserroute} from "react";
import './HomeZ.css';
import {useLocation} from "react-router-dom";
import { useEffect, useState, useRef} from "react";
import back from "../zurueck.svg"
import {useNavigate} from 'react-router-dom';
import rewardsImg from "../rewards.svg";
import markerImg from "../marker-img.png";
import {Carousel} from "react-responsive-carousel";
import Preview from "../preview/Preview";
import sitz from "../sitz.png";
import platz from "../platz.png";
import Modal from "../Modal/Modal";
import close from "../close.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import rewardsImg2 from "../rewards-2.svg";
import  {getFinishedLessons,getRewards} from "../userData"
import {lessons} from "../data";
import {markerLesson} from "../data";


const lektionen=lessons

const marker =markerLesson

function HomeZ() {
    const [stepIndex,setStepIndex] = useState(0);
    const [modalShow,setModalShow] = useState(false);
    const navigate = useNavigate();
    const finishedLesson = getFinishedLessons()
    let reward = getRewards()

    function handleChange(selectedIndex) {
        setStepIndex(selectedIndex)
    }
    function handleClick() {
        console.log("klick")
        navigate("/lesson",{
            state: lektionen[stepIndex]
        });
    }
    function markerClick() {
        console.log("klick")
        navigate("/lesson",{
            state: marker
        });
    }
     function showModal(){
        setModalShow(true)
    }
     function hideModal(){
        setModalShow(false)
    }
    return (
        <div className="home">

            <div className="top-section">
                <div className="header">
                    <h1 className="App-headline">SmartPaws</h1>
                    <img src={rewardsImg} onClick={showModal} className="rewards"/>
                </div>
                <p className="intro-text">Optimiertes Traning für optimales Verhalten</p>
                <div className="highlight-box">
                    <div className="img-div"><img className="marker-img" src={markerImg}/></div>
                    <div className="highlight-box-content">
                        <h2 className="highlight-box-headline">Marker Training</h2>
                        <a onClick={markerClick} className="highlight-start">Jetzt starten</a>
                    </div>
                </div>
                <p className="subheadline start" >Verfügbare Lektionen</p>


            </div>

            <div className="content-home">
                <div className="content-home-text">
                    <Carousel showIndicators={true} showStatus={false} showThumbs={false} infiniteLoop={true} showArrows={false} onChange={handleChange}>
                        {lektionen.map(item =>  <Preview step={item}></Preview>)}

                    </Carousel>

                </div>
                <div className="preview-lesson-box-content-short-description-button-div">
                    <button className="button" onClick={handleClick}>Los gehts</button>
                </div>
            </div>
            {modalShow &&
                <div className="modal">
                    <div className="modal-content">
                        <div className="close-div"><img src={close} onClick={hideModal}/></div>
                        <h3 className="rewards-headline">Euer Trainingsfortschritt</h3>
                        {finishedLesson.length>0 || reward.length >0 ?<p className="rewards-text">Ihr macht zusammen tolle Fortschritte! Hier bekommst du einen Überblick, was ihr schon geschafft habt.</p> :<p className="rewards-text">Eure Fortschritte kannst du in Zukunft hier sehen.</p> }

                        <p className="subheadline">Lektionen</p>
                        <ProgressBar  baseBgColor="#F6D3BC" bgColor="#f96400" className="progressbar" completed={Math.floor((finishedLesson.length/3)*100)}  />
                        <div className="close-div"><p className="lesson-status">{finishedLesson.length} von 3 abgeschlossen</p></div>
                        <p className="subheadline">Belohnungen</p>
                        <div className="rewards">{
                            reward.length >0 ? reward.map(item =>  <img src={rewardsImg2} className="reward"/>) :<p>Du hast noch keine Belohnungen</p>
                        }</div>
                    </div>
                </div>
            }

        </div>
    );
}

export default HomeZ;


