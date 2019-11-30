export class GridDims {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export function parseTuple(format: string, delimiter: string): GridDims {
    let parts = format.trim().split(delimiter);
    if ( parts.length != 2
        || isNaN(Number(parts[0])) || Number(parts[0]) < 0 || Number(parts[0]) > 40
        || isNaN(Number(parts[1])) || Number(parts[1]) < 0 || Number(parts[1]) > 40) {
        
        //log("Bad format " + format ", delimiter " + delimiter);
        return new GridDims(-1, -1);
    }
    return new GridDims(Number(parts[0]), Number(parts[1]));
}