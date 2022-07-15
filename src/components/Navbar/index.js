// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const footImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeChangeBtnImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <div
          className={
            isDarkTheme
              ? 'navbar-container dark-navbar'
              : 'navbar-container light-navbar'
          }
        >
          <nav className="nav-container">
            <img src={footImgUrl} alt="website logo" className="website-logo" />
            <ul className="nav-links-list">
              <Link to="/" className="router-link">
                <li
                  className={
                    isDarkTheme ? 'nav-link light-link' : 'nav-link dark-link'
                  }
                >
                  Home
                </li>
              </Link>
              <Link to="/about" className="router-link">
                <li
                  className={
                    isDarkTheme ? 'nav-link light-link' : 'nav-link dark-link'
                  }
                >
                  About
                </li>
              </Link>
            </ul>
            <button
              type="button"
              className="theme-change-btn"
              testid="theme"
              onClick={() => toggleTheme()}
            >
              <img src={themeChangeBtnImg} alt="theme" className="theme-img" />
            </button>
          </nav>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
