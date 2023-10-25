import AllColors from '../helpers/colors.json'
import "../styles/CreateNotes.css"
function CreateNotes() {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close">
                    &times;
                </span>
                <form>
                    <h1>Create New Notes group</h1>
                    <div className="inputContainer">
                        <div className="groupName">
                            <label htmlFor="groupName">Group Name</label>
                            <input type="text" placeholder="Enter your group name..." />
                        </div>
                        <div className="groupColor">
                            <label htmlFor="groupColor">Choose Color</label>
                            <div className="colors">
                                {AllColors.map((color) => (
                                    <span key={color.id} style={{ backgroundColor: color.color }}></span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNotes
