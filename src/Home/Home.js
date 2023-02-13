import {React, useEffect, useState, useRef} from "react";
import '../App.css';
import markerImg from "../marker-img.png"
import rewardsImg from "../rewards.svg"
import Preview from "../preview/Preview";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sitz from "../sitz.png"
import platz from "../platz.png"
import {click} from "@testing-library/user-event/dist/click";
import {useNavigate} from 'react-router-dom';


const lektionen=[
    {
        "name": "Sitz Training",
        "shortDescription":"Sitz ist ein Grundkommando, das in vielen Alltagssituationen wichtig und hilfreich sein kann.",
        "Description":"Sitz ist ein Grundkommando, das in vielen Alltagssituationen wichtig und hilfreich sein kann. Es eignet sich besonders gut als erstes Kommando, das du mit deinem Hund trainieren kannst. Dein Hund setzt sich wahrscheinlich jetzt schon oft und gerne von allein hin, weshalb man dies relativ einfach auf Kommando einführen kann.",
        "needs":"Bereite ein paar Leckerlis vor, die Dein Hund sehr gerne mag und halte sie in deiner Hosentasche bereit.",
        "noted":"Achte darauf, dass du die Aufmerksamkeit deines Hundes hast, bevor du die Übungen startest. Belohne das Verhalten Deines Hundes dann, wenn dein Hund das Kommando richtig ausführt, das Belohnungssignal wird dir beim Timing helfen. Unerwünschtes Verhalten solltest du einfach ignorieren und die Übung nochmal versuchen.",
        "img":sitz,
        "steps":[
            {
                "Schritt":"Schritt 1",
                "Beschreibung":"Nimm ein Leckerli in deine Hand und bewege es langsam über die Nase Deines Hundes.",
                "richtig": "Sitz",
                "richtigText":"Super!",
                "falsch":"Springen",
                "falschText":"Du hältst die Hand mit dem Leckerli etwas zu hoch, versuche es etwas tiefer.",
                "nichts":"Sonstiges",
                "nichtsText":"Du hältst die Hand mit dem Leckerli etwas zu weit hinten, versuche es etwas weiter vorne.",
                "Wiederholungen":2,
                "Zurueckstufen":false,
            },
            {
                "Schritt":"Schritt 2",
                "Beschreibung":"Mache weiter wie im ersten Schritt sag aber dabei jetzt Sitz und hebe den Zeigefinger als Sichtsignal",
                "richtig": "Sitz",
                "richtigText":"Super!",
                "falsch":"Springen",
                "falschText":"Du hältst die Hand mit dem Leckerli etwas zu hoch, versuche es etwas tiefer.",
                "nichts":"Sonstiges",
                "nichtsText":"Du hältst die Hand mit dem Leckerli etwas zu weit hinten, versuche es etwas weiter vorne.",
                "Wiederholungen":1,
                "Zurueckstufen":false,
            },
            {
                "Schritt":"Schritt 3",
                "Beschreibung":"Führe jetzt deinen Hund nicht mehr mit dem Leckerli ins Sitz, sondern gib ihm das Kommando Sitz zusammen mit dem Sichtzeichen",
                "richtig": "Sitz",
                "richtigText":"Super!",
                "falsch":"Springen",
                "falschText":"Du hältst die Hand mit dem Leckerli etwas zu hoch, versuche es etwas tiefer.",
                "nichts":"Sonstiges",
                "nichtsText":"Du hältst die Hand mit dem Leckerli etwas zu weit hinten, versuche es etwas weiter vorne.",
                "Wiederholungen":1,
                "Zurueckstufen":true,
                "ZurueckstufenText":"Dein Hund scheint noch nicht ganz verstanden zu haben, was du möchtest, wiederhole Schritt 2 noch ein paarmal"
            }
        ]

    },{
        "name": "Platz Training",
        "shortDescription":"Nachdem dein Hund das Kommando „Sitz“ gelernt hat, ist es jetzt an der Zeit für das Kommando „Platz“.",
        "Description":"Nachdem dein Hund das Kommando „Sitz“ gelernt hat, ist es jetzt an der Zeit für das Kommando „Platz“. Dein Hund hat jetzt schon ein Gefühl dafür bekommen, wie das Training funktioniert und ihm wird es immer einfacher fallen zu verstehen, was du von ihm möchtest.",
        "needs":"Dein Hund sollte bereits das Kommando Sitz beherrschen.\n" +
            "Bereite ein paar Leckerlis vor, die Dein Hund sehr gerne mag und halte sie in deiner Hosentasche bereit.",
        "noted":"Achte darauf, dass du die Aufmerksamkeit deines Hundes hast, bevor du die Übungen startest. Belohne das Verhalten deines Hundes dann, wenn dein Hund das Kommando richtig ausführt, das Belohnungssignal wird dir beim Timing helfen. Unerwünschtes Verhalten solltest du einfach ignorieren und die Übung einfach nochmal versuchen.",
        "img":platz,
        "steps":[
            {
                "Schritt":"Schritt 1",
                "Beschreibung":"Nimm ein Leckerli in deine Hand und bewege es senkrecht an der Nase deines Hundes vorbei, während dein Hund sitzt.",
                "richtig": "Platz",
                "richtigText":"Super!",
                "falsch":"",
                "falschText":"",
                "nichts":"Sonstiges",
                "nichtsText":"Zeige deinem Hund die Belohnung, die ihn erwartet, und probiere die Übung einfach nochmal.",
                "Wiederholungen":2,
                "Zurueckstufen":false,
            },
            {
                "Schritt":"Schritt 2",
                "Beschreibung":"Mache weiter wie im ersten Schritt, sag aber dabei jetzt „Platz“ und zeige deine flache Hand als Sichtsignal.",
                "richtig": "Platz",
                "richtigText":"Super!",
                "falsch":"",
                "falschText":"",
                "nichts":"Sonstiges",
                "nichtsText":"Zeige deinem Hund die Belohnung, die ihn erwartet, und probiere die Übung einfach nochmal.",
                "Wiederholungen":1,
                "Zurueckstufen":false,
            },
            {
                "Schritt":"Schritt 3",
                "Beschreibung":"Führe jetzt deinen Hund nicht mehr mit dem Leckerli ins Sitz, sondern gib ihm das Kommando Sitz zusammen mit dem Sichtzeichen",
                "richtig": "Platz",
                "richtigText":"Super!",
                "falsch":"",
                "falschText":"",
                "nichts":"Sonstiges",
                "nichtsText":"Zeige deinem Hund die Belohnung, die ihn erwartet, und probiere die Übung einfach nochmal.",
                "Wiederholungen":1,
                "Zurueckstufen":true,
                "ZurueckstufenText":"Dein Hund scheint noch nicht ganz verstanden zu haben, was du möchtest, wiederhole Schritt 2 noch ein paarmal"
            }
        ]

    },


]


