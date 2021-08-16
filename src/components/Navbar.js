import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store";

const Navbar = () => {
    const auth = useRecoilValue(authenticated)
    return (        
		<nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					ReactJS
				</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink exact className="nav-link" aria-current="page" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
                        {auth.check && 
                            <NavLink className="nav-link" to="/dashboard">
                                Dashboard
                            </NavLink>
                        }
						</li>
                    </ul>
                    {
                        auth.check ?
                    <ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">
								{auth.user.name}
							</NavLink>
						</li>
					</ul>       
                        :
                    
                    <ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" to="/login">
								Login
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/register">
								Register
							</NavLink>
						</li>
					</ul>       
                    }
                    
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
