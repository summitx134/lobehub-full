// Shared types between in-browser probe and Node-side analyzer.
export interface ProbeStreamEvent {
  data?: Record<string, unknown>;
  dataKeys?: string[];
  eventId?: string | null;
  opIdTail: string;
  stepIndex?: number;
  t: number;
  transport: 'ws' | 'sse';
  type: string;
}
export interface ProbeActionCall {
  args?: { count?: number; context?: unknown; params?: unknown };
  error?: string;
  name: string;
  stack?: string;
  t: number;
}
export interface ProbeMessageSummary {
  chN: number;
  cLen: number;
  id: string;
  rLen: number;
  role: string;
  tools: number;
}
export interface ProbeTimelineSample {
  activeTopic: string | null;
  byKey: Record<string, { n: number; dbN: number; msgs: ProbeMessageSummary[] }>;
  runOps: number;
  t: number;
}
export interface ProbeDump {
  actionCalls: ProbeActionCall[];
  meta: { t0: number; collectedAt: number; sampleCount: number; eventCount: number; callCount: number };
  streamEvents: ProbeStreamEvent[];
  timeline: ProbeTimelineSample[];
}