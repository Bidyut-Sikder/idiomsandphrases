


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


export default function IdiomsCategories({data}:any) {
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
                console.log(item.title)
                router.push({
                  pathname: `/[category]/[title]`,
                  params: { 
                    category, title: category==='Idioms'&&
                    item.title === "Idioms Start With A" ? '❤️ A Idioms' :
                     item.title === 'Idioms Start With B' ? '❤️ B Idioms' :
                     item.title === 'Idioms Start With C' ? '❤️ C Idioms' :
                     item.title === 'Idioms Start With D' ? '❤️ D Idioms' :
                     item.title === 'Idioms Start With E' ? '❤️ E Idioms' :
                     item.title === 'Idioms Start With F' ? '❤️ F Idioms' :
                     item.title === 'Idioms Start With G' ? '❤️ G Idioms' :
                     item.title === 'Idioms Start With H' ? '❤️ H Idioms' :
                     item.title === 'Idioms Start With I' ? '❤️ I Idioms' :
                     item.title === 'Idioms Start With J' ? '❤️ J Idioms' :
                     item.title === 'Idioms Start With K' ? '❤️ K Idioms' :
                     item.title === 'Idioms Start With L' ? '❤️ L Idioms' :
                     item.title === 'Idioms Start With M' ? '❤️ M Idioms' :
                     item.title === 'Idioms Start With N' ? '❤️ N Idioms' :
                     item.title === 'Idioms Start With O' ? '❤️ O Idioms' :
                     item.title === 'Idioms Start With P' ? '❤️ P Idioms' :
                     item.title === 'Idioms Start With Q' ? '❤️ Q Idioms' :
                     item.title === 'Idioms Start With R' ? '❤️ R Idioms' :
                     item.title === 'Idioms Start With S' ? '❤️ S Idioms' :
                     item.title === 'Idioms Start With T' ? '❤️ T Idioms' :
                     item.title === 'Idioms Start With U' ? '❤️ U Idioms' :
                     item.title === 'Idioms Start With V' ? '❤️ V Idioms' :
                     item.title === 'Idioms Start With W' ? '❤️ W Idioms' :
                     item.title === 'Idioms Start With X' ? '❤️ X Idioms' :
                     item.title === 'Idioms Start With Y' ? '❤️ Y Idioms' :
                     item.title === 'Idioms Start With Z' ? '❤️ Z Idioms' :""
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

























































////////////////////
// import React, { useEffect } from "react";
// import {
//   FlatList,
//   View,
//   Text,
//   Platform,
//   Button,
//   FlexAlignType,
//   TextStyle,
//   Pressable,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from "@/hooks/theme";
// import {
//   Link,
//   useNavigation,
//   useLocalSearchParams,
//   useRouter,
// } from "expo-router";

// export default function App({ data }: any) {
//   const navigation = useNavigation();

//   const { theme, toggleTheme } = useTheme();
//   const router = useRouter();
//   const isDark = theme === "dark";
//   useEffect(() => {
//     if (data) {
//       navigation.setOptions({ title: decodeURIComponent(data as string) });
//     }
//   }, [data]);
//   const themedStyles = {
//     container: {
//       padding: 16,
//     },
//     card: {
//       flexDirection: "row" as "row",
//       backgroundColor: isDark ? "#313639" : "#fff",
//       borderRadius: 7,
//       padding: 16,
//       marginBottom: 16,
//       alignItems: "center" as FlexAlignType,
//       ...Platform.select({
//         ios: {
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.2,
//           shadowRadius: 16,
//         },
//         android: {
//           elevation: 4,
//         },
//       }),
//     },
//     icon: {
//       marginRight: 16,
//     },
//     textBox: {
//       flex: 1,
//     },
//     title: {
//       fontSize: 17,
//       fontWeight: "600" as TextStyle["fontWeight"],
//       marginBottom: 4,
//       color: isDark ? "#fff" : "#333",
//     },
//     description: {
//       fontSize: 16,
//       color: isDark ? "#ccc" : "#777",
//     },
//   };

//   const Item: React.FC<{ category: string; id: string; title: string }> = ({
//     title,
//     category,
//     id,
//   }) => (
//     <Pressable
//       key={id}
//       onPress={() => {
//         router.push({
//           pathname: `/[category]/[title]`,
//           params: { category, title },
//         });
//       }}
//     >
//       <View style={themedStyles.card}>
//         {/* <Ionicons
//           name={icon as any}
//           size={32}
//           color="#4e6cef"
//           style={themedStyles.icon}
//         /> */}
//         <View style={themedStyles.textBox}>
//           <Text style={themedStyles.title}>{title}</Text>
//           <Text style={themedStyles.description}>{category}</Text>
//         </View>
//       </View>
//     </Pressable>
//   );

//   return (
//     <View style={{ flex: 1, backgroundColor: isDark ? "#191919" : "#f2f2f2" }}>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => <Item {...item} />}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={themedStyles.container}
//       />
//     </View>
//   );

//   return (
//     <>
//       <Text> not conversation</Text>
//     </>
//   );
// }
