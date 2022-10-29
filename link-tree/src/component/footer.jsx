import React, { Component } from 'react'

class Footer extends Component {
    render() { 
        return (
        <div className='footer'>
            <ul>
                <li className='Zuri'>
                    <img src="/img/Vector.png" alt="Zuri logo"  />
                    <img className='dot' src="/img/dot.png" alt="a dot"  />
                </li>
                <li>HNG internship 9 Frontend Task</li>
                <li><img src="/img/I4G.png" alt="ingressive for good logo"  /></li>
            </ul>
        </div>
        );
    }
}
 
export default Footer;