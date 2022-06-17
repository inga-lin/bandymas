import { useEffect, useState } from 'react';//2 bendraujam su serveriu
import axios from 'axios';//2 bendraujam su serveriu
import './App.css';
import Create from './Components/Create';
import ManikiuroListoAtvaizdavimas from './Components/ManikiuroListoAtvaizdavimas';
//import './bootstrap.css';



function App() {

  const [manikiuras, setManikiuras] = useState([]);//2 bendraujam su serveriu ir issitraukiam info
  
  const [createData, setCreateData] = useState(null);//3.mygtuko paspaudimas- kuris is Create.jsx paims informaciaj (kai paspausim mygtuka) ir ja issius ir irasys i serveri
 
  //4. vieta is kurios gausim sarasiuka
  const [lastUpdate, setLastUpdate] = useState(Date.now()); //4.cia bus laikas kada pirma karta reactasparsisiunte duomenis

  useEffect(() => { //2 bendraujam su serveriu ir issitraukiam info is savo D.B.
    axios.get('http://localhost:3003/manikiuro-salonas')
    .then(res => {
      console.log(res.data);//2 bendraujam su serveriu ir issitraukiam info 
      setManikiuras(res.data);//2 bendraujam su serveriu ir issitraukiam info 
    })
  },[lastUpdate]);//4





  //3.mygtuko paspaudimas- kuris is Create.jsx paims informaciaj (kai paspausim mygtuka) ir ja issius ir irasys i serveri
  useEffect(() => {
    if (null === createData) { //3)jeigu createData yra === null nieko nedarom ir einam lauk is cia
      return;
    }
    axios.post('http://localhost:3003/manikiuro-salonas', createData)//3)kai jis  jau tures kazka naujo tai ta nauja info dedam i 'http://localhost:3003/trees-manager', createData //post-isiusti
    .then(res => {
      console.log(res);  //3)console.log(res) pasiziurim ka mums servas atsakys
      setLastUpdate(Date.now()); //4
     }); 
  },[createData]);





  return (
    <div className="p-contai">
      <div className="stulpeliu-tevas">
        <Create setCreateData={setCreateData}></Create>{/*3.setCreateData*/}
        <div className="stulpeliu-vaikas1">
          <div className="titleee">
            <h2>Manikiuras list</h2>
          </div>
          <div className="sarasas">
            <ul >
              {
                 manikiuras.map(m => <ManikiuroListoAtvaizdavimas key={m.id} manikiuras={m}></ManikiuroListoAtvaizdavimas>)//2 bendraujam su serveriu ir issitraukiam info//5. ManikiuroListoAtvaizdavimas
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
