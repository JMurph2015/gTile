/**
 * This file defines the interface between gTile and Gnome
 */
import {GTile} from './gtile';

let gTile = new GTile();

export function init() {};

export function enable() {
    gTile.enable();
};

export function disable() {
    gTile.disable();
};