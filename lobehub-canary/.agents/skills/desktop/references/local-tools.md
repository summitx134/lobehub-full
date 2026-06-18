# Desktop Local Tools Implementation

Workflow: Manifest -> Types -> Store Action -> Service Layer -> Controller -> Agent Docs

Controller pattern: @IpcMethod() decorator, ControllerModule base class, groupName static property.
Renderer uses ensureElectronIpc() to get typed IPC client.