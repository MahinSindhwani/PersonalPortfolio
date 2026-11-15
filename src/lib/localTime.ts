export function formatLocalTime(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone, hour: 'numeric', minute: '2-digit' }).format(date);
}
