import "./DroppableContainer.css"

import { DraggableCard } from "./DraggableCard";
import { Droppable } from "react-beautiful-dnd"

const getListStyle = isDraggingOver => ({
    borderInline: isDraggingOver ? "1px solid #e0e0e0" : "1px solid #FFFFFF",
  });

export const DroppableContainer = ({item, index}) => {
    return ( 
        <Droppable key={index} droppableId={`${index}`}>
            {(provided, snapshot) => (
                <div 
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                    className="droppablecontainer-container">
                    {item.map( (el, index) => (
                        <DraggableCard el={el} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}