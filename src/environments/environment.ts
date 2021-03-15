// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api:'https://platzi-store.herokuapp.com',
  url_db: 'https://f367cbdc7a40.ngrok.io/api',
  url_local:'http://localhost:3000/api',


  //https://0b8d7ba80350.ngrok.io/api
  firebase: {
      apiKey: "AIzaSyBo_mbQsxt1pCKRSoT1pbgkWwGEEV_2f7Q",
      authDomain: "tiendavirtual-2a21e.firebaseapp.com",
      projectId: "tiendavirtual-2a21e",
      storageBucket: "tiendavirtual-2a21e.appspot.com",
      messagingSenderId: "9188188625",
      appId: "1:9188188625:web:007830250e09086d97c0f0"
  
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
