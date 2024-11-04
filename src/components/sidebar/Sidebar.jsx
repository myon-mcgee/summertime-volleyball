import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return(
      <aside className='aside'>
          <a href="#home" className="nav__logo">
              <img src={Logo} alt="" />
          </a>

          <nav className="nav">
              <div className="nav__menu">
                  <ul className="nav__list">
                      <li className="nav__item">
                          <a href="#home" className="nav__link">
                              <i className='icon-home'>
                                <div className="icon_text">
                                    <Link to="/">home</Link>
                                </div>
                              </i>
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="" className="nav__link">
                              <i className="icon-camrecorder">
                                <div className="icon_text">
                                <Link to="/video">video</Link>
                                </div>
                              </i>
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="" className="nav__link">
                              <i className="icon-bubble">
                                <div className="icon_text">Contact</div>
                              </i>
                          </a>
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
    )
}

export default Sidebar