// import { parseISO, toDate } from 'date-fns';

export default function formatDate(date: Date): Date {
  // Intl.DateTimeFormat('pt-BR').format(date); // TODO

  date.getDate();

  /* const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const formatted = `${day}/${month}/${year}`;
  return formatted;
 */
  return date;
}
