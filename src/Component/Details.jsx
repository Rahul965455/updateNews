import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
  const { publishedAt } = useParams();
  const [getData, setgetData] = useState([]);
  
  const apiGetData = () => {
    fetch("https://newsapi.org/v2/everything?q=india&apiKey=8055a94fced24bc5941e62085675b3d1")
      .then((gdata) => gdata.json())
      .then((pay) => Object.values(pay)[2][publishedAt])
      .then((now) => setgetData(now));
  };

  useEffect(() => {
    apiGetData();
  }, []);

  const ShowDetails = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={getData.urlToImage}
            alt={getData.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{getData.title}</h4>
          <h1 className="display-5">{getData.title}</h1>
          <p className="lead fw-bolder">
            <p className="lead">{getData.description}</p>
          </p>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <ShowDetails />
        </div>
      </div>
    </div>
  );
};

export default Details;
