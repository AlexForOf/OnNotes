export const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source)
    const destinationClone = Array.from(destination)
    const [removed] = sourceClone.splice(droppableSource.index, 1)

    destinationClone.splice(droppableDestination.index, 0, removed)

    const result = {}
    result[droppableSource.droppableId] = sourceClone
    result[droppableDestination.droppableId] = destinationClone

    return result;
}

export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}