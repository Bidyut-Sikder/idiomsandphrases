import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ShowSynonymsAntonyms from "./ShowWords";
import {
  synonymAntonymstartsWithA,
  synonymAntonymstartsWithB,
  synonymAntonymstartsWithC,
  synonymAntonymstartsWithD,
  synonymAntonymstartsWithE,
  synonymAntonymstartsWithF,
  synonymAntonymstartsWithG,
  synonymAntonymstartsWithH,
  synonymAntonymstartsWithI,
  synonymAntonymstartsWithJ,
  synonymAntonymstartsWithK,
  synonymAntonymstartsWithL,
  synonymAntonymstartsWithM,
  synonymAntonymstartsWithN,
  synonymAntonymstartsWithO,
  synonymAntonymstartsWithP,
  synonymAntonymstartsWithQ,
  synonymAntonymstartsWithR,
  synonymAntonymstartsWithS,
  synonymAntonymstartsWithT,
  synonymAntonymstartsWithU,
  synonymAntonymstartsWithV,
  synonymAntonymstartsWithW,
  synonymAntonymstartsWithX,
  synonymAntonymstartsWithY,
  synonymAntonymstartsWithZ,
} from "@/assets/data/words/synonymsAntonyms";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function WordsController() {
  const { category, title } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: decodeURIComponent(title as string) });
    }
  }, [title]);

  switch (title) {
    case "Start With A":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithA} />;
      // Your code for A
      console.log("Handling A");
      break;
    case "Start With B":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithB} />;
      console.log("Handling B");
      break;
    case "Start With C":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithC} />;
      console.log("Handling C");
      break;
    case "Start With D":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithD} />;
      console.log("Handling D");
      break;
    case "Start With E":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithE} />;
      console.log("Handling E");
      break;
    case "Start With F":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithF} />;
      console.log("Handling F");
      break;
    case "Start With G":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithG} />;
      console.log("Handling G");
      break;
    case "Start With H":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithH} />;
      console.log("Handling H");
      break;
    case "Start With I":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithI} />;
      console.log("Handling I");
      break;
    case "Start With J":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithJ} />;
      console.log("Handling J");
      break;
    case "Start With K":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithK} />;
      console.log("Handling K");
      break;
    case "Start With L":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithL} />;
      console.log("Handling L");
      break;
    case "Start With M":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithM} />;
      console.log("Handling M");
      break;
    case "Start With N":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithN} />;
      console.log("Handling N");
      break;
    case "Start With O":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithO} />;
      console.log("Handling O");
      break;
    case "Start With P":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithP} />;
      console.log("Handling P");
      break;
    case "Start With Q":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithQ} />;
      console.log("Handling Q");
      break;
    case "Start With R":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithR} />;
      console.log("Handling R");
      break;
    case "Start With S":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithS} />;
      console.log("Handling S");
      break;
    case "Start With T":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithT} />;
      console.log("Handling T");
      break;
    case "Start With U":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithU} />;
      console.log("Handling U");
      break;
    case "Start With V":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithV} />;
      console.log("Handling V");
      break;
    case "Start With W":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithW} />;
      console.log("Handling W");
      break;
    case "Start With X":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithX} />;
      console.log("Handling X");
      break;
    case "Start With Y":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithY} />;
      console.log("Handling Y");
      break;
    case "Start With Z":
      return <ShowSynonymsAntonyms dataList={synonymAntonymstartsWithZ} />;
      console.log("Handling Z");
      break;
    default:
      console.log("Title not recognized");
  }
}

const styles = StyleSheet.create({});
