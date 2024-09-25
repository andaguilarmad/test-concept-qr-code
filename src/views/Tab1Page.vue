<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab22 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer :name="codeqrScanInfo" />
      <!-- <ion-button :onclick="openCamaraWeb">WEB</ion-button> -->
      <ion-button :onclick="openCamaraCel">Celular</ion-button>
    </ion-content>
  </ion-page>
</template>

<script  lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { Component, Vue, toNative } from 'vue-facing-decorator'
import { CapacitorBarcodeScannerWeb } from '@capacitor/barcode-scanner/dist/esm/web';
import { useHardwareStore } from '@/stores/Hardware'
import { ref, computed } from 'vue'

import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';
@Component({
    components: {
      ExploreContainer
    }
})
class Tab1 extends Vue {

  stringCodeQr:string = ""


   created(){
    const hardwareStore = useHardwareStore()
 


    console.log("si entra")
   }

   openCamaraWeb(){
     const openCamara = new CapacitorBarcodeScannerWeb();
     openCamara.scanBarcode({
      hint: 17,
      scanButton:true,
      cameraDirection:2,
      web:{
        showCameraSelection:true
      }
    }).then((reult) => {
        console.log("reult",reult)
      })

    
    
   }

   openCamaraCel(){
    CapacitorBarcodeScanner.scanBarcode({
      hint: 17,
      scanButton:true,
      cameraDirection:1,
      web:{
        showCameraSelection:false
      }
      }).then((result) => {
        console.log("openCamaraCel result",result)
        this.codeqrScanInfo = result.ScanResult.toString()
       const  mensaje = this.codeqrScanInfo.split('|')
       console.log("mensaje separado",mensaje)
      })
   }


   get codeqrScanInfo():string{
      return  this.stringCodeQr
   }

   set codeqrScanInfo(val:string){
        this.stringCodeQr = val
   }
} 

export default toNative(Tab1)


</script>