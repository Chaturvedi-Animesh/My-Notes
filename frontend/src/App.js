import './App.css';
import Navbar from './components/navbar';
import NewNote from './components/NewNote';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NewNote/>
      <Notes/>
    </div>
  );
}

export default App;
