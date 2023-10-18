import './App.css';
import Navbar from './components/navbar';
import Edusection from './components/edusection';
import Edubrowser from './components/edubrowse';
import Educhoose   from './components/educhoose';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Edusection/>
      <Edubrowser/>
      <Educhoose/>
    </div>
  );
}

export default App;
