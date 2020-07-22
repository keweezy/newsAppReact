import React, { Component } from 'react';
import News from './NewsList';
import newsApi from '../api/newsApi';
import SearchBar from './SearchBar';
// import Background from '../images/new-york-1745089_1920.jpg';

class TopNews extends Component {
  state = { newsFeeds: [] };
  componentDidMount() {
    this.onSearchSubmit('entertainment');
  }

  onSearchSubmit = async (catGroup) => {
    console.log(catGroup);
    const response = await newsApi.get('/v2/top-headlines', {
      params: { category: catGroup },
    });
    // console.log(response.data.articles);
    this.setState({ newsFeeds: response.data.articles });
  };

  executeOnClick(isExpanded) {
    // console.log(isExpanded);
  }
  render() {
    const myStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'start',
      marginTop: '30px',
      marginLeft: '70px',
    };

    return (
      <div>
        {/* <img src={require('../images/new-york-1745089_1920.jpg')} alt='alternative'/> */}
        <h1 style={{ margin: '38px' }}>Top Headlines</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
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

export default TopNews;
