import type { PushNotificationsPlugin } from "@capacitor/push-notifications";
import NotificationsPWA from "../modules/shared/infrastructure/PushPWAClient"
import RegisterToken from "@/modules/shared/infrastructure/PinpointClient";

export interface providerUseNotificationPush {
  PinpointClient: RegisterToken
  PushPWAClient: NotificationsPWA
}

export function providerNotificationPush(PushNotifications: PushNotificationsPlugin): providerUseNotificationPush {
  const PinpointClient = new RegisterToken(PushNotifications);
  const PushPWAClient = new NotificationsPWA();

  return {
    PinpointClient,
    PushPWAClient
  }
}