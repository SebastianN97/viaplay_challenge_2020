import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplaySeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchSeries();
  }, []);

  const fetchSeries = async () => {
    let response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga"
      );
    setSeries(
      response.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"]
    );
  };

  let seriesList = series.map((serie) => {
    return (
      <div className="display-show">
        <img
          src={serie.content.images.landscape.url}
          alt={serie.id}
          key={serie.id}
        />
        <h3>{serie.content.series.title}</h3>
      </div>
    );
  });

  return <div className="series-list" data-cy="series-list">{seriesList}</div>;
};

export default DisplaySeries;
