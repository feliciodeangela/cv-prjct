import './App.css';
import General from './components/General';
import Education from './components/Education';
import Professional from './components/Professional';

function App() {
  return (
    <div className="App">
      <h1>Curriculum Vitae</h1>
      <General/>
      <Education/>
      <Professional/>
    </div>
  );
}

export default App;
