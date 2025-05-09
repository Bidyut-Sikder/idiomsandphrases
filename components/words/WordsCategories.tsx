




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


export default function SlangsCategories({data}:any) {
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
                    category, title: category==='Words'&&
                    item.title === "Words Start With A" ? '❤️ A Words' :
                     item.title === 'Words Start With B' ? '❤️ B Words' :
                     item.title === 'Words Start With C' ? '❤️ C Words' :
                     item.title === 'Words Start With D' ? '❤️ D Words' :
                     item.title === 'Words Start With E' ? '❤️ E Words' :
                     item.title === 'Words Start With F' ? '❤️ F Words' :
                     item.title === 'Words Start With G' ? '❤️ G Words' :
                     item.title === 'Words Start With H' ? '❤️ H Words' :
                     item.title === 'Words Start With I' ? '❤️ I Words' :
                     item.title === 'Words Start With J' ? '❤️ J Words' :
                     item.title === 'Words Start With K' ? '❤️ K Words' :
                     item.title === 'Words Start With L' ? '❤️ L Words' :
                     item.title === 'Words Start With M' ? '❤️ M Words' :
                     item.title === 'Words Start With N' ? '❤️ N Words' :
                     item.title === 'Words Start With O' ? '❤️ O Words' :
                     item.title === 'Words Start With P' ? '❤️ P Words' :
                     item.title === 'Words Start With Q' ? '❤️ Q Words' :
                     item.title === 'Words Start With R' ? '❤️ R Words' :
                     item.title === 'Words Start With S' ? '❤️ S Words' :
                     item.title === 'Words Start With T' ? '❤️ T Words' :
                     item.title === 'Words Start With U' ? '❤️ U Words' :
                     item.title === 'Words Start With V' ? '❤️ V Words' :
                     item.title === 'Words Start With W' ? '❤️ W Words' :
                     item.title === 'Words Start With X' ? '❤️ X Words' :
                     item.title === 'Words Start With Y' ? '❤️ Y Words' :
                     item.title === 'Words Start With Z' ? '❤️ Z Words' :""
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









///////////////////////
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

// export default function WordsCategories({ data }: any) {
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
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
        
//             <Pressable style={themedStyles.card}
//               onPress={() => {
//                 router.push({
//                   pathname: `/[category]/[title]`,
//                   params: { category, title: item.title },
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
