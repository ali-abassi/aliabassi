import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ToolsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-20 space-y-12">
      <h1 className="text-4xl font-bold tracking-tighter uppercase">Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-2 rounded-none">
          <CardHeader>
            <CardTitle>3D Playground</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Exploring React Three Fiber and Three.js for interactive web experiences.
            </p>
            <span className="text-sm text-muted-foreground">Coming soon</span>
          </CardContent>
        </Card>

        <Card className="border-2 rounded-none">
          <CardHeader>
            <CardTitle>Mini Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Small, useful projects you can actually use. Simple UI, fast performance.
            </p>
            <span className="text-sm text-muted-foreground">Coming soon</span>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

