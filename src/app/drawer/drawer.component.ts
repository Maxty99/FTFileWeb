import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { type } from 'os';
import { DrawService } from '../draw.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  nm: FormControl = new FormControl();
  scale: FormControl = new FormControl(1);
  binaryFile: string | null = '';
  canvas: HTMLCanvasElement | undefined = undefined;

  constructor(private drawService: DrawService) {}

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  onChangeForm(event: any) {
    try {
      const file = event.target.files[0];
      const fReader = new FileReader();
      fReader.readAsBinaryString(file);
      fReader.onloadend = (_event: any) => {
        this.binaryFile = _event.target.result;
        if (this.canvas == undefined || this.binaryFile == null) {
          console.log('what');
        } else {
          this.drawService.configure(this.binaryFile, this.canvas);
          //console.log(atob(this.binaryFile.split(',')[1]));
        }
      };
    } catch (error) {
      console.log(error);
      this.reset();
    }
    this.reset();
  }

  draw() {
    if (this.drawService.isConfigured()) {
      this.drawService.draw(this.scale.value);
    } else {
      console.log('Something went wrong');
    }
  }
  reset() {
    this.binaryFile = null;
  }
  ngOnInit(): void {
    this.canvas = document.getElementById('drawCanvas') as HTMLCanvasElement;
  }
}
