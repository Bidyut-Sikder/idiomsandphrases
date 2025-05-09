import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ShowWords from "./ShowWords";
import {
  wordsStartWithA,
  wordsStartWithB,
  wordsStartWithC,
  wordsStartWithD,
  wordsStartWithE,
  wordsStartWithF,
  wordsStartWithG,
  wordsStartWithH,
  wordsStartWithI,
  wordsStartWithJ,
  wordsStartWithK,
  wordsStartWithL,
  wordsStartWithM,
  wordsStartWithN,
  wordsStartWithO,
  wordsStartWithP,
  wordsStartWithQ,
  wordsStartWithR,
  wordsStartWithS,
  wordsStartWithT,
  wordsStartWithU,
  wordsStartWithV,
  wordsStartWithW,
  wordsStartWithX,
  wordsStartWithY,
  wordsStartWithZ,
} from "@/assets/data/words/synonymsAntonyms";
import { useLocalSearchParams, useNavigation } from "expo-router";
import ShowLikedWords from "./ShowLovedWords";

export default function WordsController() {
  const {  title } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: decodeURIComponent(title as string) });
    }
  }, [title]);

  switch (title) {
    case "Words Start With A":
      return <ShowWords dataList={wordsStartWithA} storageKey="lovedWordsA" />;
    case "❤️ A Words":
      return <ShowLikedWords dataList={wordsStartWithA} storageKey="lovedWordsA" />;
  
    case "Words Start With B":
      return <ShowWords dataList={wordsStartWithB} storageKey="lovedWordsB" />;
    case "❤️ B Words":
      return <ShowLikedWords dataList={wordsStartWithB} storageKey="lovedWordsB" />;
  
    case "Words Start With C":
      return <ShowWords dataList={wordsStartWithC} storageKey="lovedWordsC" />;
    case "❤️ C Words":
      return <ShowLikedWords dataList={wordsStartWithC} storageKey="lovedWordsC" />;
  
    case "Words Start With D":
      return <ShowWords dataList={wordsStartWithD} storageKey="lovedWordsD" />;
    case "❤️ D Words":
      return <ShowLikedWords dataList={wordsStartWithD} storageKey="lovedWordsD" />;
  
    case "Words Start With E":
      return <ShowWords dataList={wordsStartWithE} storageKey="lovedWordsE" />;
    case "❤️ E Words":
      return <ShowLikedWords dataList={wordsStartWithE} storageKey="lovedWordsE" />;
  
    case "Words Start With F":
      return <ShowWords dataList={wordsStartWithF} storageKey="lovedWordsF" />;
    case "❤️ F Words":
      return <ShowLikedWords dataList={wordsStartWithF} storageKey="lovedWordsF" />;
  
    case "Words Start With G":
      return <ShowWords dataList={wordsStartWithG} storageKey="lovedWordsG" />;
    case "❤️ G Words":
      return <ShowLikedWords dataList={wordsStartWithG} storageKey="lovedWordsG" />;
  
    case "Words Start With H":
      return <ShowWords dataList={wordsStartWithH} storageKey="lovedWordsH" />;
    case "❤️ H Words":
      return <ShowLikedWords dataList={wordsStartWithH} storageKey="lovedWordsH" />;
  
    case "Words Start With I":
      return <ShowWords dataList={wordsStartWithI} storageKey="lovedWordsI" />;
    case "❤️ I Words":
      return <ShowLikedWords dataList={wordsStartWithI} storageKey="lovedWordsI" />;
  
    case "Words Start With J":
      return <ShowWords dataList={wordsStartWithJ} storageKey="lovedWordsJ" />;
    case "❤️ J Words":
      return <ShowLikedWords dataList={wordsStartWithJ} storageKey="lovedWordsJ" />;
  
    case "Words Start With K":
      return <ShowWords dataList={wordsStartWithK} storageKey="lovedWordsK" />;
    case "❤️ K Words":
      return <ShowLikedWords dataList={wordsStartWithK} storageKey="lovedWordsK" />;
  
    case "Words Start With L":
      return <ShowWords dataList={wordsStartWithL} storageKey="lovedWordsL" />;
    case "❤️ L Words":
      return <ShowLikedWords dataList={wordsStartWithL} storageKey="lovedWordsL" />;
  
    case "Words Start With M":
      return <ShowWords dataList={wordsStartWithM} storageKey="lovedWordsM" />;
    case "❤️ M Words":
      return <ShowLikedWords dataList={wordsStartWithM} storageKey="lovedWordsM" />;
  
    case "Words Start With N":
      return <ShowWords dataList={wordsStartWithN} storageKey="lovedWordsN" />;
    case "❤️ N Words":
      return <ShowLikedWords dataList={wordsStartWithN} storageKey="lovedWordsN" />;
  
    case "Words Start With O":
      return <ShowWords dataList={wordsStartWithO} storageKey="lovedWordsO" />;
    case "❤️ O Words":
      return <ShowLikedWords dataList={wordsStartWithO} storageKey="lovedWordsO" />;
  
    case "Words Start With P":
      return <ShowWords dataList={wordsStartWithP} storageKey="lovedWordsP" />;
    case "❤️ P Words":
      return <ShowLikedWords dataList={wordsStartWithP} storageKey="lovedWordsP" />;
  
    case "Words Start With Q":
      return <ShowWords dataList={wordsStartWithQ} storageKey="lovedWordsQ" />;
    case "❤️ Q Words":
      return <ShowLikedWords dataList={wordsStartWithQ} storageKey="lovedWordsQ" />;
  
    case "Words Start With R":
      return <ShowWords dataList={wordsStartWithR} storageKey="lovedWordsR" />;
    case "❤️ R Words":
      return <ShowLikedWords dataList={wordsStartWithR} storageKey="lovedWordsR" />;
  
    case "Words Start With S":
      return <ShowWords dataList={wordsStartWithS} storageKey="lovedWordsS" />;
    case "❤️ S Words":
      return <ShowLikedWords dataList={wordsStartWithS} storageKey="lovedWordsS" />;
  
    case "Words Start With T":
      return <ShowWords dataList={wordsStartWithT} storageKey="lovedWordsT" />;
    case "❤️ T Words":
      return <ShowLikedWords dataList={wordsStartWithT} storageKey="lovedWordsT" />;
  
    case "Words Start With U":
      return <ShowWords dataList={wordsStartWithU} storageKey="lovedWordsU" />;
    case "❤️ U Words":
      return <ShowLikedWords dataList={wordsStartWithU} storageKey="lovedWordsU" />;
  
    case "Words Start With V":
      return <ShowWords dataList={wordsStartWithV} storageKey="lovedWordsV" />;
    case "❤️ V Words":
      return <ShowLikedWords dataList={wordsStartWithV} storageKey="lovedWordsV" />;
  
    case "Words Start With W":
      return <ShowWords dataList={wordsStartWithW} storageKey="lovedWordsW" />;
    case "❤️ W Words":
      return <ShowLikedWords dataList={wordsStartWithW} storageKey="lovedWordsW" />;
  
    case "Words Start With X":
      return <ShowWords dataList={wordsStartWithX} storageKey="lovedWordsX" />;
    case "❤️ X Words":
      return <ShowLikedWords dataList={wordsStartWithX} storageKey="lovedWordsX" />;
  
    case "Words Start With Y":
      return <ShowWords dataList={wordsStartWithY} storageKey="lovedWordsY" />;
    case "❤️ Y Words":
      return <ShowLikedWords dataList={wordsStartWithY} storageKey="lovedWordsY" />;
  
    case "Words Start With Z":
      return <ShowWords dataList={wordsStartWithZ} storageKey="lovedWordsZ" />;
    case "❤️ Z Words":
      return <ShowLikedWords dataList={wordsStartWithZ} storageKey="lovedWordsZ" />;
  
    default:
      return null;
  }
}

const styles = StyleSheet.create({});
