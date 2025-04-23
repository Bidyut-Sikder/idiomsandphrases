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
    case "Start With A":
      return <ShowData dataList={idiomsStartWithA} storageKey="lovedA" />;
    case "Start With B":
      return <ShowData dataList={idiomsStartWithB} storageKey="lovedB" />;
    case "Start With C":
      return <ShowData dataList={idiomsStartWithC} storageKey="lovedC" />;

    case "Start With D":
      return <ShowData dataList={idiomsStartWithD} storageKey="lovedD" />;
    case "Start With E":
      return <ShowData dataList={idiomsStartWithE} storageKey="lovedE" />;
    case "Start With F":
      return <ShowData dataList={idiomsStartWithF} storageKey="lovedF" />;
    case "Start With G":
      return <ShowData dataList={idiomsStartWithG} storageKey="lovedG" />;

    case "Start With H":
      return <ShowData dataList={idiomsStartWithH} storageKey="lovedH" />;
    case "Start With I":
      return <ShowData dataList={idiomsStartWithI} storageKey="lovedI" />;
    case "Start With J":
      return <ShowData dataList={idiomsStartWithJ} storageKey="lovedJ" />;
    case "Start With K":
      return <ShowData dataList={idiomsStartWithK} storageKey="lovedK" />;
    case "Start With L":
      return <ShowData dataList={idiomsStartWithL} storageKey="lovedL" />;
    case "Start With M":
      return <ShowData dataList={idiomsStartWithM} storageKey="lovedM" />;
    case "Start With N":
      return <ShowData dataList={idiomsStartWithN} storageKey="lovedN" />;
    case "Start With O":
      return <ShowData dataList={idiomsStartWithO} storageKey="lovedO" />;
    case "Start With P":
      return <ShowData dataList={idiomsStartWithP} storageKey="lovedP" />;
    case "Start With Q":
      return <ShowData dataList={idiomsStartWithQ} storageKey="lovedQ" />;
    case "Start With R":
      return <ShowData dataList={idiomsStartWithR} storageKey="lovedR" />;
    case "Start With S":
      return <ShowData dataList={idiomsStartWithS} storageKey="lovedS" />;
    case "Start With T":
      return <ShowData dataList={idiomsStartWithT} storageKey="lovedT" />;
    case "Start With U":
      return <ShowData dataList={idiomsStartWithU} storageKey="lovedU" />;
    case "Start With V":
      return <ShowData dataList={idiomsStartWithV} storageKey="lovedV" />;
    case "Start With W":
      return <ShowData dataList={idiomsStartWithW} storageKey="lovedW" />;
    case "Start With X":
      return <ShowData dataList={idiomsStartWithX} storageKey="lovedX" />;
    case "Start With Y":
      return <ShowData dataList={idiomsStartWithY} storageKey="lovedY" />;
    case "Start With Z":
      return <ShowData dataList={idiomsStartWithZ} storageKey="lovedZ" />;
    case "LovedA":
      return (
        <ShowLovedData
          dataList={idiomsStartWithA}
          header="Start With A"
          storageKey="lovedA"
        />
      );
    case "LovedB":
      return (
        <ShowLovedData
          dataList={idiomsStartWithB}
          header="Start With B"
          storageKey="lovedB"
        />
      );
    case "LovedC":
      return (
        <ShowLovedData
          dataList={idiomsStartWithC}
          header="Start With C"
          storageKey="lovedC"
        />
      );
    case "LovedD":
      return (
        <ShowLovedData
          dataList={idiomsStartWithD}
          header="Start With D"
          storageKey="lovedD"
        />
      );
    case "LovedE":
      return (
        <ShowLovedData
          dataList={idiomsStartWithE}
          header="Start With E"
          storageKey="lovedE"
        />
      );
    case "LovedF":
      return (
        <ShowLovedData
          dataList={idiomsStartWithF}
          header="Start With F"
          storageKey="lovedF"
        />
      );
    case "LovedG":
      return (
        <ShowLovedData
          dataList={idiomsStartWithG}
          header="Start With G"
          storageKey="lovedG"
        />
      );
    case "LovedH":
      return (
        <ShowLovedData
          dataList={idiomsStartWithH}
          header="Start With H"
          storageKey="lovedH"
        />
      );
    case "LovedI":
      return (
        <ShowLovedData
          dataList={idiomsStartWithI}
          header="Start With I"
          storageKey="lovedI"
        />
      );
    case "LovedJ":
      return (
        <ShowLovedData
          dataList={idiomsStartWithJ}
          header="Start With J"
          storageKey="lovedJ"
        />
      );
    case "LovedK":
      return (
        <ShowLovedData
          dataList={idiomsStartWithK}
          header="Start With K"
          storageKey="lovedK"
        />
      );
    case "LovedL":
      return (
        <ShowLovedData
          dataList={idiomsStartWithL}
          header="Start With L"
          storageKey="lovedL"
        />
      );
    case "LovedM":
      return (
        <ShowLovedData
          dataList={idiomsStartWithM}
          header="Start With M"
          storageKey="lovedM"
        />
      );
    case "LovedN":
      return (
        <ShowLovedData
          dataList={idiomsStartWithN}
          header="Start With N"
          storageKey="lovedN"
        />
      );
    case "LovedO":
      return (
        <ShowLovedData
          dataList={idiomsStartWithO}
          header="Start With O"
          storageKey="lovedO"
        />
      );
    case "LovedP":
      return (
        <ShowLovedData
          dataList={idiomsStartWithP}
          header="Start With P"
          storageKey="lovedP"
        />
      );
    case "LovedQ":
      return (
        <ShowLovedData
          dataList={idiomsStartWithQ}
          header="Start With Q"
          storageKey="lovedQ"
        />
      );
    case "LovedR":
      return (
        <ShowLovedData
          dataList={idiomsStartWithR}
          header="Start With R"
          storageKey="lovedR"
        />
      );
    case "LovedS":
      return (
        <ShowLovedData
          dataList={idiomsStartWithS}
          header="Start With S"
          storageKey="lovedS"
        />
      );
    case "LovedT":
      return (
        <ShowLovedData
          dataList={idiomsStartWithT}
          header="Start With T"
          storageKey="lovedT"
        />
      );
    case "LovedU":
      return (
        <ShowLovedData
          dataList={idiomsStartWithU}
          header="Start With U"
          storageKey="lovedU"
        />
      );
    case "LovedV":
      return (
        <ShowLovedData
          dataList={idiomsStartWithV}
          header="Start With V"
          storageKey="lovedV"
        />
      );
    case "LovedW":
      return (
        <ShowLovedData
          dataList={idiomsStartWithW}
          header="Start With W"
          storageKey="lovedW"
        />
      );
    case "LovedX":
      return (
        <ShowLovedData
          dataList={idiomsStartWithX}
          header="Start With X"
          storageKey="lovedX"
        />
      );
    case "LovedY":
      return (
        <ShowLovedData
          dataList={idiomsStartWithY}
          header="Start With Y"
          storageKey="lovedY"
        />
      );
    case "LovedZ":
      return (
        <ShowLovedData
          dataList={idiomsStartWithZ}
          header="Start With Z"
          storageKey="lovedZ"
        />
      );
    default:
      return "";
  }


  
};

const styles = StyleSheet.create({});

export default IdiomsController;
