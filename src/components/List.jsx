import "../styles/List.css"


function List() {
    // const logo = notesName?.split(" ").map(word => word[0]).join('');
    return (
        <div className="listContainer">
            <h3>Pocket Notes</h3>
            <div className="notesGroup">
                <div className="createNote">
                    <button>+ Create Notes Group</button>
                </div>
                <ul>
                    <li>
                        <div className="logo" >
                            <span>{ }</span>
                        </div>
                        <p>{ }</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default List
