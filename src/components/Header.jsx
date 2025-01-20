export function Header(props)
{
    const {toDos} = props
    const toDosLength = toDos.length

    const isTaskPlural = toDosLength > 1

    const taskOrTasks = isTaskPlural ? "tasks" : "task"

    return (
        <header>  
            <h1 className="text-gradient">You have {toDosLength} open {taskOrTasks}!</h1>          
        </header>
    )
}