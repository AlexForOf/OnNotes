export const MainModal = ({addNote, handleInputChange, noteInfo}) => {
    return (
        <div>
            <div className="mainpage-main-modal-overlay">
                </div>
                <div className="mainpage-main-modal">
                    <form onSubmit={(event) => addNote(event)}>
                        <div className="main-modal-part main-modal-title">
                            <label htmlFor="title">Title</label>
                            <input onChange={(event) => handleInputChange(event.target)} value={noteInfo.title} name="title" type="text" />
                        </div>
                        <div className="main-modal-part main-modal-content">
                            <label htmlFor="content">Content</label>
                            <input onChange={(event) => handleInputChange(event.target)} value={noteInfo.content} name="content" type="text" />
                        </div>
                        <div className="main-modal-submit">
                            <button>Create note</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}