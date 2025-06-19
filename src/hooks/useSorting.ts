"use client";

import { useState, useMemo } from 'react';
import { Cooperative, SortConfig, SortDirection } from '@/types/cooperative';

export function useSorting<T extends Cooperative>(data: T[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'name',
    direction: null,
  });

  const sortedData = useMemo(() => {
    if (!sortConfig.direction) return data;

    return [...data].sort((a, b) => {
      let aValue: string | number = a[sortConfig.key] as string | number;
      let bValue: string | number = b[sortConfig.key] as string | number;

      // Para campos aninhados como coopSystem.name
      if (sortConfig.key === 'coopSystem') {
        aValue = a.coopSystem.name;
        bValue = b.coopSystem.name;
      }

      // Converte para string para comparação
      aValue = String(aValue).toLowerCase();
      bValue = String(bValue).toLowerCase();

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: keyof Cooperative) => {
    let direction: SortDirection = 'asc';

    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc';
      } else if (sortConfig.direction === 'desc') {
        direction = null;
      }
    }

    setSortConfig({ key, direction });
  };

  return {
    sortedData,
    sortConfig,
    handleSort,
  };
} 