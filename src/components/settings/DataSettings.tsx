import { Download, Upload, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function DataSettings() {
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: 'Success',
      description: 'Data exported successfully',
    });
  };

  const handleBackup = () => {
    toast({
      title: 'Success',
      description: 'Backup created successfully',
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Export Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Download all your financial data in CSV or JSON format.
          </p>
          <div className="flex gap-3">
            <Button
              onClick={handleExport}
              variant="outline"
              className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="h-4 w-4 mr-2" strokeWidth={1.5} />
              Export as CSV
            </Button>
            <Button
              onClick={handleExport}
              variant="outline"
              className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="h-4 w-4 mr-2" strokeWidth={1.5} />
              Export as JSON
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Backup & Restore</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Create a backup of your data or restore from a previous backup.
          </p>
          <div className="flex gap-3">
            <Button
              onClick={handleBackup}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Upload className="h-4 w-4 mr-2" strokeWidth={1.5} />
              Create Backup
            </Button>
            <Button
              variant="outline"
              className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="h-4 w-4 mr-2" strokeWidth={1.5} />
              Restore Backup
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Permanently delete all your data. This action cannot be undone.
          </p>
          <Button variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            <Trash2 className="h-4 w-4 mr-2" strokeWidth={1.5} />
            Delete All Data
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
