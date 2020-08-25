import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Redirect } from 'react-router-dom';
import newsApi from '../api/newsApi';
import News from './NewsList';
import './Home.css';
ReactModal.setAppElement('#root');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newsFeeds: [],
      catGroup: 'health',
      showModal: false,
      newsPosted: false,
      bckgrdHeight: true,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.onSearchSubmit();
    this.handleOpenModal()
    
    // this.random()
  }
  random() {
    let data = JSON.parse(localStorage.getItem('news'));
    console.log(data.length);
    let m = data.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = data[m];
      data[m] = data[i];
      data[i] = t;
    }
    let randomData = data;
    randomData.splice(4);
    console.log(randomData);
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
    const response = await newsApi.get('/v2/everything', {
      params: { q: 'bitcoin', language: 'en' },
    });

    this.setState({ newsFeeds: response.data.articles });
  };

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  addNews = (event) => {
    const { addedNews } = this.props;
    event.preventDefault();
    let newsInfo = this.getNewsInfo();
    let newsData = [];
    if (localStorage.getItem('news') !== null) {
      newsData = JSON.parse(localStorage.getItem('news'));
    }
    newsData.push(newsInfo);
    localStorage.setItem('news', JSON.stringify(newsData));
    this.handleCloseModal();
    addedNews();
    this.setState({ newsPosted: true });
    alert('News Added');
  };

  render() {
    if (this.state.newsPosted) {
      return <Redirect to="/Added News" />;
    }
    return (
      <div
        style={{ background: '#95afaf', border: 'solid 1px transparent', height:'100%' }}
        className={this.state.bckgrdHeight ? 'height' : 'home'}
      >
        <h1
          style={{
            margin: '38px',
            fontFamily: 'cursive',
            fontSize: 'xxx-large',
            position: 'relative',
          }}
        >
          Daily NEWS
        </h1>
        <button onClick={this.handleOpenModal} className="open-modal">
          Create News
        </button>
        <ReactModal isOpen={this.state.showModal}>
          <p className="h4-1 text-center">CREATE NEWS</p>
          <button onClick={this.handleCloseModal} className="close-modal">
            X Close Modal
          </button>
          <div className="">
            <form onSubmit={this.addNews} style={{ background: 'transparent' }}>
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
              <div className="spacing">
                <label>Subject:</label>
                <input
                  type="text"
                  id="defaultRegisterFormSubject"
                  className="form-control mb-4 mb-4-1"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="spacing">
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
                  style={{ height: '175px' }}
                  required
                />
              </div>
              <div className="spacing">
                <label>Author:</label>
                <input
                  type="text"
                  id="defaultRegisterFormAuthor"
                  className="form-control mb-4 mb-4-1"
                  placeholder="Author"
                  required
                />
              </div>
              <div className="spacing">
                <label>urlToImage</label>
                <input
                  type="file"
                  id="defaultRegisterFormUrlToImage"
                  className="form-control mb-4 mb-4-1"
                  placeholder="urlToImage"
                  required
                />
              </div>
              <div className="date-created">
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
        <div className="newsField">
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
