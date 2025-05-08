import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ShowData from "../common/ShowData";
import ShowLovedData from "../common/ShowLovedData";

import { slangsStartWithA, slangsStartWithB, slangsStartWithC, slangsStartWithD, slangsStartWithE, slangsStartWithF, slangsStartWithG, slangsStartWithH, slangsStartWithI, slangsStartWithJ, slangsStartWithK, slangsStartWithL, slangsStartWithM, slangsStartWithN, slangsStartWithO, slangsStartWithP, slangsStartWithQ, slangsStartWithR, slangsStartWithS, slangsStartWithT, slangsStartWithU, slangsStartWithV, slangsStartWithW, slangsStartWithX, slangsStartWithY, slangsStartWithZ } from "@/assets/data/slangs/slangsData";

const SlangsController = () => {
  const { category, title } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: decodeURIComponent(title as string) });
    }
  }, [title]);

  switch (title) {
    // Regular Slangs Views
    case "Slangs Start With A":
      return <ShowData dataList={slangsStartWithA} storageKey="lovedSlangsA" />;
    case "Slangs Start With B":
      return <ShowData dataList={slangsStartWithB} storageKey="lovedSlangsB" />;
    case "Slangs Start With C":
      return <ShowData dataList={slangsStartWithC} storageKey="lovedSlangsC" />;
    case "Slangs Start With D":
      return <ShowData dataList={slangsStartWithD} storageKey="lovedSlangsD" />;
    case "Slangs Start With E":
      return <ShowData dataList={slangsStartWithE} storageKey="lovedSlangsE" />;
    case "Slangs Start With F":
      return <ShowData dataList={slangsStartWithF} storageKey="lovedSlangsF" />;
    case "Slangs Start With G":
      return <ShowData dataList={slangsStartWithG} storageKey="lovedSlangsG" />;
    case "Slangs Start With H":
      return <ShowData dataList={slangsStartWithH} storageKey="lovedSlangsH" />;
    case "Slangs Start With I":
      return <ShowData dataList={slangsStartWithI} storageKey="lovedSlangsI" />;
    case "Slangs Start With J":
      return <ShowData dataList={slangsStartWithJ} storageKey="lovedSlangsJ" />;
    case "Slangs Start With K":
      return <ShowData dataList={slangsStartWithK} storageKey="lovedSlangsK" />;
    case "Slangs Start With L":
      return <ShowData dataList={slangsStartWithL} storageKey="lovedSlangsL" />;
    case "Slangs Start With M":
      return <ShowData dataList={slangsStartWithM} storageKey="lovedSlangsM" />;
    case "Slangs Start With N":
      return <ShowData dataList={slangsStartWithN} storageKey="lovedSlangsN" />;
    case "Slangs Start With O":
      return <ShowData dataList={slangsStartWithO} storageKey="lovedSlangsO" />;
    case "Slangs Start With P":
      return <ShowData dataList={slangsStartWithP} storageKey="lovedSlangsP" />;
    case "Slangs Start With Q":
      return <ShowData dataList={slangsStartWithQ} storageKey="lovedSlangsQ" />;
    case "Slangs Start With R":
      return <ShowData dataList={slangsStartWithR} storageKey="lovedSlangsR" />;
    case "Slangs Start With S":
      return <ShowData dataList={slangsStartWithS} storageKey="lovedSlangsS" />;
    case "Slangs Start With T":
      return <ShowData dataList={slangsStartWithT} storageKey="lovedSlangsT" />;
    case "Slangs Start With U":
      return <ShowData dataList={slangsStartWithU} storageKey="lovedSlangsU" />;
    case "Slangs Start With V":
      return <ShowData dataList={slangsStartWithV} storageKey="lovedSlangsV" />;
    case "Slangs Start With W":
      return <ShowData dataList={slangsStartWithW} storageKey="lovedSlangsW" />;
    case "Slangs Start With X":
      return <ShowData dataList={slangsStartWithX} storageKey="lovedSlangsX" />;
    case "Slangs Start With Y":
      return <ShowData dataList={slangsStartWithY} storageKey="lovedSlangsY" />;
    case "Slangs Start With Z":
      return <ShowData dataList={slangsStartWithZ} storageKey="lovedSlangsZ" />;
  
    // Loved Slangs Views
    case "❤️ A Slangs":
      return <ShowLovedData dataList={slangsStartWithA} header="Start With A" storageKey="lovedSlangsA" />;
    case "❤️ B Slangs":
      return <ShowLovedData dataList={slangsStartWithB} header="Start With B" storageKey="lovedSlangsB" />;
    case "❤️ C Slangs":
      return <ShowLovedData dataList={slangsStartWithC} header="Start With C" storageKey="lovedSlangsC" />;
    case "❤️ D Slangs":
      return <ShowLovedData dataList={slangsStartWithD} header="Start With D" storageKey="lovedSlangsD" />;
    case "❤️ E Slangs":
      return <ShowLovedData dataList={slangsStartWithE} header="Start With E" storageKey="lovedSlangsE" />;
    case "❤️ F Slangs":
      return <ShowLovedData dataList={slangsStartWithF} header="Start With F" storageKey="lovedSlangsF" />;
    case "❤️ G Slangs":
      return <ShowLovedData dataList={slangsStartWithG} header="Start With G" storageKey="lovedSlangsG" />;
    case "❤️ H Slangs":
      return <ShowLovedData dataList={slangsStartWithH} header="Start With H" storageKey="lovedSlangsH" />;
    case "❤️ I Slangs":
      return <ShowLovedData dataList={slangsStartWithI} header="Start With I" storageKey="lovedSlangsI" />;
    case "❤️ J Slangs":
      return <ShowLovedData dataList={slangsStartWithJ} header="Start With J" storageKey="lovedSlangsJ" />;
    case "❤️ K Slangs":
      return <ShowLovedData dataList={slangsStartWithK} header="Start With K" storageKey="lovedSlangsK" />;
    case "❤️ L Slangs":
      return <ShowLovedData dataList={slangsStartWithL} header="Start With L" storageKey="lovedSlangsL" />;
    case "❤️ M Slangs":
      return <ShowLovedData dataList={slangsStartWithM} header="Start With M" storageKey="lovedSlangsM" />;
    case "❤️ N Slangs":
      return <ShowLovedData dataList={slangsStartWithN} header="Start With N" storageKey="lovedSlangsN" />;
    case "❤️ O Slangs":
      return <ShowLovedData dataList={slangsStartWithO} header="Start With O" storageKey="lovedSlangsO" />;
    case "❤️ P Slangs":
      return <ShowLovedData dataList={slangsStartWithP} header="Start With P" storageKey="lovedSlangsP" />;
    case "❤️ Q Slangs":
      return <ShowLovedData dataList={slangsStartWithQ} header="Start With Q" storageKey="lovedSlangsQ" />;
    case "❤️ R Slangs":
      return <ShowLovedData dataList={slangsStartWithR} header="Start With R" storageKey="lovedSlangsR" />;
    case "❤️ S Slangs":
      return <ShowLovedData dataList={slangsStartWithS} header="Start With S" storageKey="lovedSlangsS" />;
    case "❤️ T Slangs":
      return <ShowLovedData dataList={slangsStartWithT} header="Start With T" storageKey="lovedSlangsT" />;
    case "❤️ U Slangs":
      return <ShowLovedData dataList={slangsStartWithU} header="Start With U" storageKey="lovedSlangsU" />;
    case "❤️ V Slangs":
      return <ShowLovedData dataList={slangsStartWithV} header="Start With V" storageKey="lovedSlangsV" />;
    case "❤️ W Slangs":
      return <ShowLovedData dataList={slangsStartWithW} header="Start With W" storageKey="lovedSlangsW" />;
    case "❤️ X Slangs":
      return <ShowLovedData dataList={slangsStartWithX} header="Start With X" storageKey="lovedSlangsX" />;
    case "❤️ Y Slangs":
      return <ShowLovedData dataList={slangsStartWithY} header="Start With Y" storageKey="lovedSlangsY" />;
    case "❤️ Z Slangs":
      return <ShowLovedData dataList={slangsStartWithZ} header="Start With Z" storageKey="lovedSlangsZ" />;
  
    default:
      return "";
  }

  
};

const styles = StyleSheet.create({});

export default SlangsController;
