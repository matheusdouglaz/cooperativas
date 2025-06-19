"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SortableHeader } from './SortableHeader';
import { Pagination } from './Pagination';
import { useCooperatives } from '@/hooks/useCooperatives';
import { useSorting } from '@/hooks/useSorting';
import { formatCNPJ } from '@/lib/formatters';
import { Cooperative } from '@/types/cooperative';
import { Loader2, AlertCircle } from 'lucide-react';

export function CooperativesTable() {
  const { cooperatives, loading, error, totalPages, currentPage, setCurrentPage } = useCooperatives();
  const { sortedData, sortConfig, handleSort } = useSorting(cooperatives);

  // Paginação dos dados
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Carregando cooperativas...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="h-6 w-6" />
          <span>Erro: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <SortableHeader
                  label="Nome"
                  sortKey="name"
                  currentSort={sortConfig}
                  onSort={handleSort}
                />
              </TableHead>
              <TableHead>
                <SortableHeader
                  label="CNPJ"
                  sortKey="CNPJ"
                  currentSort={sortConfig}
                  onSort={handleSort}
                />
              </TableHead>
              <TableHead>
                <SortableHeader
                  label="Estado"
                  sortKey="state"
                  currentSort={sortConfig}
                  onSort={handleSort}
                />
              </TableHead>
              <TableHead>
                <SortableHeader
                  label="Sistema Cooperativo"
                  sortKey="coopSystem"
                  currentSort={sortConfig}
                  onSort={handleSort}
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((cooperative: Cooperative) => (
              <TableRow key={cooperative.id}>
                <TableCell className="font-medium">
                  {cooperative.name}
                </TableCell>
                <TableCell>
                  {formatCNPJ(cooperative.CNPJ)}
                </TableCell>
                <TableCell>
                  {cooperative.state}
                </TableCell>
                <TableCell>
                  {cooperative.coopSystem.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
} 