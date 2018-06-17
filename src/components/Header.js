import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import AuthButton from './AuthButton';
import SearchInput from './SearchInput';
import { fixProductsData } from '../selectors/product';

export class Header extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu inverted fixed='top' size='large'  >
          <Menu.Item>
              <SideBar />
          </Menu.Item>
          <div className='search-input'>
              <SearchInput products={fixProductsData(this.props.products)} />
          </div>
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

const mapStateToProps = (state) => ({
   cartLength: state.shoppingCart.length,
   products: state.products
});

export default connect(mapStateToProps)(Header);