import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import axios from "axios";
import { baseURL } from "../src/utils/content";

function App() {
    let [value, setualue] = useState([]);
    let [input, setinput] = useState("");
    let [loadding, setloadding] = useState(false);
    let [update, setupdate] = useState(false);
    let [updateid, setupdateid] = useState({});
    useEffect(() => {
        axios
            .get(`${baseURL}/get`)
            .then((data) => {
                setualue(data.data);
                setloadding(!loadding);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loadding]);

    // handleKeyPress
    let handleKeyPress = (e) => {
        if (e.key == "Enter") {
            handleAdd();
        }
    };

    // handleAdd button
    let handleAdd = () => {
        console.log(input);
        axios
            .post(`${baseURL}/save`, { toDo: input })
            .then((res) => {
                console.log(res.data);
                setinput("");
            })
            .catch((err) => console.log(err));
    };
    //handleUpdate
    let handleUpdate = () => {
        axios.put(`${baseURL}/update/${updateid}`, { toDo: input });
        setinput("");
        setupdate(!update);
    };
    return (
        <>
            <div className="container">
                <h1 className="title">ToDo App</h1>

                <div className="input_holder">
                    <input
                        onKeyUp={handleKeyPress}
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                        type="text"
                        placeholder="Add a ToDo..."
                    />
                    {update ? (
                        <button onClick={handleUpdate}>update</button>
                    ) : (
                        <button onClick={handleAdd}>Add</button>
                    )}
                </div>

                <div className="list">
                    {value.map((item) => (
                        <Todo
                            key={item._id}
                            text={item.toDo}
                            id={item._id}
                            setupdate={setupdate}
                            setinput={setinput}
                            setupdateid={setupdateid}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
