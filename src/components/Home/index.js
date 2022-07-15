// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeStyles = isDarkTheme
        ? 'home-body-container dark-body'
        : 'home-body-container light-body'

      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeHeadingStyles = isDarkTheme
        ? 'heading light-heading'
        : 'heading dark-heading'

      const renderHomeBody = () => (
        <div className={homeStyles}>
          <img src={homeImgUrl} alt="home" className="home-img" />
          <h1 className={homeHeadingStyles}>Home</h1>
        </div>
      )

      return (
        <div className="home-container">
          <Navbar />
          {renderHomeBody()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
