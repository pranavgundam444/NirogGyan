import React from 'react'
import Cookies from 'js-cookie'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = ({logged}) => {

    const onClickLogout = () => {
      logged(false)
      Cookies.remove('jwt_token')
      Cookies.remove('role')
      Cookies.remove('name')
      Cookies.remove('id')

    }

  return (
    <div className='containerr'>
        <div className='headerrrr'>
          <div className='list container-fluid'>
            
            <NavLink className='text-decoration-none'>
                <Link to="/home">
                    <li className='d-flex'>
                        <img src="/images/logo.png" className='hsptl-logo' alt="nirogyan" />
                    </li>
              </Link>
            </NavLink>
            
            <NavLink className='text-decoration-none d-flex flex-row justify-content-center align-items-center gap-5'>
                <li className='text-dark viewD'>
                  <Link to='/patient' className='text-decoration-none text-dark'>
                    View Doctors
                  </Link>
                </li>
              <li className='icons'>
                {/* <FontAwesomeIcon icon={faUser} />  */}
                <div className="dropdown">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/user.png"
                    alt="profile icon"
                    className="profile-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{ cursor: "pointer" }}
                  />

                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item">My Profile</button>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item">Settings</button>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <Link to='/patient' className='text-decoration-none text-dark'>
                        <button className="dropdown-item">
                        View Doctors
                      </button>
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={onClickLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </NavLink>
          </div>

        </div>
    </div>
  )
}

export default Header