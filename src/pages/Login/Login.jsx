import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/DRIPDROP.png';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import './Login.css'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/user/UserAction';

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-0"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Choose your login provider:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center mb-1"
                    onClick={() => this.props.signInWithGoogle()}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Login with Google</span>
                </button>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() =>{console.log(this.props); this.props.signInWithFacebook()}}
                >
                    <Facebook className="w-50 mr-3"/>
                    <span className="text-nowrap">Login with Facebook</span>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogle: () => dispatch(loginUser("Google")),
        signInWithFacebook: () => dispatch(loginUser("Facebook"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);