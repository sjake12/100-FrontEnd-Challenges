import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import aiah from "../assets/aiah1.jpg";
import gwen from "../assets/gwen3.jpg";
import maloi from "../assets/maloi.jpg";
import miks from "../assets/miks.jpg";

function Notif() {
  const [isActive, setIsActive] = useState(true);
  const bell = <FontAwesomeIcon icon={faBell} />;

  return (
    <div className="w-[344px] h-screen m-auto pt-40">
      <div className="w-auto m-auto flex justify-end mb-6 ">
        <div
          className="w-12 h-12 rounded-full bg-neutral-200 flex justify-center items-center text-2xl shadow-md cursor-pointer"
          onClick={() => setIsActive((prevState) => !prevState)}
        >
          {bell}
        </div>
      </div>

      <section
        className={`w-auto bg-neutral-200 m-auto overflow-hidden font-sans rounded-lg shadow-md transition-transform duration-700 ease-in-out transform${
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } origin-[95%_-25%]`}
      >
        <div className="flex justify-between items-center m-6">
          <h1 className="font-bold text-xl">Notifications</h1>
          <h2 className="text-neutral-500 text-sm ">Mark as read</h2>
        </div>
        <div className="flex flex-col">
          <div className="bg-neutral-300 w-full p-2 flex items-center border-b-[1px] border-neutral-500 ">
            <img
              src={aiah}
              alt="aiah"
              className="w-8 h-8 rounded-full object-cover mr-3"
            />
            <div className="flex flex-col ">
              <p className="text-sm">
                <strong>Aiah Arceta</strong> joined to <strong>"Design"</strong>{" "}
                Group.
              </p>
              <small className="text-neutral-500">2 min ago</small>
            </div>
          </div>
          <div className="bg-neutral-300 w-full p-2 flex items-center border-b-[1px] border-neutral-500 ">
            <img
              src={gwen}
              alt="aiah"
              className="w-8 h-8 rounded-full object-cover mr-3"
            />
            <div className="flex flex-col ">
              <p className="text-sm">
                <strong>Gwen</strong> mentioned you in <strong>comment.</strong>
              </p>
              <small className="text-neutral-500">2 hours ago</small>
            </div>
          </div>
          <div className="w-full p-2 flex items-center border-b-[1px] border-neutral-500 ">
            <img
              src={maloi}
              alt="aiah"
              className="w-8 h-8 rounded-full object-cover mr-3"
            />
            <div className="flex flex-col ">
              <p className="text-sm">
                <strong>Maloi Ricalde</strong> send you a{" "}
                <strong>friend request.</strong>
              </p>
              <small className="text-neutral-500">1 day ago</small>
              <div className="flex gap-3 mt-2">
                <button className="bg-purple-500 text-white flex-1 rounded-md text-xs font-semibold py-1">
                  Accept
                </button>
                <button className="bg-neutral-400 text-neutral-900 flex-1 rounded-md text-xs font-semibold py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <button className="bg-purple-500 text-white text-sm font-semibold my-4 mx-4 box-border rounded-md py-2">
            See all notifications
          </button>
        </div>
      </section>
    </div>
  );
}

export default Notif;