function Home() {
    const [stepIndex,setStepIndex] = useState(0);
    const navigate = useNavigate();
    function handleChange(selectedIndex) {
        setStepIndex(selectedIndex)
    }
    function handleClick() {
        console.log("klick")
        navigate("/lesson",{
            state: lektionen[stepIndex]
        });
    }

    return (
        <div className="App">
            <div className="top-section">
                <div className="header">
                    <h1 className="App-headline">DogBot</h1>
                    <img src={rewardsImg} className="rewards"/>
                </div>
                <p className="intro-text">Durch den Einsatz eines Marker Signal kann du erwünschtes Verhalten Deines</p>
                <div className="highlight-box">
                    <div className="img-div"><img className="marker-img" src={markerImg}/></div>
                    <div className="highlight-box-content">
                        <h2 className="highlight-box-headline">Marker Training</h2>
                        <a className="highlight-start">Jetzt starten</a>
                    </div>
                </div>
                <p className="subheadline">Verfügbare Lektionen</p>
            </div>

            <div className="preview-lesson-box">
                <Carousel showIndicators={true} showStatus={false} showThumbs={false} infiniteLoop={true} onChange={handleChange} >
                    {lektionen.map(item =>  <Preview step={item}></Preview>)}
                </Carousel>
                <div className="preview-lesson-box-content-short-description-button-div">
                    <button className="button" onClick={handleClick}>Los gehts</button>
                </div>

            </div>


        </div>
    );
}

export default Home;


