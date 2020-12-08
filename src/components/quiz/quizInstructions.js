import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import answer from '../../assets/img/answer.PNG';
import options from '../../assets/img/options.PNG';
import hints from '../../assets/img/hints.PNG';
import fiftyfifty from '../../assets/img/fiftyfifty.PNG';
import { Link } from 'react-router-dom';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Islamic Quiz App</title></Helmet>
        <div className= "instructions container">
            <h1>How to run this quiz</h1>
            <p>Asalam O Alikum Player: Please make sure you read this guide from start to finish. Jazak Allah</p>
            <ul className= "browser-default" id= "main-list">
                <li>Start the quiz by reciting Bismillah</li>
                <li>The quiz has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each category consists of 15 questions.</li>
                <li>
                    Every question contain 4 options. 
                    <img src= {options} alt= "Islamic quiz app options example" />
                </li>
                <li>
                    Select option which best answers the question by clicking on it. Correct answer will display Subhan Allah on your screen. 
                    <img src= {answer} alt= "Islamic quiz app answer example"/>
                </li>
                <li>
                    Each category has 2 lifelines namely.
                    <ul id= "subtitles">
                        <li>2 50-50 lifeline</li>
                        <li>5 hints</li>
                    </ul>
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the icon
                    <span className= "mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    will remove 2 wrong answers leaving with one wrong answer and one correct answer.
                    <img src= {fiftyfifty} alt= "Islamic quiz app answer example"/>
                </li>
                <li>
                    Using a hint by clicking the icon
                    <span className= "mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
                    will remove one wrong answer leaving with two wrong answers and one right answer. 
                    You can use these hints as many times as possible in one question.
                    <img src= {hints} alt= "Islamic quiz app hints example" />
                </li>
                <li>Feel free to quit from the quiz anytime. In that case your score will be revealed afterwards</li>
                <li>The timer starts as soon as the quiz loads</li>
                <li>Let's start this Islamic quiz if you are up to it.</li>
                <li>Jazak Allah</li>
            </ul>
            <div>
                <span className= "left"><Link to= "/">Allah Hafiz</Link></span>
                <span className= "right"><Link to= "/play/quiz">Bismillah</Link></span>
            </div>
        </div>
    </Fragment>
);

export default QuizInstructions;