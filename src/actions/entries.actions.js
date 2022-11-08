export function addEntryRedux(payload) {
    return {
        type: 'ADD_ENTRY',
        payload // ES6 or we can write as above post: post
    }
}

export function removeEntryRedux(id) {
    return {
        type: 'REMOVE_ENTRY',
        payload: { id } // ES6 or we can write as above post: post
    }
}

