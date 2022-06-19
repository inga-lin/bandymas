import ManikiuroListoAtvaizdavimasFronte from "./Front/ManikiuroListoAtvaizdavimasFronte";
import { useEffect, useState } from 'react';//2.-22. bendraujam su serveriu
import axios from 'axios';//2.-22. bendraujam su serveriu
import { Link } from "react-router-dom";
import '../Front.css'; 

function Front() {

    const [manikiuras, setManikiuras] = useState([]);//2.-22.
    
    //Read //2.-22.
    useEffect(() => { //2 bendraujam su serveriu ir issitraukiam info is savo D.B.///////
    axios.get('http://localhost:3003/manikiuro-salonas')
    .then(res => {
      console.log(res.data);//2.-22. bendraujam su serveriu ir issitraukiam info 
      setManikiuras(res.data);//2.-22. bendraujam su serveriu ir issitraukiam info 
    })
  },[]);

    return(
    <>
        <div className="p-contai con-pagri">
        <div className="container1 ">
                <nav className="navbar">
                    <a className="nav-linkk" href="/">Manikiūras Tau...</a>
                    <div className="navbar-man ">
                        <Link className="nav-link" to="/">Home</Link>  {/*//a.butinas linkams (<Link className="nav-link" to="/">Home</Link>)*/}
                        <Link className="nav-link" to="/sukurkideja">Sukurk idėją</Link>{/*//a.butinas linkams /leaf nurodo kaip i ji patekti i http://localhost:3000/leaf*/}
                    </div>   
                </nav>
            </div>
            <div className="stulpeliu-tevass">
                <div className="stulpeliu-vaikas1">
                    <div className="titleee titleees">
                        <h2>Manikiūrai</h2>
                    </div>
                    <div className="sarasass sar">
                        <ul className="ull">
                            {
                                manikiuras.map(m => <ManikiuroListoAtvaizdavimasFronte key={m.id} manikiuras={m}></ManikiuroListoAtvaizdavimasFronte>)//2 bendraujam su serveriu ir issitraukiam info//5. ManikiuroListoAtvaizdavimas//6.setIstrintiId istrinsim eilutes info
                            }
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    </>
    )
}
 export default Front;