import './App.css';
import {useState} from 'react';
import Voiture from './Voiture';

function App() {

  const listVoiture = [{marque: "toyota", couleur:"rouge"}, {marque:"renault", couleur:"verte"}, {marque:"kia", couleur:"orange"}]

  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState("");
  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || []);

  function handleClick() {
    setVal(val+1);
    console.log(val);
  }

  function handleChange(e) {
    setVal2(e.target.value);
    console.log(val2);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(list);
    const tmp = val2;
    const listtmp = [...list, tmp];
    setList(listtmp);
    setVal("");
    localStorage.setItem("list", JSON.stringify(listtmp));
  }
  return (
    <div>
      <button onClick={handleClick}>Cliquez ici</button>
      <h2>Compteur : {val}</h2>

    <form onSubmit={handleSubmit}>
      <input value={val2} onChange={handleChange} type="text" placeholder="Liste"></input>
      <button type="submit">submit</button>
    </form>
    {list.map((e,i) => {
      return (
        <div key={i}>
          {e}
        </div>
      )
    })}

    <div>
      {listVoiture.map((voiture, index) => {
        return(
          <Voiture key={index} marque={voiture.marque} couleur={voiture.couleur}/>
        );
      })}
    </div>

    </div>
  );
}

export default App;