import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(<React.Fragment>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.Fragment>, document.getElementById("root"));