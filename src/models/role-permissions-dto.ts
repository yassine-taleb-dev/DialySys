export interface RolePermissionsDto {
  role: string;
  permissions: Record<string, boolean>;
}
