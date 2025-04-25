import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ShowData from "../common/ShowData";
import ShowLovedData from "../common/ShowLovedData";
import {
  idiomsStartWithA,
  idiomsStartWithB,
  idiomsStartWithC,
  idiomsStartWithD,
  idiomsStartWithE,
  idiomsStartWithF,
  idiomsStartWithG,
  idiomsStartWithH,
  idiomsStartWithI,
  idiomsStartWithJ,
  idiomsStartWithK,
  idiomsStartWithL,
  idiomsStartWithM,
  idiomsStartWithN,
  idiomsStartWithO,
  idiomsStartWithP,
  idiomsStartWithQ,
  idiomsStartWithR,
  idiomsStartWithS,
  idiomsStartWithT,
  idiomsStartWithU,
  idiomsStartWithV,
  idiomsStartWithW,
  idiomsStartWithX,
  idiomsStartWithY,
  idiomsStartWithZ,
} from "@/assets/data/idioms/idiomsData";

const IdiomsController = () => {
  const { category, title } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: decodeURIComponent(title as string) });
    }
  }, [title]);

  switch (title) {
    case "Idioms Start With A":
      return <ShowData dataList={idiomsStartWithA} storageKey="lovedIdiomsA" />;
    case "Idioms Start With B":
      return <ShowData dataList={idiomsStartWithB} storageKey="lovedIdiomsB" />;
    case "Idioms Start With C":
      return <ShowData dataList={idiomsStartWithC} storageKey="lovedIdiomsC" />;

    case "Idioms Start With D":
      return <ShowData dataList={idiomsStartWithD} storageKey="lovedIdiomsD" />;
    case "Idioms Start With E":
      return <ShowData dataList={idiomsStartWithE} storageKey="lovedIdiomsE" />;
    case "Idioms Start With F":
      return <ShowData dataList={idiomsStartWithF} storageKey="lovedIdiomsF" />;
    case "Idioms Start With G":
      return <ShowData dataList={idiomsStartWithG} storageKey="lovedIdiomsG" />;

    case "Idioms Start With H":
      return <ShowData dataList={idiomsStartWithH} storageKey="lovedIdiomsH" />;
    case "Idioms Start With I":
      return <ShowData dataList={idiomsStartWithI} storageKey="lovedIdiomsI" />;
    case "Idioms Start With J":
      return <ShowData dataList={idiomsStartWithJ} storageKey="lovedIdiomsJ" />;
    case "Idioms Start With K":
      return <ShowData dataList={idiomsStartWithK} storageKey="lovedIdiomsK" />;
    case "Idioms Start With L":
      return <ShowData dataList={idiomsStartWithL} storageKey="lovedIdiomsL" />;
    case "Idioms Start With M":
      return <ShowData dataList={idiomsStartWithM} storageKey="lovedIdiomsM" />;
    case "Idioms Start With N":
      return <ShowData dataList={idiomsStartWithN} storageKey="lovedIdiomsN" />;
    case "Idioms Start With O":
      return <ShowData dataList={idiomsStartWithO} storageKey="lovedIdiomsO" />;
    case "Idioms Start With P":
      return <ShowData dataList={idiomsStartWithP} storageKey="lovedIdiomsP" />;
    case "Idioms Start With Q":
      return <ShowData dataList={idiomsStartWithQ} storageKey="lovedIdiomsQ" />;
    case "Idioms Start With R":
      return <ShowData dataList={idiomsStartWithR} storageKey="lovedIdiomsR" />;
    case "Idioms Start With S":
      return <ShowData dataList={idiomsStartWithS} storageKey="lovedIdiomsS" />;
    case "Idioms Start With T":
      return <ShowData dataList={idiomsStartWithT} storageKey="lovedIdiomsT" />;
    case "Idioms Start With U":
      return <ShowData dataList={idiomsStartWithU} storageKey="lovedIdiomsU" />;
    case "Idioms Start With V":
      return <ShowData dataList={idiomsStartWithV} storageKey="lovedIdiomsV" />;
    case "Idioms Start With W":
      return <ShowData dataList={idiomsStartWithW} storageKey="lovedIdiomsW" />;
    case "Idioms Start With X":
      return <ShowData dataList={idiomsStartWithX} storageKey="lovedIdiomsX" />;
    case "Idioms Start With Y":
      return <ShowData dataList={idiomsStartWithY} storageKey="lovedIdiomsY" />;
    case "Idioms Start With Z":
      return <ShowData dataList={idiomsStartWithZ} storageKey="lovedIdiomsZ" />;
    case "❤️ A Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithA}
          header="Start With A"
          storageKey="lovedIdiomsA"
        />
      );
    case "❤️ B Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithB}
          header="Start With B"
          storageKey="lovedIdiomsB"
        />
      );
    case "❤️ C Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithC}
          header="Start With C"
          storageKey="lovedIdiomsC"
        />
      );
    case "❤️ D Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithD}
          header="Start With D"
          storageKey="lovedD"
        />
      );
    case "❤️ E Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithE}
          header="Start With E"
          storageKey="lovedE"
        />
      );
    case "❤️ F Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithF}
          header="Start With F"
          storageKey="lovedIdiomsF"
        />
      );
    case "❤️ G Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithG}
          header="Start With G"
          storageKey="lovedIdiomsG"
        />
      );
    case "❤️ H Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithH}
          header="Start With H"
          storageKey="lovedIdiomsH"
        />
      );
    case "❤️ I Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithI}
          header="Start With I"
          storageKey="lovedIdiomsI"
        />
      );
    case "❤️ J Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithJ}
          header="Start With J"
          storageKey="lovedIdiomsJ"
        />
      );
    case "❤️ K Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithK}
          header="Start With K"
          storageKey="lovedIdiomsK"
        />
      );
    case "❤️ L Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithL}
          header="Start With L"
          storageKey="lovedIdiomsL"
        />
      );
    case "❤️ M Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithM}
          header="Start With M"
          storageKey="lovedIdiomsM"
        />
      );
    case "❤️ N Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithN}
          header="Start With N"
          storageKey="lovedIdiomsN"
        />
      );
    case "❤️ O Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithO}
          header="Start With O"
          storageKey="lovedIdiomsO"
        />
      );
    case "❤️ P Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithP}
          header="Start With P"
          storageKey="lovedIdiomsP"
        />
      );
    case "❤️ Q Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithQ}
          header="Start With Q"
          storageKey="lovedIdiomsQ"
        />
      );
    case "❤️ R Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithR}
          header="Start With R"
          storageKey="lovedIdiomsR"
        />
      );
    case "❤️ S Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithS}
          header="Start With S"
          storageKey="lovedIdiomsS"
        />
      );
    case "❤️ T Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithT}
          header="Start With T"
          storageKey="lovedIdiomsT"
        />
      );
    case "❤️ U Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithU}
          header="Start With U"
          storageKey="lovedIdiomsU"
        />
      );
    case "❤️ V Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithV}
          header="Start With V"
          storageKey="lovedIdiomsV"
        />
      );
    case "❤️ W Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithW}
          header="Start With W"
          storageKey="lovedIdiomsW"
        />
      );
    case "❤️ X Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithX}
          header="Start With X"
          storageKey="lovedIdiomsX"
        />
      );
    case "❤️ Y Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithY}
          header="Start With Y"
          storageKey="lovedIdiomsY"
        />
      );
    case "❤️ Z Idioms":
      return (
        <ShowLovedData
          dataList={idiomsStartWithZ}
          header="Start With Z"
          storageKey="lovedIdiomsZ"
        />
      );
    default:
      return "";
  }


  
};

const styles = StyleSheet.create({});

export default IdiomsController;
