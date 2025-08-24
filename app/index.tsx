import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import { useTheme } from "@/hooks/theme";
import { Image } from "expo-image";

// Images
import boy from "@/assets/images/boy.png";
import book from "@/assets/images/book.png";
import brain from "@/assets/images/brain.png";
import closedBook from "@/assets/images/closed-book.png";
import slangs from "@/assets/images/slangs.png";
import beginner from "@/assets/images/beginner.png";
import advanced from "@/assets/images/advanced.png";
import practice from "@/assets/images/practice.png";
import { useRouter } from "expo-router";
import { useNotification } from "@/hooks/notificationContext";

export default function IdiomsAndPhrases() {
  const { expoPushToken, notification, error } = useNotification();
 
  const { theme, bg } = useTheme();
  const isDark = theme === "dark";

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Idioms and Phrases
      </Text>
      {/* <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Push Notification Token: {JSON.stringify(notification) || "Not available"}
      </Text> */}
      <View style={styles.threeColumn}>
        <Card title="Idioms" isDark={isDark} />
        <Card title="Phrases" isDark={isDark} />
        <Card title="Proverbs" isDark={isDark} />
      </View>

      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Advanced Vocabulary
      </Text>
      <View style={styles.twoColumn}>
        <Card title="Words" isDark={isDark} />
        <Card title="Slangs" isDark={isDark} />
      </View>

      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Everyday Expressions
      </Text>
      <View style={styles.threeColumn}>
        <Card title="Beginner" isDark={isDark} />
        <Card title="Advanced" isDark={isDark} />
        <Card title="Practice" isDark={isDark} />
      </View>
    </ScrollView>
  );
}

function Card({ title, isDark }: { title: string; isDark: boolean }) {
  const router = useRouter();
  const imageMap: Record<string, any> = {
    Idioms: boy,
    Phrases: book,
    Proverbs: brain,
    Words: closedBook,
    Slangs: slangs,
    Beginner: beginner,
    Practice: practice,
    Advanced: advanced,
  };

  const imageSource = imageMap[title];

  return (
    <Pressable
      onPress={() => {
        router.push(`/${title}`);
      }}
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
      <Image
        source={imageSource}
        style={{ width: 70, height: 60, marginBottom: 10 }}
        contentFit="contain"
      />
      <Text style={[styles.cardTitle, { color: isDark ? "#f0f0f0" : "#222" }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Platform.select({
      ios: "Helvetica Neue",
      android: "sans-serif-medium",
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
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
