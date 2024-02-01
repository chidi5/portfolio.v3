import { Section } from "@radix-ui/themes";
import React from "react";

const AboutSection = () => {
  return (
    <Section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-100/20 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 font-medium">
          In 2018, I tossed my graduation cap into the air after earning my BSc.
          in Computer Engineering. However, my story took an unexpected turn
          when I decided to dive headfirst into the world of entrepreneurship.
          From 2020 onwards, I steered the ship of a bottled water company,
          navigating the challenges of the business world and quenching the
          thirst of the masses.
        </p>
      </div>
      <div>
        <p className="mb-4 font-medium">
          Now, I&apos;m back on the tech scene, eager to reunite with my first
          love 💕 - full-stack development. Coding has always been my passion,
          and solving problems is like a thrilling puzzle waiting to be cracked.
          I&apos;ve honed my skills in the entrepreneurial trenches, but the
          allure of crafting sleek, efficient software is pulling me back into
          the world of algorithms and lines of code.
        </p>
      </div>
      <div>
        <p className="mb-4 font-medium">
          Currently, I&apos;m seeking new opportunities to merge my business
          acumen with my technical prowess. At the intersection of design and
          engineering, I find my sweet spot - where things not only look good
          but also function seamlessly. My journey has taken me from the
          corridors of academia to the boardrooms of startups, and now, I&apos;m
          ready for the next exciting chapter.
        </p>
      </div>
      <div>
        <p className="mb-4 font-medium">
          Beyond the keyboard, you&apos;ll find me on the football field,
          chasing a ball with the same enthusiasm I bring to coding. Weekends
          are for soccer, and weekdays are for tackling challenges, both in and
          out of the tech realm. I&apos;m not just a coder; I&apos;m a problem
          solver, a football fanatic, and someone who thrives on embracing new
          challenges.
        </p>
      </div>
      <div>
        <p className="mb-4 font-medium">
          So, whether it&apos;s collaborating on cutting-edge projects or
          tackling coding conundrums, I&apos;m ready to bring my unique blend of
          skills and experiences to the table. Let&apos;s create something
          amazing together!
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
