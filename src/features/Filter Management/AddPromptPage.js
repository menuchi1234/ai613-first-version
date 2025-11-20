import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approvePrompt } from './FilterManagementSlice';



function AddPromptPage() {
    const dispatch = useDispatch();
    const [type, setType] = useState('');
    const [freeText, setFreeText] = useState('');
    const [selectedPrompt, setSelectedPrompt] = useState('');
    const add = useSelector(state => state.filterManagement.addPrompts);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === "free") {
            const newPrompt = {
                id: add.length + 1,
                content: freeText,
                Status: "active"
            };
            dispatch(approvePrompt(newPrompt));
            alert("הפרומפט נוסף בהצלחה");
        }
        else if (type === "list") {
            const promptToAdd = add.find(p => p.id === parseInt(selectedPrompt));
            if (promptToAdd) {
                dispatch(approvePrompt(promptToAdd));
                alert("הפרומפט נוסף בהצלחה");
            }
            else {
                alert("בחר פרומפט תקין מהרשימה");
            }
        }

    }

    return <>
     <div className="prompt-container">
        <button type button onClick={(e) => setType("free")}> הדלק חופשי </button >
        <button type button onClick={(e) => setType("list")}>  חפש מרשימה </button >
        {type === "free" && (
            <div >
                <h2>הוספת פרומפט - מצב חופשי</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>תוכן הפרומפט:</label>
                        <input type="text"
                            value={freeText}
                            onChange={(e) => setFreeText(e.target.value)} />
                    </div>
                    <button type="submit">הוסף פרומפט</button>
                </form>
            </div>
        )}
        {type === "list" && (
            <div>
                <h2>הוספת פרומפט - חיפוש מרשימה</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>בחר פרומפט מהרשימה:</label>
                        <select
                            value={selectedPrompt}
                            onChange={(e) => setSelectedPrompt(e.target.value)}>
                            {add.map((prompt) => (
                                <option key={prompt.id} value={prompt.id}>
                                    {prompt.content}
                                </option>
                            ))}

                        </select>
                    </div>
                    <button type="submit">הוסף פרומפט</button>
                </form>
           </div>
          
        )}
          </div>
            






    </>
}

export default AddPromptPage