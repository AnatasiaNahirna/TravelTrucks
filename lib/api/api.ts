import axios from "axios";
import Camper from "@/types/camper";

export const nextServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export interface responseProps {
  items: Camper[],
  total: number,
}


export async function fetchCampers(page: number = 1): Promise<responseProps> {
  const response = await nextServer<responseProps>('/campers', { params: { page, limit: 4 } });
  return response.data;
}

export async function getCamperbyId(id: string): Promise<Camper> {
  const response = await nextServer.get<Camper>(`/campers/${id}`);
  return response.data;
}