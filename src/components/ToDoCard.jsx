export function ToDoCard(props){
    const {toDo, deleteToDo, index, completedToDos} = props
    return (
        <div className="card toDo-item">            
            <p>
                {toDo.input}
            </p>
            <div className="toDo-buttons">
                
                <button onClick={() => completedToDos(index)} disabled={toDo.completed}>
                    <h6>Done</h6>
                </button>

                <button onClick={() => deleteToDo(index)}>
                    <h6>Delete</h6>
                </button>

            </div>
        </div>
    )
}