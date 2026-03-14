import { db } from "@/lib/db/client";
import { users, tasks } from "@/lib/db/schema";

/**
 * Fetch dashboard metrics: user count, active tasks, etc.
 */
export async function getDashboardStats() {
  const userCount = await db.select().from(users).then(results => results.length);
  const activeTasks = await db
    .select()
    .from(tasks)
    .where(tasks.status.eq("active"))
    .then(results => results.length);

  return { userCount, activeTasks };
}