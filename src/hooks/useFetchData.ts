import { useState, useEffect } from 'react';
import mockData from '../data/mockData.json';
import type { Data } from '../types/data';

const API_URL = 'https://api.example.com/data'; // Replace with actual API URL

export function useFetchData() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData as Data);
      } catch (err) {
        console.warn('Failed to fetch data from API, using mock data:', err);
        setData(mockData as Data);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}