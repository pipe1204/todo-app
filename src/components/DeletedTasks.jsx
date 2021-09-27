import React from 'react'
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa"

const DeletedTasks = ({ deleteItems, completeTask, editTask, removeItem }) => {
    return (
        <div className="tasksDiv">
            {
                deleteItems.map((item) => {
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

export default DeletedTasks
