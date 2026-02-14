import { CONFIG } from './config';

export interface TimeCounter {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateTimeSince(startDate: string): TimeCounter {
  const start = new Date(startDate);
  const now = new Date();
  
  const diffMs = now.getTime() - start.getTime();
  
  // Calculate each unit
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  // Calculate years and remaining months
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Adjust for day of month
  if (now.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }
  
  // Calculate remaining days in current month
  const tempDate = new Date(start);
  tempDate.setFullYear(now.getFullYear());
  tempDate.setMonth(now.getMonth());
  
  let remainingDays = now.getDate() - start.getDate();
  if (remainingDays < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    remainingDays += prevMonth.getDate();
  }
  
  return {
    years,
    months,
    days: remainingDays,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
}

export function formatNumber(num: number): string {
  return num.toString().padStart(2, '0');
}

export function getRelationshipStartDate(): string {
  return CONFIG.relationshipStartDate;
}
