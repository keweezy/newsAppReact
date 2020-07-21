import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import './Header.css'

class Header extends Component {
  state = {
    activeIndex: null,
  };
  handleClick = (index) => this.setState({ activeIndex: index });
  render() {
    const clickables = [
      { name: 'Home' },
      { name: 'Login' },
      { name: 'Register' },
      { name: 'TopNews' }
    ];
    return (
      <div>
        <ul>
          {clickables.map((clickable, i) => {
            return (
              <NavbarHeader
                key={clickable.name}
                name={clickable.name}
                index={i}
                isActive={this.state.activeIndex === i}
                onClick={this.handleClick}
              />
            );
          })}
        </ul>
      </div>
    )
  }
}

export default Header;
