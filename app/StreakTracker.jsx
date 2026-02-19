import { useHolyContext } from "./hooks.js"
import { useEffect, useState, useCallback } from 'react'

// Move helper functions outside component
//const today = () => new Date().toISOString().slice(0, 10);
//const yesterday = () => {
//  const d = new Date();
//  d.setDate(d.getDate() - 1);
//  return d.toISOString().slice(0, 10);
//};

// Alternative using Intl.DateTimeFormat if you prefer:
 const today = () => {
   return new Intl.DateTimeFormat('en-CA').format(new Date()); // 'en-CA' gives YYYY-MM-DD format
 };

 const yesterday = () => {
   const d = new Date();
   d.setDate(d.getDate() - 1);
   return new Intl.DateTimeFormat('en-CA').format(d);
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
    
    // Do nothing if you already prayed today
    if (data.last === todayStr) return data;
    
    // If last day prayed was yesterday, increase counter.
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


  const load = useCallback(()=>{
    setStreak(()=>loadStreak())
  },[]);

  const complete = useCallback(()=>{
    setStreak(()=>markDone())
  }, []);
  
  
  return { streak, load, complete };
};

export default function StreakTracker() {
  const { state } = useHolyContext();
  const { streak, load, complete } = useStreak();
  
  const wasRosaryPrayedToday = state.mysteries.every(
    mystery => mystery.avemaria
  );

  const doneForToday = today()==streak.last

  console.log(doneForToday)
  
  // Initial load
  useEffect(() => {
    load()
  }, [load]);
  
  // Update when prayed
  useEffect(() => {
    if (wasRosaryPrayedToday) {
      complete()
    }
  }, [wasRosaryPrayedToday, complete]);


  
  return <div className={
    `${ doneForToday
        ? "bg-gray-800/90 text-white"
        : "bg-red-600/90 text-white animate-pulse"
      } font-black rounded-full h-8 w-8 flex items-center justify-center`
  }>
    {streak.count}
  </div>;
}
