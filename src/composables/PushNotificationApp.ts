import type { PushNotificationsPlugin } from "@capacitor/push-notifications";
import { providerNotificationPush } from "@/dependencies/PushNotification";
import type { ChannelType } from "@aws-sdk/client-pinpoint";

interface NotificationPush {
    channel: ChannelType | string,
    title: string,
    message: string,
    token: string,
}

export function PushNotificationApp(PushNotifications: PushNotificationsPlugin, type: string = '') {
    const typeApp = type;
    const baseUrl: string = import.meta.env.VITE_PINPOINT_API;
    const { PinpointClient, PushPWAClient } = providerNotificationPush(PushNotifications);

    const verifyRegister = (): string => {
        const pushToken = localStorage.getItem('pushToken') || '';
        return pushToken;
    }

    const getPinpointPermission = async (app: string | undefined): Promise<void> => {
        if(app === "web"){
            return new Promise( async (res) => {
                await PushPWAClient.getPermissions();
            }) 
        } else {
            return new Promise( async (res) => {
                await PinpointClient.getPermissions();
            }) 
        } 
    }

    const initializePush = async(): Promise<string> => {
        return new Promise( async (resolve) => {
            const lasregister = verifyRegister();
            if(lasregister){  
                resolve(lasregister) 
            }

            let token = '';
            if(typeApp === 'web'){
                token = await PushPWAClient.getToken();
            }else {
                token = await PinpointClient.initializePinpoint() || '';
            }

            if(token != 'noPermission') localStorage.setItem('pushToken', token);
            resolve(token);
        })
    }

    const registerUser = async(token: string = '', channel: string = ''): Promise<object> => {
        if(!token) return {};

        const body = { token, channel };
        const url = baseUrl + '/dev/booking/register-notification';
    
        const res = await fetch(url,{
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
    
        const data = await res.json()

        return { token, response: data, body };
    }

    const sendNotification = async (notification: NotificationPush): Promise<boolean|object> => {

        if(!notification.token) return false;
        const url = baseUrl + '/dev/booking/send-notification';
        const token = notification.token;

        const res = await fetch(url,{
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...notification
          })
        })
    
        const data = await res.json()

        const result = data.MessageResponse.Result;
        const statusCode = result[token].StatusCode;

        if( statusCode === 404 && notification.channel === 'APNS' ){
            notification.channel = 'APNS_SANDBOX';
            sendNotification(notification)
        }

        return data;
    }

    return {
        verifyRegister,
        getPinpointPermission,
        initializePush,
        registerUser,
        sendNotification
    }
}
