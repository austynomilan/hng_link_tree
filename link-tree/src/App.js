import Profile from './component/profile';
import './profile.css'
import Linker from './component/links';
import './links.css'
import Footer from './component/footer';
import './footer.css'
import Socials from './component/socials';
import './social.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'

function App(){
    return(
        <Router>
            <div className='App'>
            <Profile />
            <Linker  />
            <Socials />
            <Footer />
        </div>
        </Router>
    )
}

export default App