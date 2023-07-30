import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

function EmailWaitlist({}: Props) {
  const [email, setEmail] = useState("");

  async function joinWaitlist(e: any) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/joinwaitlist", {
        email,
      });
      showSuccessToastMessage();
    } catch (error) {
      showErrorToastMessage();
    }
  }

  const showSuccessToastMessage = () => {
    toast.success("You are now registered for waitlist.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showErrorToastMessage = () => {
    toast.error("You are already in the waitlist.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <div className="rounded-full bg-gradient-to-r from-[#ff3bff] via-[#ecbfbf] to-[#5c24ff] p-[0.10rem] mt-4 w-auto max-w-4xl">
        <div className="emailField flex justify-between bg-black rounded-full pl-6 pr-2 py-2">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            id="email"
            className="bg-transparent outline-none w-[400px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="rounded-full border-white border text-white/60 hover:text-white duration-300 py-2 px-4"
            onClick={joinWaitlist}
          >
            Join waitlist
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default EmailWaitlist;