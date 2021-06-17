import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/DRIPDROP.png';

import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/user/UserAction';

function Header(props) {
    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="react-shop" className="logo"/>
                </Link>
                <div>
                    
                    <div className="d-flex justify-content-end">
                        { props.user
                            ? <p className ="mb-0 btn" style = {{cursor: 'context-menu'}}>Hello, {props.user.displayName}!</p>
                            : null
                        }
                        { props.user
                            ? <p className="logout h5 mb-0 btn" onClick={() => props.signOut()}>Logout</p>
                            : <Link to="/login" className="h5 mb-0 btn">Login</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="d-flex btn">
                                <i className="bi bi-bag-fill ml-2"></i>
                                <p className="ml-1 mb-0">{ props.numberOfProducts }</p>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center">
                            <Link to="/favorites" className="d-flex btn">
                                <i className="bi bi-star-fill ml-2"/>
                                <p className="ml-1 mb-0">{ props.numberOfFavorites }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        numberOfFavorites: state.favorites.products.length,
        user: state.user.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);