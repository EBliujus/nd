import './App.scss';
import Autoriai from './Components/React-base/Autoriai';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Autoriai book1={"Tomo Sojerio nuotykiai"} book2={"15 metu kapitonas"} color="aqua" />


      </header>
    </div>
  );
}

export default App;
