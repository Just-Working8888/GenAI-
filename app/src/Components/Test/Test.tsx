import React, { useState } from 'react';
import { Table, Divider, Button } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import classes from './Test.module.scss'

import { AudioOutlined } from '@ant-design/icons';


interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

interface SurveyProps {
    questions: Question[];
}

const Survey: React.FC<SurveyProps> = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const addAudioElement = (blob: any) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
    };

    const handleAnswerSelect = (answer: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = answer;
        setAnswers(updatedAnswers);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    const calculateScore = () => {
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const columns = [
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
        },
        {
            title: 'Correct Answer',
            dataIndex: 'correctAnswer',
            key: 'correctAnswer',
        },
        {
            title: 'Your Answer',
            dataIndex: 'yourAnswer',
            key: 'yourAnswer',
        },
    ];

    const dataSource = questions.map((question, index) => ({
        key: index,
        question: question.question,
        correctAnswer: question.correctAnswer,
        yourAnswer: answers[index],
    }));

    const data = questions.map((question, index) => ({
        name: question.question,
        correct: answers[index] === question.correctAnswer ? 1 : 0,
    }));

    return (
        <div>
            {showResults ? (
                <div>
                    <h2>Results</h2>
                    <p>Your score: {calculateScore()} / {questions.length}</p>
                    <Table columns={columns} dataSource={dataSource} />
                    <Divider />
                    <LineChart width={600} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="correct" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            ) : (
                <div>
                    {currentQuestion && (
                        <div>
                            {/* <SurveyQuestion
                                question={currentQuestion.question}
                                options={currentQuestion.options}
                                correctAnswer={currentQuestion.correctAnswer}
                            /> */}

                            <div className={classes.Upload_content} >
                                <div className={classes.Upload_content_uploaded}>
                                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="" />
                                </div>
                                <h2>{currentQuestion.question}</h2>
                                <div className={classes.Upload_content_actions}>
                                    {currentQuestion.options.map((option, index) => (
                                        <li key={index}>
                                            <button onClick={() => handleAnswerSelect(option)}>
                                                {option}
                                            </button>
                                        </li>
                                    ))}
                                </div>
                            </div>

                            {/* <ul>
                                {currentQuestion.options.map((option, index) => (
                                    <li key={index}>
                                        <button onClick={() => handleAnswerSelect(option)}>
                                            {option}
                                        </button>
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    )}
                </div>
            )}
            {/* {questions.map((question, index) => (
                <SurveyQuestion
                    key={index}
                    question={question.question}
                    options={question.options}
                    correctAnswer={question.correctAnswer}
                />
            ))} */}
            {/* <AudioRecorder
                onRecordingComplete={addAudioElement}
                audioTrackConstraints={{
                    noiseSuppression: true,
                    echoCancellation: true,
                }}
                downloadOnSavePress={true}
                downloadF
                ileExtension="webm"
            /> */}
            <Button><AudioOutlined /></Button>
        
        </div>
    );
};

export default Survey;
