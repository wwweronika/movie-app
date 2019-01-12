import React from 'react';
import ReactDOM from 'react-dom';
import LatestMovies from './components/LatestMovies';

const App = () => {
return <LatestMovies />
};

ReactDOM.render(<App />, document.querySelector('#root'));