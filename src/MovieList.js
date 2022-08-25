import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "./global";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getMovies());
  };

  const history = useHistory();

  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary, id,_id }, index) => (
        <Movie
          key={_id}
          deleteButton={
            <Button
              onClick={() => {
                deleteMovie(_id);
              }}
            >
              <IconButton aria-label="delete" color="error">
                <DeleteIcon />
              </IconButton>
            </Button>
          }
          editButton={
            <Button
              onClick={() => {
                history.push(`/movie/edit/${_id}`);
              }}
            >
              <IconButton aria-label="edit" color="secondary">
                <EditIcon />
              </IconButton>
            </Button>
          }
          id={_id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
        />
      ))}
    </div>
  );
}
