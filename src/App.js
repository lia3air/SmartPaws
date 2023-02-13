import {React, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home/Home";
import Kamera from "./kamera/Kamera";
import Lesson from "./Lesson/Lesson";
import HomeZ from "./HomeZ/HomeZ";
import Marker from "./Marker/Marker";
import VideoStream from "./Kamera-Test"



function App() {



  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeZ/>}></Route>
            <Route exact path="/lesson" element={<Lesson/>}></Route>
            <Route exact path="/kamera" element={<Kamera/>}></Route>
            <Route exact path="/Marker" element={<Marker/>}></Route>
            <Route exact path="/t" element={<VideoStream/>}></Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;


