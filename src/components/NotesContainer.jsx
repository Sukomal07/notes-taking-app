import "../styles/NotesContainer.css";
import send from "../assets/send.png";

function NotesContainer({ selectedGroup }) {
    const { groupname, color, groupnotes } = selectedGroup || {};


    return (
        <div className="note-container">
            <nav>
                <div className="logo" style={{ backgroundColor: color }}>
                    <span>{groupname.split(" ").map((word) => word[0]).join("")}</span>
                </div>
                <p className="title">{groupname}</p>
            </nav>
            <div className="notes">

            </div>
            <div className="input-container">
                <textarea
                    name="note"
                    id="note"
                    placeholder="Enter your text here..........."

                ></textarea>
                <button className="send-btn" >
                    <img src={send} alt="image" />
                </button>
            </div>
        </div>
    );
}

export default NotesContainer;
