import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import './Header.css';

class Header extends Component {
  state = {
    activeIndex: 0,
  };
  // componentDidMount = (index) => {
  //   console.log(index)
  //   this.setState({activeIndex:index})
  // }
  // handleActive = (ind) => this.setState({activeIndex: })
  handleClick = (index) => this.setState({ activeIndex: index});
  render() {
    const clickables = [
      { name: 'Home' },
      { name: 'Login' },
      { name: 'Register' },
      { name: 'Top News' },
      { name: 'Added News' }
    ];
    return (
      <div>
        <ul>
          {clickables.map((clickable, i) => {
            // let activeName = clickable.name;
            // console.log(activeName)
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
    );
  }
}

export default Header;
