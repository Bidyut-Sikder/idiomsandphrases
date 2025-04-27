


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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { idiomsCategoryData } from "@/assets/data/idioms/idiomsCategory";


export default function ProverbCategories({data}:any) {
  // const [lovedIds, setLovedIds] = useState<number[]>([]);
  // useEffect(() => {

  //   const loadLovedWords = async () => {
  //     const json = await AsyncStorage.getItem('lovedGreWords');
  //     if (json) setLovedIds(JSON.parse(json));
  //   };
  //   loadLovedWords();
  // }, []);

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
          <View style={themedStyles.card}>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: `/[category]/[title]`,
                  params: { category, title: item.title },
                });
              }}
            >
              <Text style={themedStyles.text}>{item.title}</Text>
            </Pressable>

            <Pressable
              onPress={() => {

                router.push({
                  pathname: `/[category]/[title]`,
                  params: { 
                    category, title: category==='Proverbs'&&
                    item.title === "Proverbs Start With A" ? '❤️ A Proverbs' :
                     item.title === 'Proverbs Start With B' ? '❤️ B Proverbs' :
                     item.title === 'Proverbs Start With C' ? '❤️ C Proverbs' :
                     item.title === 'Proverbs Start With D' ? '❤️ D Proverbs' :
                     item.title === 'Proverbs Start With E' ? '❤️ E Proverbs' :
                     item.title === 'Proverbs Start With F' ? '❤️ F Proverbs' :
                     item.title === 'Proverbs Start With G' ? '❤️ G Proverbs' :
                     item.title === 'Proverbs Start With H' ? '❤️ H Proverbs' :
                     item.title === 'Proverbs Start With I' ? '❤️ I Proverbs' :
                     item.title === 'Proverbs Start With J' ? '❤️ J Proverbs' :
                     item.title === 'Proverbs Start With K' ? '❤️ K Proverbs' :
                     item.title === 'Proverbs Start With L' ? '❤️ L Proverbs' :
                     item.title === 'Proverbs Start With M' ? '❤️ M Proverbs' :
                     item.title === 'Proverbs Start With N' ? '❤️ N Proverbs' :
                     item.title === 'Proverbs Start With O' ? '❤️ O Proverbs' :
                     item.title === 'Proverbs Start With P' ? '❤️ P Proverbs' :
                     item.title === 'Proverbs Start With Q' ? '❤️ Q Proverbs' :
                     item.title === 'Proverbs Start With R' ? '❤️ R Proverbs' :
                     item.title === 'Proverbs Start With S' ? '❤️ S Proverbs' :
                     item.title === 'Proverbs Start With T' ? '❤️ T Proverbs' :
                     item.title === 'Proverbs Start With U' ? '❤️ U Proverbs' :
                     item.title === 'Proverbs Start With V' ? '❤️ V Proverbs' :
                     item.title === 'Proverbs Start With W' ? '❤️ W Proverbs' :
                     item.title === 'Proverbs Start With X' ? '❤️ X Proverbs' :
                     item.title === 'Proverbs Start With Y' ? '❤️ Y Proverbs' :
                     item.title === 'Proverbs Start With Z' ? '❤️ Z Proverbs' :""
                      // item.title==='650 IELTS Words'?'Loved-ielts-words':""
                    
                    
                    
                    }
                });
              }}
            >
             <Ionicons name={'heart-outline'} size={24} color="red" />
            </Pressable>
            
          </View>
        )}
      />
    </View>
  );
}




















//////////////////////////////////////



// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   Platform,
//   FlexAlignType,
//   TextStyle,
//   Pressable,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from "@/hooks/theme";
// import { useLocalSearchParams, useRouter } from "expo-router";

// export default function ProverbCategories({ proverbs }: any) {
//   const router = useRouter();
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const { category } = useLocalSearchParams() as {
//     category: string;
//   };
//   const themedStyles = {
//     card: {
//       flexDirection: "row" as const,
//       justifyContent: "space-between" as const,
//       alignItems: "center" as FlexAlignType,
//       padding: 22,
//       marginHorizontal: 16,
//       marginBottom: 12,
//       backgroundColor: isDark ? "#313639" : "#fff",
//       borderRadius: 8,
//       ...Platform.select({
//         ios: {
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.2,
//           shadowRadius: 4,
//         },
//         android: {
//           elevation: 2,
//         },
//       }),
//     },
//     text: {
//       color: isDark ? "#fff" : "#333",
//       fontSize: 18,
//       fontWeight: 500 as TextStyle["fontWeight"],
//     },
//     container: {
//       flex: 1,
//       backgroundColor: isDark ? "#191919" : "#f2f2f2",
//       paddingTop: 16,
//     },
//   };

//   return (
//     <View style={themedStyles.container}>
//       <FlatList
//         data={proverbs}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
        
//             <Pressable style={themedStyles.card}
//               onPress={() => {
//                 router.push({
//                   pathname: `/[category]/[topic]`,
//                   params: { category, topic: item.title },
//                 });
//               }}
//             >
//             <Text style={themedStyles.text}>{item.id}. {item.title}</Text>
//             </Pressable>


   
//         )}
//       />
//     </View>
//   );
// }
