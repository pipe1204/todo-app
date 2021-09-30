import React from 'react'
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa"

const CompletedTasks = ({ completeItems }) => {

    return (
        <div className="tasksDiv">
            {
                completeItems.map((item) => {
                    const {id, title, completed} = item
                    return (
                        <>
                        <div className="taskDiv" key={id}>
                            <p className={completed ? "completeTitle" : "taskTitle"}>{title}</p>
                            <div className="buttonsDiv">
                                <button className="completeButton">
                                    {/* <FaCheck/> */}
                                </button>
                                <button className="editButton">
                                    {/* <FaEdit/> */}
                                </button>
                                <button className="deleteButton">
                                    {/* <FaTrash/> */}
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

export default CompletedTasks
