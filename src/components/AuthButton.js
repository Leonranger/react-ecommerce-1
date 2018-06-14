import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import LoginModal from './LoginModal';
import LogoutModal from './LogoutModal';

export class AuthButton extends React.Component {
    render(){
        return (
            this.props.isAuthenticated ? (
                <LogoutModal />
            ) : (
                <LoginModal />
            )
        ); 
    }
};


const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});


export default connect(mapStateToProps)(AuthButton);