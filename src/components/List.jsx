import { useEffect, useState } from "react"
import "../styles/List.css"
import CreateNotes from "./CreateNotes";


function List() {
    const [open, setOpen] = useState(false);
    const [groups, setGroups] = useState([]);

    const getGroupsFromLocalStorage = () => {
        const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
        setGroups(storedGroups);
    };

    useEffect(() => {
        getGroupsFromLocalStorage();
    }, [open]);
    return (
        <>
            <div className="listContainer">
                <h3>Pocket Notes</h3>
                <div className="notesGroup">
                    <div className="createNote">
                        <button onClick={() => setOpen(true)}> <span>+</span> Create Notes Group</button>
                    </div>
                    <ul>
                        {groups.map((group, index) => (
                            <li key={index}>
                                <div className="logo" style={{ backgroundColor: group?.color }}>
                                    <span>{group?.groupname?.split(" ").map(word => word[0]).join('')}</span>
                                </div>
                                <p>{group?.groupname}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {open && <CreateNotes setOpen={setOpen} />}
        </>
    )
}

export default List
