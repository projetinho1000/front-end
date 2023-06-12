import { useState, useEffect } from "react";
import MovieCard from "components/MarketCard";
import { Register } from "@Types/register";
import { getMovie } from "service/getMovie";
import "./styles.css";

function Listing() {
  const [page, setPage] = useState<Register[] | null>(null);
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    getMovie().then((response) => {
      console.log(response)
      setPage(response);
    });
  }, []);

  const filteredMovies = page?.filter((movie) =>
    movie.category.some((category) =>
      category.toLowerCase().includes(searchCategory.toLowerCase())
    )
  );

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          placeholder="Pesquisar por categoria"
        />
      </div>
      <div className="container">
        <div className="row">
          {filteredMovies?.map((movie) => (
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
