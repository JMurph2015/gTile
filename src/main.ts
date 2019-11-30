// GJS import system
declare var imports:any;
declare var global:any;

// Initialize an instance of the extension object
import {GTile} from './gtile';

/*
define.imports({
    St: imports.gi.St,
    Main: imports.ui.main,
    Shell: imports.gi.Shell,
});
*/

let exten = new GTile();

export function init() {
    exten.init();
}
export function enable() {
    exten.enable();
}
export function disable() {
    exten.disable();
}



