import { Text } from "../../components";

export const Punchline = () => (
  <div className="relative flex h-screen flex-auto select-none justify-center overflow-hidden text-white align-center">
    <div className="flex w-full -rotate-1">
      <div className="uppercase animate-fade-in">
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
      </div>
    </div>
  </div>
);
