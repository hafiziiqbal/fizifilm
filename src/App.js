import './style/landing-page.css'
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import Trending from './components/Trending';
import Superhero from './components/Superhero';

function App() {
  return (
    <div>

      <div className='my-bg'>
        <NavigationBar />
        <Intro />
      </div>

      <div id='trending' className='trending'>
        <Trending />
      </div>

      <div id='superhero' className='superhero'>
        <Superhero />
      </div>


    </div>
  );
}

export default App;