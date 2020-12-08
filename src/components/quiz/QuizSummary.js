import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component {
    constructor (props) {
        super (props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
            this.setState ({
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            });
        }
        
    }

    render () {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30) {
            remark = 'Please give more time to Islam!';
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time!';
        } else if (userScore > 50 && userScore <= 70) {
            remark = 'MashaAllah but Their is still room for Improvement!'
        } else if (userScore > 70 && userScore <= 85) {
            remark = 'Subhan Allah. You did great!';
        } else {
            remark = 'Subhan Allah you are an absolute genius!';
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                    <div className= "success">
                        <span className= "mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                        <h3 className= "done">Allhamdullillah! The quiz has ended</h3>
                        
                        <div className= "container statistics">
                            <h3 className= "remark">{remark}</h3>

                            <h2 className= "score">Your Score: {this.state.score.toFixed(0)}&#37;</h2>

                            <span className= "stat">Total number of questions:
                                <span className= "stats"> {this.state.numberOfQuestions}</span>
                            </span><br/>

                            <span className= "stat">Total number of Attempted questions:
                                <span className= "stats"> {this.state.numberOfAnsweredQuestions}</span>
                            </span><br/>

                            <span className= "stat">Total number of Correct questions:
                                <span className= "stats"> {this.state.correctAnswers}</span>
                            </span><br/>

                            <span className= "stat">Total number of wrong questions:
                                <span className= "stats"> {this.state.wrongAnswers}</span>
                            </span><br/>

                            <span className= "stat">Hints Used:
                                <span className= "stats"> {this.state.hintsUsed}</span>
                            </span><br/>

                            <span className= "stat">50-50 Used:
                                <span className= "stats"> {this.state.fiftyFiftyUsed}</span>
                            </span><br/>
                        </div>
                    <section>
                        <ul className="buttons">
                            <li>
                                <button className= "home"><Link className= "page" to= "/">Go back to Home page</Link></button>
                            </li>
                            <li>
                                <button className= "again"><Link className="page" to= "/play/quiz">Run this quiz again</Link></button>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <h1 className= "no-stats">No statistics Available</h1>
                    <ul>
                        <li>
                            <Link to= "/">Go back to Home page</Link>
                        </li>
                        <li>
                            <Link to= "/play/quiz">Run this quiz</Link>
                        </li>
                    </ul>
                </section>
                
            );
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                {stats}
            </Fragment>
        );
    }
}

export default QuizSummary;