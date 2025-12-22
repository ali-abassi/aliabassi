export default function WorkPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 space-y-12">
      <h1 className="text-4xl font-bold tracking-tighter uppercase">Work</h1>
      
      <div className="space-y-8">
        <section className="border-l-2 border-primary pl-6 space-y-2">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-bold">Role Name</h2>
            <span className="text-muted-foreground text-sm">Present</span>
          </div>
          <p className="text-muted-foreground">Company Name</p>
          <p className="leading-relaxed">
            Description of your work and achievements. Keep it concise and impactful.
          </p>
        </section>

        <section className="border-l-2 border-primary pl-6 space-y-2">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-bold">Previous Role</h2>
            <span className="text-muted-foreground text-sm">2022 — 2024</span>
          </div>
          <p className="text-muted-foreground">Previous Company</p>
          <p className="leading-relaxed">
            Focused on building scalable AI interfaces and improving user experience through design-driven engineering.
          </p>
        </section>
      </div>
    </main>
  );
}

