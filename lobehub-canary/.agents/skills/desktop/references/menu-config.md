# Desktop Menu Configuration Guide

Menu types: App Menu, Context Menu, Tray Menu

App menu uses Menu.buildFromTemplate with standard roles (copy, paste, quit).
Cross-platform: CmdOrCtrl accelerator, process.platform checks for macOS-specific items.
Tray menu: Tray.setContextMenu() with show/quit actions.