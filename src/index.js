import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../scss/index.scss';

const data = [
  { id: 1, author: 'Pete Hunt', text: 'This is one comment' },
  { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' },
];

ReactDOM.render(
  <App title="INDEX" url="/api/comments" />,
  document.getElementById('content')
);
