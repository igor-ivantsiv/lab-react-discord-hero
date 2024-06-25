// src/App.jsx
import discordLogo from './assets/discord-logo-white.png'
import burgerMenu from './assets/menu-icon.png'
import bgImage from './assets/discord-background.png'
import './App.css';
import './components/buttons.jsx'


function App() {
  return (
    <div className="App">
      <section className='navbar'>
        <img src={discordLogo} className='logo' alt="discord logo" />
        <img src={burgerMenu} className='menu' alt="menu icon" />
      </section>
      <section className='content'>
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div className='awkwardDiv'>
        <div className='buttons'>
        <button className='download'>Downlaod for Mac</button>
        <button className='browser'>Open Discord in your browser</button>
        </div>
        <img src={bgImage} className = 'image' alt="discord image" />
        </div>
      </section>
    </div>
  );
}

export default App;