import { store } from "./slices/index";
import App from "./components/App";
import { Provider } from "react-redux";

const init = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default init;
