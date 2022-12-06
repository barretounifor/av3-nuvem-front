import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import './FifthQuestion.css'

export function FifthQuestion() {

    const navigate = useNavigate();
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const mainAnswer: any[] = JSON.parse(localStorage.getItem('answers') as string);

    function handleClickAnswer(answer: any) {
        localStorage.setItem("hero", JSON.stringify(answer))
        navigate('/result')
    }

    useEffect(() => {
        if (loading) {
            api.post('/hero-matches', {
                options: mainAnswer
            }).then(response => {
                console.log(response);

                setAnswers(response.data)

            }).catch(err => console.log(err))
            setLoading(false)
        }
    }, [])

    return (
        <div className='first-question-container'>
            <div className='first-question-container-title'>
                <h1>Quinta pergunta:</h1>
                <p>{question}</p>
            </div>
            <div className='first-question-container-answers'>
                {answers.map(answer => {
                    return (
                        <div onClick={() => handleClickAnswer(answer)}>
                            <p>{answer.caracteristicas[4]}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}