import TaskWidget from "@/components/TaskWidget";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-white">All Tasks</h1>
      
      <div className="max-w-2xl bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="h-96"> 
          <TaskWidget />
        </div>
      </div>
    </div>
  );
}