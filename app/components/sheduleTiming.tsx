import React, { useState, useRef } from "react";

const Schedule: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const timingCards = [
    { from: "10:30", to: "10:30", status: "Starts in 1 Hour 30 Mins" },
    { from: "10:30", to: "10:30", status: "Starts in 1 Hour 30 Mins" },
    { from: "10:30", to: "10:30", status: "Starts in 1 Hour 30 Mins" },
    { from: "10:30", to: "10:30", status: "Starts in 1 Hour 30 Mins" },
    { from: "10:30", to: "10:30", status: "Starts in 1 Hour 30 Mins" },
  ];

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust this value for scroll distance
      setScrollPosition((prev) => Math.max(prev - scrollAmount, 0));
      scrollRef.current.scrollLeft -= scrollAmount;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust this value for scroll distance
      const maxScroll =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      setScrollPosition((prev) => Math.min(prev + scrollAmount, maxScroll));
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <figure className="rounded-lg w-full overflow-hidden bg-white border border-gray-200">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div>
            <img
              src="/assets/thunder.svg"
              alt="Thunder Icon"
              className="w-5 h-5"
            />
          </div>
          <div className="text-sm font-medium">Scheduled Timings</div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleScrollLeft}
            className=""
          >
            <img src="/assets/accordionleft.svg" alt="" />
          </button>
          <button
            onClick={handleScrollRight}
            className=""
          >
            <img src="/assets/accordionright.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="px-4 py-2">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex">
            <div className="pb-3 flex gap-5">
              <div className="flex flex-col items-center w-fit h-fit p-3 gap-1 bg-blue-50 rounded-lg border border-blue-300 flex-shrink-0">
                <div className="flex items-center justify-between w-full">
                  <div>From</div>
                  <div className="text-blue-400">10:30 </div>
                  <div> to</div>
                  <div className="text-blue-400"> 10:30</div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <img src="/assets/clock.svg" alt="" />
                  </div>
                  <div>
                    Starts in <span className="text-red-500"> 1 </span> Hour{" "}
                    <span className="text-red-500"> 30 </span> Mins
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-fit h-fit p-3 gap-1 bg-blue-50 rounded-lg border border-blue-300 flex-shrink-0">
                <div className="flex items-center justify-between w-full">
                  <div>From</div>
                  <div className="text-blue-400">10:30 </div>
                  <div> to</div>
                  <div className="text-blue-400"> 10:30</div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <img src="/assets/clock.svg" alt="" />
                  </div>
                  <div>
                    Starts in <span className="text-red-500"> 1 </span> Hour{" "}
                    <span className="text-red-500"> 30 </span> Mins
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-fit h-fit p-3 gap-1 bg-blue-50 rounded-lg border border-blue-300 flex-shrink-0">
                <div className="flex items-center justify-between w-full">
                  <div>From</div>
                  <div className="text-blue-400">10:30 </div>
                  <div> to</div>
                  <div className="text-blue-400"> 10:30</div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <img src="/assets/clock.svg" alt="" />
                  </div>
                  <div>
                    Starts in <span className="text-red-500"> 1 </span> Hour{" "}
                    <span className="text-red-500"> 30 </span> Mins
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-fit h-fit p-3 gap-1 bg-blue-50 rounded-lg border border-blue-300 flex-shrink-0">
                <div className="flex items-center justify-between w-full">
                  <div>From</div>
                  <div className="text-blue-400">10:30 </div>
                  <div> to</div>
                  <div className="text-blue-400"> 10:30</div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <img src="/assets/clock.svg" alt="" />
                  </div>
                  <div>
                    Starts in <span className="text-red-500"> 1 </span> Hour{" "}
                    <span className="text-red-500"> 30 </span> Mins
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export { Schedule };
