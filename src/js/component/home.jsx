import React, {useState} from "react";
// create your first component
const Home = () => {


    const [tarea, setTarea] = useState("");
    const [lista, setLista] = useState([]);


    const DeleteItems = (indexItem) => {
      setLista((prevState) =>
        prevState.filter((listItems, index) => index !== indexItem)
      );
      };

    function enviarDatos(e) {
        e.preventDefault();
        setLista([
            ...lista,
            tarea])
            setTarea("");
    }
    console.log(lista);
    return (
        <>
            <div className="container">
               
                <div className="card">
                    <div className="card-body">
                        <input type="text" className="input m-1 w-75" value={tarea} id="exampleInput" aria-describedby="inputHelp"
                            onChange={
                                (e) => {
                                    setTarea(e.target.value);
                                }
                            }
                            placeholder="No hay tareas, añadir tareas"/>
                        <button type="submit" className="btn btn-primary btn-sm"
                            onChange={
                                (e) => {
                                    setLista(e.target.value);
                                }
                            }
                            onClick={enviarDatos}>
                            Agregar tarea
                        </button>
                        
                    </div>
                    <div className="to-do-list d-flex">
			  <ul>{lista.map((item, index) => (
        <li key={index}>
          {item}
          <button className="btn" onClick={() => DeleteItems(index)}>
            <i className="fas fa-trash-alt" />
          </button>
        </li>
      ))}</ul>
			</div>
                </div>

            </div>
        </>
    );
};
export default Home;
