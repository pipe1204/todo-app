import React from 'react'
import "./tasks.css"
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa"

const Tasks = ({ items, removeItem, completeTask, editTask }) => {

    return (
        <div className="tasksDiv">
            {
                items.map((item) => {
                    const {id, title, completed} = item
                    return (
                        <>
                        <div className="taskDiv" key={id}>
                            <p className={completed ? "completeTitle" : "taskTitle"}>{title}</p>
                            <div className="buttonsDiv">
                                <button className="completeButton" onClick={() => completeTask(id)}>
                                    <FaCheck/>
                                </button>
                                <button className="editButton" onClick={() => editTask(id)}>
                                    <FaEdit/>
                                </button>
                                <button className="deleteButton" onClick={() => {removeItem(id)}}>
                                    <FaTrash/>
                                </button>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Tasks
