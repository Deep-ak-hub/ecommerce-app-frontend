import { createRoot } from "react-dom/client";
import "./assets/css/globals.css"
import {App} from "./App";
import { StrictMode } from "react";

// converting real dom into virtual dom because react runs on virtual dom
/* const rootDOM = document.getElementById("root")
const reactDOM = createRoot(rootDOM!)

reactDOM.render(
  <h1>Hello World</h1>      //component
) */

/* createRoot(document.getElementById("root")!).render(
  <div>
    <h1>Hello World</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
      ducimus praesentium est iure nulla aspernatur, tenetur nostrum sapiente
      officia reprehenderit totam iusto amet error ea facere doloremque? Fugit,
      voluptatum laudantium.
    </p>
  </div>
);
*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)