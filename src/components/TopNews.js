import React, { Component } from 'react';
import News from './NewsList';
import newsApi from '../api/newsApi';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
// import Background from '../images/new-york-1745089_1920.jpg';

class TopNews extends Component {
  state = { newsFeeds: [], loading: false };
  componentDidMount() {
    this.onSearchSubmit('entertainment');
  }
  hideLoader = () => {
    this.setState({loading: false})
  }

  showLoader =() => {
    this.setState({loading: true})
  }

  onSearchSubmit = async (catGroup) => {

    if(catGroup === this.state.newsFeeds) {
      return 
    }
    this.showLoader();
    this.setState({newsFeeds: []})
    const response = await newsApi.get('/v2/top-headlines', {
      params: { category: catGroup },
    },
    );
    // console.log(response.data.articles);
    this.hideLoader()
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
          {(this.state.loading) ? <Spinner/> : null}
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
