export const defineGridSize = (screenWidth) => {
    let toReturn = [];
    for (let index = 0; index < (screenWidth <= 768 ? 1 : 6); index++) {
        const element = [];
        toReturn.push(element)
    }
    return toReturn
}
