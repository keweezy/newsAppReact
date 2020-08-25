import React, { useState, useEffect } from 'react';
import NavbarHeader from './NavbarHeader';
import './Header.css';

const Header = ({ state }) => {
  const [activeIndex, setActiveIndex] = useState('Home');
  // const [history, setHistory] = useState()
  const [totalNews, SetTotalNews] = useState(0);
  // active(){

  // }
  const active = () => {
    var pathname = window.location.pathname.split('/');
    if (pathname[1] === 'Top%20News') {
      setActiveIndex('Top News');
    } else if (pathname[1] === 'Added%20News') {
      setActiveIndex('Added News');
    } else {
      setActiveIndex(pathname[1]);
    }
  };

  useEffect(() => {
    // const addedNews1 = [];
    active();
    if (localStorage.getItem('news')) {
      const addedNews1 = JSON.parse(localStorage.getItem('news'));
      SetTotalNews(addedNews1.length);
    }
  }, [state]);

  const handleClick = (name) => setActiveIndex(name);

  const clickables = [
    { name: 'Home' },
    { name: 'Login' },
    { name: 'Register' },
    { name: 'Top News' },
    { name: 'Added News' },
  ];
  return (
    <div className='contain'>
      <ul>
        {clickables.map((clickable, i) => {
          return (
            <NavbarHeader
              key={clickable.name}
              name={clickable.name}
              index={i}
              isActive={activeIndex === clickable.name}
              onClick={handleClick}
            />
          );
        })}
        <li>Total added News [{totalNews}]</li>
      </ul>
    </div>
  );
};

export default Header;
