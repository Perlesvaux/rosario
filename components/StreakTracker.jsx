"use client"
import {Add, Exit, CloseButton, HoldButton} from "./"
import { useHolyContext } from "@/hooks"
//import { useHolyContext, useBeep } from "@/hooks"
import { useEffect, useState, useCallback, useRef } from 'react'

const initial = { last: null, count: 0 }

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


  const loadStreak = () => {
    const data = JSON.parse(localStorage.getItem("streak")) || initial;
    if (data.last) {
      const lastDate = new Date(data.last);
      const yest = new Date(yesterday());
      if (lastDate < yest) {
        localStorage.setItem("streak", JSON.stringify(initial));
        return initial;
      }
    }
    return data;
  };

  const [streak, setStreak] = useState(loadStreak);

  const markDone = (data) => {
    const todayStr = today();
    if (data.last === todayStr) return data;

    const newData = data.last === yesterday()
      ? { ...data, count: data.count + 1, last: todayStr }
      : { last: todayStr, count: 1 };

    localStorage.setItem("streak", JSON.stringify(newData));
    return newData;
  };

  const update = (rawCount) => {
    const count = Math.max(0, Math.floor(Number(rawCount)) || 0);
    const newData = { last: today(), count };
    localStorage.setItem("streak", JSON.stringify(newData));
    setStreak(newData);
  };


  const load = () => setStreak(loadStreak);

  const complete = () => setStreak(markDone);

  // Initial load
  //useEffect(() => {
  //  load()
  //}, []);

  return { streak, load, complete, update };




}




export default function StreakTracker() {
  const { state } = useHolyContext();
  const { streak, load, complete, update } = useStreak();

  // These are used to manually update streak
  const ref = useRef(null)
  const [ current, setCurrent ] = useState({...streak})
//const updateCurrent = (e) => setCurrent(prev => ({ ...prev, count: e.currentTarget.value }));
  //const updateCurrent = (e)=> setCurrent( {...current, count: e.currentTarget.value} )
const updateCurrent = (e) => {
  const value = e.currentTarget.value; // Read synchronously, currentTarget is still valid at this point
  setCurrent(prev => ({ ...prev, count: value }));
};


const setAndClose = () => {
  const n = Number(current.count);
  if (!Number.isInteger(n) || n < 0) return;
  update(n);
  ref.current.hidePopover();
};




  // Condition: checks whether rosary has been prayed today.
  const wasRosaryPrayedToday = state.complete.mysteries.every(mystery => mystery.actual >= mystery.limit  ) 
    || state.simple.mysteries.every(mystery => mystery.actual >= mystery.limit);

  //debugger

  // Condition: checks whether "last day prayed" and "today" are the same.
  const doneForToday = today()==streak.last

  //// Initial load
  //useEffect(() => {
  //  load()
  //}, []);

  // Update when prayed
  useEffect(() => {
    if (wasRosaryPrayedToday) {
      complete()
    }
  }, [wasRosaryPrayedToday, complete]);

  //useEffect(() => {
  //  setCurrent(streak)
  //}, [streak])
  



  //if (!streak) return

  return <div className={
    `${ doneForToday
? "bg-gray-800/90 text-white"
: "bg-red-600/90 text-white animate-pulse"
} font-black rounded-full h-8 w-8 flex items-center justify-center`
  }>






    <>
      <div ref={ref} popover="auto" id="streak-tracker" className={`bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow`}>
        <article className="flex flex-col gap-4">

          <div>
            {console.log(`- streak ${streak.count}`)} 
            {console.log(`- current ${current.count}`)} 
            {streak.count}→   
            <input type="number" onChange={updateCurrent} value={current.count} min="0" pattern="^[0-9]+$" />
          </div>



          <Exit onClick={() => ref.current.hidePopover()} />
          <HoldButton action={setAndClose}/>

        </article>
      </div>

      <button popoverTarget="streak-tracker"
        className="rounded-full h-8 w-8 flex items-center justify-center"
      >

        {streak.count}

      </button>
    </>








  </div>;
}









//function SetStreakCount({count}) {
//
//  const { streak, update, load } = useStreak();
//
//  const [current, setCurrent] = useState(streak)
//// const {next, markPrayer, show, header} = usePrayerContext()
//  const ref = useRef(null)
//  // const identifier = `${to}-${header}`
//  //debugger
//
//  let isShown = true
//  let wasPrayed = true
//
//  const setAndClose =() => {
//    // next()
//    ref.current.hidePopover();
//  }
//
//  const updateCurrent = (e)=> setCurrent( {...current, count: e.currentTarget.value} )
//
//  //useEffect(()=>{
//  //  load()
//  //
//  //
//  //}
//  //,[load])
//
//  return (<>
//    <div ref={ref} popover="auto" id="streak-tracker" className={`bg-gray-300  px-4 py-2 text-rose-800  overflow-hidden w-full border rounded shadow`}>
//      <article className="flex flex-col gap-4">
//
//        <div>
//          {console.log(streak)} 
//          {streak.count}→   
//          <input type="number" onChange={updateCurrent} value={current.count} />
//        </div>
//
//
//
//        <CloseButton onClick={() => update(current.count) } />
//        <Exit onClick={() => ref.current.hidePopover()} />
//
//      </article>
//    </div>
//
//    <button popoverTarget="streak-tracker"
//       className="rounded-full h-8 w-8 flex items-center justify-center"
//      >
//
//        {streak.count}
//
//    </button>
//  </>)
//}






//const useStreak = () => {
//  const [streak, setStreak] = useState(initial);
//  //const beeper = useBeep()
//
//  const loadStreak = useCallback(() => {
//    const data = JSON.parse(localStorage.getItem("streak")) || {
//      last: null,
//      count: 0
//    };
//
//    // Clear streak if last was before yesterday
//    if (data.last) {
//      const lastDate = new Date(data.last);
//      const yest = new Date(yesterday());
//
//      if (lastDate < yest) {
//        localStorage.setItem("streak", JSON.stringify(initial));
//        return initial;
//      }
//    }
//
//    return data;
//  }, []);
//
//  const markDone = useCallback(() => {
//    const data = loadStreak(); // Use loadStreak to ensure consistency
//    const todayStr = today();
//
//    // Do nothing if you already prayed today
//    if (data.last === todayStr) return data;
//
//    // If last day prayed was yesterday, increase counter.
//    const newData = { ...data };
//    if (data.last === yesterday()) {
//      newData.count++;
//    } else {
//      newData.count = 1;
//    }
//
//    newData.last = todayStr;
//    localStorage.setItem("streak", JSON.stringify(newData));
//    return newData;
//  }, [loadStreak]);
//
//
//  const updateStreak = useCallback((manuallySetValue)=>{
//    const data = loadStreak(); // Use loadStreak to ensure consistency
//    const todayStr = today();
//    const newData = {...data, last: todayStr, count:manuallySetValue}
//    // newData.last = todayStr
//    // newData.count = manuallySetValue
//    localStorage.setItem("streak", JSON.stringify(newData))
//    console.log(newData)
//    return newData
//
//  },[loadStreak])
//
//
//  const load = useCallback(()=>{
//    setStreak(()=>loadStreak())
//  },[]);
//
//  const update = useCallback((manuallySetValue)=>{
//    setStreak(updateStreak(manuallySetValue))
//  }, [])
//
//  const complete = useCallback(()=>{
//    //beeper()
//    setStreak(()=>markDone())
//  }, []);
//
//
//  return { streak, load, complete, update };
//};






