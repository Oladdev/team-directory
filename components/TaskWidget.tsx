'use client';

import { useState } from 'react';

export default function TaskWidget() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete IFT 211 revision', done: false },
    { id: 2, text: 'Check next Arsenal kickoff time', done: false },
    { id: 3, text: 'Merge base layout PR', done: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4 text-slate-800">Quick Tasks</h2>
      <ul className="space-y-3 flex-1 overflow-y-auto">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
            />
            <span className={`text-sm ${task.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}