import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppMenu from "./AppMenu";
import { configureStore } from "@reduxjs/toolkit";
import atmReducer from "./ex4/AtmSlice";

const store = configureStore({
  reducer: {
    atm: atmReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppMenu />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
