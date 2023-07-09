import { Text } from "../../components";

import Marquee from "react-fast-marquee";

export const Punchline = () => (
  <div className="relative flex-auto flex justify-center align-center overflow-hidden text-white select-none h-screen">
    <div className="-rotate-1 w-full flex">
      <Marquee className="uppercase animate-fade-in" speed={200}>
        <Text as="span" intent="black-outlined" size="3xl" className="ml-8">
          Bake
        </Text>
        <Text as="span" intent="black" size="3xl" className="ml-8">
          Good
        </Text>
        <Text as="span" intent="black" size="3xl" className="ml-8">
          St
        </Text>
        <Text as="span" intent="black" size="3xl" className="text-rose-500">
          *
        </Text>
        <Text as="span" intent="black" size="3xl" className="">
          ff
        </Text>
        <Text as="span" intent="black-outlined" size="3xl" className="ml-8">
          Or
        </Text>
        <Text as="span" intent="black" size="3xl" className="ml-8">
          skedaddle
        </Text>
        <Text as="span" intent="black" size="3xl" className="text-rose-500">
          .
        </Text>
      </Marquee>
    </div>
  </div>
);
