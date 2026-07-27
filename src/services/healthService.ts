import { api } from '@/lib/api';

export async function getHealthData() {
  const response = await api.get('/health-data');
  return response.data;
}

export async function saveHealthData(data: {
  height: number;
  weight: number;
  targetDietDaily: number;
  levelActivity: string;
}) {
  const response = await api.put(
    '/health-data',
    data,
  );

  return response.data;
}