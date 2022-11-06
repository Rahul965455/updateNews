import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./News.css"
const News = () => {
  const [data, setData] = useState();

  const getdata = async () => {
    fetch(
      "https://newsapi.org/v2/everything?q=india&apiKey=8055a94fced24bc5941e62085675b3d1"
    )
      .then((gdata) => gdata.json())
      .then((now) => setData(now.articles));
  };

  useEffect(() => {
    getdata();
  }, []);

  const ShowNews = () => {
    return (
      <>
        {data &&
          data.map((article, index) => {
            return (
              <div className="col-md-3 mb-4" key={article.publishedAt}>
                <div
                  className="card h-100 text-center p-4"
                  style={{ width: "250px" }}
                >
                  <img
                    src={article.urlToImage}
                    className="card-img-top"
                    alt={article.title}
                    height="100px"
                  />
                  <div className="card-body">
                    <h6 className="card-title mb-0">
                      {article.content.substring(0, 35)}.......
                    </h6>

                    <NavLink
                      to={`/News/${index}`}
                      className="btn btn-outline-dark mt-3"
                    >
                      Know More
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest News</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowNews />
        </div>
      </div>
    </div>
  );
};

export default News;
