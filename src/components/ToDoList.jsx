import { ToDoCard } from "./ToDoCard";

export function ToDoList(props){
    const {toDos, selectedTab} = props

    const filterToDosList = selectedTab === 'All' ? 
    toDos :
    selectedTab === 'Done' ? toDos.filter(val => val.completed) :
    toDos.filter(val => !val.completed)
    return (
        <>
            {filterToDosList.map((toDo, index) => {
                return(
                    <ToDoCard 
                    key={index}
                    index={toDos.findIndex(val => val.input === toDo.input)}
                    {...props}
                    toDo={toDo} />
                )
            })}  
        </>
    )
}