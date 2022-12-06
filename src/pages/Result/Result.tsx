import React, { useEffect } from 'react'
import { API_URL } from '../../config/env'

function Result() {
    const hero = JSON.parse(localStorage.getItem("hero") as string)
    console.log(hero)

    useEffect(() => {

    }, [])

    return (
        <div>
            <img src={`${API_URL}/images/${hero.profilePicture}`} alt="" />
        </div>
    )
}

export default Result