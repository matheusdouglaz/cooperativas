"use client";

import { Button } from '@/components/ui/button';
import { Table, Grid3X3 } from 'lucide-react';

interface ViewToggleProps {
  view: 'table' | 'cards';
  onViewChange: (view: 'table' | 'cards') => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
      <Button
        variant={view === 'table' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('table')}
        className="h-8 px-2"
      >
        <Table className="h-4 w-4" />
        <span className="ml-1 text-xs hidden sm:inline">Tabela</span>
      </Button>
      <Button
        variant={view === 'cards' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('cards')}
        className="h-8 px-2"
      >
        <Grid3X3 className="h-4 w-4" />
        <span className="ml-1 text-xs hidden sm:inline">Cards</span>
      </Button>
    </div>
  );
} 