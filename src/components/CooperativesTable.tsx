"use client";

import { useState } from 'react';
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
import { CooperativeCard } from './CooperativeCard';
import { ViewToggle } from './ViewToggle';
import { useCooperatives } from '@/hooks/useCooperatives';
import { useSorting } from '@/hooks/useSorting';
import { formatCNPJ } from '@/lib/formatters';
import { Cooperative } from '@/types/cooperative';
import { Loader2, AlertCircle } from 'lucide-react';

export function CooperativesTable() {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
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
          <span className="text-sm sm:text-base">Carregando cooperativas...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="h-6 w-6" />
          <span className="text-sm sm:text-base">Erro: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Toggle de visualização - visível apenas em tablets */}
      <div className="flex justify-end">
        <div className="hidden sm:block md:hidden">
          <ViewToggle view={viewMode} onViewChange={setViewMode} />
        </div>
      </div>

      {/* Versão Desktop: Sempre tabela */}
      <div className="hidden md:block rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">
                  <SortableHeader
                    label="Nome"
                    sortKey="name"
                    currentSort={sortConfig}
                    onSort={handleSort}
                  />
                </TableHead>
                <TableHead className="w-[180px]">
                  <SortableHeader
                    label="CNPJ"
                    sortKey="CNPJ"
                    currentSort={sortConfig}
                    onSort={handleSort}
                  />
                </TableHead>
                <TableHead className="w-[100px]">
                  <SortableHeader
                    label="Estado"
                    sortKey="state"
                    currentSort={sortConfig}
                    onSort={handleSort}
                  />
                </TableHead>
                <TableHead className="w-[250px]">
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
                  <TableCell className="font-medium text-sm sm:text-base truncate">
                    {cooperative.name}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm font-mono">
                    {formatCNPJ(cooperative.CNPJ)}
                  </TableCell>
                  <TableCell className="text-sm sm:text-base">
                    {cooperative.state}
                  </TableCell>
                  <TableCell className="text-sm sm:text-base truncate">
                    {cooperative.coopSystem.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Versão Tablet: Toggle entre tabela e cards */}
      <div className="hidden sm:block md:hidden">
        {viewMode === 'table' ? (
          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">
                      <SortableHeader
                        label="Nome"
                        sortKey="name"
                        currentSort={sortConfig}
                        onSort={handleSort}
                      />
                    </TableHead>
                    <TableHead className="w-[140px]">
                      <SortableHeader
                        label="CNPJ"
                        sortKey="CNPJ"
                        currentSort={sortConfig}
                        onSort={handleSort}
                      />
                    </TableHead>
                    <TableHead className="w-[80px]">
                      <SortableHeader
                        label="Estado"
                        sortKey="state"
                        currentSort={sortConfig}
                        onSort={handleSort}
                      />
                    </TableHead>
                    <TableHead className="w-[180px]">
                      <SortableHeader
                        label="Sistema"
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
                      <TableCell className="font-medium text-sm truncate">
                        {cooperative.name}
                      </TableCell>
                      <TableCell className="text-xs font-mono">
                        {formatCNPJ(cooperative.CNPJ)}
                      </TableCell>
                      <TableCell className="text-sm">
                        {cooperative.state}
                      </TableCell>
                      <TableCell className="text-sm truncate">
                        {cooperative.coopSystem.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {paginatedData.map((cooperative: Cooperative) => (
              <CooperativeCard key={cooperative.id} cooperative={cooperative} />
            ))}
          </div>
        )}
      </div>

      {/* Versão Mobile: Sempre cards */}
      <div className="sm:hidden space-y-3">
        {paginatedData.map((cooperative: Cooperative) => (
          <CooperativeCard key={cooperative.id} cooperative={cooperative} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
} 