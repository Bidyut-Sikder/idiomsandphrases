import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Platform,
  FlexAlignType,
  TextStyle,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function WordsCategories({ data }: any) {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { category } = useLocalSearchParams() as {
    category: string;
  };
  const themedStyles = {
    card: {
      flexDirection: "row" as const,
      justifyContent: "space-between" as const,
      alignItems: "center" as FlexAlignType,
      padding: 22,
      marginHorizontal: 16,
      marginBottom: 12,
      backgroundColor: isDark ? "#313639" : "#fff",
      borderRadius: 8,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    text: {
      color: isDark ? "#fff" : "#333",
      fontSize: 18,
      fontWeight: 500 as TextStyle["fontWeight"],
    },
    container: {
      flex: 1,
      backgroundColor: isDark ? "#191919" : "#f2f2f2",
      paddingTop: 16,
    },
  };

  return (
    <View style={themedStyles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        
            <Pressable style={themedStyles.card}
              onPress={() => {
                router.push({
                  pathname: `/[category]/[title]`,
                  params: { category, title: item.title },
                });
              }}
            >
            <Text style={themedStyles.text}>{item.id}. {item.title}</Text>
            </Pressable>


   
        )}
      />
    </View>
  );
}
