import { Injectable } from '@angular/core';
import { FTBuffer, FTDrawer } from 'ftfiles';

@Injectable({
  providedIn: 'root',
})
export class DrawService {
  filebinaryString: string = '';
  canvas: HTMLCanvasElement | undefined = undefined;

  constructor() {}

  configure(file: string, canvas: HTMLCanvasElement) {
    this.filebinaryString = file;
    this.canvas = canvas;
  }
  isConfigured(): boolean {
    return this.filebinaryString != '' && this.canvas != undefined;
  }
  draw(scale: number) {
    if (this.isConfigured()) {
      const buf = Buffer.from(this.filebinaryString, 'latin1');
      const ftBuf = new FTBuffer();
      ftBuf.readFromBuffer(buf);
      const ftDraw = new FTDrawer(ftBuf.getCoefficients());

      ftDraw.setCanvas(this.canvas!);
      ftDraw.setScale(scale);
      ftDraw.draw();
    }
  }
}
