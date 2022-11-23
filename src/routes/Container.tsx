import React from 'react'
import { useRoutes } from 'react-router-dom'
import { FifthQuestion } from '../pages/FifthQuestion/FifthQuestion'
import { FirstQuestion } from '../pages/FirstQuestion/FirstQuestion'
import { FourthQuestion } from '../pages/FourthQuestion/FourthQuestion'
import { HomePage } from '../pages/HomePage/HomePage'
import { SecondQuestion } from '../pages/SecondQuestion/SecondQuestion'
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
    const fourthQuestion = {
        path: '/4st',
        element: <FourthQuestion />,
    }

    const fifthQuestion = {
        path: '/5ft',
        element: <FifthQuestion />,
    }

    const routes = useRoutes([
        startPage,
        firstQuestion,
        secondQuestion,
        fourthQuestion,
        fifthQuestion
    ])

    return (
        <div>
            {routes}
        </div>
    )
}

export default Container