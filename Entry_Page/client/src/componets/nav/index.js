import React from "react";
import NavStyles from "./Nav.module.css"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { LOGOUT } from "../../redux/const/actionsTypes"

function Nav(props) {
    const dispatch = useDispatch();
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        if (props.auth.authData) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    }, [props.auth])

    function handleLogOut(e) {
        e.preventDefault()

        dispatch({ type: LOGOUT })
    }

    return (
        <nav className={NavStyles.mainNav}>
            <div>
                <h3>UPMS</h3>
            </div>
            <div>
                {authenticated ?
                    <div className={NavStyles.rightSideNav}>
                        <NavLink className={`d-block ${NavStyles.linkBTN}`} activeClassName={NavStyles.active} to="/dashboard">Dashboard</NavLink>
                        <NavLink className={`d-block ${NavStyles.linkBTN} ${NavStyles.addStudent}`} activeClassName={NavStyles.active} to="/students/add">Add student</NavLink>
                        <i className="fa-solid fa-user"></i>
                        <div>
                            <span className="d-block">Account</span>
                            <div className={NavStyles.container2}>
                                <NavLink className={`d-block ${NavStyles.linkBTN}`} activeClassName={NavStyles.active} to="/account/profile">Profile</NavLink>
                                <span className={NavStyles.or}>or</span>
                                <NavLink onClick={handleLogOut} className={NavStyles.linkBTN} to="/">Logout</NavLink>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={NavStyles.rightSideNav}>
                        <NavLink className={`d-block ${NavStyles.linkBTN}`} activeClassName={NavStyles.active} to="/dashboard">Dashboard</NavLink>
                        <i className="fa-solid fa-user"></i>
                        <div>
                            <span className="d-block">Account</span>
                            <div className={NavStyles.container2}>
                                <NavLink className={`d-block ${NavStyles.linkBTN}`} activeClassName={NavStyles.active} to="/account/login">Login</NavLink>
                                <span className={NavStyles.or}>or</span>
                                <NavLink className={NavStyles.linkBTN} activeClassName={NavStyles.active} to="account/signup">Singup</NavLink>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </nav>
    )
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(Nav);

