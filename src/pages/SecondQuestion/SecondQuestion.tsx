import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import './FirstQuestion.css'

export function FirstQuestion() {

    const navigate = useNavigate();
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const mainAnswer: string[] = [];

    function handleClickAnswer(answer: string) {
        mainAnswer.push(answer)
        navigate('/2st')
    }

    useEffect(() => {
        if (loading) {
            api.get('/questions/3').then(response => {
                console.log(response.data);

                setQuestion(response.data.message)
                setAnswers(response.data.answers)
            })
            setLoading(false)
        }
    }, [])

    return (
        <div className='first-question-container'>
            <div className='first-question-container-title'>
                <h1>Primeira pergunta:</h1>
                <p>{question}</p>
            </div>
            <div className='first-question-container-answers'>
                {answers.map(answer => {
                    return (
                        <div onClick={() => handleClickAnswer(answer)}>
                            <p>{answer}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}