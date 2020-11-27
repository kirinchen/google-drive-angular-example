# Google Drive API V3 與 Angluar 整合範例

> https://github.com/kirinchen/google-drive-angular/blob/master/README.md


大致的功能如下
* 登入/登出
* 顯示列表By File Tyoe
* read 檔案內容

1. [如何申請Google Drive 開發者金鑰和Oauth](https://github.com/kirinchen/google-drive-angular#%E5%A6%82%E4%BD%95%E7%94%B3%E8%AB%8Bgoogle-drive-%E9%96%8B%E7%99%BC%E8%80%85%E9%87%91%E9%91%B0%E5%92%8Coauth)
2. [下載專案與專案設定](https://github.com/kirinchen/google-drive-angular#%E4%B8%8B%E8%BC%89%E5%B0%88%E6%A1%88%E8%88%87%E5%B0%88%E6%A1%88%E8%A8%AD%E5%AE%9A)
3. [Run Server](https://github.com/kirinchen/google-drive-angular#run-server)

## 如何申請Google Drive 開發者金鑰和Oauth

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
![certificatedone.jpg](https://github.com/kirinchen/google-drive-angular/blob/master/doc/oathid.PNG?raw=true)

2. 選擇建立OAuth 2.0 用戶端 ID
![certificatedone.jpg](https://github.com/kirinchen/google-drive-angular/blob/master/doc/genOauthId.png?raw=true)

# 下載專案與專案設定

1. 下載 https://github.com/kirinchen/google-drive-angular.git 
或者 ```git clone https://github.com/kirinchen/google-drive-angular.git```
2. cd 到 [root ]] 專案下/
3. run ``` npm install ```
4. 修改 [root]/src/environments/environment.ts
```javascript
export const environment = {
  production: false,
  clientId: '{OAuth 2.0 用戶端 ID}',
  apiKey: '{API KEY}'
};
```

# Run server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dev

Main Logic is  ``` src/app/auth/auth.component.ts  ```


