// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutStyles = isDarkTheme
        ? 'about-body-container dark-body'
        : 'about-body-container light-body'

      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutHeadingStyles = isDarkTheme
        ? 'heading light-heading'
        : 'heading dark-heading'

      const renderAboutBody = () => (
        <div className={aboutStyles}>
          <img src={aboutImgUrl} alt="about" className="about-img" />
          <h1 className={aboutHeadingStyles}>About</h1>
        </div>
      )

      return (
        <div className="about-container">
          <Navbar />
          {renderAboutBody()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
