import logo from './logo.svg';
import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Activities></Activities>
    </div>
  );
}

export default App;
