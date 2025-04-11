import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import ErrorBoundary from "./helpers/ErrorBoundary.jsx";

  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';




createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrorBoundary>
        <StrictMode>
          <App />
        </StrictMode>
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>
);
