import './App.css';
import Pegs from './peg/Pegs';

function App() {
  const fills = ["#ff0000","#0000ff","#008000","#ffff00"];
  const complete = false;
  return (
    <div className="App" width="auto" >
      <div class="divTable">
        <div class="divTableBody">
          <Pegs className="Pegs" complete={complete} colours={fills}/>
        </div>
      </div>
    </div>
  );
}

export default App;
