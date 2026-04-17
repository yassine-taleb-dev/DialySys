export interface Utilisateur {
   id: number;
  login: string;
  role: string;
  nom: string;
  prenom: string;
  dateCreation: string;
  actif: boolean;
}

export function getInitials(user: Partial<Utilisateur> | null | undefined): string {
  return `${user?.nom?.[0] ?? ''}${user?.prenom?.[0] ?? ''}`.toUpperCase();
}

export function getFullName(user: Partial<Utilisateur> | null | undefined): string {
  return `${user?.nom ?? ''} ${user?.prenom ?? ''}`.trim();
}

