// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApiUrl: '/api/ws_infrastructure_university_hackathon',
  // baseApiUrl: '/ws_infrastructure_university_hackathon',
  env: 'LOCAL',
  auth: {
    domain: 'dev-6vv0txqs2k1lipuf.us.auth0.com',
    clientId: 'ggoXhexV23KZhqQrYJoLa8aYAjwOapVJ',
    authorizationParams: {
      redirect_uri: 'http://localhost:8080/prizes',
    },
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
