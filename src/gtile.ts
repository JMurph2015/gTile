import {GridDims} from './settings';

export class GTile {
    availableGridSizes: GridDims[] | null = null;
    //gridSizes: GridDims[];
    //activeGridSize: GridDims;

    //monitors: Monitor[];

    autoClose: boolean = true;
    animation: boolean = true;
    showIcon: boolean = true;
    globalPresetsEnable: boolean = false;

    windowMargin: number = 0;

    //insetsPrimary: InsetSpec;
    //insetsSecondary: InsetSpec;

    maxTimeout: number = 0;

    constructor() {}
    init() {}
    enable() {}
    disable() {}
}