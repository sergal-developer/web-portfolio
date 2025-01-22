//#region IMPORTS
//#endregion

export class Helpers {
    //#region INTERNAL-PROPERTIES
    constructor () {}
    //#endregion

    //#region FUNCTIONS
    /* array.sort(dynamicSort('-property' | 'property')); */
    dynamicSort(property: string) {
        let sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return (item: any, itemNext: any) => {
            const result = (item[property] < itemNext[property]) ? -1 : (item[property] > itemNext[property]) ? 1 : 0;
            return result * sortOrder;
        };
    }
    //#endregion
}
