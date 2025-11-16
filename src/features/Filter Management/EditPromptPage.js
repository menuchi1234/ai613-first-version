import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function EditPromptPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [groupId, setGroupId] = useState("");
    const [content, setContent] = useState("");
    const [Status, setStatus] = useState("");
    

    return <>

    </>
}

export default EditPromptPage