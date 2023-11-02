import Button_block from './component/Interface_button.js'
import PlayerBlock from './component/Player.js';
import XenosBlock from './component/Xenos.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>Warhammer 40k battle simulator</div>
        <div className='container'><Button_block /></div>
      </header>
    </div>
  );
}

export default App;
