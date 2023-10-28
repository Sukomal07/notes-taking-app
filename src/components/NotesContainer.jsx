import "../styles/NotesContainer.css";
import send from "../assets/send.png";
import backIcon from '../assets/backIcon.png'
import { useState } from "react";

function NotesContainer({ selectedGroup }) {
    const { groupname, color, groupnotes } = selectedGroup || {};
    const [noteText, setNoteText] = useState("");

    const handleChange = (e) => {
        setNoteText(e.target.value);
    };
    const handleCreateNote = () => {
        if (noteText) {
            const currentDate = new Date();
            const formattedTime = currentDate.toLocaleString("en-IN", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            });
            const formattedDate = currentDate.toLocaleString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            const newNote = {
                date: formattedDate,
                time: formattedTime,
                note: noteText
            };

            const existingGroups = JSON.parse(localStorage.getItem('groups')) || [];
            const updatedGroups = existingGroups.map((group) => {
                if (group.groupname === groupname) {
                    groupnotes.push(newNote)
                    group.groupnotes.push(newNote);
                }
                return group;
            });

            localStorage.setItem('groups', JSON.stringify(updatedGroups));

            setNoteText("");
        }
    }


    return (
        <div className="note-container">
            <nav>
                <img src={backIcon} alt="image" />
                <div className="logo" style={{ backgroundColor: color }}>
                    <span>{groupname.split(" ").map((word) => word[0]).join("")}</span>
                </div>
                <p className="title">{groupname}</p>
            </nav>
            <div className="notes">
                {groupnotes?.map((note, index) => (
                    <div key={index} className="note">
                        <p className="note-date">
                            {note?.time} <br /> {note?.date}
                        </p>
                        <p className="note-text">{note?.note}</p>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <textarea
                    name="note"
                    id="note"
                    placeholder="Enter your text here..........."
                    value={noteText}
                    onChange={handleChange}
                ></textarea>
                <button className="send-btn" onClick={handleCreateNote}>
                    <img src={send} alt="image" />
                </button>
            </div>
        </div>
    );
}

export default NotesContainer;
