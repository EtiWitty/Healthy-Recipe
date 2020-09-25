
import React from 'react';

class Header extends React.Component {

	render() {
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }
        
	  return (
		<div className="topnav" id="myTopnav">
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                <i className="fa fa-bars"></i>
             </a>
        </div>
	  )
	}
  }

export default Header;