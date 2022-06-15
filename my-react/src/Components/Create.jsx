function Create() {

    return(
        <div className="stulpeliu-vaikas2">
            <div className="titleee">
                <h2>Add New Manikiuras </h2>
            </div>
            <div className="sarasas">
                <div className="formos-vidus">
                    <div className="forma">
                        <label>Manikiuro meistre:</label>
                        <input type="text" className="form-control" placeholder="Manikiuro meistre" />
                    </div>
                    <div className="forma">
                        <label>Manikiūro rūšys:</label>
                        <select className="form-control" >
                            <option value="1">Klasikinis manikiūras</option>
                            <option value="2">Prancūziškas manikiūras</option>
                            <option value="3">Kombinuotas manikiūras</option>
                         </select>
                    </div>
                    <div className="forma">
                        <label>Kaina:</label>
                        <input type="text" className="form-control" placeholder="Kaina eurais" />
                    </div>
                    <div className="forma">
                        <label>Trukme:</label>
                        <input type="text" className="form-control"placeholder="Trukme" />
                    </div>
                    <div className="forma">
                        <label>Nuotrauka:</label>
                        <input  type="file" className="form-control"  />
                    </div>
                    <div className="forma-buttonss">
                        <button type="button" className="forma-buttons">Irasyti</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;