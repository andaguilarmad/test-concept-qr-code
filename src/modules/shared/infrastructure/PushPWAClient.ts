import { initializeApp } from "firebase/app";
import { getMessaging, getToken, type Messaging } from "firebase/messaging";

class NotificationsPWA {
    swRegister: any;
    baseUrl: string = import.meta.env.VITE_PINPOINT_API;
    messaging!: Messaging;


    constructor(){
        if(navigator?.serviceWorker){
            navigator.serviceWorker.ready.then((registration) => {
                this.swRegister = registration;
            });

            const firebaseConfig = {
                apiKey: import.meta.env.VITE_APIKEY,
                authDomain: import.meta.env.VITE_AUTHDOMAIN,
                databaseURL: import.meta.env.VITE_DATABASEURL,
                projectId: import.meta.env.VITE_PROJECTID,
                storageBucket: import.meta.env.VITE_STORAGEBUCKET,
                messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
                appId: import.meta.env.VITE_APPID
            };
        
            const app = initializeApp(firebaseConfig);
            this.messaging = getMessaging(app);
        }
    }

    async getPermissions(): Promise<string> {
        const permission = Notification.permission;
        
        if (permission === 'default') {
            const result = await Notification.requestPermission();

            return result
        }

        return '';
    }
    
    async getPublicKey(): Promise<string | null> {

        try {
            const currentToken = await getToken(this.messaging);
            if (currentToken) {
              return currentToken;
            } else { 
              new Error('Failed to obtain the token. Make sure permissions are granted.');
              return null;
            }
          } catch (error) {
            console.log('Error obtaining the token:' + error);
            return null;
        }
    }

    async requesPermition(): Promise<boolean> {
        const permission = await Notification.requestPermission()

        if(permission == 'granted'){
            return true;
        }

        return false;
    }

    async getToken(): Promise<string> {
        if ( !(Notification.permission === 'granted') ){ 
            const gest = await this.requesPermition();
            if(!gest) return 'noPermission'; 
        }

        const key = await this.getPublicKey() || '';

        return key;
    }

}

export default NotificationsPWA;