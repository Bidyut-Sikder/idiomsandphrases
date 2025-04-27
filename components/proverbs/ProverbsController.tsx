import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ShowData from "../common/ShowData";
import ShowLovedData from "../common/ShowLovedData";

import { PhrasesStartWithA, PhrasesStartWithB, PhrasesStartWithC, PhrasesStartWithD, PhrasesStartWithE, PhrasesStartWithF, PhrasesStartWithG, PhrasesStartWithH, PhrasesStartWithI, PhrasesStartWithJ, PhrasesStartWithK, PhrasesStartWithL, PhrasesStartWithM, PhrasesStartWithN, PhrasesStartWithO, PhrasesStartWithP, PhrasesStartWithQ, PhrasesStartWithR, PhrasesStartWithS, PhrasesStartWithT, PhrasesStartWithU, PhrasesStartWithV, PhrasesStartWithW, PhrasesStartWithX, PhrasesStartWithY, PhrasesStartWithZ } from "@/assets/data/phrases/phrasesData";
import { proverbsStartsWithA, proverbsStartsWithB, proverbsStartsWithC, proverbsStartsWithD, proverbsStartsWithE, proverbsStartsWithF, proverbsStartsWithG, proverbsStartsWithH, proverbsStartsWithI, proverbsStartsWithJ, proverbsStartsWithK, proverbsStartsWithL, proverbsStartsWithM, proverbsStartsWithN, proverbsStartsWithO, proverbsStartsWithP, proverbsStartsWithQ, proverbsStartsWithR, proverbsStartsWithS, proverbsStartsWithT, proverbsStartsWithU, proverbsStartsWithV, proverbsStartsWithW, proverbsStartsWithX, proverbsStartsWithY, proverbsStartsWithZ } from "@/assets/data/proverbs/proverbData";

