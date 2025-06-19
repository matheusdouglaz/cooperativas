export interface CoopSystem {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string | null;
  updatedBy: string | null;
}

export interface Cooperative {
  id: string;
  name: string;
  CNPJ: string;
  state: string;
  coopSystem: CoopSystem;
}

export type SortDirection = 'asc' | 'desc' | null;

export interface SortConfig {
  key: keyof Cooperative;
  direction: SortDirection;
} 