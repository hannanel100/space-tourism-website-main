// a hook, using react-query to fetch data from the JSON file
// Path: space-tourism/src/hooks/useGetData.tsx
// Compare this snippet from space-tourism/src/hooks/useGetData.tsx:
import { useQuery } from '@tanstack/react-query';
import * as T from '../types/data';

const getData = async (): Promise<T.data> => {
  const res = await fetch('data/data.json');
  const data: T.data = await res.json();
  return data;
};
export const useGetData = () => {
  const { data, isLoading, error } = useQuery(['data'], getData);

  return { data, isLoading, error };
};
