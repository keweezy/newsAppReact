import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';
import './NewsList.css';

class AddNews extends Component {
  constructor() {
    super();
    // let newsData = JSON.parse(localStorage.getItem('news'))
    this.state = { newsData: [] };
  }

  componentDidMount() {
    if (localStorage.getItem('news')) {
      // newsData.push(localStorage.getItem('news'))
      let newsData1 = JSON.parse(localStorage.getItem('news'));
      this.setState({ newsData: newsData1 });
    }
  }
  executeOnClick(isExpanded) {
    // console.log(isExpanded);
  }
  render() {
    const myStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'start',
      marginTop: '30px',
      //   background: '#d6d1d1',
      marginLeft: '70px',
    };
    const New1 =() => this.state.newsData.map((sNews, index) => {
      return (
        <div className="news" key={index}>
          <div className="title">TITLE: {sNews.title}</div>
          <ShowMoreText
            lines={3}
            more="Show more"
            less="Show less"
            anchorClass=""
            onClick={this.executeOnClick}
            expanded={false}
            width={280}
          >
            <div className="">SUBJECT: {sNews.subject}</div>
            <br></br>
            <div className="">CATEGORY: {sNews.category}</div>
            <br></br>
            <div className="content">BODY: {sNews.body}</div>
            <br></br>
            <div className="">UrlToImage: {sNews.urlToImage}</div>
            <br></br>
            <div className="author">AUTHOR: {sNews.author}</div>
            <br></br>
            <div className="publish">Date Created: {sNews.dateCreated}</div>
          </ShowMoreText>
        </div>
      );
    });

    return (
      <div >
          <h1>Added News</h1>
        <div style={myStyle}><New1 /></div>
      </div>
    );
  }
}

export default AddNews;
