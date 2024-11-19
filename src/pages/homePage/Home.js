import Sidebar from '../../components/sidebar/Sidebar' 
import Header from '../../components/home/Home'
import Contact from '../../components/contact/Contact'
import '../../App.css';
import './homePage.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleRedirect = () => {
      // Redirect to the /about page
      navigate('/video');
    };

    return (
        <>
            <Sidebar/>
            <main className='main'>
                <Header/>
                <div className='homeVideoFrame'>
                    <iframe
                        src='https://www.youtube.com/embed/JAjdz1obDTg?si=l8vB7dEh6BOiIgoq'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        className='homeVideo'
                    />
                    <button onClick={handleRedirect} className='btn'>Videos</button>
                </div>
                <Contact/>
            </main>
        </>
    )
}

export default Home;