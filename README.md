# 如何申請Google Drive 開發者金鑰和Oauth

最近本人開始騎單車的爬坡,所以開發了一個爬坡小工具,那就會用到Google Map API,這邊先做個預告,順便寫個Gmap小筆記啦

## 創建API Key

1.先到 Google雲端後台 . https://console.developers.google.com/apis/dashboard

2.請先選擇一個專案 (如果沒有請按建立)
![accept.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/create-project.jpg?raw=true)

3.啟用API,
* 資料庫 > 
* 搜尋 : Google Drive API
* 啟用  Google Drive API
4. 先到憑證,並建立API KEY
![accept.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/certificate.jpg?raw=true)
![accept.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/certificate2.jpg?raw=true)
![certificatedone.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/certificatedone.jpg?raw=true)

5.再到 Google雲端後台 . [Google Cloud Platform Console](https://cloud.google.com/console/google/maps-apis/overview) 並選則憑證
![go-cert-page.jpg](https://github.com/kirinchen/note-annex/blob/master/google-map-key/go-cert-page.jpg?raw=true)

>> 這邊可以看之前申請的Key,也可以複製金鑰

## 建立OAuth 2.0 用戶端 ID

1. 建立OAuth 同意畫面填入基本資料即可
2. 選擇建立OAuth 2.0 用戶端 ID






# GoogleDriveNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
