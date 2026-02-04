import { useHolyContext } from "./hooks.js"
import { useEffect, useState, useCallback } from 'react'

// Move helper functions outside component
const today = () => new Date().toISOString().slice(0, 10);
const yesterday = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
};

// Extract streak logic to custom hook
const useStreak = () => {
  const [streak, setStreak] = useState({ last: null, count: 0 });
  
  const loadStreak = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("streak")) || {
      last: null,
      count: 0
    };
    
    // Clear streak if last was before yesterday
    if (data.last) {
      const lastDate = new Date(data.last);
      const yest = new Date(yesterday());
      
      if (lastDate < yest) {
        const resetData = { last: null, count: 0 };
        localStorage.setItem("streak", JSON.stringify(resetData));
        return resetData;
      }
    }
    
    return data;
  }, []);
  
  const markDone = useCallback(() => {
    const data = loadStreak(); // Use loadStreak to ensure consistency
    const todayStr = today();
    
    if (data.last === todayStr) return data;
    
    const newData = { ...data };
    if (data.last === yesterday()) {
      newData.count++;
    } else {
      newData.count = 1;
    }
    
    newData.last = todayStr;
    localStorage.setItem("streak", JSON.stringify(newData));
    return newData;
  }, [loadStreak]);
  
  return { streak, setStreak, loadStreak, markDone };
};

export default function StreakTracker() {
  const { state } = useHolyContext();
  const { streak, setStreak, loadStreak, markDone } = useStreak();
  
  const wasRosaryPrayedToday = state.mysteries.every(
    mystery => mystery.avemaria
  );
  
  // Initial load
  useEffect(() => {
    setStreak(loadStreak());
  }, [loadStreak, setStreak]);
  
  // Update when prayed
  useEffect(() => {
    if (wasRosaryPrayedToday) {
      setStreak(markDone());
    }
  }, [wasRosaryPrayedToday, markDone, setStreak]);
  
  return <div className="rounded-lg h-8 w-8 bg-gray-900/60 text-white  hover:bg-gray-900/50 text-center">
    {streak.count}
  </div>;
}
