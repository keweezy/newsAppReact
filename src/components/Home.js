import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {Redirect } from 'react-router-dom'
import newsApi from '../api/newsApi';
import News from './NewsList';
import './Home.css'
ReactModal.setAppElement('#root');

class Home extends Component {
  constructor() {
    super();
    this.state = { newsFeeds: [], catGroup: 'health', showModal: false, newsPosted: false };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentDidMount() {
    this.onSearchSubmit();
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  getNewsInfo = () => {
    return {
      title: document.getElementById('defaultRegisterFormTitle').value,
      subject: document.getElementById('defaultRegisterFormSubject').value,
      category: document.getElementById('defaultRegisterFormCategory').value,
      body: document.getElementById('defaultRegisterFormBody').value,
      author: document.getElementById('defaultRegisterFormAuthor').value,
      urlToImage: document.getElementById('defaultRegisterFormUrlToImage')
        .value,
      dateCreated: document.getElementById('defaultRegisterFormDateCreated')
        .value,
    };
  };

  onSearchSubmit = async () => {
    console.log();
    const response = await newsApi.get('/v2/everything', {
      params: { q: 'bitcoin', language: 'en' },
    });
    // console.log(response.data.articles);
    this.setState({ newsFeeds: response.data.articles });
  };

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  //   componentDidUpdate = async () => {
  //     await this.setState({ newsFeeds: this.response.data.articles });
  //   }
  addNews = (event) => {
    event.preventDefault();
    let newsInfo = this.getNewsInfo();
    let newsData = [];
    if (localStorage.getItem('news') !== null) {
      newsData = JSON.parse(localStorage.getItem('news'));
    }
    newsData.push(newsInfo);
    localStorage.setItem('news', JSON.stringify(newsData));
    this.setState({newsPosted: true})
    this.handleCloseModal();
    alert('News Added');
    // return <Redirect to='/AddedNews' />
  };

  render() {
    if (this.state.newsPosted) {
      console.log('e reach here')
      return <Redirect to="/AddedNews" />;
    }
    return (
      <div>
        <h1 style={{ margin: '38px' }}>NEWS</h1>
        <button onClick={this.handleOpenModal} className='open-modal'>Create News</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel=""
        >
            <p className="h4-1 text-center">CREATE NEWS</p>
          <a onClick={this.handleCloseModal} className='close-modal'>X Close Modal</a>
          <div className="">
            <form
              className=""
              onSubmit={this.addNews}
            >
             <div>
             <label>Title:</label>
              <input
                type="text"
                id="defaultRegisterFormTitle"
                className="form-control mb-4 mb-4-1"
                placeholder="Title"
                required
              />
             </div>
             <div className='spacing'>
             <label>Subject:</label>
              <input
                type="text"
                id="defaultRegisterFormSubject"
                className="form-control mb-4 mb-4-1"
                placeholder="Subject"
                required
              />
             </div>
             <div className='spacing'>
               <label>Category:</label>
               <input
                type="text"
                id="defaultRegisterFormCategory"
                className="form-control mb-4 mb-4-1"
                placeholder="Category"
                required
              />
             </div>
              
              <div>
                <label>Body:</label>
                <input
                type="text"
                id="defaultRegisterFormBody"
                className="form-control mb-4 mb-4-1"
                placeholder="Body"
                style={{height: '175px'}}
                required
              />
              </div>
              <div  className='spacing'>
                <label>Author:</label>
                <input
                type="text"
                id="defaultRegisterFormAuthor"
                className="form-control mb-4 mb-4-1"
                placeholder="Author"
                required
              />
              </div>
              <div className='spacing'>
                <label>urlToImage</label>
                <input
                type="text"
                id="defaultRegisterFormUrlToImage"
                className="form-control mb-4 mb-4-1"
                placeholder="urlToImage"
                required
              />
              </div>
              <div className='date-created'>
                <label>Date Created</label>
                <input
                type="text"
                id="defaultRegisterFormDateCreated"
                className="form-control mb-4 mb-4-1"
                placeholder="Date Created"
                required
              />
              </div>

              <button className="post" type="submit">
                Post News
              </button>
            </form>
          </div>
        </ReactModal>
        <div className='newsField'>
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
