[![npm version](https://badge.fury.io/js/%40tiledesk%2Ftiledesk-dashboard.svg)](https://badge.fury.io/js/%40tiledesk%2Ftiledesk-dashboard)

# Tiledesk-dashboard

  

<img  width="1200"  alt="home_screenshot"  src="https://user-images.githubusercontent.com/26088187/72986544-b2d17580-3de8-11ea-867f-edd874bd8585.png"  width="500">

  

Tiledesk.com backoffice application is available on GitHub with the AGPL-3.0 licence.

Follow this instructions to setup the environment.

  

Consider that Tiledesk.com cloud service makes every module available with the same open source licence.

  

- Web Widget component

- iOS Widget API (work in progress)

- full iOS App

- full Android App

- Tiledesk Dashboard (this repo)

- All the chat components are available thanks to the Chat21 open source project, also available on GitHub (https://github.com/chat21)

  

Feel free to ask for support on https://tiledesk.com, using the live chat widget on the the website.

  

## Features

  

- Angular 5.0

- Firebase Auth

- Firebase Database CRUD (Firestore & Realtime DB)

- MongoDB CRUD

  

## Prerequisites

  

- Install Node and NPM (https://nodejs.org/en). Suggested: 10.X or 11.X. Some issues are experienced with > 12.X

- Install angular-cli v7.3.5 with `npm install -g @angular/cli@7.3.5`

- A Firebase project (https://firebase.google.com)

- tiledesk-server installed and running (https://github.com/Tiledesk/tiledesk-server.git)


# Install from source code

  

Install the latest stable release. Check on Github page the last release under the Releases tab and then run

-  `git clone https://github.com/Tiledesk/tiledesk-dashboard.git --branch <LATEST-RELEASE-VERSION>`

-  `cd tiledesk-dashboard`

-  `npm install`

  

## Dev configuration

  

You can put your API URL and the other settings directly in the environment.*.ts  if `remoteConfig` is set to `false` or in the `dashboard-config.json`  if `remoteConfig` is set to `true`.

If `remoteConfig` is set to `true` create a file name `dashboard-config.json` and put it into `src` folder.

An example of the configuration of the  `environment.ts` file in  `src/environments/`

#### environment.ts

```typescript
export  const environment = {

	production: false,

	remoteConfig: true,

	remoteConfigUrl: "/dashboard-config.json",

	VERSION: require('../../package.json').version,

}
```
#### dashboard-config.json
```typescript

widgetUrl: "https://<YOUR_CHAT21_WEB_WIDGET_URL>:4200/launch.js",

botcredendialsURL: "https://<YOUR_BOT_CREDENTIALS_URL>",

SERVER_BASE_URL: "https://<YOUR_TILEDESK_SERVER>/",

CHAT_BASE_URL: "https://<YOUR_CHAT21_IONIC_URL>/chat",

testsiteBaseUrl: 'http://localhost:4200/assets/test_widget_page/index.html',

wsUrl: 'ws://' + window.location.hostname + '/ws/',

	firebase: {

		apiKey: "123ABC..",

		authDomain: "XYZ.firebaseapp.com",

		databaseURL: "https://XYZ.firebaseio.com",

		projectId: "XYZ",

		storageBucket: "XYZ.appspot.com",

		messagingSenderId: "123456"

	}

};

```

### RUN in dev

  
Run the app with `ng serve`

  
## Prod configuration

For production installation, configure the environment.prod.ts file in `src/environments/`.


#### environment.prod.ts


```typescript
export  const environment = {

	production: false,

	remoteConfig: false,

	VERSION: require('../../package.json').version,

	...

	// same as in the above "dashboard-config.json"
	// note: for Firebase settings you can use a different firebase project to isolate environments
}
```
 

# Build

Run `ng build --prod --base-href ./`


# Deploy

## Deploy to a Web Server

Copy the content of the dist folder to your Web Server (for example Apache or Nginx)


## Deploy on AWS CloudFront and AWS S3

```

aws s3 sync ./dist/ s3://tiledesk-dashboard/dashboard

```
```

aws cloudfront create-invalidation --distribution-id E2DTAKWHWQ7C3J --paths "/*

```
  
# Run with docker

  
To run Tiledesk-dashboard on port 4500 run:

```

curl https://raw.githubusercontent.com/Tiledesk/tiledesk-dashboard/master/.env.sample --output .env

nano .env #configure .env file properly

docker run -p 4500:80 --env-file .env tiledesk/tiledesk-dashboard

```

  
# Run with npm

  
To run Tiledesk-dashboard with npm:

UNDER DEVELOPMENT

```

curl https://raw.githubusercontent.com/Tiledesk/tiledesk-dashboard/master/.env.sample --output .env

nano .env #configure .env file properly

npm install -g @tiledesk/tiledesk-dashboard

tiledesk-dashboard

```

# Brand

 
Edit the file brand.json in the folder `src/assets/brand/` or load an external json by adding in environment.*.ts (or in the `dashboard-config.json`  if `remoteConfig` is set to `true`) `brandSrc :"https://<YOUR_BRAND_JSON>/` to customize:

- company name,

- logo images,

- navigation,

- contact email and more

`Note: enable CORS if brand json is loaded from a different domain`



#### dashboard-config.json

```typescript

widgetUrl: "https://<YOUR_CHAT21_WEB_WIDGET_URL>:4200/launch.js",

botcredendialsURL: "https://<YOUR_BOT_CREDENTIALS_URL>",

SERVER_BASE_URL: "https://<YOUR_TILEDESK_SERVER>/",


...

brandSrc :"https://<YOUR_BRAND_JSON>/",

...

};

```

#### docker env.sample file

```typescript

SERVER_BASE_URL=YOUR_TILEDESK_SERVER_URL


...


BRAND_SRC=https:YOUR_BRAND_SCRIPT_URL

...


```

  
Edit the file _variables.scss in the folder `src/assets/sass/md/` to customize the colors




# Load external scripts


Load external scripts by adding in environment.*.ts (if `remoteConfig` is set to `false` or in the `dashboard-config.json` if `remoteConfig` is set to `true`) the key `globalRemoteJSSrc` with value your scripts separated by commas


#### dashboard-config.json

```typescript

widgetUrl: "https://<YOUR_CHAT21_WEB_WIDGET_URL>:4200/launch.js",

botcredendialsURL: "https://<YOUR_BOT_CREDENTIALS_URL>",

SERVER_BASE_URL: "https://<YOUR_TILEDESK_SERVER>/",


...


globalRemoteJSSrc :"https://<YOUR_CUSTOM_SCRIPT_1>, https://<YOUR_CUSTOM_SCRIPT_2>",

...

};

```

#### docker env.sample file

```typescript

SERVER_BASE_URL=YOUR_TILEDESK_SERVER_URL


...


REMOTE_JS_SRC=YOUR_CUSTOM_SCRIPT_URL

...


```
