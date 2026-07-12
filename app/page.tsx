'use client';

import { useState } from 'react';

export default function KrakenixCommand() {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('Ready to execute. Type a command like "Build roofing proposal" or "Research leads"');

  const handleCommand = async () => {
    if (!command.trim()) return;
    setResponse('🦑 Krakenix brain executing...');
    try {
      const res = await fetch('/api/command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command }),
      });
      const data = await res.json();
      setResponse(data.result || 'Executed successfully.');
    } catch (e) {
      setResponse('Connection error. Make sure dev server is running.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-mono">
      <h1 className="text-4xl mb-8">🦑 Krakenix Command OS v1</h1>
      <div className="max-w-2xl">
        <textarea
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="w-full h-32 bg-zinc-900 p-4 text-lg rounded border border-zinc-700"
          placeholder="Type natural command..."
        />
        <button
          onClick={handleCommand}
          className="mt-4 bg-white text-black px-8 py-3 rounded hover:bg-zinc-200 font-bold"
        >
          EXECUTE COMMAND
        </button>
        <div className="mt-8 p-6 bg-zinc-900 rounded border border-zinc-700 whitespace-pre-wrap min-h-[200px]">
          {response}
        </div>
      </div>
    </div>
  );
}