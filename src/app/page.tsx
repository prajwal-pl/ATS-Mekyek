import { TypewriterEffect } from "@/components/global/typewriter-effect";
import { words } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import { FaRocket } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FaStar } from "react-icons/fa6";
import Footer from "@/components/global/Footer";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className="w-full h-full">
      <section className="font-extrabold text-center items-center flex justify-between">
        <div className="text-center items-center w-full my-32">
          <TypewriterEffect
            className="md:text-5xl text-black/40 mb-10 text-4xl"
            words={words}
          />
          <Link
            href="/home"
            className="font-medium p-3 text-xl rounded-xl bg-purple-500 text-white hover:text-black border border-purple-500 hover:bg-white"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="bg-purple-500 text-white dark:text-white dark:border-y dark:border-purple-400 h-full w-full dark:bg-gray-950">
        <div className="items-center flex-col text-center w-full flex justify-between">
          <h1 className="text-white mb-10 my-20 font-extrabold text-2xl md:text-3xl mx-auto w-full dark:text-white">
            Explore the most widely used recruitment platform
          </h1>
          <p className="text-lg mb-10 mx-auto w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa
            totam inventore dolore itaque vitae commodi unde quasi. Dolore odio
            eos, dignissimos dolorum magnam ipsa veritatis at, nulla facilis
            quaerat, perspiciatis eveniet mollitia non optio explicabo cumque
            soluta fugit aspernatur laborum? Ipsa assumenda maxime quos
            distinctio? Ea architecto quisquam rerum.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full">
        <div className="flex-col items-center flex text-center m-32">
          <h1 className="text-2xl font-semibold">HR LANDSCAPE</h1>
          <p className="text-md  md:mb-28 mb-12 font-light">
            We make sources, onboarding, hiring and engagement seamless and
            intelligent with empathy.
          </p>
          <ul className="flex dark:text-black sm:w-2/3 sm:mx-auto gap-1 text-center justify-between">
            <li className="border flex items-center shadow-md border-gray-50 bg-gray-50 rounded-lg  sm:text-xl p-3">
              Sources
            </li>
            <li className="border shadow-md border-gray-50 bg-gray-50 rounded-lg  sm:text-xl p-3">
              Onboarding
            </li>
            <li className="border shadow-md border-gray-50 bg-gray-50 rounded-lg  sm:text-xl p-3">
              Hiring
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className=" border-y dark:border-purple-300 w-full h-full">
          <div className="flex my-12 rounded-lg shadow-md p-2 items-center border border-gray-200 justify-center mx-auto max-w-md text-center">
            <FaRocket className="mx-3" />
            <p>The most exceptional service of all time</p>
          </div>
          <div>
            <h1 className="md:text-4xl my-12 w-full mx-auto text-center text-3xl font-semibold">
              Reasons why 1000+ businesses prefer{" "}
              <span className="text-purple-700">Mekyek</span> as their primary
              ATS worldwide.
            </h1>
          </div>
          <div className="flex mb-24 w-full mx-auto justify-center items-center h-full">
            <div className="w-[25%] md:w-[15%] m-4">
              <Card className="rounded-2xl shadow-md">
                <CardHeader className="border rounded-2xl border-purple-200 dark:bg-purple-700 bg-purple-200">
                  <CardTitle className="text-center">We're Hiring!</CardTitle>
                </CardHeader>
                <CardContent className="my-2 md:my-5 text-center">
                  <div className="flex items-center flex-col space-y-3">
                    <Skeleton className="md:h-[100px] h-[75px] w-[100px] md:w-[150px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[100px] md:w-[150px]" />
                      <Skeleton className="h-4 w-[75px] md:w-[100px]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className=" w-[50%] md:w-[25%]">
              {/* <div className="p-3 w-[35%] py-2 rounded-full bg-purple-300 dark:bg-purple-700">
                Source
              </div> */}
              <div className="w-full">
                <h1 className="text-2xl md:w-full text-center font-semibold">
                  Hire the best people with ease
                </h1>
                <p className="md:w-full text-center text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  molestiae quos ipsam incidunt officia eligendi vero
                  consequuntur unde quidem magnam quam, sed error expedita
                  suscipit, ea aliquam provident cumque. Distinctio, deserunt
                  enim. Voluptatem, sunt sed minus veritatis molestias impedit
                  beatae consectetur provident labore nihil laudantium aliquid
                  facere quasi eveniet ipsum esse perspiciatis doloremque
                  officiis doloribus. Asperiores reiciendis voluptates amet sit
                  explicabo nemo accusamus molestias blanditiis voluptate
                  dolores suscipit corporis ullam sequi necessitatibus aliquid,
                  laudantium eum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex md:w-1/2 w-[80%] items-center justify-center">
        <div className="items-center flex mx-9 md:mx-12">
          <Card className="rounded-2xl">
            <CardContent className="text-center">
              <div className="flex flex-row my-12">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-1/2 w-2/3 justify-center flex-col my-12 items-center flex text-center">
          <h1 className="text-3xl font-semibold">
            Make better hiring decisions
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            beatae! Delectus omnis molestiae labore quos perspiciatis velit qui
            maxime unde, cum quaerat tempora repudiandae error nemo dolores
            eaque. Repellat aspernatur vero corporis excepturi inventore natus
            quo illo autem, quidem maiores enim ea sint impedit rerum iure modi
            consectetur, perspiciatis quaerat.
          </p>
        </div>
      </section>
      <div className="border-t dark:border-purple-400">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
