import logo from './logo.svg';
import './App.css';
import GroupPromptsPage from './features/Filter Management/GroupPromptsPage';

import { Link, Route, Routes } from 'react-router-dom';
import AddPromptPage from './features/Filter Management/AddPromptPage';
import EditPromptPage from './features/Filter Management/EditPromptPage';

function App() {
  return <>
 <Link to="/">דף ניהול פרומפטים</Link> 

<Routes>
        {/* דף הניהול – הרשימה */}
        <Route path="/" element={<GroupPromptsPage />} />

        {/* דף עריכה */}
        <Route path="/EditPromptPage/:id" element={<EditPromptPage />} />

        {/* דף הוספה */}
        <Route path="/AddPromptPage" element={<AddPromptPage />} />
      </Routes>
  </>
    
  
}

export default App;
