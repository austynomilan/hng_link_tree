import Profile from './component/profile';
import './profile.css'
import Linker from './component/links';
import './links.css'
import Footer from './component/footer';
import './footer.css'

function App(){
    return(
        <div className='App'>
            <Profile />
            <Linker  />
            <Footer />
        </div>
    )
}

export default App