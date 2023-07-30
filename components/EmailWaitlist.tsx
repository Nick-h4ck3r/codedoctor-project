import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

function EmailWaitlist({}: Props) {
  const [email, setEmail] = useState("");

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function joinWaitlist(e: any) {
    e.preventDefault();

    if (email === "" || !isValidEmail(email)) {
      return toast.error("Please enter a valid email.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    try {
      await axios.post("https://light-bee-sari.cyclic.cloud/joinwaitlist", {
        email,
      });
      showSuccessToastMessage();
    } catch (error) {
      showWarnToastMessage();
    }
  }

  const showSuccessToastMessage = () => {
    toast.success("You are now in the waitlist.", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "join-waitlist",
    });
  };

  const showWarnToastMessage = () => {
    toast.warn("You are already in the waitlist.", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "join-waitlist",
    });
    console.log("function ran");
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
      
    </>
  );
}

export default EmailWaitlist;
