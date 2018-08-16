import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../cake'

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() getCake: any;
  sum=0;
  avg=0
  constructor() { }

  ngOnInit() {
    this.sum=0;
    this.avg=0;
    for(var i of this.getCake.comments){
      if(i['rate']){
        this.sum += i['rate'];
      }
    }
    this.avg = this.sum/this.getCake.comments.length
    console.log(this.avg)
  }
  }

