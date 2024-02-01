import { Box, Button, Flex, Heading, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import NavLinks from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";

export default function Home() {
  return (
    <Flex
      direction={{ initial: "column", md: "row" }}
      justify="between"
      gap="4"
      width="100%"
      className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
      <Flex
        direction="column"
        gap="4"
        justify="between"
        className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:py-24"
      >
        <Flex direction="column" justify="center">
          <Heading mb="4" weight="bold" size={{ initial: "8", md: "9" }}>
            I'm Joshua Igbokwe
          </Heading>
          <p className="text-base font-medium md:max-w-96">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <NavLinks />
        </Flex>
        <ul className="flex items-center ml-1">
          <li className="mr-5 text-xs shrink-0">
            <Link href="/" className="p-6 hover:text-slate-600">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <Link href="/" className="p-6 hover:text-slate-600">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <Link href="/" className="p-6 hover:text-slate-600">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </li>
        </ul>
      </Flex>
      <Box className="pt-24 lg:w-1/2 lg:py-24">
        <AboutSection />
        <ProjectSection />
      </Box>
    </Flex>
  );
}
