import { NextResponse } from 'next/server';

export async function GET() {
  const now = new Date();
  return NextResponse.json({
    status: '🦑 Krakenix Scheduler Active',
    message: `Empire task check at ${now.toISOString()}. Daily/lead-gen tasks will run here soon.`,
    nextRun: 'Tomorrow (Vercel Cron coming)'
  });
}