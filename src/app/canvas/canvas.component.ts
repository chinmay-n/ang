import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvasEl') canvasEl: ElementRef;
  @ViewChild('accel') acc: ElementRef;
  private ht: number = 200;
  private wd: number = 400;
  private context: CanvasRenderingContext2D;
  frames: number = 10;
  x: number = this.wd;
  y: number = this.ht;
  oh: number = 10;
  ow: number = 10;
  ux: number = 0;
  uy: number = 0;
  gravity: number = 0;

  constructor() {}

  ngAfterViewInit() {
    //cw = (this.canvasEl.nativeElement as HTMLCanvasElement).width;
    this.ht = 200;
    this.wd = 400;
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.draw();
  }

  private draw() {
    this.y = this.hitop(this.y); 
    this.context.clearRect(0,0,this.ht,this.wd);    
    this.context.beginPath();
    this.context.moveTo(0,200);
    this.context.fillStyle = "#D74022";
    this.context.fillRect(10, this.y-10, 10, 10);
    this.context.closePath();
    this.context.fill();

    requestAnimationFrame(()=> this.draw());
  }

  hitop(y){
        y += this.gravity;
        if(y>this.ht && this.gravity!=0){
                y = this.ht;
                this.gravity = 0;
        }
        return y;
  }

  setGravity(event,n){
        this.gravity = 10*n;
        console.log(this.gravity);
  }


}
