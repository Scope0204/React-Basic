import { useParams } from "react-router";
import { useEffect, useState, useCallback } from "react";

function Detail() {
  const { id } = useParams();
  // const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  console.log(id);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    // setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <h1>Detail</h1>;
}

export default Detail;
