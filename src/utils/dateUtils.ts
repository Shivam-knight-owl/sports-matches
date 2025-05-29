import { format, parseISO } from 'date-fns';

export const formatMatchDate = (utcDateString: string): string => {
  const date = parseISO(utcDateString);
  return format(date, 'MMM d, yyyy');
};

export const formatMatchTime = (utcDateString: string): string => {
  const date = parseISO(utcDateString);
  return format(date, 'h:mm a');
};

export const formatFullDateTime = (utcDateString: string): string => {
  const date = parseISO(utcDateString);
  return format(date, 'EEEE, MMM d, yyyy • h:mm a');
};