import { useEffect, useState } from 'react';//2 bendraujam su serveriu
import axios from 'axios';//2 bendraujam su serveriu
import './App.css';
import './bootstrap.css';



function App() {

  const [manikiuras, setManikiuras] = useState([]);//2 bendraujam su serveriu ir issitraukiam info 

  useEffect(() => { //2 bendraujam su serveriu ir issitraukiam info 
    axios.get('http://localhost:3003/manikiuro-salonas')
    .then(res => {
      console.log(res.data);//2 bendraujam su serveriu ir issitraukiam info 
      setManikiuras(res.data);//2 bendraujam su serveriu ir issitraukiam info 
    })
  },[])

  return (
    <div className="p-contai">
      <div className="stulpeliu-tevas">
        <div className="stulpeliu-vaikas1">
          <div className="titleee">
            <h2>Manikiuro sarasas</h2>
          </div>
          <ul className="">
                {
                  manikiuras.map(m => <li className="list-group-item" key={m.id}>{m.vardas}</li>)//2 bendraujam su serveriu ir issitraukiam info 
                }
              </ul>
        </div>
        <div className="stulpeliu-vaikas1">
          <div className="titleee">
            <h2>Manikiuras</h2>
          </div>
          <div className="">
            <ul className="">
              {
                 manikiuras.map(m => <li className="list-group-item" key={m.id}>{m.vardas}</li>)//2 bendraujam su serveriu ir issitraukiam info 
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
