import logo from './logo.svg';
import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Activities></Activities>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
