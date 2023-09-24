"use client";

import { useAppSelector } from '@/hooks/redux';

export default function Dashboard() {
  const { value } = useAppSelector((state) => state.counterSliceReducer);
  return (
    <div>
      <h1>DASHBOARD</h1>

      <h2>{value}</h2>
    </div>
  );
}
