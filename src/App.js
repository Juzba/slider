import Card from "./components/Card";
import data from "./data"

function App() {
    return <div className="appContainer">
      <Card {...data[0]}/>
    </div>
}

export default App;
