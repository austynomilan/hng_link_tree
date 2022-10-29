import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack,faGithub } from '@fortawesome/free-brands-svg-icons'


class Socials extends Component {
    render() { 
        return (
            <div className="socials">
                <ul>
                    <li>
                        <a href=""><FontAwesomeIcon icon={faSlack} /></a>
                    </li>
                    <li>
                    <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Socials;