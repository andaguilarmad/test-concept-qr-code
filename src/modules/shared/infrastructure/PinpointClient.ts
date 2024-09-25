import type { Permission } from '@/locales/locale'
import type { PushNotificationsPlugin } from '@capacitor/push-notifications'

export interface UpdateEndpoint {
  token: string
  applicationId: string
  endpointId: string
}

class RegisterToken {
  PushNotifications: PushNotificationsPlugin;

  constructor(PushNotifications: PushNotificationsPlugin) {
    this.initializePinpoint = this.initializePinpoint.bind(this)
    this.getToken = this.getToken.bind(this)
    this.PushNotifications = PushNotifications;
  }

  async getPermissions(): Promise<void> {
    await this.PushNotifications.requestPermissions()
  }

  async initializePinpoint() {
    try {
      const token = await this.getToken()
      return token
    } catch (error) {
      alert('Error initializing Pinpoint:' + error)
    }
  }

  async getToken(): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      const permission = await this.PushNotifications.checkPermissions()
      const receive = permission.receive as Permission;
      if (receive === "granted") {
        await this.PushNotifications.addListener('registration', (token) => {
          resolve(token.value)
        })

        await this.PushNotifications.addListener('registrationError', (error) => {
          reject(
            alert(`Error registering for push notifications: ${error.error}`),
          )
        })

        await this.PushNotifications.register()
      }
      
      if (receive === "denied" || receive === "prompt") {
        await this.PushNotifications.requestPermissions()
      }
    })
  }
}

export default RegisterToken;