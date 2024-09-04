import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function Empty() {
  const [isActive, setIsActive] = useState(false);
  const bell = <FontAwesomeIcon icon={faBell} />;

  return (
    <div className="w-[344px] h-screen m-auto pt-40">
      <div className="w-auto m-auto flex justify-end mb-6 ">
        <div
          className="w-12 h-12 rounded-full bg-neutral-200 flex justify-center items-center text-neutral-500 text-2xl shadow-md cursor-pointer"
          onClick={() => setIsActive((prevState) => !prevState)}
        >
          {bell}
        </div>
      </div>

      <section
        className={`w-auto bg-neutral-200 m-auto p-6 font-sans rounded-lg shadow-md transition-transform duration-700 ease-in-out transform${
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } origin-[95%_-25%]`}
      >
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-bold text-xl">Notifications</h1>
            <h2 className="text-neutral-500 text-sm ">Mark as read</h2>
          </div>
          <div className="flex justify-center">
            <p className="text-sm">You don't have any notifications yet</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Empty;
