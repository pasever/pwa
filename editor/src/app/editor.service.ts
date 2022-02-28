import { Inject, Injectable } from '@angular/core';
import { ElectronWindow, WINDOW } from './window';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(
    @Inject(Window) private window: ElectronWindow
  ) { }

    private get ipcRenderer(): Electron.IpcRenderer {
      return this.window.require('electron').ipcRenderer;
    }

    getContent(): Promise<string> {
      return this.ipcRenderer.invoke('getContent');
    }

    setContent(content: string) {
      this.ipcRenderer.invoke('setContent', content);
    }


}
