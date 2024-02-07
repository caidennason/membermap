import logo from './logo.svg';
import './App.css';
import USAMap from 'react-usa-map';

function App() {
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <div className="App">
      <USAMap onClick={mapHandler} />
    </div>
  );
}

export default App;
