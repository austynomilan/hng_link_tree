import Profile from './component/profile';
import './profile.css'
import Linker from './component/links';
import './links.css'
import Footer from './component/footer';
import './footer.css'
import Socials from './component/socials';
import './social.css'



function App(){
    return(
        <div className='App'>
            <Profile />
            <Linker  />
            <Socials />
            <Footer />
        </div>
    )
}

export default App