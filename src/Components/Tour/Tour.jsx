import React, { useState } from "react";
import useGlobalContext from "../ContextData";

function Tour({ id, image, info, price, name }) {
  let [readMore, setReadMore] = useState(false);
  let { tours, setTours } = useGlobalContext();

  function clickMore() {
    setReadMore(!readMore);
  }
  function removeItem(id) {
    tours = tours.filter((item) => item.id !== id);
    setTours(tours);
  }
  return (
    <>
      <div className="col-12 mb-4">
        <div className="tourCard">
          <div className="cardImg">
            <img src={image} alt={name} className="w-100" />
          </div>
          <footer>
            <div className="tour-info d-flex justify-content-between">
              <h4>{name}</h4>
              <h4 className="tour-price"> $ {price}</h4>
            </div>
            <p>
              {readMore ? info : `${info.substring(0, 200)}....`}
              <button onClick={() => clickMore()} className="btnRead">
                {readMore ? "show less" : "read more"}
              </button>
            </p>

            <div className="text-center">
              <button
                className="btn btn-outline-danger "
                onClick={() => removeItem(id)}
              >
                Not Interested
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Tour;
