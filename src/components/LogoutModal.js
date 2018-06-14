import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal, Confirm } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export class LogoutModal extends React.Component {

  state = { isOpen: false }

  open = () => this.setState({ isOpen: true });
  close = () => this.setState({ isOpen: false });

    render(){
        return (
          <Modal
          open={this.state.isOpen}
          trigger={
            
             <Icon onClick={this.open} className='cursor' name='user x' size='large'/>
            } 
            basic size='small'
         >
           <Header icon='user x' content='Are you sure you want to logout?' />
           <Modal.Content>
           </Modal.Content>
           <Modal.Actions>
             <Button onClick={this.close} basic color='red' inverted>
               <Icon name='remove' /> No
             </Button>
             <Button onClick={this.props.startLogout} color='green' inverted>
               <Icon name='checkmark' /> Yes
             </Button>
           </Modal.Actions>
            </Modal>
          );
    }
}


  const mapDispatchToProps = (dispatch) => ({
      startLogout: () => dispatch(startLogout())
    });
  
  export default connect(undefined, mapDispatchToProps)(LogoutModal);

  // <Modal
  //         onOpen={this.open}
  //         trigger={
  //           <Link to='/'>
  //            <Icon className='cursor' name='user x' size='large'/>
  //           </Link>} 
  //           basic size='small'
  //        >
  //          <Header icon='user x' content='Are you sure you want to logout?' />
  //          <Modal.Content>
  //          </Modal.Content>
  //          <Modal.Actions>
  //            <Button basic color='red' inverted>
  //              <Icon onClick={this.close} name='remove' /> No
  //            </Button>
  //            <Button onClick={this.props.startLogout} color='green' inverted>
  //              <Icon name='checkmark' /> Yes
  //            </Button>
  //          </Modal.Actions>
  //           </Modal>