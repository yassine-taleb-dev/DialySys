export interface AdminSettingsDto {
  notificationsEmail: boolean;
  notificationsSystem: boolean;
  sessionTimeout: number;
  langue: string;
  exportFormat: string;
  auditLog: boolean;
  doubleAuth: boolean;
}
