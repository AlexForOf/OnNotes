export const defineGridSize = (screenWidth, notes = []) => {
    let toReturn = [];
    for (let index = 0; index < (screenWidth <= 768 ? 1 : 6); index++) {
        const element = (!index ? (notes !== null ? notes : []) : []);
        toReturn.push(element)
    }
    return toReturn
}
