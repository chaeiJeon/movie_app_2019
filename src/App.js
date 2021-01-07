import React from "react";
import axios from "axios";
import Movie from "./movie"
import "./App.css";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    // =movies.data.data.movies
    this.setState({ movies, isLoading: false });
    // 하나만 써도 javascript는 이해한다. = this.setState({movies:movies})
  };
  // 1. javascript에게 componentDidMount 함수가 끝날 때까지 약간 시간이 걸릴 수 있다고 말해야한다. => getMovies 함수 만들기
  // 2. async를 사용하는 이유 : 함수가 비동기라는 것을 말한다. = "너는 이걸 기다려야 해"
  // 3. await를 사용하는 이유 : 함수 내부에서 "내가 뭘 기다리길 원해?" -> axios를 기다려야 한다는 것을 알림
  // 4. axios가 끝날 때 까지 기다렸다가 계속한다.
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">
            "Loading..."
        </span>
        </div>
      ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id} //안해주면 warning
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )
      }
    </section>
  }
}

export default App;
