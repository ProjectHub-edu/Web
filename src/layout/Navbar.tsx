import React from 'react'
import './Navbar.scss'
import icon from './assets/projecthub.png'
import profile from './assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <img src={icon} alt="project hub icon" />
                </li>
                <li><span>Project Hub</span></li>
            </ul>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faBell} size='xl' />
                </li>
                <li>
                    <FontAwesomeIcon icon={faPlus} size='xl' />
                </li>
                <li>
                    <img src={profile} alt="profile icon" />
                </li>
            </ul>
        </nav>
    )
}
