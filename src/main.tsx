import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cofigureReduser from "./features/configure.ts";

const store = configureStore({
  reducer: {
    configure: cofigureReduser,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
