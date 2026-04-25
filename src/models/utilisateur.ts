export interface Utilisateur {
  id: number;
  login: string;
  role: string;
  nom: string;
  prenom: string;
  specialite: string | null;
  superviseurId: number | null;
  dateCreation: string;
  actif: boolean;
  service: string;
  telephone: string;
}

export function getInitials(user: Partial<Utilisateur> | null | undefined): string {
  return `${user?.nom?.[0] ?? ''}${user?.prenom?.[0] ?? ''}`.toUpperCase();
}

export function getFullName(user: Partial<Utilisateur> | null | undefined): string {
  return `${user?.nom ?? ''} ${user?.prenom ?? ''}`.trim();
}
