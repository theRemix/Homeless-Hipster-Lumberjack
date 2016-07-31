import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-display',
  templateUrl: 'display.component.html',
  styleUrls: ['display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() image:any;

  constructor() { }

  ngOnInit() {
    console.log(this.image);
  }

}
