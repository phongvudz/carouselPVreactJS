import "./App.css";
import Carousel from "./components/Carousel";
import { countries } from "./components/Data";

function App() {
  return (
    <div className="App">
      <div className="topContent">
        <h1>Hello , My name is Phong Vũ</h1>
        <h3>My carousel ReactJS</h3>
      </div>
      <Carousel images={countries} />
    </div>
  );
}

export default App;
