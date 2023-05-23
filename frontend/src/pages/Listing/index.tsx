import { useState, useEffect } from "react";
import MovieCard from "components/MarketCard";
import Pagination from "components/Pagination";
import { Register, RegisterPage } from "@Types/register";
import { getMovie } from "service/getMovie";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<Register[] | null>(null);

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
          <div key={1} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard register={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
