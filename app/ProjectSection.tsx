import { Flex, Heading, Section } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import issueTracker from "./images/issue-tracker.png";
import fastKeys from "./images/fast-keys.png";
import cloud from "./images/cloud.png";
import dashboard from "./images/dashboard.png";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <Section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-100/20 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul>
          <li className="mb-12 group">
            <Link
              href="https://issue-tracker-ten-plum.vercel.app"
              target="_blank"
            >
              <Flex
                direction={{ initial: "column-reverse", sm: "row" }}
                gap="4"
                className="p-4 rounded-md backdrop-blur-sm group-hover:bg-slate-400 group-hover:bg-opacity-10"
              >
                <div>
                  <Image
                    src={issueTracker}
                    alt="issue tracker web app"
                    width={200}
                    height={200}
                    className="border-2 border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <Heading
                    as="h3"
                    size="3"
                    className="group-hover:text-indigo-500"
                  >
                    Issue Tracking App
                  </Heading>
                  <p className="mt-2 text-sm leading-normal font-medium">
                    Web app for efficient issue tracking. Create, save, and
                    assign issues seamlessly. Track the status of each issue,
                    whether it&apos;s open, closed, or in progress. Stay
                    organized and streamline your workflow with this
                    user-friendly issue-tracking tool for effective project
                    management.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        Prisma
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        PlanetScale
                      </div>
                    </li>
                  </ul>
                </div>
              </Flex>
            </Link>
          </li>
          <li className="mb-12 group">
            <Link href="https://fast-keys.vercel.app" target="_blank">
              <Flex
                direction={{ initial: "column-reverse", sm: "row" }}
                gap="4"
                className="p-4 rounded-md backdrop-blur-sm group-hover:bg-slate-400 group-hover:bg-opacity-10"
              >
                <div>
                  <Image
                    src={fastKeys}
                    alt="A typing game"
                    width={200}
                    height={50}
                    className="border-2 border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <Heading
                    as="h3"
                    size="3"
                    className="group-hover:text-indigo-500"
                  >
                    Fast keys
                  </Heading>
                  <p className="mt-2 text-sm leading-normal font-medium">
                    A user interactive typing game that tracks the typist
                    mistakes, words per minute and characters per minute.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        Radix UI
                      </div>
                    </li>
                  </ul>
                </div>
              </Flex>
            </Link>
          </li>
          <li className="mb-12 group">
            <Link href="https://cloud-zone.netlify.app/" target="_blank">
              <Flex
                direction={{ initial: "column-reverse", sm: "row" }}
                gap="4"
                className="p-4 rounded-md backdrop-blur-sm group-hover:bg-slate-400 group-hover:bg-opacity-10"
              >
                <div>
                  <Image
                    src={cloud}
                    alt="A weather app image"
                    width={200}
                    height={50}
                    className="border-2 border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <Heading
                    as="h3"
                    size="3"
                    className="group-hover:text-indigo-500"
                  >
                    Weather App
                  </Heading>
                  <p className="mt-2 text-sm leading-normal font-medium">
                    Web app for real-time weather updates. Get detailed weather
                    descriptions for any location, including current conditions,
                    temperature, humidity, wind speed, and more. Stay informed
                    and plan your activities with accurate and up-to-date
                    weather forecasts at your fingertips.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        react.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        Tailwind
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        Weather Api
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        Redux
                      </div>
                    </li>
                  </ul>
                </div>
              </Flex>
            </Link>
          </li>
          <li className="mb-12 group">
            <Link href="https://academx.netlify.app/" target="_blank">
              <Flex
                direction={{ initial: "column-reverse", sm: "row" }}
                gap="4"
                className="p-4 rounded-md backdrop-blur-sm group-hover:bg-slate-400 group-hover:bg-opacity-10"
              >
                <div>
                  <Image
                    src={dashboard}
                    alt="An admin dashboard"
                    width={200}
                    height={50}
                    className="border-2 border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <Heading
                    as="h3"
                    size="3"
                    className="group-hover:text-indigo-500"
                  >
                    Admin Dashboard
                  </Heading>
                  <p className="mt-2 text-sm leading-normal font-medium">
                    A mock up admin dashboard for school owners to monitor
                    students, teachers and finance in the school.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        react.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 ">
                        Tailwind
                      </div>
                    </li>
                  </ul>
                </div>
              </Flex>
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default ProjectSection;
