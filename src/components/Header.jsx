
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class Header extends React.Component {

	render() {
        function myFunction() {
            var x = document.getElementById("myTopnav");
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
							<Link to='/user-signin'>User SignIn</Link>
							<Link to='/user-signout'>User SignOut</Link>
						</div>
				</div>
              <Link to="#news">News</Link>
              <Link className="top-right" to="search">Search</Link>
              {/* this will togglebtw with signin and signout */}
              <Link className="top-right" to="#signin">SignIn</Link> 
              <Link className="top-right" to="#signup">SignUp</Link>
              <Link to="javascript:void(0);" className="icon" onclick="myFunction()">
                  <i className="fa fa-bars"></i>
             </Link>
        </div>
	  )
	}
  }

export default Header;