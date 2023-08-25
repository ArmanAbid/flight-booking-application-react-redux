import BookingApp from "./components/BookingApp";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookingApp />
      </div>
    </Provider>
  );
}

export default App;
