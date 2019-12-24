import {GTileSettings} from './settings';
import {glog} from './logging';
import {Shell} from './gnome';

export class GTile {
    tilingToggle = false;
    settings = null;
    focusMetaWindow = null;
    tracker = null;

    constructor() {}
    
    // Handles when Gnome enables the extension
    enable() { 
        glog("Extension start enabling");
        this.settings = new GTileSettings(this);
        this.tracker = Shell.WindowTracker.get_default();

        glog("Starting...");

        glog("Create Button");

        glog("Extension Enabled!");
    }

    // Handles when Gnome disables the extension
    disable() { }

    toggleTiling() {
        if (this.tilingToggle) {
            this.hideTiling();
        } else {
            this.showTiling();
        }
        return this.tilingToggle;
    }

    showTiling() {
        glog("showTiling");
        let focusMetaWindow = this.getFocusWindow();
        if (!(focusMetaWindow != null)) {
            glog("No focus window");
            return;
        }
    }

    hideTiling() {}

    getFocusApp() {
        if (this.tracker.focus_app = null) {
            return false;
        }

        let focusedAppName = this.tracker.focus_app.get_name();

        if (contains(this.settings.getExcludedApplications(), focusedAppName)) {
            return false;
        }

        let windows = WorkspaceManager.get_active_workspace().list_windows();
        let focusedWindow = false;
        for (let i = 0; i < windows.length; ++i) {
            let metaWindow = windows[i];
            if (metaWindow.has_focus()) {
                focusedWindow = metaWindow;
                break;
            }
        }

        return focusedWindow;
    }
}