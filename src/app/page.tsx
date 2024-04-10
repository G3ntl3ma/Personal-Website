import Card, {ColorNames, Side} from "@/components/Card";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { LoremIpsum } from "lorem-ipsum";

export default function Home() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  })
  return (
    <div>
      <NavBar/>
      <div className="flex flex-col">
        <Card stickSide={Side.LEFT} Color={ColorNames["blue"]} Content={lorem.generateSentences(8)}></Card>
        <Card stickSide={Side.RIGHT} Color={ColorNames["green"]} Content= {lorem.generateSentences(8)}></Card>
      </div>
    </div>
  );
}
