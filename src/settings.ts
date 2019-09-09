class GridDims {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function parseTuple(format: string, delimiter: string): GridDims {
    let parts = format.trim().split(delimiter);
    if ( parts.length != 2
        || isNaN(parts[0]) || parts[0] < 0 || parts[0] > 40
        || isNaN(parts[1]) || parts[1] < 0 || parts[1] > 40) {
        
        //log("Bad format " + format ", delimiter " + delimiter);
        return new GridDims(-1, -1);
    }
    return new GridDims(Number(parts[0]), Number(parts[1]));
}