const IdiomsController = () => {
  const { category, title } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: decodeURIComponent(title as string) });
    }
  }, [title]);
 
  switch (title) {
  
    case "Proverbs Start With A":
      return <ShowData dataList={proverbsStartsWithA} storageKey="lovedProverbsA" />;
    case "Proverbs Start With B":
      return <ShowData dataList={proverbsStartsWithB} storageKey="lovedProverbsB" />;
    case "Proverbs Start With C":
      return <ShowData dataList={proverbsStartsWithC} storageKey="lovedProverbsC" />;

    case "Proverbs Start With D":
      return <ShowData dataList={proverbsStartsWithD} storageKey="lovedProverbsD" />;
    case "Proverbs Start With E":
      return <ShowData dataList={proverbsStartsWithE} storageKey="lovedProverbsE" />;
    case "Proverbs Start With F":
      return <ShowData dataList={proverbsStartsWithF} storageKey="lovedProverbsF" />;
    case "Proverbs Start With G":
      return <ShowData dataList={proverbsStartsWithG} storageKey="lovedProverbsG" />;

    case "Proverbs Start With H":
      return <ShowData dataList={proverbsStartsWithH} storageKey="lovedProverbsH" />;
    case "Proverbs Start With I":
      return <ShowData dataList={proverbsStartsWithI} storageKey="lovedProverbsI" />;
    case "Proverbs Start With J":
      return <ShowData dataList={proverbsStartsWithJ} storageKey="lovedProverbsJ" />;
    case "Proverbs Start With K":
      return <ShowData dataList={proverbsStartsWithK} storageKey="lovedProverbsK" />;
    case "Proverbs Start With L":
      return <ShowData dataList={proverbsStartsWithL} storageKey="lovedProverbsL" />;
    case "Proverbs Start With M":
      return <ShowData dataList={proverbsStartsWithM} storageKey="lovedProverbsM" />;
    case "Proverbs Start With N":
      return <ShowData dataList={proverbsStartsWithN} storageKey="lovedProverbsN" />;
    case "Proverbs Start With O":
      return <ShowData dataList={proverbsStartsWithO} storageKey="lovedProverbsO" />;
    case "Proverbs Start With P":
      return <ShowData dataList={proverbsStartsWithP} storageKey="lovedProverbsP" />;
    case "Proverbs Start With Q":
      return <ShowData dataList={proverbsStartsWithQ} storageKey="lovedProverbsQ" />;
    case "Proverbs Start With R":
      return <ShowData dataList={proverbsStartsWithR} storageKey="lovedProverbsR" />;
    case "Proverbs Start With S":
      return <ShowData dataList={proverbsStartsWithS} storageKey="lovedProverbsS" />;
    case "Proverbs Start With T":
      return <ShowData dataList={proverbsStartsWithT} storageKey="lovedProverbsT" />;
    case "Proverbs Start With U":
      return <ShowData dataList={proverbsStartsWithU} storageKey="lovedProverbsU" />;
    case "Proverbs Start With V":
      return <ShowData dataList={proverbsStartsWithV} storageKey="lovedProverbsV" />;
    case "Proverbs Start With W":
      return <ShowData dataList={proverbsStartsWithW} storageKey="lovedProverbsW" />;
    case "Proverbs Start With X":
      return <ShowData dataList={proverbsStartsWithX} storageKey="lovedProverbsX" />;
    case "Proverbs Start With Y":
      return <ShowData dataList={proverbsStartsWithY} storageKey="lovedProverbsY" />;
    case "Proverbs Start With Z":
      return <ShowData dataList={proverbsStartsWithZ} storageKey="lovedProverbsZ" />;
   
      case "❤️ A Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithA}
          header="Start With A"
          storageKey="lovedProverbsA"
        />
      );
      
    case "❤️ B Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithB}
          header="Start With B"
          storageKey="lovedProverbsB"
        />
      );
    case "❤️ C Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithC}
          header="Start With C"
          storageKey="lovedProverbsC"
        />
      );
    case "❤️ D Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithD}
          header="Start With D"
          storageKey="lovedProverbsD"
        />
      );
    case "❤️ E Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithE}
          header="Start With E"
          storageKey="lovedProverbsE"
        />
      );
    case "❤️ F Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithF}
          header="Start With F"
          storageKey="lovedProverbsF"
        />
      );
    case "❤️ G Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithG}
          header="Start With G"
          storageKey="lovedProverbsG"
        />
      );
    case "❤️ H Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithH}
          header="Start With H"
          storageKey="lovedProverbsH"
        />
      );
    case "❤️ I Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithI}
          header="Start With I"
          storageKey="lovedProverbsI"
        />
      );
    case "❤️ J Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithJ}
          header="Start With J"
          storageKey="lovedProverbsJ"
        />
      );
    case "❤️ K Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithK}
          header="Start With K"
          storageKey="lovedProverbsK"
        />
      );
    case "❤️ L Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithL}
          header="Start With L"
          storageKey="lovedProverbsL"
        />
      );
    case "❤️ M Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithM}
          header="Start With M"
          storageKey="lovedProverbsM"
        />
      );
    case "❤️ N Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithN}
          header="Start With N"
          storageKey="lovedProverbsN"
        />
      );
    case "❤️ O Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithO}
          header="Start With O"
          storageKey="lovedProverbsO"
        />
      );
    case "❤️ P Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithP}
          header="Start With P"
          storageKey="lovedProverbsP"
        />
      );
    case "❤️ Q Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithQ}
          header="Start With Q"
          storageKey="lovedProverbsQ"
        />
      );
    case "❤️ R Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithR}
          header="Start With R"
          storageKey="lovedProverbsR"
        />
      );
    case "❤️ S Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithS}
          header="Start With S"
          storageKey="lovedProverbsS"
        />
      );
    case "❤️ T Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithT}
          header="Start With T"
          storageKey="lovedProverbsT"
        />
      );
    case "❤️ U Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithU}
          header="Start With U"
          storageKey="lovedProverbsU"
        />
      );
    case "❤️ V Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithV}
          header="Start With V"
          storageKey="lovedProverbsV"
        />
      );
    case "❤️ W Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithW}
          header="Start With W"
          storageKey="lovedProverbsW"
        />
      );
    case "❤️ X Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithX}
          header="Start With X"
          storageKey="lovedProverbsX"
        />
      );
    case "❤️ Y Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithY}
          header="Start With Y"
          storageKey="lovedProverbsY"
        />
      );
    case "❤️ Z Proverbs":
      return (
        <ShowLovedData
          dataList={proverbsStartsWithZ}
          header="Start With Z"
          storageKey="lovedProverbsZ"
        />
      );
    default:
      return <Text>NothinG To Show</Text>;
  }


  
};

const styles = StyleSheet.create({});

export default IdiomsController;


















