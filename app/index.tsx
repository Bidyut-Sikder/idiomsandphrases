import React from "react";
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@/hooks/theme";

export default function IdiomsAndPhrases() {
  const { theme,bg } = useTheme();
  const isDark = theme === "dark";

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: bg },
      ]}
    >
      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Idioms and Phrases
      </Text>
      <View style={styles.threeColumn}>
        <Card icon="chatbox-ellipses-outline" title="Break the Ice" isDark={isDark} />
        <Card icon="bed-outline" title="Hit the Sack" isDark={isDark} />
        <Card icon="cloud-outline" title="Under the Weather" isDark={isDark} />
      </View>

      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Advanced Vocabulary
      </Text>
      <View style={styles.twoColumn}>
        <Card icon="school-outline" title="Articulate" isDark={isDark} />
        <Card icon="book-outline" title="Cognizant" isDark={isDark} />
      </View>

      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Everyday Expressions
      </Text>
      <View style={styles.threeColumn}>
        <Card icon="chatbubble-outline" title="What’s up?" isDark={isDark} />
        <Card icon="thumbs-up-outline" title="No worries" isDark={isDark} />
        <Card icon="bulb-outline" title="Makes sense" isDark={isDark} />
      </View>
    </ScrollView>
  );
}

function Card({
  icon,
  title,
  isDark,
}: {
  icon: any;
  title: string;
  isDark: boolean;
}) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isDark ? "#262626" : "#ffffff",
          borderColor: isDark ? "#3a3a3a" : "#e0e0e0",
          borderWidth: 1,
          shadowColor: isDark ? "#000" : "#aaa",
        },
      ]}
    >
      <Ionicons
        name={icon}
        size={32}
        color={isDark ? "#66b2ff" : "#4e6cef"}
        style={styles.icon}
      />
      <Text style={[styles.cardTitle, { color: isDark ? "#f0f0f0" : "#222" }]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    // fontSize: 20,
    // fontWeight: "bold",
    // marginTop: 24,
    // marginBottom: 12,

      fontSize: 20,

      fontFamily: Platform.select({
        ios: "Helvetica Neue",
        android: "Rounded sans-serif",
      }),
      marginTop: 24,
      marginBottom: 12,
    
    
  },
  threeColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 5,
  },
  twoColumn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 5,
  },
  card: {
    width: "30%",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 3,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  icon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
