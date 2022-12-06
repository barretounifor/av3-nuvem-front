import React from 'react'
import { useRoutes } from 'react-router-dom'
import { FifthQuestion } from '../pages/FifthQuestion/FifthQuestion'
import { FirstQuestion } from '../pages/FirstQuestion/FirstQuestion'
import { FourthQuestion } from '../pages/FourthQuestion/FourthQuestion'
import { HomePage } from '../pages/HomePage/HomePage'
import Result from '../pages/Result/Result'
import { SecondQuestion } from '../pages/SecondQuestion/SecondQuestion'
import { ThirdQuestion } from '../pages/ThirdQuestion/ThirdQuestion'
function Container() {

    const startPage = {
        path: '/home',
        element: <HomePage />,
    }
    const firstQuestion = {
        path: '/1st',
        element: <FirstQuestion />,
    }
    const secondQuestion = {
        path: '/2st',
        element: <SecondQuestion />,
    }
    const thirdQuestion = {
        path: '/3st',
        element: <ThirdQuestion />,
    }
    const fourthQuestion = {
        path: '/4st',
        element: <FourthQuestion />,
    }

    const fifthQuestion = {
        path: '/5ft',
        element: <FifthQuestion />,
    }
    const result = {
        path: '/result',
        element: <Result />,
    }

    const routes = useRoutes([
        startPage,
        firstQuestion,
        secondQuestion,
        thirdQuestion,
        fourthQuestion,
        fifthQuestion,
        result
    ])

    return (
        <div>
            {routes}
        </div>
    )
}

export default Container