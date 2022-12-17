import React from "react";
import "./search.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  return (
    <div className="Search container">
      <div className="appBoxes">
        At your current location it's 22:47 on Wednesday 26 Oct
        <form className="searching">
          <strong>Choose a city</strong>
          <br />
          <input
            type="search"
            id="searchbox"
            placeholder="Search🔎"
            autoComplete="off"
            autofocus
          />
          <button
            type="submit"
            className="btn btn-danger btn-sm"
            id="go-Button"
          >
            Go!
          </button>
          <br />
          <button
            type="submit"
            className="btn btn-primary btn-sm"
            id="my-location-button"
          >
            Use my location
          </button>
          <button
            type="submit"
            className="btn btn-info btn-sm "
            id="carl-button"
            onClick="window.open('https://www.google.com/search?q=carl+weathers&rlz=1C1CHBF_en-GBGB885GB885&sxsrf=ALiCzsZU_daEZk_l2M6nM4P933JEBv_Arw:1653429787893&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjQhaz5kfn3AhWxRfEDHQVfDCEQ_AUoAXoECAIQAw&biw=887&bih=985&dpr=0.9')"
          >
            Show me Carl!
          </button>
        </form>
      </div>
    </div>
  );
}
