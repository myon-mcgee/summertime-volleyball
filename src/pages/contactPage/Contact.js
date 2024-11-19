import Sidebar from '../../components/sidebar/Sidebar' 
import Contact from '../../components/contact/Contact'
import '../../App.css';

function Home() {
    return (
        <>
            <Sidebar/>
            <main className='main'>
                <Contact/>
            </main>
        </>
    )
}

export default Home;