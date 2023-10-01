import { Draggable } from "react-beautiful-dnd"
import "./DraggableCard.css"

const getItemStyle = (isDragging, draggableStyle) => ({  
    // change background colour if dragging
    boxShadow: isDragging ? "0px 0px 6px 2px rgba(66, 68, 90, 0.35)" : "none",
  
    // styles we need to apply on draggables
    ...draggableStyle
});

export const DraggableCard = ({el, index, selectNote}) => {
    const noteInfo = el
    console.log(noteInfo)
    return (
        <Draggable
            key={el.id}
            draggableId={el.id}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    key={el.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                    className="draggablecard-container"
                    onClick={() => selectNote(noteInfo)}
                >
                    <div style={{
                        background: (noteInfo.isBookmarked ? "#000" : "#FFFFFF")
                    }} className="draggablecard-container-bookmark"></div>
                    <div className="draggablecard-container-title">
                        {el.title}
                    </div>
                    <div className="draggablecard-container-content">
                        {el.content}
                    </div>
                </div>
            )}
        </Draggable>
    )
}