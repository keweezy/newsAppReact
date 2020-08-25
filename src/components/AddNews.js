import React, { useEffect, useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import './NewsList.css';

const AddNews = ({ addedNews }) => {
  const [newsData, setNewsData] = useState([]);
  const [itemCount, setItemCount] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('news')){
      const newsData1 = JSON.parse(localStorage.getItem('news'));
      if (newsData1.length >= 1) {
        console.log(newsData1)
        setItemCount(false);
        setNewsData(newsData1);
      }
    }
  }, []);

  const executeOnClick = (isExpanded) => {
    // console.log(isExpanded);
  };
  const deleteNews = (index1) => {
    if (window.confirm ('Delete? ')){
      let item = [];
      item = JSON.parse(localStorage.getItem('news'));
      for (var i = 0; i < item.length; i++) {
        item.splice(index1, 1);
        break;
      }
      localStorage.setItem('news', JSON.stringify(item));
      const newsData1 = JSON.parse(localStorage.getItem('news'));
      if(newsData1.length <1) {
        setItemCount(true)
        console.log('less than 1')
      }
      setNewsData(newsData1);
      addedNews();
    }
  };

  const myStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'start',
    marginTop: '30px',
    marginLeft: '70px',
  };

  const New1 = newsData.map((sNews, index) => {
    return (
      <div key={index}>
        <div className="news">
          <div className="title">TITLE: {sNews.title}</div>
          <ShowMoreText
            lines={3}
            more="Show more"
            less="Show less"
            anchorClass=""
            onClick={executeOnClick}
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
        <button
          className='del-button'
          onClick={() => {
            deleteNews(index);
          }}
        >
          X Delete News
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1 style={{ position: 'relative', top: '35px' }}>Added News</h1>
      {itemCount ? (<h3>No added News</h3>) : null}
      <div style={myStyle}>{New1}</div>
    </div>
  );
};

export default AddNews;
