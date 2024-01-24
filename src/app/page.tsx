/** @format */

"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import illustrationDesktop from "@/assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "@/assets/images/illustration-sign-up-mobile.svg";

import { useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const [data, setData] = useState("");

  console.log("data-", data);
  console.log("data type", typeof data);
  console.log("errors-", errors);

  const parseData = data ? JSON.parse(data) : {};

  return (
    <div className="bg-[hsl(235,18%,26%)] min-h-screen w-full flex items-center justify-center  ">
      {data ? (
        <div className="md:w-[400px]  flex flex-col bg-white  rounded-2xl  px-10 py-8  gap-5 w-full justify-between  h-screen md:h-auto ">
          <div className="flex flex-col gap-5 pt-20 md:pt-0">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-orange-500 text-white text-lg">
              <FaCheck />
            </div>

            <h2 className="font-bold text-4xl">Thanks for subscribing!</h2>
            <p className="text-sm">
              A confirmation email has been sent to{" "}
              <span className="font-bold text-slate-800"> {parseData?.email}</span>. Please open it and click the
              button inside to confirm your subscription.
            </p>
          </div>
          <button
            onClick={() => setData("")}
            className="bg-[hsl(234,29%,20%)] text-white h-11 rounded-lg transition-all text-sm hover:bg-gradient-to-r hover:from-red-400 hover:to-orange-500"
          >
            Dismiss message
          </button>
        </div>
      ) : (
        <main>
          {/* normal ui */}
          <div className="bg-white gap-3 rounded-2xl flex w-full md:w-[800px] md:h-[500px] flex-col-reverse md:flex-row ">
            {/* left text */}
            <form
              onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
              className="flex-col flex gap-5 md:w-1/2  px-10   p-6  py-16 "
            >
              <h2 className="font-bold text-4xl text-slate-800">
                Stay updated!
              </h2>
              <p className="text-slate-600">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              {/* lists */}
              <div className="flex flex-col gap-2">
                <List list=" Product discovery and building what matters" />
                <List list="Measuring to ensure updates are a success" />
                <List list=" And much more!" />
              </div>
              {/* email  */}
              <div className="flex flex-col gap-2">
                <div className="text-xs flex justify-between font-semibold text-slate-700">
                  {" "}
                  <p>Email address</p>
                  {errors.email && (
                    <p className="text-red-400">Valid email required</p>
                  )}
                </div>
                <input
                  // type="email"
                  {...register("email", {
                    required: "Valid email required",
                    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                  })}
                  placeholder="email@company.com
              "
                  // type="email"
                  className={clsx(
                    "w-full border h-11  px-4 rounded-lg placeholder:text-sm",
                    {
                      "border-red-400 bg-red-100 outline-red-400": errors.email
                    }
                  )}
                />
              </div>

              <button className="bg-[hsl(234,29%,20%)] text-white h-11 rounded-lg transition-all text-sm hover:bg-gradient-to-r hover:from-red-400 hover:to-orange-500">
                {" "}
                Subscribe to monthly newsletter
              </button>
            </form>
            {/* right image */}
            <div className=" p-2   md:w-1/2  py-5 flex w-full items-center justify-center">
              <Image
                className="h-full  md:hidden  "
                src={illustrationMobile}
                alt="illustration-mobile"
              />
              <Image
                className="h-full hidden md:flex  "
                src={illustrationDesktop}
                alt="illustration-desktop"
              />
            </div>
          </div>

          {/*  */}
          {/* thanku ui */}
        </main>
      )}
    </div>
  );
}

// function List(props: { list: string }) {
function List({ list }: { list: string }) {
  return (
    <div className="text-slate-600  flex gap-5 items-center">
      {/* circlel */}
      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs">
        <FaCheck />
      </div>
      {/*  */}
      {/* <p>{props.list}</p> */}
      <p className="text-sm">{list}</p>
    </div>
  );
}
