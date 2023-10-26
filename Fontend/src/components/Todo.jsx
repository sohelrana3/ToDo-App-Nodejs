import axios from "axios";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/content";

const Todo = ({ text, id, setupdate, setinput, setupdateid }) => {
    //let handleDelete
    let handleDelete = () => {
        console.log(id);
        axios
            .delete(`${baseURL}/delete/${id}`)
            .then((res) => console.log(res.data));
    };
    let handleUpdate = () => {
        console.log(text);
        setupdate((prevState)=> !prevState);
        setinput(text)
        setupdateid(id)
    };
    return (
        <div className="toDo">
            <p>{text}</p>
            <div className="icons">
                <AiFillEdit onClick={handleUpdate} />
                <RxCross1 onClick={handleDelete} />
            </div>
        </div>
    );
};

export default Todo;
