import { async } from '@angular/core/testing';
import { logging } from 'protractor';
import { JsLoaderService } from './../service/js-loader.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';
declare let gapi: any;
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public JSON = JSON;
  public signined = false;
  public files = new Array<any>();

  constructor(
    private jsLoader: JsLoaderService
  ) { }

  public static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async ngOnInit(): Promise<void> {
    console.log('$:' + $);
    const ri = await this.jsLoader.loadScript({
      id: 'gapi',
      src: 'https://apis.google.com/js/api.js'
    }, se => {
      se.async = true;
      se.defer = true;
    });
    if (!ri.loaded) { throw new Error('not load gapi!'); }
    await this.loadApi();
    await this.initGapi();
  }

  public async showFiles(): Promise<void> {
    const result = await this.fetchFiles();
    this.files = result.files;
  }

  public async fetchFiles(): Promise<any> {
    const response = await gapi.client.drive.files.list({
      pageSize: 10,
      fields: 'nextPageToken, files(id, name)'
    });
    return response.result;
  }

  private async loadApi(): Promise<void> {
    return new Promise((rev, rej) => {
      gapi.load('client:auth2', async () => { rev(); });
    });
  }

  private scopeStr(sc: string[]): string {
    let ans = '';
    for (const s of sc) {
      ans += s + ' ';
    }
    return ans;
  }

  private async initGapi(): Promise<void> {
    try {
      await gapi.client.init({
        apiKey: environment.apiKey,
        clientId: environment.clientId,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scope: this.scopeStr(
          [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/drive.readonly',
            'https://www.googleapis.com/auth/drive.metadata.readonly',
            'https://www.googleapis.com/auth/drive.appdata',
            'https://www.googleapis.com/auth/drive.photos.readonly'
          ]
        )


      });
    } catch (ex) {
      alert(JSON.stringify(ex, null, 2));
    }

    gapi.auth2.getAuthInstance().isSignedIn.listen(s => { this.updateSigninStatus(s); });
    this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  }

  private updateSigninStatus(s: boolean) {
    this.signined = s;
    console.log('updateSigninStatus:' + this.signined);
  }



  public handleAuthClick(event): void {
    gapi.auth2.getAuthInstance().signIn();

  }



}
