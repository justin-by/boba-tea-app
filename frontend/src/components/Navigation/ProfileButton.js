import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router";

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const redirectProfile = (e) => {
    e.preventDefault();
    history.push(`/profile/${sessionUser.id}`)
  }

  return (
    <>
      <button onClick={openMenu} className='profile_button'>
        <i className="fas fa-user" />
      </button>
      {showMenu && (
      <div className='div_dropdown'>
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <span className='clickable-dropdown' onClick={logout}>Log Out</span>
          </li>
          <li>
            <span className='clickable-dropdown' onClick={redirectProfile}>Profile</span>
          </li>
        </ul>
      </div>
      )}
    </>
  );
}

export default ProfileButton;
