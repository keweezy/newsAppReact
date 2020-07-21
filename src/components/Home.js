import React, { Component } from 'react';
import axios from 'axios';
import News from './NewsList';

class Home extends Component {
  state = { newsFeeds: [] };
  componentDidMount = async () => {
    // var url =
    //   'http://newsapi.org/v2/top-headlines?' +
    //   'country=us&' +
    //   'apiKey=f735b8d472c0412f9964bdd7242d05c9';
    // var req = new Request(url);
    // fetch(req).then(response => {
    //     console.log(response);
    // }).then(response => {
    //     console.log(response);
    // })

    const response = await axios.get(
      'http://newsapi.org/v2/top-headlines?country=us&apiKey=f735b8d472c0412f9964bdd7242d05c9'
    );
    // console.log(response.data.articles);
    this.setState({ newsFeeds: response.data.articles });
  };

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  //   componentDidUpdate = async () => {
  //     await this.setState({ newsFeeds: this.response.data.articles });
  //   }
  render() {
    const myStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-evenly',
      marginTop: '30px',
    };

    return (
      <div>
          <h1 style={{margin:'38px'}}>NEWS</h1>
        <div style={myStyle}>
          <News
            newsFeeds={this.state.newsFeeds}
            onClick={(isExpanded) => this.executeOnClick(isExpanded)}
          />
        </div>
      </div>
    );
  }
}

export default Home;
