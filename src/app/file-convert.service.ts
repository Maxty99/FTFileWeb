import { Injectable } from '@angular/core';
import { FTFile, SVG } from 'ftfiles';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root',
})
export class FileConvertService {
  pathSvgString: string = '';
  processedFile: FTFile | undefined = undefined;
  newFileName: string;
  constructor(fileBase64String: string, newFileName: string) {
    this.pathSvgString = atob(fileBase64String);
    this.newFileName = newFileName;
  }

  processFile(points: number) {
    const svgPath = new SVG();
    svgPath.loadFromString(this.pathSvgString);
    const ftFile = new FTFile(svgPath);
    ftFile.processPoints(points);
    ftFile.discreteTransform();
  }

  saveFile() {
    if (this.processedFile != undefined) {
      const fileBuffer = this.processedFile.writeToBuffer();
      const blob = new Blob([fileBuffer], { type: 'application/octet-stream' });
      saveAs(blob, this.newFileName);
    }
  }
}
