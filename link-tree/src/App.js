import Profile from './component/profile';
import './profile.css'
import Linker from './component/links';
import './links.css'

function App(){
    return(
        <div className='App'>
            <Profile />
            <Linker  />
        </div>
    )
}

export default App