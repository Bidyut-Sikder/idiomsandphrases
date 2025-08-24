import * as Notifications from "expo-notifications";
import React from "react";
import { EventSubscription } from "expo-modules-core";
import { registerForPushNotificationsAsync } from "@/utils/registerForPushNotifications";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

interface NotificationContextType {
  expoPushToken: string | null;
  notification: Notifications.Notification | null;
  error: Error | null;
}

const NotificationContext = React.createContext<
  NotificationContextType | undefined
>(undefined);

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

export const NotificationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [expoPushToken, setExpoPushToken] = React.useState<string | null>(null);
  const [notification, setNotification] =
    React.useState<Notifications.Notification | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const notificationListener = React.useRef<EventSubscription | null>(null);
  const responseListener = React.useRef<EventSubscription | null>(null);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    // 1. Listen to notifications while the app is open
    const sub = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const data = response.notification.request.content.data;
      
          router.push({
            pathname: "/[category]/[title]",
            params: { category: data.screen,title: data.title },
          });
        
      }
    );

    // 2. Handle the case when the app was **closed**
    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (response) {
        const data = response.notification.request.content.data;
 
          router.push({
            pathname: "/[category]/[title]",
            params: { category: data.screen,title: data.title },
          });
        
      }
    });

    return () => sub.remove();
  }, []);
  React.useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => {
        if (typeof token === "string") {
          setExpoPushToken(token);
        } else {
          setExpoPushToken(null);
        }
      })
      .catch((err) => {
        setError(err);
        console.error("Error registering for push notifications:", err);
      });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        // console.log("Notification received:", notification);
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(
          "Notification response user interaction received:",
          response
        );
      });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{ expoPushToken, notification, error }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
