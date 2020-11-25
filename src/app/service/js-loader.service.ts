import { Injectable } from '@angular/core';

interface Script {
  id: string;
  src: string;
  script?: HTMLScriptElement;
}

export interface ScriptLoadInfo {
  script: HTMLScriptElement;
  loaded: boolean;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class JsLoaderService {

  private scripts = new Array<Script>();
  constructor() { }

  public async loadScript(sc: Script, scEx: (e: HTMLScriptElement) => void): Promise<ScriptLoadInfo> {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      const esc = this.scripts.find(s => s.id === sc.id);
      if (esc) {
        resolve({ script: esc.script, loaded: true, status: 'Already Loaded' });
      }
      else {
        // load script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = sc.id;
        script.src = sc.src;
        sc.script = script;
        scEx(script);
        script.onload = () => {
          this.scripts.push(sc);
          resolve({ script, loaded: true, status: 'Loaded' });
        };
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('body')[0].appendChild(script);
      }
    });
  }
}


