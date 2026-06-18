# Database Migrations Guide

## Generate
bun run db:generate

## Rebase conflicts
Remove branch migrations, rebase, regenerate.

## Idempotent clauses
Always use IF NOT EXISTS / DROP IF EXISTS for safe re-runs.

## Development-stage changes
Delete draft artifacts, regenerate from current schema.