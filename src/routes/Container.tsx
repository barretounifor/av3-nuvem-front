import React from 'react'
import { useRoutes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
function Container() {

    const startPage = {
        path: '/home',
        element: <HomePage />,
    }

    const routes = useRoutes([
        startPage,
    ])

    return (
        <div>
            {routes}
        </div>
    )
}

export default Container