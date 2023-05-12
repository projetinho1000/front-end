import { useState, useEffect } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { Movie, MoviePage } from "types/movie";
import { getMovie } from "service/getMovie";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<Movie[] | null>(null);

  useEffect(() => {
    getMovie().then((response) => {
      setPage(response);
    });
  }, []);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div className="container">
      <div className="row">
        {page?.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
