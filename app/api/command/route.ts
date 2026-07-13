import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { command } = await request.json();
    
    // Basic intelligent response for now (will connect full Grok later)
    let responseText = `🦑 Krakenix Command processed: "${command}"\n\nAutonomous response: Task analyzed. Next action ready.`;
    
    if (command.toLowerCase().includes('test') || command.toLowerCase().includes('ready')) {
      responseText = `✅ System confirmed ready. Empire building active. Full autonomous layer incoming.`;
    } else if (command.toLowerCase().includes('roof')) {
      responseText = `🏠 Roofing proposal template ready. Would you like me to generate a full cold outreach version?`;
    }
    
    return NextResponse.json({ response: responseText });
  } catch (error) {
    return NextResponse.json({ response: '❌ Error processing command. Try again.' });
  }
}