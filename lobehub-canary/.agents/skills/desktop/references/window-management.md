# Desktop Window Management Guide

Window creation: BrowserWindow with secure webPreferences (contextIsolation, no nodeIntegration).
State persistence: save/restore bounds to settings store.
Multi-window: Map<string, BrowserWindow> with cleanup on 'closed' event.
Frameless: frame:false, titleBarStyle:'hidden', CSS -webkit-app-region:drag.