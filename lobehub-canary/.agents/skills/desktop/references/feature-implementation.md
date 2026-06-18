# Desktop Feature Implementation Guide

## Architecture: Main Process <-> IPC <-> Renderer

1. Create Controller (IPC Handler) in apps/desktop/src/main/controllers/
2. Define IPC Types in packages/electron-client-ipc/src/types.ts
3. Create Service Layer in src/services/electron/
4. Implement Store Action in appropriate slice

Best practices: validate inputs, async for heavy ops, structured results with success/error.