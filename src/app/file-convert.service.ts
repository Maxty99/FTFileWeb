import { Injectable } from '@angular/core';
import { FTProcessor, FTBuffer } from 'ftfiles';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class FileConvertService {
  pathSvgString: string = '';
  processedFile: FTProcessor | undefined = undefined;
  newFileName: string = '';
  constructor() {}

  configure(fileBase64String: string, newFileName: string) {
    this.pathSvgString = atob(fileBase64String.split(',')[1]);
    this.newFileName = newFileName;
  }
  isConfigured(): boolean {
    return this.newFileName != '' && this.pathSvgString != '';
  }
  processFile(points: number) {
    const parser = new DOMParser();
    const document = parser.parseFromString(
      this.pathSvgString,
      'image/svg+xml'
    );
    const path = document.querySelector('path');

    if (path) {
      const ftProc = new FTProcessor(path);
      ftProc.processPoints(points);
      ftProc.discreteTransform();
      const ftBuf = new FTBuffer();
      ftBuf.coefficients = ftProc.getCoefficients();
      const fileBuffer = ftBuf.writeToBuffer();
      const blob = new Blob([fileBuffer], { type: 'application/octet-stream' });
      saveAs(blob, this.newFileName);
    }
  }
}
