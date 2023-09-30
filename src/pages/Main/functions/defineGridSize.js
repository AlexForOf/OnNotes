export const defineGridSize = (screenWidth, notes = []) => {
    let toReturn = [];
    console.log(screenWidth)
    for (let index = 0; index < (screenWidth <= 768 ? 1 : 6); index++) {
        const element = (!index ? notes :[]);
        toReturn.push(element)
    }
    return toReturn
}
