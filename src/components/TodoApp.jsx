import React, { useState, useEffect } from 'react'
import "./todoApp.css"

//Components
import Tasks from './Tasks'
import Alert from "./Alert"

const TodoApp = () => {

    const [name, setName] = useState("")
    const [list, setList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editID, setEditID] = useState(null)
    const [alert, setAlert] = useState({show: false, msg:"", type:""})
    const [completedList, setCompletedList] = useState([])
    const [deletedList, setDeletedList] = useState([])
    const [completeCheck, setCompleteCheck] = useState(false)
    const [deleteCheck, setDeleteCheck] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            //display alert
            showAlert(true,"danger","Please enter a task")
        } else if (name && isEditing) {
            //deal with editing
            setList(list.map((item) => {
                if (item.id === editID) {
                    return {...item, title:name}
                }
                return item
            }))
            setName("")
            setEditID(null)
            setIsEditing(false)
        } else {
            //show success alert
            const newTask = {id: new Date().getTime().toString(), title: name, completed: false}
            setList([...list, newTask]);
            setName("")
            showAlert(true,"success","Your task has been added!")
        }
    }

    const showAlert = (show=false,type="",msg="") => {
        setAlert({show,type,msg})
    }

    const removeItem = (id) => {

        list.map((item) => {
            if (item.completed) {
                showAlert(true, "danger", "Task has been removed")
                setList(list.filter((item) => item.id !== id))
            }
        })
    }

    const completeTask = (id) => {

        showAlert(true, "You have completed a task!")
        list.find((item) => {
            if (item.id === id) {
                item.completed = !item.completed             
            }
        })
    }

    const editTask = (id) => {
        const taskToBeEdited = list.find((item) => item.id === id);
        setIsEditing(true)
        setEditID(id)
        setName(taskToBeEdited.title)
    }

    const showCompletedList = () => {
        const newCompletedList = list.filter((item) => item.completed === true)
        setCompletedList(newCompletedList)
        setCompleteCheck(true)
    }

    console.log(completedList)

    return (
        <div className="todoDiv">
            <h1 className="todoTitle">My To-Do App</h1>
            <p className="descriptionToDo">Add tasks to your to-do list, complete them and delete them <br></br>when they have been done!</p>
            <div className="todoWrapperTop">
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
                <div className="todoHeader">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={name} placeholder="E.g Study React" className="todoInput" onChange={(e) => setName(e.target.value)}/>
                        <button className="addTask">{isEditing ? "Edit" : "Add"}</button>
                    </form>
                </div>
            </div>
            {list.length > 0 && (
                <div className="todoWrapperBottom">
                <div className="todoBody">
                    <div className="filters">
                        <p className="completedList" onClick={showCompletedList}>Completed Tasks</p>
                        <p className="deletedList">Deleted Tasks</p>
                        <p className="currentList">Current Tasks</p>
                    </div>
                    <div className="tasks">
                        <Tasks 
                            items={list} 
                            removeItem={removeItem} 
                            completeTask={completeTask} 
                            showAlert={showAlert} 
                            editTask={editTask}
                            completeCheck={setCompleteCheck}
                            />
                    </div>
                </div>
            </div>
            )}  
        </div>
    )
}

export default TodoApp
