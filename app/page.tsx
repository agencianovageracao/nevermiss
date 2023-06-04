import { Header } from "@/components/pages/home/Header";
import { Headline } from "@/components/pages/home/Headline";
import { Faq } from "@/components/pages/home/Faq";
import { Loader } from "@/components/pages/home/Loader";
import { Cheats } from "@/components/pages/home/Cheats";
import { Forum } from "@/components/pages/home/Forum";

export const metadata = {
  title: "Home | NeverMiss",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Headline />
        <Faq />
        <Loader />
        <Cheats />
        <Forum />
      </main>
    </>
  );
}
