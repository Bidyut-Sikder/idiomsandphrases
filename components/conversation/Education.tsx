import React, { useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  Platform,
  Pressable,
  FlexAlignType,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme";
import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import * as Speech from "expo-speech";

export default function Education() {
  const navigation = useNavigation();
  const { category, topic } = useLocalSearchParams() as {
    category: string;
    topic: string;
  };
  const { theme } = useTheme();
  const router = useRouter();
  const isDark = theme === "dark";

  const speak = (text: string) => {
    Speech.speak(text, {
      language: "en",
    });
  };
  useEffect(() => {
    if (topic) {
      navigation.setOptions({ title: decodeURIComponent(topic as string) });
    }
  }, [topic]);
  const themedStyles = {
    container: {
      padding: 16,
    },
    card: {
      flexDirection: "row" as const,
      backgroundColor: isDark ? "#313639" : "#fff",
      borderRadius: 7,
      padding: 16,
      marginBottom: 16,
      alignItems: "center" as FlexAlignType,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 16,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    icon: {
      marginRight: 16,
    },
    textBox: {
      flex: 1,
    },
    title: {
      fontSize: 17,
      fontWeight: "600" as TextStyle["fontWeight"],
      marginBottom: 4,
      color: isDark ? "#fff" : "#333",
    },
    topic: {
      fontSize: 13,
      fontWeight: "400" as TextStyle["fontWeight"],
      marginBottom: 4,
      color: isDark ? "#ccc" : "#666",
    },
  };

  const Item = ({ title, topic }: { topic: string; title: string }) => (
    <Pressable
      onPress={() => {
        speak(title);
        // router.push(`/${category}/${topic}/${encodeURIComponent(title)}`);
        router.push({
          pathname: `/[category]/[topic]/[title]`,
          params: { category, topic,  title },
        });
      }}
    >
      <View style={themedStyles.card}>
        <Ionicons
          name="book-outline"
          size={32}
          color="#4e6cef"
          style={themedStyles.icon}
        />
        <View style={themedStyles.textBox}>
          <Text style={themedStyles.title}>{title}</Text>
          <Text style={themedStyles.topic}>{topic}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? "#191919" : "#f2f2f2" }}>
      <FlatList
        data={topicDataList}
        renderItem={({ item }) => (
          <Item title={item.title} topic={item.topic} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={themedStyles.container}
      />
    </View>
  );
}

const topicDataList = [
  { id: 1, title: "First Day of School", topic: "Education" },
  { id: 2, title: "Welcome to School", topic: "Education" },
  { id: 3, title: "Classroom Rules", topic: "Education" },
  { id: 4, title: "Meeting New Friends", topic: "Education" },
  { id: 5, title: "My Favorite Subject", topic: "Education" },
  { id: 6, title: "School Supplies", topic: "Education" },
  { id: 7, title: "Asking Questions in Class", topic: "Education" },
  { id: 8, title: "Doing Homework", topic: "Education" },
  { id: 9, title: "Talking to the Teacher", topic: "Education" },
  { id: 10, title: "Getting Good Grades", topic: "Education" },
  { id: 11, title: "Library Visit", topic: "Education" },
  { id: 12, title: "Learning Online", topic: "Education" },
  { id: 13, title: "Studying for Exams", topic: "Education" },
  { id: 14, title: "Group Projects", topic: "Education" },
  { id: 15, title: "Field Trips", topic: "Education" },
  { id: 16, title: "School Assembly", topic: "Education" },
  { id: 17, title: "Recess and Break Time", topic: "Education" },
  { id: 18, title: "Writing Essays", topic: "Education" },
  { id: 19, title: "Science Lab", topic: "Education" },
  { id: 20, title: "End of the School Year", topic: "Education" },
  { id: 21, title: "School Bus Ride", topic: "Education" },
  { id: 22, title: "Lunch Time at School", topic: "Education" },
  { id: 23, title: "Meeting the Principal", topic: "Education" },
  { id: 24, title: "Parent-Teacher Meeting", topic: "Education" },
  { id: 25, title: "Wearing School Uniform", topic: "Education" },
  { id: 26, title: "After School Activities", topic: "Education" },
  { id: 27, title: "Sports Day", topic: "Education" },
  { id: 28, title: "Art Class Fun", topic: "Education" }
];
