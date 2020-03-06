import React from 'react';
import axios from 'axios';
import Movie from "./Movie";
import "./Movie.css";
import "./App.css";

class App extends React.Component{
  state={
    isLoading: true,
    movies: [],
  };

  getMovies = async () => { //이 함수는 비동기 함수임을 알려줌 그리고 내부에서
    //어떤게 비동기 함수인지 알려주고 걔가 끝날때까지 기다리라고함
    const {
      data:{
        data:{ movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({
      movies,
      isLoading:false,
    });
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
        <>
          <section className="container">
            {isLoading ? (
                <div className="loader">
                  <span className="loader_text">Loading...</span>
                </div>
            ) : (
                <div className="movies">
                  {movies.map(movie => (
                      <Movie
                          key={movie.id}
                          title={movie.title}
                          summary={movie.summary}
                          poster={movie.medium_cover_image}
                          id={movie.id}
                          year={movie.year}
                          genres={movie.genres}
                      />
                  ))}
                </div>
            )}
          </section>
        </>
    )
  }
}

export default App;
