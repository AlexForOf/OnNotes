export const addNote = (event, list, setIsVisibleModal) => {
    event.preventDefault();

    const note = {
        id: `${(new Date()).getTime()}`,
        title: noteInfo.title,
        content: noteInfo.content
    }

    setNoteInfo({
        title: "",
        content: ""
    })

    list[0].push(note)
    setIsVisibleModal(false)
}