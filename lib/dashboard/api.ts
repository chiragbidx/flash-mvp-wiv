import { NextRequest, NextResponse } from "next/server";
import { getDashboardStats } from "./data";

/**
 * GET /api/dashboard/stats
 */
export async function GET(_req: NextRequest) {
  const stats = await getDashboardStats();
  return NextResponse.json(stats);
}