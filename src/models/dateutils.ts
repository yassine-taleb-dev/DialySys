/**
 * Utilitaires de date — DialySys
 *
 * PROBLÈME CORRIGÉ :
 * new Date("2026-04-03") est interprété comme UTC minuit → converti en heure locale
 * (UTC+1 / UTC+2 au Maroc) donne le 2 avril à 23h ou 22h → décalage d'un jour.
 *
 * SOLUTION : parser "yyyy-MM-dd" en créant la date en heure LOCALE directement.
 */

/**
 * Parse une date ISO "yyyy-MM-dd" en Date locale (sans décalage UTC).
 * À utiliser partout à la place de new Date("yyyy-MM-dd").
 */
export function parseLocalDate(isoDate: string): Date {
  if (!isoDate) return new Date();
  const [year, month, day] = isoDate.split('-').map(Number);
  // month - 1 car JS compte les mois à partir de 0
  return new Date(year, month - 1, day);
}

/**
 * Retourne la date du jour sous forme "yyyy-MM-dd" en heure locale.
 * (new Date().toISOString() renvoie UTC → peut être hier en fin de soirée)
 */
export function todayIso(): string {
  const d = new Date();
  const year  = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day   = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Formate "yyyy-MM-dd" → "dd/MM/yyyy"
 */
export function formatDateFr(isoDate: string): string {
  if (!isoDate) return '—';
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

/**
 * Compare deux dates ISO "yyyy-MM-dd" (ignore l'heure).
 * Retourne true si elles correspondent au même jour calendaire.
 */
export function isSameDay(isoA: string, isoB: string): boolean {
  if (!isoA || !isoB) return false;
  return isoA.substring(0, 10) === isoB.substring(0, 10);
}

/**
 * Retourne le numéro de semaine ISO (lundi = début de semaine).
 */
export function getIsoWeek(date: Date): number {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  // Jeudi de la semaine courante (pivot ISO)
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const week1 = new Date(d.getFullYear(), 0, 4);
  return 1 + Math.round(((d.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
}

/**
 * Retourne les 7 dates (lundi→dimanche) de la semaine contenant `date`.
 * Toutes les dates sont en heure LOCALE.
 */
export function getWeekDays(date: Date): Date[] {
  const d = new Date(date);
  // Ramène au lundi (getDay() : 0=dim, 1=lun, ..., 6=sam)
  const day = d.getDay();
  const diff = (day === 0 ? -6 : 1 - day); // décalage vers lundi
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);

  return Array.from({ length: 7 }, (_, i) => {
    const dd = new Date(d);
    dd.setDate(d.getDate() + i);
    return dd;
  });
}

/**
 * Convertit une Date en "yyyy-MM-dd" en heure LOCALE (pas UTC).
 */
export function dateToIso(date: Date): string {
  const year  = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day   = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}