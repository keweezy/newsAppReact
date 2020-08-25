import React, { Component } from 'react';

class SearchBar extends Component {
  state = { catGroup: 'entertainment' };

  onFormSubmit = (event) => {
    if(event.target.value === this.state.catGroup) {
      // console.log('if condition')
      return
    }
    event.preventDefault();
    this.props.onSubmit(this.state.catGroup);
  };

  onChange = (e) => {
    if(e.target.value === this.state.catGroup) {
      return
    } else {

      this.setState({catGroup: e.target.value})
    }
  }

  render() {
    const searchPosition = {
      position: 'relative',
      left: '110px',
      bottom: '77px',
    };
    const searchStyle = {
      marginLeft: '5px',
      background: '#dedada',
      padding: ('2px', '4px'),
      borderRadius: '5px',
    };
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div style={searchPosition}>
            <label htmlFor="cate">View by Category</label>
            <select
              style={{ marginLeft: '5px', padding: ('0px', '4px'), borderRadius:'4px' }}
              id="cate"
              name="cate"
              value={this.state.catGroup}
              onChange={this.onChange}
            >
              <option value="sport">Sport</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="general">General</option>
              <option value="entertainment">Entertainment</option>
              <option value="technology">Technology</option>
            </select>
            <input type="submit" style={searchStyle} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
