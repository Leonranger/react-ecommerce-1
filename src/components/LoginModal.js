import React from 'react';
import { Button, Header, Icon, Modal, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { startLogin, startFacebookLogin } from '../actions/auth';

export class LoginModal extends React.Component {
    facebookLogin = () => (
        this.props.startFacebookLogin()
    );
    googleLogin = () => (
        this.props.startLogin()
    );
    render() {
        return (
            <Modal size={'mini'} trigger={<Icon className='cursor' name='user plus' size='large'/>}>
              <Modal.Header>BrandName</Modal.Header>
              <Modal.Content>
              <div>
                  <Button onClick={this.facebookLogin} fluid size={'medium'} color='facebook'>
                      <Icon name='facebook' size={'big'}  /> Login with Facebook
                  </Button>
              </div>
              <Divider horizontal>Or</Divider>
              <div>
                  <Button onClick={this.googleLogin} fluid size={'medium'} color='google plus'>
                      <Icon name='google plus' size={'big'} /> Login with Google 
                  </Button>
              </div>
              </Modal.Content>
            </Modal>
          );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginModal);

