export class GTileSettings {
    keybindings = null;
    constructor(parent) {
        this.keybindings = {
            "show-toggle-tiling": () => { parent.toggleTiling() }
        }
    }
}