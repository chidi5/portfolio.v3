import { Flex, Heading, Section } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import issueTracker from "./images/issue-tracker.png";
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
                    alt="A house in a forest"
                    width={200}
                    height={50}
                    className="border-2 border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <Heading
                    as="h3"
                    size="3"
                    className="group-hover:text-teal-500"
                  >
                    Issue Tracking App
                  </Heading>
                  <p className="mt-2 text-sm leading-normal font-medium">
                    Video course that teaches how to build a web app with the
                    Spotify Web API. Topics covered include the principles of
                    REST APIs, user auth flows, Node, Express, React, Styled
                    Components, and more.
                  </p>
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
