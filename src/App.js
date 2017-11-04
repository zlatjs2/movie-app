import React, { Component } from 'react';
import MovieList from './components/MovieList';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    this._getMovies()
  }

  _getMovies = async() => {
    const movies = await this._callApi();
    this.setState({ movies });
  }

  _callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json')
          .then(response => response.json())
          .then(json => json.data.movies)
          .catch(err => console.log(err));
  }

  _renderMovies = () => {
    const movies = <MovieList movies={this.state.movies} />
    return movies;
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">MovieApp</h1>
        {this.state.movies ? this._renderMovies() : <div>Loading..</div> }
      </div>
    );
  }
}


export default App;
