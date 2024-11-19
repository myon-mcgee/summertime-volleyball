import "./sidebar.css";
import React, {useState} from 'react';
import Logo from "../../assets/Summertime White Element.png";
import {Link} from 'react-router-dom'

const Sidebar = () => {

    const[toggle, showMenu] = useState(false);

    return(
        <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
             <Link to="/" className="nav__logo">
                <img src={Logo} alt="" />
             </Link>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <div className="nav__link">
                                <i className='icon-home'>
                                    <div className="icon_text">
                                        <Link to="/" className="page__links">Home</Link>
                                    </div>
                                </i>
                            </div>
                        </li>

                        <li className="nav__item">
                            <div href="" className="nav__link">
                                  <i className="icon-camrecorder">
                                    <div className="icon_text">
                                        <Link to="/video" className="page__links">Video</Link>
                                    </div>
                                </i>
                          </div>
                        </li>

                        <li className="nav__item">
                            <div href="" className="nav__link">
                                <i className="icon-bubble">
                                    <div className="icon_text">
                                        <Link to="/contact" className="page__links">Contact</Link>
                                    </div>
                                </i>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">
                      &copy; 2024.
                </span>
            </div>
        </aside>

        <div className={toggle ? "nav__toggle nav__toggle-open" : 
            "nav__toggle"} onClick={() => showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
        </>
    )
}

export default Sidebar