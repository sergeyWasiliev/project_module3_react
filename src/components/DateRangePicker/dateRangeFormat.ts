import { format } from 'date-fns'

/** Поля Depart / Return — Figma 2182:2635 («1 December 2025»). */
export function formatTicketDate(date: Date): string {
  return format(date, 'd MMMM yyyy')
}