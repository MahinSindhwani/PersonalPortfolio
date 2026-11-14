const TYPING_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || TYPING_TAGS.includes(target.tagName);
}

function usesModifier(event: KeyboardEvent): boolean {
  return event.metaKey || event.ctrlKey || event.altKey;
}

export function isPlainKeyPress(event: KeyboardEvent): boolean {
  return !usesModifier(event) && !event.repeat && !isTypingTarget(event.target);
}

export function isPlainLeftClick(event: MouseEvent): boolean {
  if (event.defaultPrevented || event.button !== 0) return false;
  return !(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey);
}
