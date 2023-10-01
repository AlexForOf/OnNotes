import React from "react";
import "./MainModal.css"

import {HiFolderAdd, HiDotsVertical, HiColorSwatch, HiTag, HiShare} from "react-icons/hi"

import {BiSolidBookmark, BiBookmark} from "react-icons/bi"

import {Tooltip} from "react-tooltip"

export const MainModal = (props) => {

    const {workOnNote, noteInfo, setIsVisibleModal, type} = props;

    const [noteContents, setNoteContents] = React.useState(noteInfo)

    const handleInputChange = ({name, value}) => {
        setNoteContents(prevNoteContents => ({...prevNoteContents, [name]: value}))
    }

    console.log(noteContents)

    const setTextareaHeight = (event = undefined) => {
        if(event !== undefined) {
            event.target.style.height = 'inherit'
            event.target.style.height = `${event.target.scrollHeight}px`
        }else {
            const textareas = document.querySelectorAll('textarea');
            console.log(textareas)
            textareas.forEach(element => {
                element.style.height = 'inherit'
                element.style.height = `${element.scrollHeight}px`
            });
        }
        
    }

    React.useEffect(() => {
        setTextareaHeight();

        return setTextareaHeight();
    }, [])

    return (
        <div>
            <div onClick={() => setIsVisibleModal(false)}  className="mainpage-main-modal-overlay">
            </div>
                <div className="mainpage-main-modal">
                    <form onSubmit={(event) => workOnNote(event, noteContents)}>
                    <div className="main-modal-part main-modal-header">
                        <div className="modal-header-left">
                            <div className="modal-header-element modal-icon">
                                <div className="tooltip" 
                                data-tooltip-content="Group" data-tooltip-id="group" 
                                style={{width: "100%"}}
                                >
                                    <HiFolderAdd />
                                    <Tooltip id="group" className="tooltip-is"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-header-right">
                            <div className="modal-header-element modal-icon">
                                <div className="tooltip" 
                                data-tooltip-content="Share" data-tooltip-id="share"
                                style={{width: "100%"}}
                                >
                                    <HiShare />
                                    <Tooltip id="share" className="tooltip-is"/>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="main-modal-part main-modal-title">
                            <textarea
                            onInput={setTextareaHeight}
                            onChange={(event) => handleInputChange(event.target)} 
                            value={noteContents.title} 
                            name="title" type="text" placeholder="Title" />
                            
                        </div>
                        <div className="main-modal-part main-modal-content">
                            <textarea 
                            onInput={setTextareaHeight}
                            onChange={(event) => handleInputChange(event.target)} 
                            value={noteContents.content} 
                            name="content" type="text" placeholder="Content"
                            />
                        </div>
                        <div className="main-modal-part main-modal-footer">
                            <div className="modal-footer-icons">
                                <div onClick={() => setNoteContents(prevNoteContents => ({...prevNoteContents, isBookmarked: !prevNoteContents.isBookmarked}))} className="modal-footer-element modal-icon">
                                    <div className="tooltip"
                                    data-tooltip-content="Bookmark" data-tooltip-id="bookmark"
                                    style={{width: "100%"}}
                                    >
                                        {noteContents.isBookmarked ? <BiSolidBookmark /> : <BiBookmark />}
                                        <Tooltip id="bookmark" className="tooltip-is"/>
                                    </div>
                                </div>
                                <div className="modal-footer-element modal-icon">
                                <div className="tooltip"
                                data-tooltip-content="Colors" data-tooltip-id="colors"
                                style={{width: "100%"}}
                                >
                                        <HiColorSwatch />
                                        <Tooltip id="colors" className="tooltip-is"/>
                                    </div>
                                </div>
                                <div className="modal-footer-element modal-icon">
                                <div className="tooltip" 
                                data-tooltip-content="Tags" data-tooltip-id="tags"
                                style={{width: "100%"}}
                                >
                                        <HiTag />
                                        <Tooltip id="tags" className="tooltip-is"/>
                                    </div>
                                </div>
                                <div className="modal-footer-element modal-icon">
                                <div className="tooltip" 
                                data-tooltip-content="More" data-tooltip-id="more"
                                style={{width: "100%"}}>
                                        <HiDotsVertical />
                                        <Tooltip id="more" className="tooltip-is"/>
                                    </div>
                                </div>
                            </div>
                            <div className="main-modal-submit">
                                <button className="modal-submit-button">{type}</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
        </div>
    )
}