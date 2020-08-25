import axios from 'axios';

export const newsService = {
    getNews
}

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('f735b8d472c0412f9964bdd7242d05c9');

// newsapi.v2.topHeadlines({
//     sources: 'bbc-news,the-verge',
//     q: 'bitcoin',
//     category: 'business',
//     language: 'en',
//     country: 'us'
//   }).then(response => {
//     console.log(response);
//     /*
//       {
//         status: "ok",
//         articles: [...]
//       }
//     */
//   });

  
  function getNews () {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('f735b8d472c0412f9964bdd7242d05c9');
    
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
      }).then(response => {
        // console.log(response);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
      });
  }