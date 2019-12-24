export const DEBUG = false;

export function glog(log_string) {
    if (DEBUG) {
        global.log("gTile: " + log_string);
    }
}