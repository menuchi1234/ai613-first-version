import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changePromptStatus, removePrompt } from './FilterManagementSlice';
import { useNavigate } from 'react-router-dom';

function GroupPromptsPage() {
  const groupPrompt = useSelector(state => state.filterManagement.groupPrompts);
  // const [serch, setSerch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serch, setSerch] = useState("");
  // const visiblePrompts = groupPrompts.filter(p =>!p.Status !="active");


  const sercch = groupPrompt.filter(p =>
    p.content.toLowerCase().includes(serch.toLowerCase())
  );

  return <>
    <div>
      <input placeholder="חפש פרומפט ברשימה..."
        type="text" value={serch} onChange={(e) => setSerch(e.target.value)}



      />
      <button type='button' onClick={() => navigate('/AddPromptPage')}>הוסף פרומפט חדש</button >

      <ul>
        {sercch.map((groupPrompt) => (

          <li key={groupPrompt.id}>
            {groupPrompt.content}
            <button type='button' onClick={() => navigate(`/EditPromptPage/${groupPrompt.id}`)}>ערוך </button>
            <button type='button' onClick={() => dispatch(removePrompt(groupPrompt.id))}>הסר </button>
            <button type='button' onClick={() => dispatch(changePromptStatus(groupPrompt.id))}>השהה </button>

          </li>

        ))}

      </ul>
      <p>שאל את הצאט</p>

      <label>כתוב הודעה:</label>
      <input
        type="text"
        placeholder="הקלד כאן..."
        style={{ flex: 1, padding: '5px' }}


      />
      <button disabled>שלח</button>
    </div>



  </>
}

export default GroupPromptsPage