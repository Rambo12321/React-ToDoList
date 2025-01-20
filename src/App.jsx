import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ToDoInput } from "./components/ToDoInput"
import { ToDoList } from "./components/ToDoList"

function App() 
{
  // const toDos = [
  //   {input: "Check out the Weather", completed: true}, 
  //   {input: "Prepare a list of things", completed: true},
  //   {input: "Rush to the Store to get supplies", completed: false},
  //   {input: "Pack the bags for good", completed: false}
  // ]

  const [toDos, setToDos] = useState([
    {input: "Add your First TODO!", completed: false}
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function addToDo(newToDo){
    const updatedToDos = [...toDos, {input: newToDo, completed: false}]
    setToDos(updatedToDos)
    saveToLocalStorage(updatedToDos)
  }

  function deleteToDo(index){ 
    let updatedToDos = toDos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setToDos(updatedToDos)
    saveToLocalStorage(updatedToDos)
  }

  function completedToDos(index){
    let newToDoList = [...toDos]
    let completedToDo = toDos[index]
    completedToDo.completed = true
    newToDoList[index] = completedToDo
    setToDos(newToDoList)
    saveToLocalStorage(newToDoList)
  }
  
  useEffect(() => {
    if(!localStorage || !localStorage.getItem('toDos-App1')) { return }
    let db = JSON.parse(localStorage.getItem('toDos-App1'))
    setToDos(db.toDos)

    if(!db.toDos || db.toDos.length === 0) 
    {
      setToDos([{input: "Add your First TODO!", completed: false}])
      return
    }

  },[])

  function saveToLocalStorage(currentToDos){
    if(!localStorage) { return }
    console.log(currentToDos)
    localStorage.setItem('toDos-App1', JSON.stringify({toDos: currentToDos}))
  }

  return (
    <>
      <Header toDos = {toDos} />
      <Tabs toDos = {toDos} selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} />  
      <ToDoList completedToDos = {completedToDos} deleteToDo = {deleteToDo} selectedTab={selectedTab} toDos = {toDos} />
      <ToDoInput addToDo = {addToDo} />
    </>
  )
}

export default App
