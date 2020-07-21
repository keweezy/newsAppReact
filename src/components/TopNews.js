import React, { Component } from 'react';
import News from './NewsList';
import newsApi from '../api/newsApi';

class TopNews extends Component {
  state = { newsFeeds: [], catGroup: 'entertainment' };
  componentDidMount = async (catGroup) => {
    const response = await newsApi.get('/v2/top-headlines', {
      params: { category: this.state.catGroup },
    });
    // console.log(response.data.articles);
    this.setState({ newsFeeds: response.data.articles });
  };

  executeOnClick(isExpanded) {
    // console.log(isExpanded);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.onSubmit(this.state.catGroup);
  };
  onSubmit(event) {
    console.log(this.state.catGroup);
    this.setState({ catGroup: event });
    console.log(this.state.catGroup);
    this.componentDidMount();
  }
  render() {
    const myStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-evenly',
      marginTop: '30px',
    };
    // this.state.newsFeeds.map(newsFeed => {
    //   let newsKey = newsFeed.url
    // //   console.log(newsKey)
    // });

    return (
      <div>
        <h1 style={{ margin: '38px' }}>NEWS</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search by Category</label>
            <input
              type="text"
              value={this.state.catGroup}
              onChange={(e) => this.setState({ catGroup: e.target.value })}
            />
          </div>
        </form>
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
