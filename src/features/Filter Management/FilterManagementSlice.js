import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    groupPrompts: [
        { id: 1, groupId: "123", content: "נטפרי לא מרשה לי", Status: "active" },
        { id: 2, groupId: "223", content: "תוכן לא רואי", Status: "active" },
        { id: 3, groupId: "323", content: "יש לך עוד משהו אתה צריך עזרה?", Status: "not active" }
    ],
    addPrompts: [
        { id: 4, groupId: "432", content: "תיתן רק דומגא אחת", Status: "active" },
        { id: 5, groupId: "532", content: " איני ייכול לענות לך ", Status: "active" },
        { id: 6, groupId: "632", content: "ששששש שב בשקט ותתמקד", Status: "active" }
    ],
}
export const GroupPromptsPage = createSlice({    
    name: 'filterManagement',
    initialState,
    reducers: {
      
       
    someArrived: (state, action) => {
            const allPrompts = action.payload;
            state.groupPrompts = [...allPrompts];
        },
        updateAddPrompts: (state, action) => {
            const allPrompts = action.payload;
            state.addPrompts = [...allPrompts];
        },
        promptAdded: (state, action) => {
            state.addPrompts.push(action.payload);
        },
        promptUpdated: (state, action) => {
            const updatedPrompt = action.payload;
            const index = state.groupPrompts.findIndex(prompt => prompt.id === updatedPrompt.id);
            if (index !== -1) {
                state.groupPrompts[index] = updatedPrompt;

            }

        },
        changePromptStatus: (state, action) => {
            const id = action.payload;
            const prompt = state.groupPrompts.find(p => p.id === id);
            if (prompt.Status=== "active") {
             prompt.Status = "not active"
            
             alert ("הפרומפט הושהה בהצלחה")
             
            }
            else{
                alert ("הפרומפט   לא פעיל כבר")
            }
          
        },
        removePrompt: (state, action) => {
            const id = action.payload;
            state.groupPrompts = state.groupPrompts.filter(p => p.id !== id);
        },
approvePrompt: (state, action) => {
  const approvedPrompt = action.payload;
  state.groupPrompts.push(approvedPrompt);
  state.addPrompts = state.addPrompts.filter(p => p.id !== approvedPrompt.id);
},
    
    }

    });


 export const {
  someArrived,
  updateAddPrompts,
  promptAdded,
  promptUpdated,
  changePromptStatus,
  removePrompt,
  approvePrompt
} = GroupPromptsPage.actions;

export default GroupPromptsPage.reducer;