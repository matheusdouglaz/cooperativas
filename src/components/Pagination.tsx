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
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
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

        {/* Versão desktop: paginação completa */}
        <div className="hidden sm:flex items-center space-x-2">
          {getVisiblePages().map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="px-2 py-1 text-sm text-muted-foreground">
                  ...
                </span>
              ) : (
                <Button
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => onPageChange(page as number)}
                  className="w-8 h-8 p-0"
                >
                  {page}
                </Button>
              )}
            </div>
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