
import React from 'react';
import SignInButton from '../components/SignInButton';
import SignOutButton from '../components/SignOutButton';
import { Link } from 'react-router-dom';


class Header extends React.Component {

	render() {
    function myFunction() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += "responsive";
        } else {
          x.className = "topnav";
        }
      }
        
	  return (
      <div className="topnav" id="myTopnav">
        <div className="dropdown">
            <button className="dropbtn">Healthy Recipes</button>
              <div className="dropdown-content">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/show-all-recipes'>All Recipes</Link>
                <Link to='/mindful-choice'>	Mindful Choice </Link>
                <Link to='/detail-recipe'>Recipe Detail</Link>
                <Link to='/admin-page'>Admin Page</Link>
                <Link to='/user-info'>User Info</Link>
              </div>
          </div>
                <Link className="top-right" to="search">Search</Link>
                {/* this will toggle btw signin/signup and signout */}
                <Link className="top-right" to="#signin">  <SignInButton /> </Link> 
                <Link className="top-right" to="#signout"> <SignOutButton /> </Link>
                <Link to="javascript:void(0);" className="icon">
                    <i className="fa fa-bars"></i>
              </Link>
          </div>
	  )
	}
}

export default Header;