import { useEffect, useState } from 'react';//2 bendraujam su serveriu
import axios from 'axios';//2 bendraujam su serveriu
import './App.css';
import Create from './Components/Create';
//import './bootstrap.css';



function App() {

  const [manikiuras, setManikiuras] = useState([]);//2 bendraujam su serveriu ir issitraukiam info
  
  const [createData, setCreateData] = useState(null);//3.mygtuko paspaudimas- kuris is Create.jsx paims informaciaj (kai paspausim mygtuka) ir ja issius ir irasys i serveri

  useEffect(() => { //2 bendraujam su serveriu ir issitraukiam info 
    axios.get('http://localhost:3003/manikiuro-salonas')
    .then(res => {
      console.log(res.data);//2 bendraujam su serveriu ir issitraukiam info 
      setManikiuras(res.data);//2 bendraujam su serveriu ir issitraukiam info 
    })
  },[])




  //3.mygtuko paspaudimas- kuris is Create.jsx paims informaciaj (kai paspausim mygtuka) ir ja issius ir irasys i serveri
  useEffect(() => {
    if (null === createData) { //3)jeigu createData yra === null nieko nedarom ir einam lauk is cia
      return;
    }
    axios.post('http://localhost:3003/manikiuro-salonas', createData)//3)kai jis  jau tures kazka naujo tai ta nauja info dedam i 'http://localhost:3003/trees-manager', createData //post-isiusti
    .then(res => {
      console.log(res);  //3)console.log(res) pasiziurim ka mums servas atsakys
     }); 
  },[createData])




  return (
    <div className="p-contai">
      <div className="stulpeliu-tevas">
        <Create setCreateData={setCreateData}></Create>
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
