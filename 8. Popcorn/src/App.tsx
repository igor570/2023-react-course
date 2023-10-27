import "./App.css";
import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";

import Search from "./Components/Search/Search";
import NumResults from "./Components/NumResults/NumResults";
import ListBox from "./Components/ListBox/ListBox";
import WatchedBox from "./Components/WatchedBox/WatchedBox";
import MovieList from "./Components/ListBox/MovieList/MovieList";

export default function App() {
  const tempMovieData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt6751668",
      Title: "Parasite",
      Year: "2019",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
  ];
  const [movies, setMovies] = useState(tempMovieData);
  /*Made NavBar, Main & ListBox accept children, which will be any component we wrap it in
  This makes the navbar fully dynamic, and we can add or remove any component
  from it. */
  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox />
      </Main>
    </>
  );
}
