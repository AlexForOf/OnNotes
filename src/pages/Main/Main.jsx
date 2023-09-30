import React from "react";

import "./Main.css"

// Custom components

import { DragDropContext } from "react-beautiful-dnd"
import { DroppableContainer } from "./DroppableContainer";
 
const InitialList = [
    {
        id: 'id1',
        title: "Robin",
        content: "Wieruchasdadadadadadaadadadadad"
    },
    {
        id: 'id2',
        title: "Aiden",
        content: "Wieruch"
    },
    {
        id: 'id3',
        title: "Jannet",
        content: "Wieruch"
    },
]


export const Main = ({screenSize}) => {

    const defineGridSize = (screenWidth) => {
        let toReturn = [];
        for (let index = 0; index < (screenWidth <= 768 ? 2 : 6); index++) {
            const element = (index === 0 ? InitialList : []);
            toReturn.push(element)
        }
        return toReturn
    }
    
    const [list, setList] = React.useState(defineGridSize(screenSize.width))

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

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source)
        const destinationClone = Array.from(destination)
        const [removed] = sourceClone.splice(droppableSource.index, 1)

        destinationClone.splice(droppableDestination.index, 0, removed)

        const result = {}
        result[droppableSource.droppableId] = sourceClone
        result[droppableDestination.droppableId] = destinationClone

        return result;
    }

    return (
        <div style={containerStyles} className="mainpage-main">
            <DragDropContext onDragEnd={handleDragEnd}>
                {
                    list.map((item, index) => (
                        <DroppableContainer item={item} index={index} />
                    ))
                }
            </DragDropContext>
        </div>
    )
}