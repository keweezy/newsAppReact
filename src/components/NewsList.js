import React from 'react';
import ShowMoreText from 'react-show-more-text';
import './NewsList.css';

const News = (props) => {

  return props.newsFeeds.map((news, index) => {
    return (
      <div className="news" key={index}>
        <div className="title">{news.title}</div>
        <ShowMoreText
          lines={3}
          more="Show more"
          less="Show less"
          anchorClass=""
          onClick={props.executeOnClick}
          expanded={false}
          width={280}
        >
          <div className="content">{news.content}</div>
          <div className="publish">Published at: {news.publishedAt}</div>
          <div className="author">Written by: {news.author}</div>
        </ShowMoreText>
      </div>
    );
  });
};

export default News;
