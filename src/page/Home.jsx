import { useEffect, useState } from "react";
import CreateNotes from "../components/CreateNotes";
import "../styles/Home.css"
import Banner from "../components/Banner";

function Home() {
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
        <div className="homeContainer">
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
            <Banner />
            {open && <CreateNotes setOpen={setOpen} />}
        </div>
    )
}

export default Home
