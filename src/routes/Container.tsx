import React from 'react'
import { useRoutes } from 'react-router-dom'
import { FirstQuestion } from '../pages/FirstQuestion/FirstQuestion'
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

    const routes = useRoutes([
        startPage,
        firstQuestion,
        secondQuestion
    ])

    return (
        <div>
            {routes}
        </div>
    )
}

export default Container