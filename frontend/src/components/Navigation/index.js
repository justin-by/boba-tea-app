import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux';
import React, { useState, useEffect } from 'react';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { useHistory } from 'react-router';
import './Navigation.css';

function Navigation({ isLoaded }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  // const [search, setSearch] = useState('')

  useEffect(() => {

  })


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <div>
      <NavLink className='nav_ele' exact to={`/drinks/users/${sessionUser.id}`}>My Drinks</NavLink>
      <ProfileButton user={sessionUser} />
    </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className='nav_ele' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
  <header className='nav_header'>
    <nav className='nav_bar'>
      <ul className='nav_list'>
        <li>
          <div className='header_logo_container' onClick={(e) => history.push('/')}>
            <img className='header_logo' src='https://i.imgur.com/MnOo4i6.png'></img>
          </div>
          <NavLink className='nav_ele' exact to="/drinks">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Navigation;
