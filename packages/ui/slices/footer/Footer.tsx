"use client";

import * as React from "react";

import { cx } from "class-variance-authority";

import { Container, Text } from "../../components";
import { Logo } from "../logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface SocialLinkProps {
  name: string;
  url: string;
  icon: any; // using `any` for simplicity, but you should replace with the actual type
}

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yolodev/",
    icon: <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />,
  },
  {
    name: "Github",
    url: "https://github.com/yolodevz",
    icon: <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />,
  },
];

const SocialLinks = ({
  links,
  onHover,
  onLeave,
}: {
  links: SocialLinkProps[];
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <div
      className="inline-flex gap-4 items-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="inline-flex items-center justify-center text-neutral-500 hover:text-pink-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export const Footer = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Container
      as="footer"
      size="lg"
      outerClassName="w-full bg-black !p-4 mt-auto"
      innerClassName="flex justify-between items-center"
    >
      <div className="group inline-flex gap-2 items-baseline">
        <Logo variant="long" />
        <Text
          size="xs"
          className={cx(
            hovered ? "text-pink-300" : "text-neutral-500 select-none"
          )}
        >
          Creative Frontend
        </Text>
      </div>
      <SocialLinks
        links={socialLinks}
        onHover={() => setHovered(true)}
        onLeave={() => setHovered(false)}
      />
    </Container>
  );
};