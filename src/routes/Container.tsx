import React from 'react'
import { useRoutes } from 'react-router-dom'
import { FirstQuestion } from '../pages/FirstQuestion/FirstQuestion'
import { HomePage } from '../pages/HomePage/HomePage'
function Container() {

    const startPage = {
        path: '/home',
        element: <HomePage />,
    }
    const firstQuestion = {
        path: '/1st',
        element: <FirstQuestion />,
    }

    const routes = useRoutes([
        startPage,
        firstQuestion
    ])

    return (
        <div>
            {routes}
        </div>
    )
}

export default Container