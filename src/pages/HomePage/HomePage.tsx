import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export function HomePage() {

    const navigate = useNavigate();

    return (
        <div className='home-page-container'>
            <button onClick={() => navigate('/1st')} className='StartButton'>Começar!</button>
        </div>
    )

}