import React, { useEffect } from 'react'
import { API_URL } from '../../config/env'
import "./Result.css"

function Result() {
    const hero = JSON.parse(localStorage.getItem("hero") as string)
    console.log(hero)

    useEffect(() => {

    }, [])

    return (
        <div className='result'>
            <div className='result-container'>
                <h1>Seu herói é o:</h1>
                <img src={`${API_URL}/images/${hero.profilePicture}`} alt="" />
                <h1>{hero.name}</h1>
            </div>
        </div>
    )
}

export default Result