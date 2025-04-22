import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ShowData from "../common/ShowData";
import ShowLovedData from "../common/ShowLovedData";
import { idiomsStartWithA } from "@/assets/data/idioms/idiomsData";

const IdiomsController = () => {
  const { category, title } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: decodeURIComponent(title as string) });
    }
  }, [title]);

  switch (title) {
    case "Starts With A":
      return <ShowData dataList={idiomsStartWithA} storageKey="lovedA" />;
    case "Starts With B":
      return <ShowData />;
    case "Starts With C":
      return <ShowData />;

    case "Starts With D":
      return <ShowData />;
    case "Starts With E":
      return <ShowData />;
    case "Starts With F":
      return <ShowData />;
    case "Starts With G":
      return <ShowData />;

    case "Starts With H":
      return <ShowData />;
    case "Starts With I":
      return <ShowData />;
    case "Starts With J":
      return <ShowData />;
    case "Starts With K":
      return <ShowData />;
    case "Starts With L":
      return <ShowData />;
    case "Starts With M":
      return <ShowData />;
    case "Starts With N":
      return <ShowData />;
    case "Starts With O":
      return <ShowData />;
    case "Starts With P":
      return <ShowData />;
    case "Starts With Q":
      return <ShowData />;
    case "Starts With R":
      return <ShowData />;
    case "Starts With S":
      return <ShowData />;
    case "Starts With T":
      return <ShowData />;
    case "Starts With U":
      return <ShowData />;
    case "Starts With V":
      return <ShowData />;
    case "Starts With W":
      return <ShowData />;
    case "Starts With X":
      return <ShowData />;
    case "Starts With Y":
      return <ShowData />;
    case "Starts With Z":
      return <ShowData />;
    case "LovedA":
      return <ShowLovedData />;
    case "LovedB":
      return <ShowLovedData />;
    case "LovedC":
      return <ShowLovedData />;
    case "LovedD":
      return <ShowLovedData />;
    case "LovedE":
      return <ShowLovedData />;
    case "LovedF":
      return <ShowLovedData />;
    case "LovedG":
      return <ShowLovedData />;
    case "LovedH":
      return <ShowLovedData />;
    case "LovedI":
      return <ShowLovedData />;
    case "LovedJ":
      return <ShowLovedData />;
    case "LovedK":
      return <ShowLovedData />;
    case "LovedL":
      return <ShowLovedData />;
    case "LovedM":
      return <ShowLovedData />;
    case "LovedN":
      return <ShowLovedData />;
    case "LovedO":
      return <ShowLovedData />;
    case "LovedP":
      return <ShowLovedData />;
    case "LovedQ":
      return <ShowLovedData />;
    case "LovedR":
      return <ShowLovedData />;
    case "LovedS":
      return <ShowLovedData />;
    case "LovedT":
      return <ShowLovedData />;
    case "LovedU":
      return <ShowLovedData />;
    case "LovedV":
      return <ShowLovedData />;
    case "LovedW":
      return <ShowLovedData />;
    case "LovedX":
      return <ShowLovedData />;
    case "LovedY":
      return <ShowLovedData />;
    case "LovedZ":
      return <ShowLovedData />;
    default:
      return "";
  }

  return (
    <View>
      <Text>
        {category} {title} idioms controller
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IdiomsController;
