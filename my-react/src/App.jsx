import { useEffect, useState } from 'react';//2 bendraujam su serveriu
import axios from 'axios';//2 bendraujam su serveriu
import './App.css';
import Create from './Components/Create';
//import './bootstrap.css';



function App() {

  const [manikiuras, setManikiuras] = useState([]);//2 bendraujam su serveriu ir issitraukiam info
  
  const [CreateData, setCreateData] = useState({})

  useEffect(() => { //2 bendraujam su serveriu ir issitraukiam info 
    axios.get('http://localhost:3003/manikiuro-salonas')
    .then(res => {
      console.log(res.data);//2 bendraujam su serveriu ir issitraukiam info 
      setManikiuras(res.data);//2 bendraujam su serveriu ir issitraukiam info 
    })
  },[])

  //3.mygtuko paspaudimas- kuris is Create.jsx paims informaciaj (kai paspausim mygtuka) ir ja issius ir irasys i serveri
  useEffect(() => {

  },[CreateData])

  return (
    <div className="p-contai">
      <div className="stulpeliu-tevas">
        <Create></Create>
        <div className="stulpeliu-vaikas1">
          <div className="titleee">
            <h2>Manikiuras list</h2>
          </div>
          <div className="sarasas">
            <ul >
              {
                 manikiuras.map(m => <li  key={m.id}>{m.vardas}</li>)//2 bendraujam su serveriu ir issitraukiam info 
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
