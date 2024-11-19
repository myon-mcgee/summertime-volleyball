import React from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import Contact from "../../components/contact/Contact"
import VideoPlayer from "../../components/videoPlayer/VideoPlayer"
import "./tape.css"

function Tape() {

    return (
        <>
            <Sidebar/>
            <main className='main'>
                <VideoPlayer/>
                <Contact/>
            </main>
        </>
    )
}

export default Tape