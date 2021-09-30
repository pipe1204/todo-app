import React from 'react'
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa"

const DeletedTasks = ({ deleteItems }) => {

    return (
        <div className="tasksDiv">
            {
                deleteItems.map((item) => {
                    const {id, title, removed} = item
                    return (
                        <>
                        <div className="taskDiv" key={id}>
                            <p className={removed ? "completeTitle" : "taskTitle"}>{title}</p>
                            <div className="buttonsDiv">
                                <button className="completeButton">
                                    {/* <FaCheck/> */}
                                </button>
                                <button className="editButton">
                                    {/* <FaEdit/> */}
                                </button>
                                <button className="deleteButton">
                                    {/* <FaTrash onClick={handleTrash}/> */}
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
