import React from 'react'
import {Link} from 'react-router-dom'
import MapIcon from '@mui/icons-material/Map';
import GradeIcon from '@mui/icons-material/Grade';
import NumbersIcon from '@mui/icons-material/Numbers';
import PeopleIcon from '@mui/icons-material/People';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CookieSharpIcon from '@mui/icons-material/CookieSharp';


export default function Sidebar() {
  return (
    <div className="sidebar">

        <h1 className="logo">
            <CookieSharpIcon style={{color: 'rgb(58, 134, 255)', fontSize: '1.4em'}} />
            <span>pokecluster</span>
        </h1>

        <nav>
            <ul>
                <li>
                    {/* <NumbersIcon/> */}
                    <Link to="/">
                        <NumbersIcon/>
                        National Pokedex
                    </Link>
                </li>
                <li>
                    <Link to="/regions">
                        <MapIcon/>
                        Regions
                    </Link>
                </li>
                <li>
                    <Link to="/daily">
                        <GradeIcon/>
                        Daily Pokemon
                    </Link>
                </li>
                <li>
                    <Link to="/legendaries">
                        <AutoStoriesIcon/>
                        Legendaries
                    </Link>
                </li>
                <li>
                    <Link to="/types">
                        <WhatshotIcon/>
                        Types
                    </Link>
                </li>
                <li>
                    <Link to="/community">
                        <PeopleIcon/>
                        Community
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
