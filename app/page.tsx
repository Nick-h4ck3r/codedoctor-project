"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionCard from "@/components/SectionCard";
import LongSectionCard from "@/components/LongSectionCard";

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

        <div className="rounded-full bg-gradient-to-r from-[#ff3bff] via-[#ecbfbf] to-[#5c24ff] p-[0.10rem] mt-4 w-auto max-w-4xl">
          <div className="emailField flex justify-between bg-black rounded-full pl-6 pr-2 py-2">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              id=""
              className="bg-transparent outline-none w-[400px]"
            />
            <button className="rounded-full border-white border text-white/60 hover:text-white duration-300 py-2 px-4">
              Join waitlist
            </button>
          </div>
        </div>

        <div className="mx-auto my-14 flex z-20">
          <Image src={"/heroImage.png"} width={1250} height={100} alt={""} />
        </div>
        <div className="static">
            <Image src={"/white-dot.png"} width={500} height={500} alt={""} className="absolute -bottom-[430px] left-56" />
            <Image src={"/purple-dot.png"} width={500} height={500} alt={""} className="absolute -bottom-[430px] right-56" />
          </div>
      </div>

      <div className="section1 bg-black text-center pt-10 my-20 space-y-8">
        <p className="bg-gradient-to-r from-[#4e4be4] to-[#e862fe] bg-clip-text text-transparent text-6xl font-semibold font-urbanist max-w-[1130px] mx-auto leading-tight">
          Boost the speed of your development and test cycles.
        </p>
        <p className="text-3xl font-normal font-urbanist max-w-8xl mx-auto">
          With AI-driven test case generation and code analysis, problems may be
          found and fixed more quickly.
        </p>
      </div>

      {/* <div className="benefitsSection bg-black h-[400px] py-20">
        <motion.div
          animate={{
            scale: [1, 1.1, 1.3, 1.2, 1],
            rotate: [150, 270, 135, 200, 70, 150],
          }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 my-20 w-56 h-60 mx-auto"
        ></motion.div>
      </div> */}

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

        <div className="rounded-full bg-gradient-to-r from-[#ff3bff] via-[#ecbfbf] to-[#5c24ff] p-[0.10rem] mt-6 w-auto max-w-3xl">
          <div className="emailField flex justify-between bg-black rounded-full pl-6 pr-2 py-2">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              id=""
              className="bg-transparent outline-none w-[400px]"
            />
            <button className="rounded-full border-white border text-white/60 hover:text-white duration-300 py-2 px-4">
              Join waitlist
            </button>
          </div>
        </div>
      </div>

      <footer className="text-center bg-black font-urbanist">
        <p className="text-lg w-[700px] py-4 mx-auto text-gray-400">
          Copyright © 2023{" "}
          <span className="font-bold text-gray-300">EXOCODE TECHNOLOGIES</span> | All rights
          reserved
        </p>
      </footer>
    </main>
  );
}
