import React from "react"
import Sidebar from "../components/sidebar/Sidebar"
import Contact from "../components/contact/Contact"

function Tape() {
    return (
        <>
            <Sidebar/>
            <h2>hello</h2>
            <main className='main'>
                <Contact/>
            </main>
        </>
    )
}

export default Tape