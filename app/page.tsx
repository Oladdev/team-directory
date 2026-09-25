
export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for future PRs */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-48 flex items-center justify-center text-slate-400">
          Widget Space 1
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-48 flex items-center justify-center text-slate-400">
          Widget Space 2
        </div>
      </div>
    </div>
  );
}