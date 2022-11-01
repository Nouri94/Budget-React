export function addEntry(payload) {
    return {
        type: 'ADD_ENTRY',
        payload // ES6 or we can write as above post: post
    }
}

export function removeEntry(id) {
    return {
        type: 'REMOVE_ENTRY',
        payload: { id } // ES6 or we can write as above post: post
    }
}

