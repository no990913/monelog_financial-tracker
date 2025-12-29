import { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileSettings } from '@/components/settings/ProfileSettings';
import { SecuritySettings } from '@/components/settings/SecuritySettings';
import { DataSettings } from '@/components/settings/DataSettings';

export function Settings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-muted text-muted-foreground">
          <TabsTrigger value="profile" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Security
          </TabsTrigger>
          <TabsTrigger value="data" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Data & Backup
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileSettings />
        </TabsContent>

        <TabsContent value="security">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="data">
          <DataSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
