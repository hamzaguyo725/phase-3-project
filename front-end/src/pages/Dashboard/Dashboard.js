import { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const posterbaseurl = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(`https://phase-3-project-w1v8.onrender.com/movies`)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.filter((m) => m.genre === "now_playing"));
        setTopRated(data.filter((m) => m.genre === "top_rated"));
        setPopular(data.filter((m) => m.genre === "popular"));
      });
  }, []);

  let moviesList = movies.map((m) => {
    return (
      <div
        onClick={() => {
          setMovieData(m);
          setMovieActive(true);
        }}
        className="grid-card"
      >
        <img src={`${posterbaseurl + m.poster_path}`} />

        <div className="movie-details">
          <h1>{m.original_title}</h1>
          <p>{m.overview}</p>
        </div>
        <div className="movie-options">
          {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="bookmark"
              height="56"
              width="56"
              fill="aliceblue"
            >
              <g data-name="Layer 2">
                <path
                  d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"
                  data-name="bookmark"
                ></path>
              </g>
            </svg>
          </div> */}
        </div>
      </div>
    );
  });

  let topratedList = topRated.map((m) => {
    return (
      <div
        onClick={() => {
          setMovieData(m);
          setMovieActive(true);
        }}
        className="grid-card"
      >
        <img src={`${posterbaseurl + m.poster_path}`} />

        <div className="movie-details">
          <h1>{m.original_title}</h1>
          <p>{m.overview}</p>
        </div>
        {/* <div className="movie-options">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              
              
              
              
            >
              <g data-name="Layer 2">
                <path
                  d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"
                  data-name="bookmark"
                ></path>
              </g>
            </svg>
          </div>
        </div> */}
      </div>
    );
  });

  const popularList = popular.map((m) => {
    return (
      <div
        onClick={() => {
          setMovieData(m);
          setMovieActive(true);
        }}
        className="movie-card"
      >
        <img src={`${posterbaseurl + m.poster_path}`} />
        <div className="movie-details">
          <h1>{m.original_title}</h1>
          <p>{m.overview}</p>
        </div>
      </div>
    );
  });

  console.log(popular);

  const [isMovieActive, setMovieActive] = useState(false);
  let maskClass = isMovieActive ? "active" : "disabled";
  let sectClass = isMovieActive ? "active" : "disabled";

  //   movie states

  const [movieData, setMovieData] = useState({});

  console.log(movieData);

  return (
    <>
      <main className="dashboard-page">
        <nav>
          <div className="nav-section"></div>
          <div id="links-box" className="nav-section">
            <a href="#trending-now">Home</a>
            <a href="#trending-now">Popular</a>
            <a href="#now-playing">Now playing</a>
            <a href="#top-rated">Top rated</a>
          </div>
        </nav>
        <section id="main-body">
          <section id="trending-now">
            <div id="trend-cont">
              <h2 className="cont-title">Trending now</h2>
              <div id="trend-slider">{popularList}</div>
            </div>
          </section>
          <section id="now-playing" className="movie-sect">
            <h2 className="cont-title">Now Playing</h2>
            <div className="movie-slider">{moviesList}</div>
          </section>
          <section id="top-rated" className="movie-sect">
            <h2 className="cont-title">Top rated</h2>
            <div className="movie-slider">{topratedList}</div>
          </section>
        </section>
      </main>
      <section
        onClick={() => {
          setMovieActive(false);
        }}
        className={`mask mask-${maskClass}`}
      >
        <main
          onClick={(e) => {
            e.stopPropagation();
            setMovieActive(true);
          }}
          className={`movie-sect-${sectClass} flex`}
        >
          <div className="main-sect">
            <img src={`${posterbaseurl + movieData.poster_path}`} />
          </div>
          <div id="info-sect">
            <h1>{movieData.original_title}</h1>
            <p>{movieData.overview}</p>
            <h4 className="release-date">
              Release date on: {movieData.release_date}
            </h4>
            <div className="ratings-cont">
              <div className="rating">
                <h3>Popularity : </h3>
                <h3>{movieData.popularity}</h3>
              </div>
              <div className="rating">
                <h3>Vote Count : </h3>
                <h3>{movieData.vote_count}</h3>
              </div>
              <div className="rating">
                <h3>Average vote : </h3>
                <h3>{movieData.vote_average}</h3>
              </div>
            </div>
          </div>
        </main>
        <div
          onClick={() => {
            setMovieActive(false);
          }}
          className="close-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 512 512"
            id="close"
            fill="#222"
          >
            <path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
