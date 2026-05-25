export interface ImportantDate {
  dateEs: string;
  dateEn: string;
  labelEs: string;
  labelEn: string;
  sublabelEs?: string;
  sublabelEn?: string;
}

export const importantDates: ImportantDate[] = [
  {
    dateEs: "Marzo 2026",
    dateEn: "March 2026",
    labelEs: "Llamado a publicar",
    labelEn: "Call for submissions",
  },
  {
    dateEs: "18 de mayo 2026",
    dateEn: "May 18, 2026",
    labelEs: "Cierre de llamado a publicación de trabajos largos",
    labelEn: "Long paper submission deadline",
  },
  {
    dateEs: "18 de mayo 2026",
    dateEn: "May 18, 2026",
    labelEs: "Cierre de llamado a simposio de maestría y doctorado",
    labelEn: "Master's and Doctoral symposium deadline",
  },
  {
    dateEs: "15 de junio 2026",
    dateEn: "June 15, 2026",
    labelEs: "Notificación [aceptación/rechazo]",
    labelEn: "Notification [acceptance/rejection]",
  },
  {
    dateEs: "22 de junio 2026",
    dateEn: "June 22, 2026",
    labelEs: "Recepción de artículos finales",
    labelEn: "Final paper submission",
  },
  {
    dateEs: "13 de agosto 2026",
    dateEn: "August 13, 2026",
    labelEs: "Asamblea General Ordinaria SCo2",
    labelEn: "SCo2 Regular General Meeting",
    sublabelEs: "20.º Congreso Colombiano de Computación",
    sublabelEn: "20th Colombian Computing Conference",
  },
];
