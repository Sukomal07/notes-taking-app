import { useState } from 'react';
import AllColors from '../helpers/colors.json';
import '../styles/CreateNotes.css';

function CreateNotes({ setOpen }) {
    const [groupName, setGroupName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [groupNameError, setGroupNameError] = useState(false);
    const [colorError, setColorError] = useState(false);

    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value);
        setGroupNameError(false);
    };

    const handleColorSelection = (color) => {
        setSelectedColor(color);
        setColorError(false);
    };

    const handleCreateGroup = (e) => {
        e.preventDefault();

        if (!groupName) {
            setGroupNameError(true);
        }

        if (!selectedColor) {
            setColorError(true);
        }

        if (groupName && selectedColor) {
            const uniqueNoteId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
            const newGroup = {
                id: uniqueNoteId,
                groupname: groupName,
                color: selectedColor,
                groupnotes: [],
            };

            const existingGroups = JSON.parse(localStorage.getItem('groups')) || [];
            const updatedGroups = [...existingGroups, newGroup];
            localStorage.setItem('groups', JSON.stringify(updatedGroups));

            setOpen(false);
        }
    };

    return (
        <div className="model">
            <div className="model-content">
                <span className="close" onClick={() => setOpen(false)}>
                    &times;
                </span>
                <form onSubmit={handleCreateGroup}>
                    <h1>Create New Notes group</h1>
                    <div className="inputContainer">
                        <div className="groupName">
                            <label htmlFor="groupName">Group Name</label>
                            <input
                                type="text"
                                id="groupName"
                                name="groupName"
                                placeholder="Enter your group name..."
                                value={groupName}
                                onChange={handleGroupNameChange}
                                style={{ border: groupNameError ? '1px solid red' : '1px solid #CCCCCC' }}
                            />
                        </div>
                        <div className="groupColor">
                            <label>Choose Color</label>
                            <div className="colors">
                                {AllColors.map((color) => (
                                    <span
                                        key={color.id}
                                        style={{
                                            backgroundColor: color.color,
                                            border: colorError ? '2px solid red' : ''
                                        }}
                                        className={selectedColor === color.color ? 'selected' : ''}
                                        onClick={() => handleColorSelection(color.color)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}

export default CreateNotes;
