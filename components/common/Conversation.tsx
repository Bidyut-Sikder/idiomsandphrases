// import React, { useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Platform,
// } from "react-native";
// import * as Speech from "expo-speech";
// import { useTheme } from "@/hooks/theme";
// import { useLocalSearchParams, useNavigation } from "expo-router";

// interface ConversationLine {
//   speaker: string;
//   icon: string;
//   message: string;
//   id:number
// }

// interface ConversationProps {
//   data: ConversationLine[];
// }
// const Conversation: React.FC<ConversationProps> = ({ data }) => {
//   const { title } = useLocalSearchParams();
//   const navigation = useNavigation();
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const speak = (text: string) => {
//     Speech.speak(text, { language: "en" });
//   };
//   useEffect(() => {
//     if (title) {
//       navigation.setOptions({ title: decodeURIComponent(title as string) });
//     }
//   }, [title]);
//   return (
//     <ScrollView
//       contentContainerStyle={[
//         styles.container,
//         { backgroundColor: isDark ? "#121212" : "#f5f5f5" },
//       ]}
//     >
//       {data.map((line, index) => {
//         const isLeft = line.speaker === "A";
//         const bubbleColor = isLeft
//           ? isDark
//             ? "#2d2d2d"
//             : "#e2e2e2"
//           : isDark
//           ? "#4e6cef"
//           : "#007aff";
//         const textColor = isLeft ? (isDark ? "#fff" : "#000") : "#fff";

//         return (
//           <View
//             key={index}
//             style={[styles.row, isLeft ? styles.leftRow : styles.rightRow]}
//           >
//             {isLeft && <Text style={styles.icon}>{line.icon}</Text>}

//             <TouchableOpacity
//               onPress={() => speak(line.message)}
//               style={styles.bubbleWrapper}
//             >
//               <View
//                 style={[
//                   styles.bubble,
//                   isLeft ? styles.leftBubble : styles.rightBubble,
//                   { backgroundColor: bubbleColor },
//                 ]}
//               >
//                 <Text style={[styles.message, { color: textColor }]}>
//                   {line.message}
//                 </Text>
//                 <Text style={[styles.speakerIcon, { color: textColor }]}>
//                   🔊
//                 </Text>
//               </View>
//             </TouchableOpacity>

//             {!isLeft && <Text style={styles.icon}>{line.icon}</Text>}
//           </View>
//         );
//       })}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     flexGrow: 1,
//   },
//   row: {
//     flexDirection: "row",
//     marginBottom: 14,
//     alignItems: "flex-end",
//   },
//   leftRow: {
//     justifyContent: "flex-start",
//   },
//   rightRow: {
//     justifyContent: "flex-end",
//     alignSelf: "flex-end",
//   },
//   icon: {
//     fontSize: 22,
//     marginHorizontal: 6,
//     marginBottom: 4,
//   },
//   bubbleWrapper: {
//     maxWidth: "75%",
//   },
//   bubble: {
//     padding: 12,
//     borderRadius: 18,
//     position: "relative",
//     ...Platform.select({
//       ios: {
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.12,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 2,
//       },
//     }),
//   },
//   leftBubble: {
//     borderTopLeftRadius: 4,
//   },
//   rightBubble: {
//     borderTopRightRadius: 4,
//   },
//   message: {
//     fontSize: 16,
//     lineHeight: 22,
//   },
//   speakerIcon: {
//     fontSize: 14,
//     textAlign: "right",
//     marginTop: 6,
//   },
// });

// export default Conversation;



//////////////////////////

import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as Speech from "expo-speech";
import { useTheme } from "@/hooks/theme";
import { useLocalSearchParams, useNavigation } from "expo-router";

interface ConversationLine {
  speaker: string;
  icon: string;
  message: string;
  id:number
}

interface ConversationProps {
  data: ConversationLine[];
}
const Conversation: React.FC<ConversationProps> = ({ data }) => {
  const { title } = useLocalSearchParams();
  const navigation = useNavigation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const speak = (text: string) => {
    Speech.speak(text, { language: "en" });
  };
  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: decodeURIComponent(title as string) });
    }
  }, [title]);
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: isDark ? "#121212" : "#f5f5f5" },
      ]}
    >
      {data.map((line, index) => {
        const isLeft = line.speaker === "A";
        const bubbleColor = isLeft
          ? isDark
            ? "#2d2d2d"
            : "#e2e2e2"
          : isDark
          ? "#4e6cef"
          : "#007aff";
        const textColor = isLeft ? (isDark ? "#fff" : "#000") : "#fff";

        return (
          <View
            key={index}
            style={[styles.row, isLeft ? styles.leftRow : styles.rightRow]}
          >
            {isLeft && <Text style={styles.icon}>{line.icon}</Text>}

            <TouchableOpacity
              onPress={() => speak(line.message)}
              style={styles.bubbleWrapper}
            >
              <View
                style={[
                  styles.bubble,
                  isLeft ? styles.leftBubble : styles.rightBubble,
                  { backgroundColor: bubbleColor },
                ]}
              >
                <Text style={[styles.message, { color: textColor }]}>
                  {line.message}
                </Text>
                <Text style={[styles.speakerIcon, { color: textColor }]}>
                  🔊
                </Text>
              </View>
            </TouchableOpacity>

            {!isLeft && <Text style={styles.icon}>{line.icon}</Text>}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    marginBottom: 14,
    alignItems: "flex-end",
  },
  leftRow: {
    justifyContent: "flex-start",
  },
  rightRow: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  icon: {
    fontSize: 22,
    marginHorizontal: 6,
    marginBottom: 4,
  },
  bubbleWrapper: {
    maxWidth: "75%",
  },
  bubble: {
    padding: 12,
    borderRadius: 18,
    position: "relative",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  leftBubble: {
    borderTopLeftRadius: 4,
  },
  rightBubble: {
    borderTopRightRadius: 4,
  },
  message: {
    fontSize: 16,
    lineHeight: 22,
  },
  speakerIcon: {
    fontSize: 14,
    textAlign: "right",
    marginTop: 6,
  },
});

export default Conversation;
