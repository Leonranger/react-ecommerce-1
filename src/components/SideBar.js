import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";


export class SideBar extends Component {
  state = { visible: false }

  divStyle = {
    margin: '40px 0 0 0'
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleClickOutside = () => {
    if(this.state.visible){
        this.toggleVisibility();
    }
  };

  render() {
    const { visible } = this.state
    return (
      <div> 
        <Icon className='cursor' name='bars' size='big' onClick={this.toggleVisibility}/>
          <Sidebar
              as={Menu}
              animation='overlay'
              width='thin'
              visible={visible}
              icon='labeled'
              vertical
              inverted
            >
              <Menu.Item name='close' onClick={this.toggleVisibility}>
                  <Icon name='chevron left'/>
              </Menu.Item>
              <Link to='/'>
                  <Menu.Item name='home'>
                    <Icon name='home' />
                      Home
                  </Menu.Item>
              </Link>
              <Link to='/store'>
                  <Menu.Item name='store'>
                    <Icon name='shop' />
                    Store
                  </Menu.Item>
              </Link>
          </Sidebar>
      </div>
    )
  }
}
export default onClickOutside(SideBar);

