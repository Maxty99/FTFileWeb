import { FormControl, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { FileConvertService } from '../file-convert.service';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css'],
})
export class FileFormComponent implements OnInit {
  nm: FormControl = new FormControl('');
  points: FormControl = new FormControl(100);
  status: string = '';
  filename: string | null = '';
  base64File: string | null = '';

  constructor(private fileConvert: FileConvertService) {}

  onChangeForm(event: any) {
    try {
      const file = event.target.files[0];
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.onloadend = (_event: any) => {
        this.filename = file.name.split('.')[0] + '.ftf';
        this.base64File = _event.target.result;

        if (!this.base64File?.startsWith('data:image/svg+xml')) {
          this.status += 'Not svg file\n';
        } else {
          this.fileConvert.configure(this.base64File, this.filename);
          this.status +=
            'Got (base64 encoded): ' + this.base64File.split(';')[0] + '\n';
        }
      };
    } catch (error) {
      this.status += 'no file was selected...';
      this.status += error;
      this.reset();
    }
    this.reset();
  }

  convert() {
    if (this.fileConvert.isConfigured()) {
      this.status += 'Converting with ' + this.points.value + ' points... \n';
      this.fileConvert.processFile(this.points.value);
      this.status += 'Returning file: ' + this.filename + '\n';
    } else {
      this.status += 'no file was selected... \n';
    }
  }
  reset() {
    this.filename = null;
    this.base64File = null;
    this.status = '';
  }

  ngOnInit(): void {}
}
