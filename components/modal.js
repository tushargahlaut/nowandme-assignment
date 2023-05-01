import { useState } from "react";
import LoginComponent from "./logincomponent";
import Signup from "./signup";

const Modal = ({ setIsModal }) => {
  const [component, setComponent] = useState("login");
  return (
    <div className="backdrop-blur-sm fixed inset-0 z-50 overflow-auto flex justify-center items-center">
      <div className="bg-[#27292D] flex flex-col w-1/3 p-8 rounded-md shadow-lg">
        <div
          onClick={() => setIsModal((prev) => !prev)}
          className="bg-[#131319] p-1 cursor-pointer rounded-full ml-auto flex justify-center items-center h-8 w-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5754 4.30861C12.8194 4.06454 12.8194 3.66881 12.5754 3.42473C12.3313 3.18065 11.9355 3.18065 11.6915 3.42473L8.00008 7.11612L4.30869 3.42473C4.06461 3.18065 3.66888 3.18065 3.42481 3.42473C3.18073 3.66881 3.18073 4.06454 3.42481 4.30861L7.1162 8L3.42481 11.6914C3.18073 11.9355 3.18073 12.3312 3.42481 12.5753C3.66888 12.8194 4.06461 12.8194 4.30869 12.5753L8.00008 8.88389L11.6915 12.5753C11.9355 12.8194 12.3313 12.8194 12.5754 12.5753C12.8194 12.3312 12.8194 11.9355 12.5754 11.6914L8.88396 8L12.5754 4.30861Z"
              fill="white"
            />
          </svg>
        </div>
        {component === "login" ? (
          <LoginComponent setComponent={setComponent} />
        ) : (
          <Signup setComponent={setComponent} />
        )}
      </div>
    </div>
  );
};

export default Modal;
