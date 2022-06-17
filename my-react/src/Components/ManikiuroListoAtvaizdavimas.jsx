function ManikiuroListoAtvaizdavimas({manikiuras, setIstrintiId}) {
//5. ManikiuroListoAtvaizdavimas
    return(
        <li>
            <div className="manikiuro-listas">
                <div className="mani-listas">
                    <span>{manikiuras.vardas}</span>
                    <span>{['Klasikinis manikiūras', 'Prancūziškas manikiūras', 'Kombinuotas manikiūras'][manikiuras.tipas - 1]}</span>
                    <span>{manikiuras.kaina} eurai</span>
                    <span>{manikiuras.trukme} val.</span>
                </div>
                <div className="mani-listas">
                    <button type="button" className="manikiuro-buttons redaguoti" onClick={()=>(manikiuras)}>Redaguoti</button>
                    <button type="button" className="manikiuro-buttons istrinti" onClick={()=>setIstrintiId({id:manikiuras.id})}>Istrinti</button> {/*////6.Istrinimo mygtukas is ManikiuroListoAtvaizdavimas.jsx kuris istrins visa jo info*/}
                </div>
            </div>
        </li>
    )
}

export default ManikiuroListoAtvaizdavimas;