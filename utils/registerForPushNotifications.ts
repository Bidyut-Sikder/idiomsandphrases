import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";

import Constants from "expo-constants";

export const registerForPushNotificationsAsync = async () => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    // Only ask if permissions have not already been granted
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      throw new Error(
        "Permission not granted to get push token for push notification!"
      );
    }

    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId;
    if (!projectId) {
      throw new Error(
        "Project ID not found in the Expo config app.json. Please ensure you have set up EAS correctly."
      );
    }

    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({ projectId })
      ).data;
      const platform = Platform.OS;
      await fetch(
        "https://asia-east1-idiomsphrases-pushnotification.cloudfunctions.net/storeToken",

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pushTokenString, platform }),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log("Response:", data))
        .catch((err) => console.error(err));

      console.log(pushTokenString, projectId);
    } catch (error) {
      console.error("Error getting push token:", error);
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  } else {
    alert("Must use physical device for Push Notifications");
  }
};
