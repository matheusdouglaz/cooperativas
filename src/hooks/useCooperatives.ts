"use client";

import { useState, useEffect } from 'react';
import { Cooperative } from '@/types/cooperative';

interface UseCooperativesReturn {
  cooperatives: Cooperative[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function useCooperatives(itemsPerPage: number = 10): UseCooperativesReturn {
  const [cooperatives, setCooperatives] = useState<Cooperative[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCooperatives = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://subscribe-api-production.up.railway.app/api/v1/coops');
        
        if (!response.ok) {
          throw new Error(`Erro ao carregar dados: ${response.status}`);
        }
        
        const data = await response.json();
        setCooperatives(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchCooperatives();
  }, []);

  const totalPages = Math.ceil(cooperatives.length / itemsPerPage);

  return {
    cooperatives,
    loading,
    error,
    totalPages,
    currentPage,
    setCurrentPage,
  };
} 