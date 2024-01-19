import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./components/Heading";
import PaginationButtons from "./components/PaginationButtons";
import Pokemon from "./components/Pokemon";
import Loading from "./components/Loading";

import { Container } from "react-bootstrap";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [count, setCount] = useState(0);
  const [activePageId, setActivePageId] = useState(0);
  const [valuesPerPage] = useState(100);

  // --------------- page urls ----------------
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${valuesPerPage}`
  );

  // ------------- getDataFun --------------
  async function getDataFun(abortController) {
    try {
      setSpinner(true);
      const res = await axios.get(currentPageUrl, {
        signal: abortController.signal,
      });

      const offset = new URLSearchParams(currentPageUrl).get("offset");
      console.log("GET res: ", res.data);

      setCount(res.data.count);
      setActivePageId(offset / 100 + 1);
      setPokemonData(res.data.results);

      setSpinner(false);
    } catch (error) {
      console.log("getData Error: ", error);
      setSpinner(false);
    }
  }

  // --------------- useEffect --------------
  useEffect(() => {
    const abortController = new AbortController();
    getDataFun(abortController);
    return () => abortController.abort();
  }, [currentPageUrl]);

  // console.log(activePageId);

  return (
    <div className="mb-4">
      {spinner ? (
        <Loading />
      ) : (
        <>
          <Heading />
          <Container fluid="sm">
            <Pokemon pokemonData={pokemonData} />
            <PaginationButtons
              count={count}
              valuesPerPage={valuesPerPage}
              activePageId={activePageId}
              setCurrentPageUrl={(val) =>
                setCurrentPageUrl(
                  `https://pokeapi.co/api/v2/pokemon/?limit=${valuesPerPage}&offset=${
                    (val - 1) * 100
                  }`
                )
              }
            />
          </Container>
        </>
      )}
    </div>
  );
}

export default App;
