import Sidebar from '../components/sidebar/Sidebar' 
import Header from '../components/home/Home'
import Contact from '../components/contact/Contact'
import '../App.css';

function Home() {
    return (
        <>
            <Sidebar/>
            <main className='main'>
                <Header/>
                <Contact/>
            </main>
        </>
    )
}

export default Home;