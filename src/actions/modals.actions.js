export function OpenEditRedux(id) {
    return {
        type: 'OPEN_EDIT_MODEL',
        payload: { id }
    }
}

export function CloseEditModel() {
    return {
        type: 'CLOSE_EDIT_MODAL',
    }
}
