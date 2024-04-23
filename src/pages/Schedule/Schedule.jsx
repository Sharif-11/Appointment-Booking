import axios from "axios";
import React, { useEffect, useState } from "react";
import { rootUrl } from "../../utils/rootUrl";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Schedule = () => {
  const [weekDay, setWeekDay] = useState(new Date().getDay());
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState([]); // this slots should be dynamic; will be changed later
  useEffect(() => {
    setLoading(true);
    axios
      .get(rootUrl + `slots/${daysOfWeek[weekDay]}`, { withCredentials: true })
      .then(({ data }) => setSlots(data.data))
      .catch((err) => {
        console.log(err);
        setSlots([]);
      });
    setLoading(false);
  }, [weekDay]);
  return (
    <div className="mt-[8%]">
      <div className="card card-body w-4/6 mx-auto my-auto">
        <h2 className="text-center font-bold text-4xl py-2">Doctor Schedule</h2>
        <div className="border-spacing-4 p-5 border-2 rounded-md">
          <div className="flex flex-wrap gap-7 p-5 border-b-2 w-full justify-center">
            <button
              className={
                weekDay === 0
                  ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success"
                  : "btn btn-sm bg-transparent focus:outline-none  text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"
              }
              onClick={() => setWeekDay(0)}
            >
              Sunday
            </button>
            <button
              className={
                weekDay === 1
                  ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success"
                  : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"
              }
              onClick={() => setWeekDay(1)}
            >
              Monday
            </button>
            <button
              className={
                weekDay === 2
                  ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success"
                  : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"
              }
              onClick={() => setWeekDay(2)}
            >
              Tuesday
            </button>
            <button
              className={
                weekDay === 3
                  ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success"
                  : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"
              }
              onClick={() => setWeekDay(3)}
            >
              Wednesday
            </button>
            <button
              className={
                weekDay === 4
                  ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success"
                  : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"
              }
              onClick={() => setWeekDay(4)}
            >
              Thursday
            </button>
            <button
              className={
                weekDay === 5
                  ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success"
                  : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"
              }
              onClick={() => setWeekDay(5)}
            >
              Friday
            </button>
            <button
              className={
                weekDay === 6
                  ? "btn btn-sm bg-success text-white border-2 focus:outline-none border-success hover:border-success hover:bg-success"
                  : "btn btn-sm bg-transparent  focus:outline-none text-slate-400 border-slate-400 border-2 hover:border-success hover:text-success focus:border-slate-400 hover:bg-transparent"
              }
              onClick={() => setWeekDay(6)}
            >
              Saturday
            </button>
          </div>
          <div>
            <div className="flex justify-between">
              <h2 className="font-semibold text-xl my-5">
                Available Time Slots
              </h2>
            </div>

            {/* {loading && <span className="loading loading-bars loading-xl"></span>} */}

            <div className="flex gap-4 flex-wrap">
              {loading === true ? (
                <h2 className="text-center">Loading....</h2>
              ) : slots.length === 0 ? (
                <h2 className="mx-auto font-medium">
                  There is no schedeule available
                </h2>
              ) : (
                slots?.map((slot, idx) => {
                  return (
                    <div
                      key={idx}
                      className="rounded-md text-center font-semibold text-sm text-white flex align-middle items-center gap-2 bg-success p-2 w-auto"
                    >
                      <p className="flex">
                        {slot.startTime}
                        <span className="px-1">-</span>
                        {slot.endTime}
                      </p>
                      {/* <p onClick={() => { handleDeleteSlot(idx) }} className='cursor-pointer text-green-200 text-lg hover:text-white'><RxCrossCircled></RxCrossCircled></p> */}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
