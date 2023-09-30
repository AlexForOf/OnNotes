import React, { useContext } from "react";

import "./Main.css"


import { getDatabase, ref, get, child } from 'firebase/database';

import { move, reorder } from "./functions/dragndrop";
import { defineGridSize } from "./functions/defineGridSize"

import { mainButtonStyles, actionButtonStyles } from "./styles/styles";

import { AuthContext } from "../../context/AuthContext";

// Custom components

import { DragDropContext } from "react-beautiful-dnd"
import { DroppableContainer } from "./DroppableContainer";


import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

import { HiPlus, HiDocumentAdd } from "react-icons/hi";
import { MainModal } from "../../components/MainModal";
 

export const Main = ({screenSize, writeNoteData}) => {
    const currentAuth = useContext(AuthContext) 
    const [list, setList] = React.useState(defineGridSize(screenSize.width))
    const [noteInfo, setNoteInfo] = React.useState({
        title: "",
        content: ""
    })
    const [isVisibleModal, setIsVisibleModal] = React.useState(false)

    const containerStyles = {
        gridTemplateColumns: `repeat(${list.length}, 1fr)`
    }

    const handleDragEnd = ({ destination, source }) => {
        if(!destination) return;


        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;
        
        if(sInd === dInd) {
            const items = reorder(list[sInd], source.index, destination.index)
            const newList = [...list]
            newList[sInd] = items
            setList(newList)
        }else {
            const items = move(list[sInd], list[dInd], source, destination)
            const newList = [...list]
            newList[sInd] = items[sInd]
            newList[dInd] = items[dInd]

            setList(newList)
        }

    }

    const handleInputChange = ({value, name}) => {
        setNoteInfo(prevNoteInfo => ({...prevNoteInfo, [name]: value}))
        console.log(noteInfo)
    }

    const addNote = (event) => {
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

        writeNoteData(note);
        list[0].push(note)
        setIsVisibleModal(false)
    }

    const putNotes = ({notes}) => {
        setList(defineGridSize(screenSize.width, Object.values(notes)))
    }

    React.useEffect(() => {
        if(currentAuth !== null) {
            const getNotes = () => {
                const dbRef = ref(getDatabase());
                get(child(dbRef, `users/${currentAuth.currentUser.uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    putNotes(snapshot.val())
                } else {
                    console.log("No data available");
                }
                }).catch((error) => {
                console.error(error);
                });
            }
            return getNotes();
        }
        // eslint-disable-next-line
    }, [currentAuth])

    return (
        <div style={containerStyles} className="mainpage-main">
            <DragDropContext onDragEnd={handleDragEnd}>
                {
                    list.map((item, index) => (
                        <DroppableContainer key={index} item={item} index={index} />
                    ))
                }
            </DragDropContext>
            <div style={{zIndex: 1, position: "absolute"}}>
                <Fab
                mainButtonStyles={mainButtonStyles}
                icon={<HiPlus />}
                >
                    <Action 
                    style={actionButtonStyles}
                    text="Add note"
                    onClick={() => setIsVisibleModal(true)}
                    >
                        <HiDocumentAdd />
                    </Action>
                </Fab>
            </div>
            
            {isVisibleModal && 
                <MainModal addNote={addNote} noteInfo={noteInfo} handleInputChange={handleInputChange}/>
            }
            
        </div>
    )
}