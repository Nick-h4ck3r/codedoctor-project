"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionCard from "@/components/SectionCard";
import LongSectionCard from "@/components/LongSectionCard";
import BenefitsCard from "@/components/BenefitsCard";
import EmailWaitlist from "@/components/EmailWaitlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="flex justify-between bg-black px-28 py-6 border-b border-gray-500">
        <div>
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={50}
            height={50}
            className=""
          />
        </div>

        <button className="border border-gray-400 rounded-full px-6">
          XEROCODEE
        </button>
      </header>

      <div className="hero bg-black flex flex-col items-center w-full font-urbanist">
        <div className="text-center space-y-6 my-10">
          <p className="capitalize bg-gradient-to-r from-[#ff3bff] via-[#ecbfbf] to-[#5c24ff] bg-clip-text text-transparent text-6xl font-bold tracking-wide py-4">
            Integrate AI throughout Your Workflow
          </p>
          <p className="capitalize text-white text-6xl font-bold">
            Code Doctor
          </p>
          <p className="text-xl w-[700px] py-4 mx-auto text-gray-300">
            Make processes where AI collaborates with your team throughout the
            whole development process.
          </p>
        </div>

        <EmailWaitlist />

        <div className="mx-auto my-14 flex z-20">
          <Image src={"/heroImage2.png"} width={1500} height={100} alt={""} />
        </div>
      </div>

      <div className="section1 bg-black text-center mt-0 mb-20 space-y-6">
        <p className="bg-gradient-to-r from-[#4e4be4] to-[#e862fe] bg-clip-text text-transparent text-6xl font-semibold font-urbanist max-w-[1130px] mx-auto leading-tight">
          Boost the speed of your development and test cycles.
        </p>
        <p className="text-3xl font-normal font-urbanist max-w-7xl mx-auto">
          With AI-driven test case generation and code analysis, problems may be
          found and fixed more quickly.
        </p>
      </div>

      <div className="benefitsSection max-h-fit py-20">
        <BenefitsCard
          ben1="CI/CD Pipeline Generate"
          ben2="Build / Deploymnent"
          right={false}
        />

        <motion.div
          animate={{
            scale: [1.2, 1.3, 1.2, 1.3, 1.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            ease: "easeInOut",
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="rounded-full bg-gradient-to-r from-[#4e4be4] to-[#e862fe] my-10 w-80 h-72 mx-auto p-1 blur-[1px]"
        >
          <div className="bg-black w-full h-full rounded-full"></div>
        </motion.div>

        <div className="w-96 h-32 z-20 relative left-[39%] -top-60 font-urbanist -mb-20 text-center">
          <p className="text-6xl font-bold">
            Code <br /> Doctor👋
          </p>
        </div>

        <BenefitsCard
          ben1="Generate Test Cases"
          ben2="Code Analysis"
          right={true}
        />
      </div>

      <div className="section2 bg-black text-center pt-10 space-y-4">
        <p className="bg-gradient-to-r from-[#4e4be4] to-[#e862fe] bg-clip-text text-transparent text-5xl font-bold font-urbanist max-w-[1130px] mx-auto">
          Use AI to handle workflows in your chat platforms.
        </p>

        <div className="sectionCards flex flex-row flex-wrap bg-black max-w-7xl mx-auto gap-12 py-16 items-center justify-evenly">
          <SectionCard
            heading="ask questions"
            content="To assist with managing the development, testing, and deployment process, ask it questions or issue instructions."
          />
          <SectionCard
            heading="execute"
            content="With a single command, you may run a series of tests or install a new version of a programme in a particular setting."
          />
          <LongSectionCard
            heading="Fix security concerns more quickly using generated code recommendations"
            content={[
              "With the aid of AI, recognise any security risk and swiftly and effectively fix it.",
              "Granting developers the freedom they require to protect their work frequently and early.",
            ]}
          />
        </div>
      </div>

      <div className="bg-black flex flex-col items-center w-full py-16 font-urbanist">
        <div className="text-center space-y-6 my-4">
          <p className="capitalize bg-gradient-to-r from-[#ff3bff] via-[#ecbfbf] to-[#5c24ff] bg-clip-text text-transparent text-5xl font-semibold tracking-wide py-4 max-w-7xl leading-snug">
            Automate all aspects of your delivery process with AI support.
          </p>
          <p className="capitalize text-white text-3xl font-bold">
            Get early access
          </p>
        </div>

        <EmailWaitlist />
      </div>

      <footer className="text-center bg-black font-urbanist">
        <p className="text-lg w-[700px] py-4 mx-auto text-gray-400">
          Copyright © 2023{" "}
          <span className="font-bold text-gray-300">EXOCODE TECHNOLOGIES</span>{" "}
          | All rights reserved
        </p>
      </footer>

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
    </main>
  );
}
