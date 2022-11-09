export const EntryReducer = (state = initialEntries, action) => {
    switch (action.type) {        
        case 'ADD_ENTRY': return [...state, action.payload]
        case 'REMOVE_ENTRY': return [...state.filter(entry => entry.id !== action.payload.id)]
        case 'UPDATE_ENTRY': let newEntries;
        newEntries = [...state];
        const index = newEntries.findIndex((entry)=>entry.id === action.payload.id);
        newEntries[index] = {...action.payload.entry}; return newEntries;
        default: return state
    }
}





var initialEntries = [
    {
        id: 1,
        description: "Work Income1",
        value: 100,
        isExpense: false

    },
    {
        id: 2,
        description: "Rent",
        value: 200,
        isExpense: true

    },
    {
        id: 3,
        description: "Water bill",
        value: 300,
        isExpense: true

    },
    {
        id: 4,
        description: "Power Bill",
        value: 400,
        isExpense: true

    },
]

