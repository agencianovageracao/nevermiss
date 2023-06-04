import { Button } from "@/components/globals/Button";
import Link from "next/link";

type ICheatCardProps = {
  backgroundUrl: string;
  title: string;
  link: string;
};

export const CheatCard = (props: ICheatCardProps) => {
  return (
    <div
      className="min-w-[384px] w-full h-[384px] flex flex-col items-center justify-center"
      style={{
        background: `url(${props.backgroundUrl}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-white text-4xl font-bold">{props.title}</h1>
      <Link href={props.link} target="_blank">
        <Button className="bg-purple-500 hover:brightness-90 mt-4">
          View prices
        </Button>
      </Link>
    </div>
  );
};
