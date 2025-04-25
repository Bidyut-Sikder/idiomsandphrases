import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ShowData from "../common/ShowData";
import ShowLovedData from "../common/ShowLovedData";

import { PhrasesStartWithA, PhrasesStartWithB, PhrasesStartWithC, PhrasesStartWithD, PhrasesStartWithE, PhrasesStartWithF, PhrasesStartWithG, PhrasesStartWithH, PhrasesStartWithI, PhrasesStartWithJ, PhrasesStartWithK, PhrasesStartWithL, PhrasesStartWithM, PhrasesStartWithN, PhrasesStartWithO, PhrasesStartWithP, PhrasesStartWithQ, PhrasesStartWithR, PhrasesStartWithS, PhrasesStartWithT, PhrasesStartWithU, PhrasesStartWithV, PhrasesStartWithW, PhrasesStartWithX, PhrasesStartWithY, PhrasesStartWithZ } from "@/assets/data/phrases/phrasesData";

const IdiomsController = () => {
  const { category, title } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: decodeURIComponent(title as string) });
    }
  }, [title]);
  console.log( category, title )
  switch (title) {
  
    case "Phrases Start With A":
      return <ShowData dataList={PhrasesStartWithA} storageKey="lovedPhrasesA" />;
    case "Phrases Start With B":
      return <ShowData dataList={PhrasesStartWithB} storageKey="lovedPhrasesB" />;
    case "Phrases Start With C":
      return <ShowData dataList={PhrasesStartWithC} storageKey="lovedPhrasesC" />;

    case "Phrases Start With D":
      return <ShowData dataList={PhrasesStartWithD} storageKey="lovedPhrasesD" />;
    case "Phrases Start With E":
      return <ShowData dataList={PhrasesStartWithE} storageKey="lovedPhrasesE" />;
    case "Phrases Start With F":
      return <ShowData dataList={PhrasesStartWithF} storageKey="lovedPhrasesF" />;
    case "Phrases Start With G":
      return <ShowData dataList={PhrasesStartWithG} storageKey="lovedPhrasesG" />;

    case "Phrases Start With H":
      return <ShowData dataList={PhrasesStartWithH} storageKey="lovedPhrasesH" />;
    case "Phrases Start With I":
      return <ShowData dataList={PhrasesStartWithI} storageKey="lovedPhrasesI" />;
    case "Phrases Start With J":
      return <ShowData dataList={PhrasesStartWithJ} storageKey="lovedPhrasesJ" />;
    case "Phrases Start With K":
      return <ShowData dataList={PhrasesStartWithK} storageKey="lovedPhrasesK" />;
    case "Phrases Start With L":
      return <ShowData dataList={PhrasesStartWithL} storageKey="lovedPhrasesL" />;
    case "Phrases Start With M":
      return <ShowData dataList={PhrasesStartWithM} storageKey="lovedPhrasesM" />;
    case "Phrases Start With N":
      return <ShowData dataList={PhrasesStartWithN} storageKey="lovedPhrasesN" />;
    case "Phrases Start With O":
      return <ShowData dataList={PhrasesStartWithO} storageKey="lovedPhrasesO" />;
    case "Phrases Start With P":
      return <ShowData dataList={PhrasesStartWithP} storageKey="lovedPhrasesP" />;
    case "Phrases Start With Q":
      return <ShowData dataList={PhrasesStartWithQ} storageKey="lovedPhrasesQ" />;
    case "Phrases Start With R":
      return <ShowData dataList={PhrasesStartWithR} storageKey="lovedPhrasesR" />;
    case "Phrases Start With S":
      return <ShowData dataList={PhrasesStartWithS} storageKey="lovedPhrasesS" />;
    case "Phrases Start With T":
      return <ShowData dataList={PhrasesStartWithT} storageKey="lovedPhrasesT" />;
    case "Phrases Start With U":
      return <ShowData dataList={PhrasesStartWithU} storageKey="lovedPhrasesU" />;
    case "Phrases Start With V":
      return <ShowData dataList={PhrasesStartWithV} storageKey="lovedPhrasesV" />;
    case "Phrases Start With W":
      return <ShowData dataList={PhrasesStartWithW} storageKey="lovedPhrasesW" />;
    case "Phrases Start With X":
      return <ShowData dataList={PhrasesStartWithX} storageKey="lovedPhrasesX" />;
    case "Phrases Start With Y":
      return <ShowData dataList={PhrasesStartWithY} storageKey="lovedPhrasesY" />;
    case "Phrases Start With Z":
      return <ShowData dataList={PhrasesStartWithZ} storageKey="lovedPhrasesZ" />;
   
      case "❤️ A Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithA}
          header="Start With A"
          storageKey="lovedPhrasesA"
        />
      );
      
    case "❤️ B Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithB}
          header="Start With B"
          storageKey="lovedPhrasesB"
        />
      );
    case "❤️ C Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithC}
          header="Start With C"
          storageKey="lovedPhrasesC"
        />
      );
    case "❤️ D Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithD}
          header="Start With D"
          storageKey="lovedPhrasesD"
        />
      );
    case "❤️ E Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithE}
          header="Start With E"
          storageKey="lovedPhrasesE"
        />
      );
    case "❤️ F Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithF}
          header="Start With F"
          storageKey="lovedPhrasesF"
        />
      );
    case "❤️ G Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithG}
          header="Start With G"
          storageKey="lovedPhrasesG"
        />
      );
    case "❤️ H Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithH}
          header="Start With H"
          storageKey="lovedPhrasesH"
        />
      );
    case "❤️ I Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithI}
          header="Start With I"
          storageKey="lovedPhrasesI"
        />
      );
    case "❤️ J Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithJ}
          header="Start With J"
          storageKey="lovedPhrasesJ"
        />
      );
    case "❤️ K Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithK}
          header="Start With K"
          storageKey="lovedPhrasesK"
        />
      );
    case "❤️ L Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithL}
          header="Start With L"
          storageKey="lovedPhrasesL"
        />
      );
    case "❤️ M Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithM}
          header="Start With M"
          storageKey="lovedPhrasesM"
        />
      );
    case "❤️ N Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithN}
          header="Start With N"
          storageKey="lovedPhrasesN"
        />
      );
    case "❤️ O Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithO}
          header="Start With O"
          storageKey="lovedPhrasesO"
        />
      );
    case "❤️ P Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithP}
          header="Start With P"
          storageKey="lovedPhrasesP"
        />
      );
    case "❤️ Q Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithQ}
          header="Start With Q"
          storageKey="lovedPhrasesQ"
        />
      );
    case "❤️ R Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithR}
          header="Start With R"
          storageKey="lovedPhrasesR"
        />
      );
    case "❤️ S Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithS}
          header="Start With S"
          storageKey="lovedPhrasesS"
        />
      );
    case "❤️ T Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithT}
          header="Start With T"
          storageKey="lovedPhrasesT"
        />
      );
    case "❤️ U Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithU}
          header="Start With U"
          storageKey="lovedPhrasesU"
        />
      );
    case "❤️ V Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithV}
          header="Start With V"
          storageKey="lovedPhrasesV"
        />
      );
    case "❤️ W Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithW}
          header="Start With W"
          storageKey="lovedPhrasesW"
        />
      );
    case "❤️ X Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithX}
          header="Start With X"
          storageKey="lovedPhrasesX"
        />
      );
    case "❤️ Y Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithY}
          header="Start With Y"
          storageKey="lovedPhrasesY"
        />
      );
    case "❤️ Z Phrases":
      return (
        <ShowLovedData
          dataList={PhrasesStartWithZ}
          header="Start With Z"
          storageKey="lovedPhrasesZ"
        />
      );
    default:
      return <Text>NothinG To Show</Text>;
  }


  
};

const styles = StyleSheet.create({});

export default IdiomsController;


















