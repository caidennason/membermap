import logo from './logo.svg';
import Navbar from './Navbar/Navbar';

function App() {
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <div>
      <Navbar />
      <br></br>
    </div>
  );
}

export default App;
