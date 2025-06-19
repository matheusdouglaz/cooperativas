"use client";

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationProps) {
  const getVisiblePages = () => {
    // Sempre mostra apenas 3 páginas
    const pages = [];
    
    if (totalPages <= 3) {
      // Se tem 3 páginas ou menos, mostra todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Se tem mais de 3 páginas, mostra 3 páginas inteligentemente
      if (currentPage <= 2) {
        // Páginas 1, 2, 3
        pages.push(1, 2, 3);
      } else if (currentPage >= totalPages - 1) {
        // Últimas 3 páginas
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Página atual e uma antes e depois
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-4">
      <div className="text-sm text-muted-foreground text-center sm:text-left">
        Página {currentPage} de {totalPages}
      </div>
      
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-xs sm:text-sm"
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Anterior</span>
        </Button>

        {/* Versão mobile: apenas página atual e total */}
        <div className="flex sm:hidden items-center space-x-1">
          <Button
            variant="default"
            size="sm"
            className="w-8 h-8 p-0 text-xs"
            disabled
          >
            {currentPage}
          </Button>
          <span className="text-xs text-muted-foreground">/</span>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 text-xs"
            disabled
          >
            {totalPages}
          </Button>
        </div>

        {/* Versão desktop: sempre 3 botões de página */}
        <div className="hidden sm:flex items-center space-x-2">
          {getVisiblePages().map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page)}
              className="w-8 h-8 p-0"
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-xs sm:text-sm"
        >
          <span className="hidden sm:inline">Próxima</span>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
} 