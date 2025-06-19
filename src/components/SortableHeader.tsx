"use client";

import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SortDirection, Cooperative } from '@/types/cooperative';

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
  const isActive = currentSort.key === sortKey;
  
  const getSortIcon = () => {
    if (!isActive) return null;
    
    if (currentSort.direction === 'asc') {
      return <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />;
    }
    if (currentSort.direction === 'desc') {
      return <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />;
    }
    return null;
  };

  return (
    <Button
      variant="ghost"
      onClick={() => onSort(sortKey)}
      className="h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm"
    >
      <div className="flex items-center gap-1">
        <span className="truncate">{label}</span>
        {getSortIcon()}
      </div>
    </Button>
  );
} 