import { useState } from "react"

export function ToDoInput(props){
    const { addToDo } = props
    const [inputValue, setInputValue] = useState("")
    return (
        <div className="input-container">
            <input type="text" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} placeholder="Add a new task" />
            <button onClick = { () => {
                if(!inputValue) return
                addToDo(inputValue)
                setInputValue("")
            } }>
                <i className="fa-solid fa-plus"></i>
            </button>           
        </div>
    )
}