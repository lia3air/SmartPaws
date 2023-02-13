import {React, useEffect, useState, useRef} from "react";
import './Preview.css';
import {useNavigate} from 'react-router-dom';





function Preview(props) {
    const navigate = useNavigate();
    const step = props.step;



    return (
        <div>


                    <img className="lesson-img" src={step.img}/>
                    <div className="preview-lesson-box-content">
                        <div className="preview-lesson-box-content-header">
                            <h2 className="preview-lesson-box-content-headline">{step.name}</h2>
                            <p className="preview-lesson-box-content-steps">{step.steps.length} Schritte</p>
                        </div>
                        <p className="preview-lesson-box-content-short-description">{step.shortDescription}</p>

                    </div>




        </div>
    );
}

export default Preview;