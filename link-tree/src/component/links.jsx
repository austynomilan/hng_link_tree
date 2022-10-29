import React, { Component } from 'react';

class Linker extends Component {
    render() { 
        return (
        <div className='linkers'>
            <ul>
                <li><a href="https://twitter.com/austynomilan" id='twitter'>Twitter</a></li>
                <li><a href="https://training.zuri.team/">Zuri Team</a></li>
                <li><a href=" http://books.zuri.team ">Zuri Books</a></li>
                <li><a href="https://books.zuri.team/">Python Books</a></li>
                <li><a href="https://background.zuri.team">Background Check For Codes</a></li>
                <li><a href="https://books.zuri.team/design-rules">Design Books</a></li>
            </ul>
        </div>
        );
    }
}
 
export default Linker;