import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { promptUpdated } from './FilterManagementSlice';
import { useSelector } from 'react-redux';
function EditPromptPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const prompt = useSelector(state =>
    state.filterManagement.groupPrompts.find(p => p.id === parseInt(id))
);

    const [groupId, setGroupId] = useState(prompt.groupId);
    const [content, setContent] = useState(prompt.content);
    const [Status, setStatus] = useState(prompt.Status);
 useEffect(() => {
    if (prompt) {
      setGroupId(prompt.groupId);
      setContent(prompt.content);
      setStatus(prompt.Status);
    }
  }, [prompt]);
    
    const handleSubmit = (e) => {                      
        e.preventDefault();
       
        const updatedPrompt = {
            id: prompt.id,
            groupId,
            content,
            Status
        };
        dispatch(promptUpdated(updatedPrompt));
        navigate('-1');
    };
        return <>
          <div className="prompt-container">
            <div>
                <h2>עריכת פרומפט</h2>
                < form onSubmit={handleSubmit} >
                    <div>
                        <label>Group ID:</label>
                        <input
                            type="text"
                            value={groupId}
                            onChange={(e) => setGroupId(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Content:</label>
                        <input
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Status:</label>
                        <select
                            value={Status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="active">פעיל</option>
                            <option value="not active">לא פעיל</option>
                        </select>
                    </div>
                    <button type="submit">שמור שינויים</button>
                    <button type="button" onClick={() => navigate(-1)}>ביטול</button>


                </form>
            </div>
</div>
        </>
    }

export default EditPromptPage