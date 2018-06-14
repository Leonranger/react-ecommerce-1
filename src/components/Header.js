import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Segment, Grid, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import AuthButton from './AuthButton';


export class Header extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu inverted fixed='top' size='large'  >
          <Menu.Item>
              <SideBar />
          </Menu.Item>
          <Menu.Menu position='right'>
            
            <Menu.Item>
            <Link to='/cart'>
            <Icon className='cursor' size='large' name='shop' />
            </Link>
            {this.props.cartLength > 0 && <Label size='mini' color='red' >{this.props.cartLength}</Label> }
            
            </Menu.Item>
            
            <Menu.Item>
              <AuthButton />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => ({ cartLength: state.shoppingCart.length });

export default connect(mapStateToProps)(Header);