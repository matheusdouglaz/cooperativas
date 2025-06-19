"use client";

import { ChevronUp, ChevronDown, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SortDirection, Cooperative } from '@/types/cooperative';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface SortableHeaderProps {
  label: string;
  sortKey: keyof Cooperative;
  currentSort: { key: keyof Cooperative; direction: SortDirection };
  onSort: (key: keyof Cooperative) => void;
}

export function SortableHeader({ 
  label, 
  sortKey, 
  currentSort, 
  onSort 
}: SortableHeaderProps) {
  const isActive = currentSort.key === sortKey && currentSort.direction !== null;
  
  const getSortIcon = () => {
    if (currentSort.direction === 'asc') {
      return <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />;
    }
    if (currentSort.direction === 'desc') {
      return <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />;
    }
    return <ArrowUpDown className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />;
  };

  const getTooltipText = () => {
    if (isActive) {
      if (currentSort.direction === 'asc') {
        return 'Clique para ordenar Z-A';
      }
      if (currentSort.direction === 'desc') {
        return 'Clique para remover ordenação';
      }
    }
    return 'Clique para ordenar A-Z';
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => onSort(sortKey)}
            className={`h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm transition-colors ${
              isActive ? 'text-green-600 hover:text-green-700' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-1 group">
              <span className="truncate">{label}</span>
              <div className={`transition-transform group-hover:scale-110 ${
                isActive ? 'text-green-600' : 'text-muted-foreground'
              }`}>
                {getSortIcon()}
              </div>
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getTooltipText()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
} 