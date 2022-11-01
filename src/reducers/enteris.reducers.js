const reducer = (state = initialEntries, action) => {
    switch (action.type) {
        case 'ADD_ENTRY': return [...state, action.payload]
        case 'REMOVE_ENTRY': return [...state.filter(entry => entry.id !== action.payload)]
        default: return state
    }
}

export default reducer;

var initialEntries = [
    {
        id: 1,
        description: "Work Income",
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