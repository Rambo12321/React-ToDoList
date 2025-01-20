export function Tabs(props)
{
    const {toDos, selectedTab, setSelectedTab} = props

    const tabs = ["All", "Open", "Done"]
    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {

                const numOftasks = tab === "All" ?
                toDos.length : tab === "Open" ? 
                toDos.filter(val => val.completed === false).length : 
                toDos.filter(val => val.completed === true).length
                
                return (
                    <button key={tabIndex} className={"tab-button " + (tab === selectedTab ? "tab-selected" : "")} onClick={() => setSelectedTab(tab)}>
                        <h4>{tab} <span>({numOftasks})</span></h4>
                    </button>
                )
            })}
            <br />
        </nav>
    )
}