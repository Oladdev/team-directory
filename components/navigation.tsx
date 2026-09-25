import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-full bg-slate-900 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight">Dashboard</div>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/profile" className="hover:text-blue-400 transition-colors">Profile</Link>
          <Link href="/tasks" className="hover:text-blue-400 transition-colors">Tasks</Link>
        </div>
      </div>
    </nav>
  );
}