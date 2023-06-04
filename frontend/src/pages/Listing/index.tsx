import { useState, useEffect } from "react";
import MovieCard from "components/MarketCard";
import { Register } from "@Types/register";
import { getMovie } from "service/getMovie";
import "./styles.css";

function Listing() {
  const [page, setPage] = useState<Register[] | null>(null);

  useEffect(() => {
    getMovie().then((response) => {
      setPage(response);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {page?.map((movie) => (
            <div key={1} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard register={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
