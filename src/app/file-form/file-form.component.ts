import { FormControl, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { FileConvertService } from '../file-convert.service';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css'],
})
export class FileFormComponent implements OnInit {
  nm: FormControl = new FormControl('', Validators.required);
  filename: string | null = '';
  base64File: string | null = '';

  constructor(private fileConvert: FileConvertService) {}

  onChangeForm(event: any): void {
    try {
      const file = event.target.files[0];
      console.log(typeof file);
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.onloadend = (_event: any) => {
        this.filename = file.name;
        this.base64File = _event.target.result;
        console.log(this.base64File);
      };
    } catch (error) {
      this.reset();
      console.log('no file was selected...');
      console.log(error);
      return;
    }

    if (!this.base64File?.startsWith('data:image/svg+xml')) {
      this.reset();
      console.log('Not svg file'); // Make ui
    } else {
    }
  }

  reset() {
    this.filename = null;
    this.base64File = null;
  }

  ngOnInit(): void {}
}
