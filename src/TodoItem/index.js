import React from "react";
import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";
import "./TodoItem.css";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${
                    props.completed && `Icon-check--active`
                }`}
                onClick={props.onComplete}
            >
                <AiOutlineCheck />
            </span>
            <p
                className={`TodoItem-p ${
                    props.completed && `TodoItem-p--complete`
                }`}
            >
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
            <AiFillDelete />
            </span>
        </li>
    );
}

export { TodoItem };
