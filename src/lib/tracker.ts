import { supabase } from "@/integrations/supabase/client"

// ─── TYPES ───────────────────────────────────────────────────────────────────

export type QuizEvent =
  // Session
  | 'session_start'          // usuário abre o quiz
  | 'session_end'            // aba fechada / idle 30min
  // Navigation
  | 'step_view'              // entrou num step
  | 'step_complete'          // completou o step (clicou continuar)
  | 'step_back'              // clicou voltar
  | 'step_abandon'           // ficou idle >30s no step sem avançar
  // Interactions
  | 'option_select'          // selecionou uma opção (radio/checkbox)
  | 'option_deselect'        // desmarcou uma opção
  | 'slider_change'          // moveu o slider (debounce 500ms)
  | 'slider_final'           // valor final ao clicar continuar
  // Result
  | 'result_view'            // viu a tela de diagnóstico
  | 'result_cta_click'       // clicou em "QUERO COMEÇAR AGORA"
  // UTM / source
  | 'utm_captured'           // UTMs identificados na sessão

export interface TrackPayload {
  event: QuizEvent
  sessionId: string
  stepIndex?: number
  stepId?: string
  value?: any // Generic JSON value for option_select, slider_final, etc.
  timeOnStep?: number        // ms desde que o step foi exibido
  totalTimeMs?: number       // ms desde session_start
  meta?: Record<string, unknown>
}

// ─── IMPLEMENTATION ──────────────────────────────────────────────────────────

const SESSION_KEY = 'quiz_session_id'

export function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY)
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem(SESSION_KEY, id)
  }
  return id
}

let sessionStart = Date.now()
let stepStart = Date.now()
let currentTrackingStepIndex = 0;
let currentTrackingStepId = '';

export async function trackEvent(payload: Omit<TrackPayload, 'sessionId' | 'totalTimeMs' | 'timeOnStep'>) {
  const body = {
    session_id: getSessionId(),
    event: payload.event,
    step_index: payload.stepIndex ?? currentTrackingStepIndex,
    step_id: payload.stepId ?? currentTrackingStepId,
    value: payload.value ?? null,
    time_on_step_ms: Date.now() - stepStart,
    total_time_ms: Date.now() - sessionStart,
    meta: payload.meta ?? {},
  }

  // @ts-ignore - bypassing generated types mismatch until the user runs 'supabase gen types'
  const { error } = await supabase.from('events').insert(body);
  
  if (error) {
    console.error("Tracker Supabase Error:", error);
    try {
      const queue = JSON.parse(localStorage.getItem('track_queue') || '[]')
      queue.push(body)
      localStorage.setItem('track_queue', JSON.stringify(queue))
    } catch(e) {}
  }
}

export function onStepEnter(stepIndex: number, stepId: string | number) {
  stepStart = Date.now()
  currentTrackingStepIndex = stepIndex;
  currentTrackingStepId = String(stepId);
  trackEvent({ event: 'step_view', stepIndex, stepId: String(stepId) })
}

export function onStepComplete(value?: any) {
  trackEvent({ event: 'step_complete', value })
}

export function onOptionSelect(value: any) {
  trackEvent({ event: 'option_select', value })
}

export function onOptionDeselect(value: any) {
  trackEvent({ event: 'option_deselect', value })
}

let sliderTimeout: any = null;
export function onSliderChange(value: any) {
  if (sliderTimeout) clearTimeout(sliderTimeout);
  sliderTimeout = setTimeout(() => {
    trackEvent({ event: 'slider_change', value })
  }, 500);
}

export function onSliderFinal(value: any) {
  trackEvent({ event: 'slider_final', value })
}

// Optionally call on window beforeunload
export function onSessionEnd() {
  trackEvent({ event: 'session_end' })
}
