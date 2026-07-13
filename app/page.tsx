'use client';

import { useState } from 'react';

export default function KrakenixCommand() {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const executeCommand = async () => {
    if (!command.trim()) return;
    
    setIsLoading(true);
    setResponse('');
    
    try {
      const res = await fetch('/api/command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command }),
      });
      
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse('❌ Connection error. Check console.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#00ff9f' }}>🦑 Krakenix Command OS v1</h1>
      <p>Empire Execution Engine — Type natural commands</p>
      
      <div style={{ margin: '30px 0' }}>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && executeCommand()}
          placeholder="Build roofing proposal, Research leads, etc."
          style={{ width: '100%', padding: '15px', fontSize: '16px', borderRadius: '8px', border: '1px solid #333' }}
          disabled={isLoading}
        />
        <button 
          onClick={executeCommand}
          disabled={isLoading}
          style={{ marginTop: '10px', padding: '12px 30px', background: '#00ff9f', color: 'black', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {isLoading ? 'Executing...' : 'EXECUTE COMMAND'}
        </button>
      </div>

      {response && (
        <div style={{ background: '#111', padding: '20px', borderRadius: '8px', whiteSpace: 'pre-wrap', marginTop: '20px' }}>
          {response}
        </div>
      )}
    </div>
  );
}