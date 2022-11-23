import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import './FourthQuestion.css'

export function FourthQuestion() {

    const navigate = useNavigate();
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const mainAnswer: string[] = JSON.parse(localStorage.getItem('answers') as string);
    function handleClickAnswer(answer: string) {
        mainAnswer.push(answer)
        localStorage.setItem('answers', JSON.stringify(mainAnswer))
        console.log(localStorage);
        navigate('/5ft')
    }

    useEffect(() => {
        if (loading) {
            api.get('/questions/4').then(response => {
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
                <h1>Quarta pergunta:</h1>
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