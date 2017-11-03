import React, { Component } from 'react';
import MovieList from './components/MovieList';

class App extends Component {

  state = {}

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
          .catch( err => console.log('error..'));
  }

  _renderMovies = () => {
    const movies = <MovieList movies={this.state.movies} />
    return movies;
  }

  render() {
    console.log(this.state.movies);
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : <div>Loading..</div> }
      </div>
    );
  }
}


export default App;
