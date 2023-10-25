import "../styles/NotesContainer.css"
import pocketNotesImg from '../assets/pocket-notes.png'
import lockImage from '../assets/lockImage.png'

function NotesContainer() {
    return (
        <div className="notesContainer">
            <div className="preview">
                <div className="details">
                    <img src={pocketNotesImg} alt="image" />
                    <p>Pocket Notes</p>
                    <span>Send and receive messages without keeping your phone online.<br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</span>
                </div>
                <p className="privacy">
                    <img src={lockImage} alt="image" />
                    end-to-end encrypted
                </p>
            </div>
        </div>
    )
}

export default NotesContainer
