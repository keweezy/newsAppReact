import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import '../style.css'
const App = () => {
  const [addedNews, setAddedNews] = useState([]);
  useEffect(() => {
    async function init() {
      const data = await localStorage.getItem('news');
      setAddedNews(JSON.parse(data));
    }
    init();
  }, []);

  const onDisplay = () => {
    const data = localStorage.getItem('news');
    setAddedNews(JSON.parse(data));
  };

  return (
    <div>
      <Header state={addedNews} />
      <Main addedNews={onDisplay} />
    </div>
  );
};

export default App;
