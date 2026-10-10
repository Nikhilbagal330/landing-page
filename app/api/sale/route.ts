import { connection } from "next/server";
import { getSaleData } from "@/lib/sale-data";

export async function GET() {
  await connection();
  return Response.json(getSaleData());
}
