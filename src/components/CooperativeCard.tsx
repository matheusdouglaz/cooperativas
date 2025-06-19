"use client";

import { Cooperative } from '@/types/cooperative';
import { formatCNPJ } from '@/lib/formatters';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CooperativeCardProps {
  cooperative: Cooperative;
}

export function CooperativeCard({ cooperative }: CooperativeCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold truncate">
          {cooperative.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground">CNPJ:</span>
          <span className="text-sm font-mono">{formatCNPJ(cooperative.CNPJ)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground">Estado:</span>
          <span className="text-sm">{cooperative.state}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground">Sistema Cooperativo:</span>
          <span className="text-sm truncate">{cooperative.coopSystem.name}</span>
        </div>
      </CardContent>
    </Card>
  );
} 