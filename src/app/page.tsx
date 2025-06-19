import { CooperativesTable } from '@/components/CooperativesTable';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Cooperativas
            </h1>
            <p className="text-muted-foreground">
              Lista de cooperativas cadastradas no sistema
            </p>
          </div>
          
          <CooperativesTable />
        </div>
      </div>
    </div>
  );
}
